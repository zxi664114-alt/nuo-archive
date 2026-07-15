<script setup>
import { ref } from 'vue'
import { references } from '../data/folklore.js'

const props = defineProps({
  // 引用的参考文献编号数组，如 ['R1','R7']
  cite: { type: Array, default: () => [] }
})

const expanded = ref(false)

const citedRefs = ref(
  props.cite.map(key => ({ key, ...references[key] })).filter(r => r.title)
)
</script>

<template>
  <div v-if="citedRefs.length" class="cite-box mt-8 rounded-lg border border-smoke/40 bg-charcoal/30 p-4">
    <button @click="expanded = !expanded" class="flex w-full items-center justify-between text-left">
      <span class="flex items-center gap-2 text-[10px] tracking-[0.3em] text-mineral/40">
        <span class="text-cinnabar/60">§</span>参考文献 · {{ citedRefs.length }} 篇
      </span>
      <span class="text-[10px] text-mineral/30 transition" :class="{ 'rotate-180': expanded }">▾</span>
    </button>
    <Transition name="cite">
      <div v-show="expanded" class="mt-3 space-y-2 border-t border-smoke/30 pt-3">
        <div v-for="r in citedRefs" :key="r.key" class="flex gap-3 text-xs">
          <span class="shrink-0 font-mono text-cinnabar/70">{{ r.key }}</span>
          <span class="text-mineral/55">
            {{ r.title }} · {{ r.author }} · {{ r.year }}
            <span v-if="r.type" class="text-mineral/30">[{{ r.type }}]</span>
            <a v-if="r.url" :href="r.url" target="_blank" class="ml-1 text-cinnabar/60 underline hover:text-cinnabar">链接 ↗</a>
          </span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.cite-enter-active, .cite-leave-active { transition: all .3s ease; overflow: hidden; }
.cite-enter-from, .cite-leave-to { opacity: 0; max-height: 0; }
.cite-enter-to, .cite-leave-from { opacity: 1; max-height: 500px; }
</style>
