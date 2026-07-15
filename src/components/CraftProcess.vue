<script setup>
import { ref, computed } from 'vue'
import { craftSteps, totalTime, craftOverview, craftPhotoCredit, videoCredit } from '../data/craft.js'
import CitationBox from './CitationBox.vue'

const activeStep = ref(1)
const current = computed(() => craftSteps.find(s => s.id === activeStep.value))

function selectStep(id) {
  activeStep.value = id
}

function nextStep() {
  if (activeStep.value < 8) activeStep.value++
}
function prevStep() {
  if (activeStep.value > 1) activeStep.value--
}

// 平台图标与配色
const platformStyle = {
  'B站': { bg: '#fb7299', icon: '▶', label: '观看视频' },
  '头条': { bg: '#f04142', icon: '▶', label: '观看视频' },
  '共产党员网': { bg: '#c0322a', icon: '▶', label: '观看视频' },
  '中国傩戏网': { bg: '#7d3c98', icon: '❏', label: '查看图解' },
  '网易·贵州省博物馆': { bg: '#3a6b6b', icon: '❏', label: '查看图解' }
}
function getPlatformStyle(p) {
  return platformStyle[p] || { bg: '#a39e92', icon: '↗', label: '查看原文' }
}
</script>

<template>
  <section id="craft" class="relative w-full overflow-hidden bg-void px-6 py-24 md:px-16 noise-overlay">
    <!-- 章节标题 -->
    <div class="mb-10 text-center">
      <p class="mb-3 text-xs tracking-[0.5em] text-cinnabar/70">03 · CRAFT PROCESS</p>
      <h2 class="font-serif text-4xl font-black text-mineral md:text-5xl">面具制造工艺</h2>
      <p class="mt-4 text-sm text-mineral/40">{{ craftOverview.subtitle }} · 八步成神 · 从原木到神灵</p>
    </div>
    <div class="mx-auto mb-14 h-px w-40 bg-gradient-to-r from-transparent via-cinnabar to-transparent"></div>

    <!-- 概述引言 -->
    <div class="mx-auto mb-16 max-w-3xl text-center">
      <p class="mb-4 text-sm leading-loose text-mineral/60">{{ craftOverview.desc }}</p>
      <p class="font-serif text-base italic text-cinnabar/70">{{ craftOverview.quote }}</p>
    </div>

    <!-- 工艺流程步骤条 -->
    <div class="mx-auto mb-12 max-w-7xl">
      <!-- 桌面端：水平时间轴 -->
      <div class="hidden md:block">
        <div class="relative">
          <!-- 连接线 -->
          <div class="absolute left-0 right-0 top-7 h-0.5 bg-smoke/40"></div>
          <!-- 进度线 -->
          <div class="absolute left-0 top-7 h-0.5 bg-cinnabar transition-all duration-500" :style="{ width: ((activeStep - 1) / 7 * 100) + '%' }"></div>
          <!-- 步骤节点 -->
          <div class="relative flex justify-between">
            <button
              v-for="step in craftSteps"
              :key="step.id"
              @click="selectStep(step.id)"
              class="group flex flex-col items-center"
            >
              <div
                class="flex h-14 w-14 items-center justify-center rounded-full border-2 font-serif text-lg transition-all duration-300"
                :class="activeStep >= step.id
                  ? 'border-cinnabar bg-cinnabar text-void shadow-[0_0_20px] shadow-cinnabar/50'
                  : 'border-smoke/60 bg-charcoal text-mineral/40 group-hover:border-cinnabar/50 group-hover:text-cinnabar'"
                :style="activeStep === step.id ? { boxShadow: '0 0 25px ' + step.accent + '80' } : {}"
              >{{ step.icon }}</div>
              <span
                class="mt-2 text-xs transition"
                :class="activeStep === step.id ? 'font-bold text-mineral' : 'text-mineral/40'"
              >{{ step.title }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 移动端：水平滚动步骤条 -->
      <div class="flex gap-3 overflow-x-auto pb-3 md:hidden">
        <button
          v-for="step in craftSteps"
          :key="step.id"
          @click="selectStep(step.id)"
          class="flex shrink-0 flex-col items-center"
        >
          <div
            class="flex h-12 w-12 items-center justify-center rounded-full border-2 font-serif text-base transition"
            :class="activeStep === step.id ? 'border-cinnabar bg-cinnabar text-void' : 'border-smoke/60 bg-charcoal text-mineral/40'"
          >{{ step.icon }}</div>
          <span class="mt-1 text-[10px]" :class="activeStep === step.id ? 'text-mineral' : 'text-mineral/40'">{{ step.title }}</span>
        </button>
      </div>
    </div>

    <!-- 当前步骤详情 -->
    <Transition name="craft-panel" mode="out-in">
      <div :key="current.id" class="mx-auto max-w-7xl">
        <div class="grid gap-8 lg:grid-cols-5">
          <!-- 左：步骤标识 + SVG示意 -->
          <div class="lg:col-span-2">
            <div class="relative overflow-hidden rounded-2xl border border-smoke/60 bg-charcoal/60">
              <!-- 步骤编号大字 -->
              <div class="absolute right-4 top-2 font-serif text-[120px] font-black leading-none opacity-5" :style="{ color: current.accent }">{{ current.id }}</div>

              <div class="relative p-8">
                <!-- 步骤标签 -->
                <div class="mb-4 flex items-center gap-3">
                  <span class="rounded px-3 py-1 text-[10px] tracking-widest" :style="{ backgroundColor: current.accent + '22', color: current.accent }">{{ current.subtitle }}</span>
                  <span class="text-[10px] tracking-widest text-mineral/30">STEP {{ current.id }} / 8</span>
                </div>

                <!-- 步骤标题 -->
                <h3 class="mb-2 font-serif text-5xl font-black text-mineral">{{ current.title }}</h3>
                <p class="mb-6 text-sm text-mineral/40">{{ current.field }}</p>

                <!-- 真实木刻面具照片 -->
                <div class="mb-4 overflow-hidden rounded-xl border border-smoke/40 bg-void/50">
                  <div class="relative h-56 overflow-hidden">
                    <img :src="current.img" :alt="current.title + ' · 真实木刻面具'" class="h-full w-full object-cover opacity-90 transition duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent"></div>
                    <!-- 真实图片标识 -->
                    <span class="absolute right-3 top-3 rounded px-2 py-0.5 text-[10px] tracking-widest backdrop-blur" :style="{ backgroundColor: current.accent + 'cc', color: '#fff' }">REAL · 真实图片</span>
                    <!-- 图片说明 -->
                    <p class="absolute bottom-3 left-4 right-4 text-xs text-mineral/80">{{ current.imgCaption }}</p>
                  </div>
                </div>

                <!-- 工艺视频 / 图解来源 -->
                <div class="mb-4">
                  <p class="mb-2 flex items-center gap-2 text-[10px] tracking-widest text-mineral/30">
                    <span class="inline-block h-px w-4" :style="{ backgroundColor: current.accent }"></span>
                    MEDIA · 工艺视频与图解出处
                  </p>
                  <div class="space-y-2">
                    <a
                      v-for="(m, mi) in current.media"
                      :key="mi"
                      :href="m.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="media-link group flex items-center gap-3 rounded-lg border bg-void/50 p-3 transition hover:bg-charcoal/70"
                      :style="{ borderColor: getPlatformStyle(m.platform).bg + '44' }"
                    >
                      <span
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-void"
                        :style="{ backgroundColor: getPlatformStyle(m.platform).bg }"
                      >{{ getPlatformStyle(m.platform).icon }}</span>
                      <div class="min-w-0 flex-1">
                        <p class="truncate text-xs font-bold text-mineral/80">{{ m.title }}</p>
                        <p class="text-[10px] text-mineral/40">
                          <span :style="{ color: getPlatformStyle(m.platform).bg }">{{ m.platform }}</span>
                          · {{ m.type === 'video' ? '视频' : '图文' }} · 点击跳转原页
                        </p>
                      </div>
                      <span class="shrink-0 text-[10px] tracking-widest text-mineral/30 transition group-hover:text-cinnabar">{{ getPlatformStyle(m.platform).label }} ↗</span>
                    </a>
                  </div>
                </div>

                <!-- 工时 -->
                <div class="flex items-center gap-3 rounded-lg bg-void/50 p-3">
                  <span class="text-[10px] tracking-widest text-mineral/30">工时</span>
                  <span class="text-xs text-mineral/70">{{ current.time }}</span>
                </div>
              </div>
            </div>

            <!-- 翻页按钮 -->
            <div class="mt-4 flex justify-between">
              <button
                @click="prevStep"
                :disabled="activeStep === 1"
                class="rounded-full border border-smoke/60 px-5 py-2 text-xs tracking-wider transition"
                :class="activeStep === 1 ? 'cursor-not-allowed opacity-30' : 'text-mineral/60 hover:border-cinnabar hover:text-cinnabar'"
              >← 上一步</button>
              <button
                @click="nextStep"
                :disabled="activeStep === 8"
                class="rounded-full border px-5 py-2 text-xs tracking-wider transition"
                :class="activeStep === 8 ? 'cursor-not-allowed border-smoke/40 opacity-30' : 'border-cinnabar bg-cinnabar text-void hover:shadow-[0_0_15px] hover:shadow-cinnabar/50'"
              >下一步 →</button>
            </div>
          </div>

          <!-- 右：步骤详情 -->
          <div class="lg:col-span-3">
            <div class="flex h-full flex-col rounded-2xl border border-smoke/60 bg-charcoal/40 p-8">
              <!-- 描述 -->
              <p class="mb-6 text-sm leading-loose text-mineral/80">{{ current.desc }}</p>

              <!-- 深度细节 -->
              <div class="mb-6 rounded-xl border-l-2 bg-void/50 p-5" :style="{ borderColor: current.accent }">
                <p class="mb-2 text-[10px] tracking-widest" :style="{ color: current.accent }">DETAIL · 深度细节</p>
                <p class="text-sm leading-relaxed text-mineral/65">{{ current.detail }}</p>
              </div>

              <!-- 工具 -->
              <div class="mb-6">
                <p class="mb-3 text-[10px] tracking-widest text-mineral/30">TOOLS · 使用工具</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tool in current.tools"
                    :key="tool"
                    class="rounded-lg border bg-void/40 px-3 py-1.5 text-xs text-mineral/60"
                    :style="{ borderColor: current.accent + '44' }"
                  >{{ tool }}</span>
                </div>
              </div>

              <!-- 禁忌 -->
              <div class="mt-auto rounded-lg border border-cinnabar/20 bg-cinnabar/5 p-4">
                <p class="mb-1 flex items-center gap-2 text-[10px] tracking-widest text-cinnabar/60">
                  <span>⚠</span> TABOO · 传统禁忌
                </p>
                <p class="text-xs leading-relaxed text-mineral/50">{{ current.taboos }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 总工时统计 -->
    <div class="mx-auto mt-16 max-w-3xl">
      <div class="grid grid-cols-3 gap-4">
        <div class="rounded-xl border border-smoke/60 bg-charcoal/40 p-5 text-center">
          <p class="text-[10px] tracking-widest text-mineral/30">匠作工时</p>
          <p class="mt-2 font-serif text-2xl font-black text-cinnabar">{{ totalTime.active }}</p>
        </div>
        <div class="rounded-xl border border-smoke/60 bg-charcoal/40 p-5 text-center">
          <p class="text-[10px] tracking-widest text-mineral/30">木材养护</p>
          <p class="mt-2 font-serif text-2xl font-black text-mineral/70">{{ totalTime.drying }}</p>
        </div>
        <div class="rounded-xl border border-smoke/60 bg-charcoal/40 p-5 text-center">
          <p class="text-[10px] tracking-widest text-mineral/30">从原木到神灵</p>
          <p class="mt-2 font-serif text-xl font-black text-mineral/50">{{ totalTime.total }}</p>
        </div>
      </div>
    </div>

    <!-- 图片与视频来源说明 -->
    <div class="mx-auto mt-10 max-w-3xl rounded-xl border border-smoke/40 bg-charcoal/30 p-5">
      <p class="mb-2 text-[10px] tracking-widest text-cinnabar/60">SOURCE · 真实图片与视频出处</p>
      <div class="space-y-1.5 text-[11px] leading-relaxed text-mineral/50">
        <p>真实图片：{{ craftPhotoCredit.source }} · {{ craftPhotoCredit.author }} · {{ craftPhotoCredit.license }}</p>
        <p>视频与图解：{{ videoCredit.platforms }}</p>
        <p class="text-mineral/40">{{ videoCredit.note }}</p>
      </div>
    </div>

    <!-- 参考文献 -->
    <div class="mx-auto mt-12 max-w-7xl">
      <CitationBox :cite="['R1','R2','R4','R6']" />
    </div>
  </section>
</template>

<style scoped>
.craft-panel-enter-active, .craft-panel-leave-active {
  transition: all .4s cubic-bezier(.16,1,.3,1);
}
.craft-panel-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.craft-panel-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
