<script setup>
import { ref } from 'vue'
import { timeline, fourSchools, memoryQuotes } from '../data/origin.js'
import CitationBox from './CitationBox.vue'

const activeNode = ref(timeline[1].id) // 默认聚焦周代"方相氏"

const current = ref(timeline[1]) // 默认展示周代"方相氏"
function selectNode(id) {
  activeNode.value = id
  current.value = timeline.find(n => n.id === id)
}
</script>

<template>
  <section id="origin" class="relative w-full overflow-hidden bg-void px-6 py-24 md:px-16 noise-overlay">
    <!-- 章节标题 -->
    <div class="mb-12 text-center">
      <p class="mb-3 text-xs tracking-[0.5em] text-cinnabar/70">01 · CULTURAL ORIGIN</p>
      <h2 class="font-serif text-4xl font-black text-mineral md:text-5xl">文化渊源</h2>
      <p class="mt-4 text-sm text-mineral/40">从商周方相氏到明初调北征南 —— 一条流淌3000年的驱疫之河</p>
    </div>
    <div class="mx-auto mb-16 h-px w-40 bg-gradient-to-r from-transparent via-cinnabar to-transparent"></div>

    <!-- 时间轴主体 -->
    <div class="mx-auto max-w-6xl">
      <!-- 横向时间轴（可滚动） -->
      <div class="timeline-scroll mb-12 overflow-x-auto pb-4">
        <div class="flex min-w-max items-end justify-between gap-2 px-2">
          <button
            v-for="node in timeline"
            :key="node.id"
            @click="selectNode(node.id)"
            class="timeline-node group relative flex flex-col items-center"
            :class="{ active: activeNode === node.id }"
          >
            <!-- 年份 -->
            <span
              class="mb-2 whitespace-nowrap text-[10px] tracking-wider transition"
              :class="activeNode === node.id ? 'text-mineral' : 'text-mineral/30'"
            >{{ node.era }}</span>
            <!-- 节点圆 -->
            <span
              class="node-dot flex h-11 w-11 items-center justify-center rounded-full border-2 font-serif text-sm transition"
              :style="{
                borderColor: activeNode === node.id ? node.accent : '#3a3a42',
                color: activeNode === node.id ? node.accent : '#5a5a62',
                backgroundColor: activeNode === node.id ? node.accent + '22' : 'transparent',
                boxShadow: activeNode === node.id ? '0 0 18px ' + node.accent + '66' : 'none'
              }"
            >{{ node.icon }}</span>
            <!-- 标题 -->
            <span
              class="mt-2 max-w-[5rem] text-center text-[11px] leading-tight transition"
              :class="activeNode === node.id ? 'text-mineral' : 'text-mineral/30 group-hover:text-mineral/60'"
            >{{ node.title }}</span>
          </button>
        </div>
        <!-- 轴线 -->
        <div class="relative mt-1 h-px w-full bg-gradient-to-r from-cinnabar-deep/40 via-smoke to-cinnabar-glow/40"></div>
      </div>

      <!-- 详情面板 -->
      <Transition name="origin" mode="out-in">
        <div :key="current.id" class="origin-panel grid gap-8 rounded-2xl border border-smoke/60 bg-charcoal/50 p-8 md:grid-cols-5 md:p-10">
          <!-- 左：大年代 -->
          <div class="md:col-span-2">
            <p class="text-xs tracking-[0.4em] text-cinnabar/60">{{ current.year }}</p>
            <p class="mt-2 font-serif text-7xl font-black leading-none" :style="{ color: current.accent }">{{ current.era }}</p>
            <h3 class="mt-4 font-serif text-3xl font-black text-mineral">{{ current.title }}</h3>
            <p class="mt-4 font-serif text-base leading-relaxed text-mineral/70">{{ current.summary }}</p>
            <p class="mt-6 text-[10px] tracking-widest text-mineral/30">史料来源 · {{ current.cite }}</p>
          </div>
          <!-- 右：详述 -->
          <div class="md:col-span-3 md:border-l md:border-smoke/40 md:pl-8">
            <div class="mb-4 flex items-center gap-3">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-lg font-serif text-lg text-void"
                :style="{ background: 'linear-gradient(135deg,' + current.accent + ',#7d1f1a)' }"
              >{{ current.icon }}</span>
              <p class="text-xs tracking-[0.4em] text-mineral/40">深度考证</p>
            </div>
            <p class="text-sm leading-loose text-mineral/80">{{ current.detail }}</p>
          </div>
        </div>
      </Transition>
    </div>

    <!-- 全国六大傩系 -->
    <div class="mx-auto mt-20 max-w-6xl">
      <div class="mb-8 flex items-center justify-center gap-3 text-center">
        <span class="h-px w-12 bg-cinnabar/40"></span>
        <p class="text-xs tracking-[0.5em] text-cinnabar/70">CHINA · SIX SCHOOLS</p>
        <span class="h-px w-12 bg-cinnabar/40"></span>
      </div>
      <h3 class="mb-3 text-center font-serif text-2xl font-black text-mineral">全国六大傩系</h3>
      <p class="mb-10 text-center text-sm text-mineral/40">覆盖11省 · 涉汉、苗、侗、土家、彝、仡佬、壮等民族 · 国家级非遗20余项</p>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <article
          v-for="s in fourSchools"
          :key="s.id"
          class="school-card card-glow group relative overflow-hidden rounded-xl border bg-charcoal/50 p-6"
          :style="{ borderColor: s.accent + '33' }"
        >
          <div class="absolute left-0 top-0 h-1 w-full" :style="{ backgroundColor: s.accent }"></div>
          <div class="mb-4 flex items-center justify-between">
            <h4 class="font-serif text-2xl font-black text-mineral">{{ s.name }}</h4>
            <span
              class="rounded px-2 py-0.5 text-[10px] tracking-widest"
              :style="{ backgroundColor: s.accent + '22', color: s.accent }"
            >{{ s.type }}</span>
          </div>
          <p class="mb-4 text-xs leading-relaxed text-mineral/60">{{ s.desc }}</p>
          <dl class="space-y-2 text-xs">
            <div class="flex justify-between">
              <dt class="text-mineral/30">地域</dt>
              <dd class="text-right text-mineral/75">{{ s.region }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-mineral/30">核心区</dt>
              <dd class="text-right text-mineral/75">{{ s.core }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-mineral/30">民族</dt>
              <dd class="text-right text-mineral/75">{{ s.nation }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-mineral/30">特征</dt>
              <dd class="text-right text-mineral/75">{{ s.feature }}</dd>
            </div>
            <div class="flex justify-between border-t border-smoke/30 pt-2">
              <dt class="text-mineral/30">年代</dt>
              <dd class="text-right" :style="{ color: s.accent }">{{ s.age }}</dd>
            </div>
          </dl>
        </article>
      </div>
    </div>

    <!-- 权威论述引言 -->
    <div class="mx-auto mt-20 max-w-4xl">
      <div class="mb-8 text-center">
        <p class="text-xs tracking-[0.5em] text-cinnabar/70">AUTHORITATIVE VOICES · 名家论傩</p>
      </div>
      <div class="space-y-5">
        <blockquote
          v-for="(q, i) in memoryQuotes"
          :key="i"
          class="relative rounded-xl border-l-2 bg-charcoal/40 p-6"
          :style="{ borderColor: q.accent }"
        >
          <!-- 权威标签 -->
          <span
            class="absolute right-4 top-4 rounded px-2 py-0.5 text-[10px] tracking-widest"
            :style="{ backgroundColor: q.accent + '22', color: q.accent }"
          >{{ q.tag }}</span>
          <p class="mb-3 font-serif text-lg leading-relaxed text-mineral/85">"{{ q.text }}"</p>
          <div class="flex items-center justify-between border-t border-smoke/20 pt-3">
            <div>
              <p class="text-right text-xs font-bold text-mineral/60">—— {{ q.from }}</p>
              <p class="mt-0.5 text-right text-[10px] text-mineral/35">出处：{{ q.work }}</p>
            </div>
            <span class="font-mono text-[10px] text-cinnabar/60">[{{ q.cite }}]</span>
          </div>
        </blockquote>
      </div>
    </div>

    <!-- 参考文献溯源 -->
    <div class="mx-auto mt-12 max-w-4xl">
      <CitationBox :cite="['R1','R2','R3','R4','R6','R7','R8','R10','R11','R12','R13','R14','R15','R16']" />
    </div>
  </section>
</template>

<style scoped>
.timeline-scroll::-webkit-scrollbar {
  height: 4px;
}
.timeline-node {
  min-width: 80px;
}
.node-dot {
  transition: all .3s ease;
}
.timeline-node:hover .node-dot {
  transform: scale(1.1);
}

.origin-enter-active,
.origin-leave-active {
  transition: all .45s cubic-bezier(.16,1,.3,1);
}
.origin-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.origin-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
