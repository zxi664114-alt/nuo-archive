<script setup>
import { siteNav } from '../data/siteNav.js'

defineProps({
  // 大类 id，如 'origin-group'
  groupId: { type: String, required: true }
})

const group = (id) => siteNav.find(g => g.id === id)

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div v-if="group(groupId)" class="category-banner relative w-full overflow-hidden py-16 md:py-20">
    <!-- 背景大字 -->
    <span
      class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[180px] font-black leading-none opacity-[0.04] md:text-[280px]"
      :style="{ color: group(groupId).accent }"
    >{{ group(groupId).label }}</span>

    <div class="relative mx-auto max-w-5xl px-6 text-center md:px-16">
      <!-- 大类编号 -->
      <p class="mb-4 text-xs tracking-[0.6em]" :style="{ color: group(groupId).accent + 'aa' }">
        CATEGORY · 第 {{ group(groupId).index }} 大类
      </p>

      <!-- 大类标题 -->
      <div class="mb-4 flex items-center justify-center gap-4">
        <span class="h-px w-12" :style="{ backgroundColor: group(groupId).accent + '66' }"></span>
        <h2 class="font-serif text-5xl font-black md:text-6xl" :style="{ color: group(groupId).accent }">
          {{ group(groupId).label }}
        </h2>
        <span class="h-px w-12" :style="{ backgroundColor: group(groupId).accent + '66' }"></span>
      </div>
      <p class="mb-3 text-xs tracking-[0.5em] text-mineral/40">{{ group(groupId).en }}</p>
      <p class="mb-8 text-sm text-mineral/50">{{ group(groupId).desc }}</p>

      <!-- 小类列表 -->
      <div class="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
        <button
          v-for="c in group(groupId).children"
          :key="c.id"
          @click="scrollTo(c.id)"
          class="group flex items-center gap-2 rounded-full border px-5 py-2.5 transition hover:scale-105"
          :style="{ borderColor: group(groupId).accent + '44' }"
        >
          <span class="text-[10px] tracking-widest opacity-50" :style="{ color: group(groupId).accent }">{{ c.no }}</span>
          <span class="text-sm font-bold text-mineral/80 transition group-hover:text-mineral">{{ c.label }}</span>
          <span class="text-[9px] tracking-widest text-mineral/30">{{ c.en }}</span>
          <span class="ml-1 text-[10px] text-mineral/30 transition group-hover:translate-x-0.5" :style="{ color: group(groupId).accent }">→</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-banner {
  position: relative;
}
</style>
