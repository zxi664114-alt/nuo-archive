<script setup>
import { computed } from 'vue'
import { compareFields } from '../data/schools.js'

const props = defineProps({ school: { type: Object, required: true } })

const isMartial = computed(() => props.school.type === '武傩')
const accent = computed(() => props.school.accent)
</script>

<template>
  <div
    class="panel-slide h-[460px] overflow-y-auto rounded-xl border bg-charcoal/70 p-6"
    :style="{ borderColor: accent + '55' }"
  >
    <!-- 头部 -->
    <div class="flex items-start justify-between border-b border-smoke/60 pb-4">
      <div>
        <span
          class="mb-2 inline-block rounded px-2 py-0.5 text-[10px] tracking-widest"
          :style="{ backgroundColor: accent + '22', color: accent }"
        >{{ school.type }}</span>
        <h3 class="font-serif text-2xl font-black text-mineral">{{ school.name }}</h3>
        <p class="mt-1 text-xs text-mineral/40">{{ school.region }}</p>
      </div>
      <div class="text-right">
        <p class="text-[10px] tracking-widest text-mineral/30">传承</p>
        <p class="font-serif text-2xl" :style="{ color: accent }">{{ school.stat.age }}<span class="text-xs">年</span></p>
      </div>
    </div>

    <!-- 引语 -->
    <p class="my-5 border-l-2 pl-4 font-serif text-sm italic leading-relaxed text-mineral/70" :style="{ borderColor: accent }">
      “{{ school.quote }}”
    </p>

    <!-- 数据维度 -->
    <dl class="space-y-3 text-sm">
      <div v-for="f in compareFields" :key="f.key" class="flex justify-between gap-4 border-b border-smoke/30 pb-2">
        <dt class="flex shrink-0 items-center gap-2 text-mineral/40">
          <span class="text-cinnabar/60">◆</span>{{ f.label }}
        </dt>
        <dd class="text-right text-mineral/85">{{ school[f.key] }}</dd>
      </div>
    </dl>

    <!-- 剧目 -->
    <div class="mt-5">
      <p class="mb-2 text-[10px] tracking-widest text-mineral/30">代表剧目</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="play in school.plays"
          :key="play"
          class="rounded border px-2.5 py-1 text-xs text-mineral/70"
          :style="{ borderColor: accent + '44' }"
        >{{ play }}</span>
      </div>
    </div>
  </div>
</template>
