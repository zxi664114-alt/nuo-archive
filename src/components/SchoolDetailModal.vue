<script setup>
import { ref, computed, watch, nextTick, onUnmounted } from 'vue'

const props = defineProps({
  school: { type: Object, default: null },
  show: { type: Boolean, default: false }
})
const emit = defineEmits(['close'])

const activeTab = ref('overview')
const tabs = [
  { key: 'overview', label: '概览' },
  { key: 'history', label: '源流考证' },
  { key: 'plays', label: '代表剧目' },
  { key: 'craft', label: '工艺与音乐' }
]

watch(() => props.show, async (v) => {
  if (v) {
    activeTab.value = 'overview'
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

function close() { emit('close') }
function onOverlay(e) { if (e.target === e.currentTarget) close() }

onUnmounted(() => { document.body.style.overflow = '' })
</script>

<template>
  <Teleport to="body">
  <Transition name="modal">
    <div v-if="show && school" class="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" @click="onOverlay">
      <div class="modal-panel relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl border bg-void shadow-2xl" :style="{ borderColor: school.accent + '55' }">
        <!-- 顶部色条 -->
        <div class="absolute left-0 top-0 z-20 h-1 w-full" :style="{ backgroundColor: school.accent }"></div>

        <!-- 关闭按钮 -->
        <button @click="close" class="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-mineral/20 bg-void/80 text-mineral/70 transition hover:border-cinnabar hover:text-cinnabar" aria-label="关闭">
          ✕
        </button>

        <div class="max-h-[92vh] overflow-y-auto overscroll-contain">
          <!-- 头部：封面图 + 标题 -->
          <div class="relative h-56 overflow-hidden md:h-72">
            <img :src="school.cover" :alt="school.name" class="h-full w-full object-cover opacity-70" />
            <div class="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-void/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div class="flex items-end justify-between">
                <div>
                  <span class="mb-2 inline-block rounded px-2.5 py-0.5 text-[10px] tracking-widest" :style="{ backgroundColor: school.accent + '22', color: school.accent }">{{ school.type }}</span>
                  <h2 class="font-serif text-3xl font-black text-mineral md:text-4xl">{{ school.name }}</h2>
                  <p class="mt-1 text-sm text-mineral/60">{{ school.region }}</p>
                </div>
                <div class="hidden text-right md:block">
                  <p class="text-[10px] tracking-widest text-mineral/40">传承</p>
                  <p class="font-serif text-3xl" :style="{ color: school.accent }">{{ school.stat.age }}<span class="text-xs">年</span></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 导航 -->
          <div class="sticky top-0 z-10 flex border-b border-smoke/60 bg-void/95 backdrop-blur">
            <button
              v-for="t in tabs"
              :key="t.key"
              @click="activeTab = t.key"
              class="relative flex-1 px-4 py-3 text-sm transition"
              :class="activeTab === t.key ? 'text-mineral' : 'text-mineral/40 hover:text-mineral/70'"
            >
              {{ t.label }}
              <span v-if="activeTab === t.key" class="absolute bottom-0 left-1/2 h-0.5 w-10 -translate-x-1/2" :style="{ backgroundColor: school.accent }"></span>
            </button>
          </div>

          <!-- Tab 内容 -->
          <div class="p-6 md:p-8">
            <!-- 概览 -->
            <div v-show="activeTab === 'overview'" class="space-y-6">
              <blockquote class="border-l-2 pl-4 font-serif text-lg italic leading-relaxed text-mineral/80" :style="{ borderColor: school.accent }">
                "{{ school.quote }}"
              </blockquote>

              <!-- 关键数据 —— 三张统一风格卡片 -->
              <div class="grid gap-4 md:grid-cols-3">
                <div class="stat-card rounded-xl border p-5 text-center" :style="{ borderColor: school.accent + '33', backgroundColor: school.accent + '0a' }">
                  <p class="font-serif text-3xl font-black" :style="{ color: school.accent }">{{ school.stat.age }}<span class="text-sm">年</span></p>
                  <p class="mt-2 text-xs tracking-widest text-mineral/50">传承时长</p>
                </div>
                <div class="stat-card rounded-xl border p-5 text-center" :style="{ borderColor: school.accent + '33', backgroundColor: school.accent + '0a' }">
                  <p class="font-serif text-3xl font-black" :style="{ color: school.accent }">{{ school.stat.masks }}<span class="text-sm">面</span></p>
                  <p class="mt-2 text-xs tracking-widest text-mineral/50">主要面具</p>
                </div>
                <div class="stat-card rounded-xl border p-5 text-center" :style="{ borderColor: school.accent + '33', backgroundColor: school.accent + '0a' }">
                  <p class="font-serif text-lg font-black leading-tight text-mineral/90">{{ school.stat.troops }}</p>
                  <p class="mt-2 text-xs tracking-widest text-mineral/50">传承主体</p>
                </div>
              </div>

              <!-- 详细信息 —— 卡片式网格 -->
              <div class="grid gap-3 md:grid-cols-2">
                <div v-for="f in [
                  {l:'源流',v:school.origin},
                  {l:'年代',v:school.era},
                  {l:'面具形制',v:school.maskType},
                  {l:'色彩谱系',v:school.palette},
                  {l:'演出形态',v:school.performance},
                  {l:'精神内核',v:school.spirit}
                ]" :key="f.l" class="rounded-lg border border-smoke/40 bg-charcoal/30 p-3.5">
                  <p class="mb-1 text-[10px] tracking-widest" :style="{ color: school.accent + 'aa' }">{{ f.l }}</p>
                  <p class="text-sm leading-relaxed text-mineral/85">{{ f.v }}</p>
                </div>
              </div>

              <!-- 传承人 -->
              <div class="rounded-xl border-l-2 p-4" :style="{ borderColor: school.accent, backgroundColor: school.accent + '08' }">
                <p class="mb-1 text-[10px] tracking-widest text-mineral/40">传承人</p>
                <p class="text-sm text-mineral/85">{{ school.inheritors }}</p>
              </div>
            </div>

            <!-- 源流考证 -->
            <div v-show="activeTab === 'history'" class="space-y-5">
              <p class="text-[10px] tracking-[0.4em] text-cinnabar/60">HISTORICAL ORIGIN · 源流考证</p>
              <p class="text-sm leading-loose text-mineral/80">{{ school.history }}</p>
              <!-- 图库 -->
              <div>
                <p class="mb-3 text-[10px] tracking-widest text-mineral/40">面具图库</p>
                <div class="grid grid-cols-3 gap-3">
                  <div v-for="(g, i) in school.gallery" :key="i" class="overflow-hidden rounded-lg border border-smoke/60">
                    <img :src="g" :alt="`${school.name} 图${i+1}`" class="h-24 w-full object-cover transition hover:scale-105 md:h-32" />
                  </div>
                </div>
              </div>
            </div>

            <!-- 代表剧目 -->
            <div v-show="activeTab === 'plays'" class="space-y-4">
              <p class="text-[10px] tracking-[0.4em] text-cinnabar/60">REPERTOIRE · 代表剧目</p>
              <div v-for="p in school.playDetails" :key="p.name" class="rounded-xl border border-smoke/60 bg-charcoal/40 p-5 transition hover:border-cinnabar/40">
                <div class="mb-2 flex items-center justify-between">
                  <h4 class="font-serif text-lg font-black text-mineral">{{ p.name }}</h4>
                  <span class="rounded px-2 py-0.5 text-[10px]" :style="{ backgroundColor: school.accent + '22', color: school.accent }">{{ p.role }}</span>
                </div>
                <p class="text-sm leading-relaxed text-mineral/70">{{ p.desc }}</p>
              </div>
            </div>

            <!-- 工艺与音乐 -->
            <div v-show="activeTab === 'craft'" class="space-y-6">
              <div>
                <p class="mb-2 text-[10px] tracking-[0.4em] text-cinnabar/60">CRAFT · 面具工艺</p>
                <p class="text-sm leading-loose text-mineral/80">{{ school.craftFeature }}</p>
              </div>
              <div class="divider-cinnabar"></div>
              <div>
                <p class="mb-2 text-[10px] tracking-[0.4em] text-cinnabar/60">MUSIC · 鼓点与音乐</p>
                <p class="text-sm leading-loose text-mineral/80">{{ school.musicFeature }}</p>
              </div>
              <div class="divider-cinnabar"></div>
              <div>
                <p class="mb-2 text-[10px] tracking-[0.4em] text-cinnabar/60">FEATURE · 核心特征</p>
                <p class="text-sm leading-loose text-mineral/80">{{ school.feature }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  background: rgba(5, 5, 5, 0.85);
  backdrop-filter: blur(6px);
}
.modal-panel {
  animation: modalIn 0.4s cubic-bezier(.16, 1, .3, 1);
}
@keyframes modalIn {
  from { opacity: 0; transform: translateY(24px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style>
