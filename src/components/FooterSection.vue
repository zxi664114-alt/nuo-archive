<script setup>
// 传播沉淀 —— 周边文创 / 社群入口
const channels = [
  { name: '文创周边', desc: '面具徽章 · 帆布图录 · 香薰', icon: '礼', accent: '#c0322a' },
  { name: '深度图录', desc: '高清电子画册 · 流派白皮书', icon: '册', accent: '#c9a24b' },
  { name: '社群沉淀', desc: '同好社群 · 实地探访预约', icon: '群', accent: '#3a6b6b' }
]
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative w-full overflow-hidden bg-void px-6 py-20 md:px-16 noise-overlay">
    <div class="mx-auto max-w-7xl">
      <!-- 闭环标语：视觉震撼 → 文化认同 → 价值留存 -->
      <div class="mb-16 text-center">
        <p class="mb-4 text-xs tracking-[0.5em] text-cinnabar/60">VALUE LOOP</p>
        <h2 class="font-serif text-3xl font-black leading-snug text-mineral md:text-4xl">
          视觉震撼 · 文化认同 · <span class="text-cinnabar text-glow">价值留存</span>
        </h2>
        <p class="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-mineral/40">
          从一瞥之下的东方暗黑震撼，到可触摸、可带走的非遗记忆——打通完整的文化转化闭环。
        </p>
      </div>

      <!-- 三入口 -->
      <div class="mb-16 grid gap-6 md:grid-cols-3">
        <div
          v-for="c in channels"
          :key="c.name"
          class="card-glow group flex items-center gap-5 rounded-2xl border border-smoke/60 bg-charcoal/50 p-6"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-serif text-2xl text-void transition"
            :style="{ backgroundColor: c.accent }"
          >{{ c.icon }}</div>
          <div>
            <p class="font-serif text-lg text-mineral">{{ c.name }}</p>
            <p class="mt-1 text-xs text-mineral/40">{{ c.desc }}</p>
          </div>
          <span class="ml-auto text-mineral/20 transition group-hover:translate-x-1 group-hover:text-cinnabar">→</span>
        </div>
      </div>

      <!-- 二维码沉淀区 -->
      <div class="flex flex-col items-center gap-8 border-t border-smoke/40 pt-12 md:flex-row md:justify-around">
        <div class="flex items-center gap-5">
          <div class="qr-box flex h-24 w-24 items-center justify-center rounded-lg border border-smoke/60 bg-charcoal/60">
            <span class="font-serif text-3xl text-cinnabar/60">傩</span>
          </div>
          <div>
            <p class="text-sm text-mineral/70">扫码进入小程序</p>
            <p class="mt-1 text-xs text-mineral/30">掌上数字档案 · 随身神谱</p>
          </div>
        </div>
        <div class="flex items-center gap-5">
          <div class="qr-box flex h-24 w-24 items-center justify-center rounded-lg border border-smoke/60 bg-charcoal/60">
            <span class="font-serif text-3xl text-cinnabar/60">群</span>
          </div>
          <div>
            <p class="text-sm text-mineral/70">加入同好社群</p>
            <p class="mt-1 text-xs text-mineral/30">实地探访 · 限定文创</p>
          </div>
        </div>
      </div>

      <!-- 版权 -->
      <div class="mt-16 flex flex-col items-center justify-between gap-4 border-t border-smoke/30 pt-8 text-xs text-mineral/25 md:flex-row">
        <p>© {{ year }} 贵州傩戏数字档案 · NUO DIGITAL ARCHIVE</p>
        <p>非遗数字化 · 东方暗黑美学 · MVP v1.0</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.qr-box {
  background-image: linear-gradient(45deg, #15151a 25%, transparent 25%),
    linear-gradient(-45deg, #15151a 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #15151a 75%),
    linear-gradient(-45deg, transparent 75%, #15151a 75%);
  background-size: 10px 10px;
  background-position: 0 0, 0 5px, 5px -5px, -5px 0;
}
</style>
