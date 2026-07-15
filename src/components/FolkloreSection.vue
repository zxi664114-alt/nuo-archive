<script setup>
import { ref, computed } from 'vue'
import { whyPopular, folkStories, references } from '../data/folklore.js'
import CitationBox from './CitationBox.vue'

const activeStory = ref(folkStories[0].id)
const storyTypes = [
  { key: 'all', label: '全部故事' },
  { key: '驱疫故事', label: '驱疫故事' },
  { key: '创世神话', label: '创世神话' },
  { key: '信仰故事', label: '信仰故事' },
  { key: '傩坛故事', label: '傩坛故事' },
  { key: '历史传说', label: '历史传说' },
  { key: '佛教故事融入傩', label: '佛教融入' }
]
const activeFilter = ref('all')

const filteredStories = computed(() =>
  activeFilter.value === 'all'
    ? folkStories
    : folkStories.filter(s => s.type === activeFilter.value)
)

const current = computed(() =>
  folkStories.find(s => s.id === activeStory.value)
)

function selectStory(id) { activeStory.value = id }

// 格式化引用编号
function citeLabel(keys) {
  return keys.join(' · ')
}
function refTitle(key) {
  const r = references[key]
  return r ? `${r.title} · ${r.author}(${r.year})` : key
}
</script>

