<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { masks, filterTags, groupInfo, photoCredit } from '../data/masks.js'
import CitationBox from './CitationBox.vue'

const activeFilter = ref('all')
const keyword = ref('')
const selected = ref(null)

const filtered = computed(() => {
  let list = masks
  if (activeFilter.value !== 'all') {
    list = list.filter(m => m.group === activeFilter.value)
  }
  const kw = keyword.value.trim()
  if (kw) {
    list = list.filter(m =>
      m.name.includes(kw) ||
      m.alias.includes(kw) ||
      m.tags.some(t => t.includes(kw)) ||
      m.essence.includes(kw)
    )
  }
  return list
})

function openDetail(m) {
  selected.value = m
}
function closeDetail() {
  selected.value = null
}

function prevMask() {
  if (!selected.value) return
  const list = filtered.value
  const idx = list.findIndex(m => m.id === selected.value.id)
  if (idx > 0) openDetail(list[idx - 1])
}
function nextMask() {
  if (!selected.value) return
  const list = filtered.value
  const idx = list.findIndex(m => m.id === selected.value.id)
  if (idx < list.length - 1) openDetail(list[idx + 1])
}

function handleKey(e) {
  if (!selected.value) return
  if (e.key === 'Escape') closeDetail()
  if (e.key === 'ArrowLeft') prevMask()
  if (e.key === 'ArrowRight') nextMask()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>

<template>
  <section id="archive" class="relative w-full bg-void px-6 py-24 md:px-16 noise-overlay">
    <!-- 章节标题 -->
    <div class="mb-10 text-center">
      <p class="mb-3 text-xs tracking-[0.5em] text-cinnabar/70">05 · THE DATABASE</p>
      <h2 class="font-serif text-4xl font-black text-mineral md:text-5xl">神谱图鉴档案</h2>
      <p class="mt-4 text-sm text-mineral/40">凶神驱疫审判 · 吉神赐福纳祥 —— 点击卡片查看详情 · ← → 键切换</p>
    </div>
    <div class="mx-auto mb-12 h-px w-40 bg-gradient-to-r from-transparent via-cinnabar to-transparent"></div>

    <!-- 筛选 + 搜索 -->
    <div class="mx-auto mb-12 flex max-w-5xl flex-col items-center justify-between gap-5 md:flex-row">
      <div class="flex flex-wrap justify-center gap-2">
        <button
          v-for="t in filterTags"
          :key="t.key"
          @click="activeFilter = t.key"
          class="filter-btn rounded-full px-5 py-2 text-xs tracking-wider transition"
          :class="activeFilter === t.key
            ? 'bg-cinnabar text-void shadow-[0_0_20px] shadow-cinnabar/50'
            : 'border border-smoke/60 text-mineral/50 hover:border-cinnabar hover:text-cinnabar'"
        >{{ t.label }}<span class="ml-1.5 opacity-60">{{
          t.key === 'all' ? masks.length :
          groupInfo[t.key] ? groupInfo[t.key].count : ''
        }}</span></button>
      </div>
      <div class="relative">
        <input
          v-model="keyword"
          type="text"
          placeholder="检索角色 / 标签…"
          class="w-56 rounded-full border border-smoke/60 bg-charcoal/60 px-5 py-2 text-sm text-mineral placeholder-mineral/30 outline-none transition focus:border-cinnabar"
        />
      </div>
    </div>

    <!-- 卡片网格 -->
    <TransitionGroup name="card" tag="div" class="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <article
        v-for="m in filtered"
        :key="m.id"
        @click="openDetail(m)"
        class="deity-card card-glow group relative cursor-pointer overflow-hidden rounded-2xl border bg-charcoal/60"
        :style="{ borderColor: m.accent + '33' }"
      >
        <!-- 顶部色条 -->
        <div class="absolute left-0 top-0 z-10 h-1 w-full transition-all group-hover:h-1.5" :style="{ backgroundColor: m.accent }"></div>

        <!-- 面具真实照片 -->
        <div class="relative h-64 overflow-hidden">
          <img :src="m.img" :alt="m.name" class="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"></div>
          <!-- 神格标识 -->
          <span
            class="absolute right-3 top-3 rounded px-2 py-0.5 text-[10px] tracking-widest backdrop-blur"
            :style="{ backgroundColor: m.accent + '33', color: m.accent }"
          >{{ m.category === 'auspicious' ? '吉神' : '凶神' }}</span>
          <!-- 角色名叠加 -->
          <div class="absolute bottom-3 left-4">
            <h3 class="font-serif text-3xl font-black text-mineral">{{ m.name }}</h3>
            <p class="text-xs text-mineral/50">{{ m.alias }}</p>
          </div>
        </div>

        <!-- 卡片正文 - 精简版 -->
        <div class="p-5">
          <!-- 标识线 -->
          <div class="mb-3 flex items-center gap-2">
            <span class="h-px w-6" :style="{ backgroundColor: m.accent }"></span>
            <span class="font-mono text-[9px] tracking-widest text-mineral/25">{{ m.region }}</span>
          </div>

          <!-- 描述 -->
          <p class="mb-3 text-sm leading-relaxed text-mineral/70">{{ m.desc }}</p>

          <!-- 精神内核 -->
          <div class="mb-3 rounded-lg bg-void/50 p-3">
            <p class="text-[10px] tracking-widest text-mineral/30">精神内核</p>
            <p class="mt-1 font-serif text-sm" :style="{ color: m.accent }">{{ m.essence }}</p>
          </div>

          <!-- 剧目标签 -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="play in m.plays"
              :key="play"
              class="rounded border px-2 py-0.5 text-[10px] text-mineral/50"
              :style="{ borderColor: m.accent + '33' }"
            >{{ play }}</span>
          </div>

          <!-- 查看详情提示 -->
          <p class="mt-3 flex items-center gap-1 text-[10px] tracking-widest text-mineral/30 transition group-hover:text-cinnabar">
            查看详情 <span class="transition group-hover:translate-x-1">→</span>
          </p>
        </div>
      </article>
    </TransitionGroup>

    <!-- 空状态 -->
    <div v-if="filtered.length === 0" class="py-20 text-center text-mineral/30">
      <p class="text-4xl">∅</p>
      <p class="mt-4 text-sm">未检索到匹配的傩神</p>
    </div>

    <!-- 图片授权说明 -->
    <p class="mx-auto mt-10 max-w-7xl text-center text-[10px] text-mineral/25">
      图片来源：{{ photoCredit.source }} · {{ photoCredit.author }} · {{ photoCredit.license }}
    </p>

    <!-- 参考文献溯源 -->
    <div class="mx-auto mt-4 max-w-7xl">
      <CitationBox :cite="['R1','R2','R3','R4','R5','R6','R11','R12']" />
    </div>

    <!-- 傩神详情面板 -->
    <Teleport to="body">
      <Transition name="deity-modal">
        <div v-if="selected" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" @click.self="closeDetail">
          <!-- 背景遮罩 -->
          <div class="absolute inset-0 bg-void/90 backdrop-blur-md"></div>

          <!-- 左右导航箭头 -->
          <button @click="prevMask" class="absolute left-2 md:left-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-mineral/20 bg-charcoal/80 text-mineral/60 transition hover:border-cinnabar hover:text-cinnabar md:h-14 md:w-14">
            <span class="text-2xl">‹</span>
          </button>
          <button @click="nextMask" class="absolute right-2 md:right-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-mineral/20 bg-charcoal/80 text-mineral/60 transition hover:border-cinnabar hover:text-cinnabar md:h-14 md:w-14">
            <span class="text-2xl">›</span>
          </button>

          <!-- 详情卡片 -->
          <div class="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border bg-void shadow-2xl" :style="{ borderColor: selected.accent + '55' }">
            <div class="absolute left-0 top-0 z-20 h-1 w-full" :style="{ backgroundColor: selected.accent }"></div>
            <!-- 关闭按钮 -->
            <button @click="closeDetail" class="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-mineral/20 bg-void/80 text-mineral/70 transition hover:border-cinnabar hover:text-cinnabar">
              <span class="text-lg">✕</span>
            </button>

            <div class="grid max-h-[90vh] overflow-y-auto md:grid-cols-[1.1fr_1fr]">
              <!-- 左：大图 -->
              <div class="relative bg-charcoal/40">
                <!-- 主图 -->
                <div class="relative flex items-center justify-center" style="min-height: 320px;">
                  <img :src="selected.img" :alt="selected.name" class="max-h-[400px] w-full object-contain" />
                  <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-void to-transparent md:bg-gradient-to-r"></div>
                </div>

                <!-- 左下角角色信息 -->
                <div class="px-4 pb-4">
                  <div class="flex items-center gap-2">
                    <span class="rounded px-2.5 py-0.5 text-[10px] tracking-widest" :style="{ backgroundColor: selected.accent + '22', color: selected.accent }">
                      {{ selected.category === 'auspicious' ? '吉神' : '凶神' }} · {{ groupInfo[selected.group]?.name || '' }}
                    </span>
                    <span class="text-[10px] tracking-widest text-mineral/30">{{ selected.region }}</span>
                  </div>
                </div>
              </div>

              <!-- 右：详情信息 -->
              <div class="p-6 md:p-8">
                <h3 class="font-serif text-4xl font-black text-mineral">{{ selected.name }}</h3>
                <p class="mt-1 text-sm text-mineral/50">{{ selected.alias }}</p>

                <div class="my-4 h-px" :style="{ backgroundImage: 'linear-gradient(90deg,' + selected.accent + ',transparent)' }"></div>

                <!-- 描述引语 -->
                <p class="mb-4 font-serif text-sm italic leading-relaxed text-mineral/70">"{{ selected.desc }}"</p>

                <!-- 详细介绍 -->
                <p class="mb-5 text-sm leading-loose text-mineral/80">{{ selected.detail }}</p>

                <!-- 精神内核 -->
                <div class="mb-4 rounded-lg border-l-2 bg-charcoal/40 p-3" :style="{ borderColor: selected.accent }">
                  <p class="text-[10px] tracking-widest text-mineral/40">精神内核</p>
                  <p class="mt-1 font-serif text-base" :style="{ color: selected.accent }">{{ selected.essence }}</p>
                </div>

                <!-- 信息列表 -->
                <dl class="space-y-2 text-xs">
                  <div class="flex justify-between border-b border-smoke/40 pb-1.5">
                    <dt class="text-mineral/30">配色</dt>
                    <dd class="text-mineral/75">{{ selected.colorScheme }}</dd>
                  </div>
                  <div class="flex justify-between border-b border-smoke/40 pb-1.5">
                    <dt class="text-mineral/30">材质</dt>
                    <dd class="text-mineral/75">{{ selected.material }}</dd>
                  </div>
                  <div class="flex justify-between border-b border-smoke/40 pb-1.5">
                    <dt class="text-mineral/30">流派地</dt>
                    <dd class="text-mineral/75">{{ selected.region }}</dd>
                  </div>
                </dl>

                <!-- 代表剧目 -->
                <div class="mt-4">
                  <p class="mb-2 text-[10px] tracking-widest text-mineral/30">代表剧目</p>
                  <div class="flex flex-wrap gap-1.5">
                    <span v-for="play in selected.plays" :key="play" class="rounded border px-2 py-0.5 text-[10px] text-mineral/60" :style="{ borderColor: selected.accent + '44' }">{{ play }}</span>
                  </div>
                </div>

                <!-- 标签 -->
                <div class="mt-4">
                  <p class="mb-2 text-[10px] tracking-widest text-mineral/30">标签</p>
                  <div class="flex flex-wrap gap-1.5">
                    <span v-for="t in selected.tags" :key="t" class="rounded bg-smoke/40 px-2 py-0.5 text-[10px] text-mineral/50">{{ t }}</span>
                  </div>
                </div>

                <!-- 导航提示 -->
                <div class="mt-5 flex items-center justify-between border-t border-smoke/30 pt-3 text-[10px] text-mineral/30">
                  <span>← → 切换 · ESC 关闭</span>
                  <span>{{ groupInfo[selected.group]?.name || '' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: all .5s cubic-bezier(.16,1,.3,1);
}
.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}
.card-move {
  transition: transform .5s cubic-bezier(.16,1,.3,1);
}
.deity-modal-enter-active, .deity-modal-leave-active {
  transition: opacity .3s ease;
}
.deity-modal-enter-from, .deity-modal-leave-to {
  opacity: 0;
}
</style>
