<script setup>
import { computed } from 'vue'

const props = defineProps({
  school: { type: Object, required: true },
  side: { type: String, default: 'martial' }
})

const isMartial = computed(() => props.side === 'martial')
const accent = computed(() => props.school.accent)
const stat = computed(() => props.school.stat)
</script>

<template>
  <div class="relative bg-charcoal/50 p-7" :class="isMartial ? 'md:border-r border-smoke/60' : ''">
    <!-- 顶部色条 -->
    <div class="absolute left-0 top-0 h-1 w-full" :style="{ backgroundColor: accent }"></div>

    <div class="mb-5 flex items-center justify-between">
      <div>
        <span
          class="rounded px-2 py-0.5 text-[10px] tracking-widest"
          :style="{ backgroundColor: accent + '22', color: accent }"
        >{{ school.type }}</span>
        <h3 class="mt-2 font-serif text-2xl font-black text-mineral">{{ school.name }}</h3>
      </div>
      <div
        class="flex h-14 w-14 items-center justify-center rounded-full border font-serif text-xl"
        :style="{ borderColor: accent, color: accent, boxShadow: '0 0 18px ' + accent + '33' }"
      >{{ isMartial ? '武' : '文' }}</div>
    </div>

    <p class="mb-5 font-serif text-sm leading-relaxed text-mineral/70">
      “{{ school.quote }}”
    </p>

    <!-- 关键参数 -->
    <div class="grid grid-cols-3 gap-3 text-center">
      <div class="rounded-lg bg-void/50 p-3">
        <p class="font-serif text-xl" :style="{ color: accent }">{{ stat.age }}<span class="text-xs">年</span></p>
        <p class="mt-1 text-[10px] text-mineral/40">传承时长</p>
      </div>
      <div class="rounded-lg bg-void/50 p-3">
        <p class="font-serif text-xl" :style="{ color: accent }">{{ stat.masks }}<span class="text-xs">面</span></p>
        <p class="mt-1 text-[10px] text-mineral/40">主要面具</p>
      </div>
      <div class="rounded-lg bg-void/50 p-3">
        <p class="text-xs leading-tight text-mineral/80">{{ stat.troops }}</p>
        <p class="mt-1 text-[10px] text-mineral/40">传承主体</p>
      </div>
    </div>

    <!-- 演出形态 -->
    <div class="mt-5 space-y-3 text-sm">
      <div>
        <p class="text-[10px] tracking-widest text-mineral/30">面具形制</p>
        <p class="mt-1 text-mineral/85">{{ school.maskType }}</p>
      </div>
      <div>
        <p class="text-[10px] tracking-widest text-mineral/30">色彩谱系</p>
        <p class="mt-1 text-mineral/85">{{ school.palette }}</p>
      </div>
      <div>
        <p class="text-[10px] tracking-widest text-mineral/30">精神内核</p>
        <p class="mt-1" :style="{ color: accent }">{{ school.spirit }}</p>
      </div>
    </div>
  </div>
</template>