<template>
  <section id="folklore" class="relative w-full overflow-hidden bg-charcoal px-6 py-24 md:px-16 noise-overlay">
    <!-- 章节标题 -->
    <div class="mb-12 text-center">
      <p class="mb-3 text-xs tracking-[0.5em] text-cinnabar/70">06 · FOLKLORE & LEGENDS</p>
      <h2 class="font-serif text-4xl font-black text-mineral md:text-5xl">民间故事</h2>
      <p class="mt-4 text-sm text-mineral/40">"人有难，方有傩" —— 灾难催生的文化基因，每则故事均可溯源</p>
    </div>
    <div class="mx-auto mb-16 h-px w-40 bg-gradient-to-r from-transparent via-cinnabar to-transparent"></div>

    <!-- 第一部分：傩戏为何流行 -->
    <div class="mx-auto mb-20 max-w-6xl">
      <div class="mb-8 flex items-center gap-3">
        <span class="h-px w-12 bg-cinnabar/40"></span>
        <p class="text-xs tracking-[0.5em] text-cinnabar/70">WHY · 傩戏为何流行</p>
      </div>
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(item, i) in whyPopular"
          :key="item.id"
          class="why-card card-glow relative overflow-hidden rounded-xl border border-smoke/60 bg-void/50 p-6"
        >
          <span class="absolute right-4 top-4 font-serif text-5xl font-black text-mineral/5">{{ String(i+1).padStart(2,'0') }}</span>
          <p class="mb-2 text-[10px] tracking-widest text-cinnabar/60">{{ item.subtitle }}</p>
          <h3 class="mb-3 font-serif text-xl font-black text-mineral">{{ item.title }}</h3>
          <p class="mb-4 text-sm leading-relaxed text-mineral/65">{{ item.content }}</p>
          <div class="rounded-lg border-l-2 border-cinnabar/40 bg-charcoal/40 p-3">
            <p class="text-[10px] tracking-widest text-cinnabar/50">流行原因</p>
            <p class="mt-1 text-xs leading-relaxed text-mineral/55">{{ item.reason }}</p>
          </div>
          <p class="mt-4 text-[10px] text-mineral/25">参考：{{ citeLabel(item.sources) }}</p>
        </article>
      </div>
      <CitationBox :cite="['R1','R2','R3','R4','R5','R6','R7','R8','R9','R11','R12','R15']" />
    </div>

    <!-- 第二部分：民间故事专栏 -->
    <div class="mx-auto max-w-7xl">
      <div class="mb-8 flex items-center gap-3">
        <span class="h-px w-12 bg-cinnabar/40"></span>
        <p class="text-xs tracking-[0.5em] text-cinnabar/70">STORIES · 民间传说</p>
      </div>

      <!-- 筛选 -->
      <div class="mb-8 flex flex-wrap gap-2">
        <button
          v-for="t in storyTypes"
          :key="t.key"
          @click="activeFilter = t.key"
          class="rounded-full px-4 py-1.5 text-xs tracking-wider transition"
          :class="activeFilter === t.key
            ? 'bg-cinnabar text-void'
            : 'border border-smoke/60 text-mineral/50 hover:border-cinnabar hover:text-cinnabar'"
        >{{ t.label }}</button>
      </div>

      <div class="grid gap-8 lg:grid-cols-5">
        <!-- 左：故事列表 —— 固定高度可滚动 -->
        <div class="lg:col-span-2">
          <div class="space-y-2 lg:max-h-[600px] lg:overflow-y-auto lg:pr-2 lg:sticky lg:top-4">
            <button
              v-for="s in filteredStories"
              :key="s.id"
              @click="selectStory(s.id)"
              class="story-btn group block w-full rounded-lg border p-3 text-left transition"
              :class="activeStory === s.id
                ? 'border-cinnabar/60 bg-void/70'
                : 'border-smoke/40 bg-charcoal/30 hover:border-mineral/30'"
            >
              <div class="flex items-center gap-2.5">
                <span
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-serif text-xs font-bold"
                  :style="{ backgroundColor: s.accent + '22', color: s.accent }"
                >{{ s.era.slice(0,2) }}</span>
                <div class="min-w-0 flex-1">
                  <h4 class="truncate font-serif text-sm font-black" :class="activeStory === s.id ? 'text-mineral' : 'text-mineral/70'">{{ s.title }}</h4>
                  <p class="mt-0.5 truncate text-[11px] text-mineral/35">{{ s.type }} · {{ s.region }}</p>
                </div>
                <span class="shrink-0 text-mineral/20 transition group-hover:translate-x-1" :class="{ 'text-cinnabar': activeStory === s.id }">→</span>
              </div>
            </button>
          </div>
        </div>

        <!-- 右：故事详情 -->
        <div class="lg:col-span-3">
          <Transition name="story" mode="out-in">
            <div :key="current.id" class="rounded-2xl border border-smoke/60 bg-void/50 p-8" :style="{ borderColor: current.accent + '33' }">
              <!-- 头部 -->
              <div class="mb-5 flex items-start justify-between border-b border-smoke/50 pb-4">
                <div>
                  <span class="mb-2 inline-block rounded px-2 py-0.5 text-[10px] tracking-widest" :style="{ backgroundColor: current.accent + '22', color: current.accent }">{{ current.type }}</span>
                  <h3 class="font-serif text-2xl font-black text-mineral">{{ current.title }}</h3>
                  <p class="mt-1 text-xs text-mineral/40">{{ current.era }} · {{ current.region }}</p>
                </div>
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-serif text-xl text-void" :style="{ background: 'linear-gradient(135deg,' + current.accent + ',#7d1f1a)' }">
                  {{ current.era.slice(0,1) }}
                </div>
              </div>

              <!-- 故事正文 -->
              <div class="relative">
                <span class="absolute -left-2 -top-4 font-serif text-6xl text-cinnabar/10">"</span>
                <p class="relative z-10 pl-4 text-sm leading-loose text-mineral/80">{{ current.story }}</p>
              </div>

              <!-- 文化意义 -->
              <div class="mt-6 rounded-xl border-l-2 bg-charcoal/40 p-4" :style="{ borderColor: current.accent }">
                <p class="mb-1 text-[10px] tracking-widest" :style="{ color: current.accent }">CULTURAL MEANING · 文化意义</p>
                <p class="text-sm leading-relaxed text-mineral/70">{{ current.meaning }}</p>
              </div>

              <!-- 溯源标注 -->
              <div class="mt-6 flex flex-wrap items-center gap-2">
                <span class="text-[10px] tracking-widest text-mineral/30">溯源：</span>
                <span
                  v-for="src in current.sources"
                  :key="src"
                  :title="refTitle(src)"
                  class="cursor-help rounded border border-smoke/40 px-2 py-0.5 font-mono text-[10px] text-mineral/50 transition hover:border-cinnabar hover:text-cinnabar"
                >{{ src }}</span>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story-enter-active, .story-leave-active {
  transition: all .4s cubic-bezier(.16,1,.3,1);
}
.story-enter-from { opacity: 0; transform: translateX(20px); }
.story-leave-to { opacity: 0; transform: translateX(-20px); }
</style>
