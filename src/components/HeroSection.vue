<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import heroMask from '../assets/nuo-photos/hero-mask.jpg'

const audioOn = ref(false)
let audioCtx = null
let masterGain = null
let droneNodes = []
let noiseNode = null
let drumTimer = null
let bellTimer = null
let chantTimer = null
let activeNodes = []

// 傩戏氛围音 —— 多层 WebAudio 合成
// 第1层：低频 Drone（仪式空间嗡鸣，三个低频振荡器+LFO呼吸感）
// 第2层：白噪音+低通滤波（远处风声/篝火噼啪）
// 第3层：傩鼓节奏（远处深沉鼓声，随机间隔触发）
// 第4层：法器铃声（金属泛音，模拟铃铛/铙钹）
// 第5层：低吟人声（滤波后的嗡鸣，模拟远处吟唱）
function toggleAudio() {
  if (audioOn.value) {
    stopAudio()
    return
  }
  audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  masterGain = audioCtx.createGain()
  masterGain.gain.value = 0.0
  masterGain.connect(audioCtx.destination)

  // === 第1层：低频 Drone ===
  const drone1 = createDrone(55, 0.045)     // A1 - 基础低频
  const drone2 = createDrone(82.4, 0.03)    // E2 - 五度协和
  const drone3 = createDrone(110, 0.02)     // A2 - 八度叠加
  droneNodes.push(drone1, drone2, drone3)

  // === 第2层：白噪音 + 低通滤波 ===
  const bufferSize = audioCtx.sampleRate * 4
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1
  noiseNode = audioCtx.createBufferSource()
  noiseNode.buffer = buffer
  noiseNode.loop = true

  const noiseFilter = audioCtx.createBiquadFilter()
  noiseFilter.type = 'lowpass'
  noiseFilter.frequency.value = 380
  noiseFilter.Q.value = 0.5

  const noiseGain = audioCtx.createGain()
  noiseGain.gain.value = 0.055

  noiseNode.connect(noiseFilter)
  noiseFilter.connect(noiseGain)
  noiseGain.connect(masterGain)
  noiseNode.start()
  activeNodes.push(noiseNode)

  // === 第3层：傩鼓节奏 ===
  scheduleDrum()

  // === 第4层：法器铃声 ===
  scheduleBell()

  // === 第5层：低吟人声 ===
  scheduleChant()

  // 渐入
  masterGain.gain.linearRampToValueAtTime(0.55, audioCtx.currentTime + 2.5)
  audioOn.value = true

  // --- 辅助函数 ---
  function createDrone(freq, gain) {
    const osc = audioCtx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = freq

    // LFO 频率调制，营造呼吸感
    const lfo = audioCtx.createOscillator()
    lfo.frequency.value = 0.08 + Math.random() * 0.12
    const lfoGain = audioCtx.createGain()
    lfoGain.gain.value = 0.6
    lfo.connect(lfoGain)
    lfoGain.connect(osc.frequency)

    const filter = audioCtx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 220

    const g = audioCtx.createGain()
    g.gain.value = gain

    osc.connect(filter)
    filter.connect(g)
    g.connect(masterGain)
    osc.start()
    lfo.start()
    activeNodes.push(osc, lfo)
    return { osc, lfo, gain: g }
  }

  function scheduleDrum() {
    if (!audioCtx || !audioOn.value) return
    playDrum()
    const nextDelay = 2800 + Math.random() * 2200
    drumTimer = setTimeout(scheduleDrum, nextDelay)
  }

  function playDrum() {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    // 主鼓声：低频正弦波 + 快速衰减
    const osc = audioCtx.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(90, now)
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.4)

    const g = audioCtx.createGain()
    g.gain.setValueAtTime(0, now)
    g.gain.linearRampToValueAtTime(0.22, now + 0.02)
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.65)

    osc.connect(g)
    g.connect(masterGain)
    osc.start(now)
    osc.stop(now + 0.75)

    // 叠加三角波低频噗声
    const osc2 = audioCtx.createOscillator()
    osc2.type = 'triangle'
    osc2.frequency.setValueAtTime(52, now)
    osc2.frequency.exponentialRampToValueAtTime(30, now + 0.3)

    const g2 = audioCtx.createGain()
    g2.gain.setValueAtTime(0, now)
    g2.gain.linearRampToValueAtTime(0.10, now + 0.015)
    g2.gain.exponentialRampToValueAtTime(0.001, now + 0.45)

    osc2.connect(g2)
    g2.connect(masterGain)
    osc2.start(now)
    osc2.stop(now + 0.55)
  }

  function scheduleBell() {
    if (!audioCtx || !audioOn.value) return
    playBell()
    const nextDelay = 7000 + Math.random() * 5000
    bellTimer = setTimeout(scheduleBell, nextDelay)
  }

  function playBell() {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    // 法器铃声：多个泛音组合
    const freqs = [880, 1320, 1760, 2640]
    freqs.forEach((freq, i) => {
      const osc = audioCtx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = freq

      const g = audioCtx.createGain()
      const vol = 0.012 / (i + 1)
      g.gain.setValueAtTime(0, now)
      g.gain.linearRampToValueAtTime(vol, now + 0.008)
      g.gain.exponentialRampToValueAtTime(0.0001, now + 2.8 + i * 0.4)

      osc.connect(g)
      g.connect(masterGain)
      osc.start(now)
      osc.stop(now + 3.5)
    })
  }

  function scheduleChant() {
    if (!audioCtx || !audioOn.value) return
    playChant()
    const nextDelay = 10000 + Math.random() * 8000
    chantTimer = setTimeout(scheduleChant, nextDelay)
  }

  function playChant() {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    // 低吟人声：锯齿波 + 带通滤波，模拟远处吟唱
    const baseFreqs = [110, 138.6, 164.8]  // A2, C#3, E3 - 小三和弦
    baseFreqs.forEach((freq, i) => {
      const osc = audioCtx.createOscillator()
      osc.type = 'sawtooth'
      osc.frequency.value = freq

      // 带通滤波，模拟人声共振峰
      const filter = audioCtx.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.value = 400 + i * 100
      filter.Q.value = 2.5

      const g = audioCtx.createGain()
      const vol = 0.008
      g.gain.setValueAtTime(0, now)
      g.gain.linearRampToValueAtTime(vol, now + 1.5)
      g.gain.linearRampToValueAtTime(vol * 0.8, now + 3)
      g.gain.exponentialRampToValueAtTime(0.0001, now + 5)

      osc.connect(filter)
      filter.connect(g)
      g.connect(masterGain)
      osc.start(now)
      osc.stop(now + 5.5)
    })
  }
}

function stopAudio() {
  if (masterGain && audioCtx) {
    masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8)
    setTimeout(() => {
      try {
        activeNodes.forEach(n => { try { n.stop() } catch(e){} })
        droneNodes.forEach(d => {
          try { d.osc.stop() } catch(e){}
          try { d.lfo.stop() } catch(e){}
        })
        noiseNode && noiseNode.stop()
      } catch(e) {}
      clearTimeout(drumTimer)
      clearTimeout(bellTimer)
      clearTimeout(chantTimer)
      audioCtx && audioCtx.close()
      audioCtx = null
      droneNodes = []
      activeNodes = []
    }, 900)
  }
  audioOn.value = false
}

onMounted(() => {
  window.addEventListener('beforeunload', stopAudio)
})
onUnmounted(() => {
  stopAudio()
  window.removeEventListener('beforeunload', stopAudio)
})
</script>

<template>
  <section class="hero relative h-screen min-h-[640px] w-full overflow-hidden bg-void noise-overlay vignette">
    <!-- 高精度傩面具特写 -->
    <img
      :src="heroMask"
      alt="傩面具特写"
      class="hero-img absolute inset-0 h-full w-full object-cover opacity-60"
    />
    <!-- 暗色遮罩，去除土味，强化核心物件 -->
    <div class="absolute inset-0 bg-gradient-to-b from-void/70 via-void/40 to-void"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-void/80"></div>

    <!-- 顶部标识 + 环境音按钮 -->
    <div class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-16">
      <div class="flex items-center gap-3">
        <span class="font-serif text-2xl font-black tracking-[0.3em] text-mineral text-glow">傩</span>
        <span class="hidden text-xs tracking-[0.4em] text-mineral/50 md:inline">NUO · DIGITAL ARCHIVE</span>
      </div>
      <button
        @click="toggleAudio"
        class="audio-btn flex items-center gap-2 rounded-full border border-mineral/20 px-4 py-2 text-xs tracking-widest text-mineral/70 transition hover:border-cinnabar hover:text-cinnabar"
      >
        <span class="audio-dot" :class="{ active: audioOn }"></span>
        {{ audioOn ? '环境音 · 开' : '环境音 · 关' }}
      </button>
    </div>

    <!-- 极简破题文案 -->
    <div class="hero-content relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
      <p class="hero-tag mb-6 text-xs tracking-[0.6em] text-cinnabar/80">EASTERN DARK AESTHETICS</p>
      <h1 class="hero-title font-serif text-6xl font-black leading-none text-mineral md:text-8xl lg:text-9xl">
        傩
      </h1>
      <div class="my-8 h-px w-24 bg-gradient-to-r from-transparent via-cinnabar to-transparent"></div>
      <p class="hero-sub font-serif text-lg leading-relaxed text-mineral/80 md:text-2xl">
        跨越3000年的<span class="text-cinnabar text-glow">东方原生狂欢</span>
      </p>
      <p class="hero-desc mt-4 max-w-xl text-sm leading-loose text-mineral/40">
        商周方相氏驱傩，汉传江南兴于全国。中国戏剧活化石，2006年首批国家级非遗。
      </p>
    </div>

    <!-- 向下滚动指引 -->
    <a href="#geo" class="scroll-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-mineral/40 transition hover:text-cinnabar">
      <span class="block text-[10px] tracking-[0.4em]">SCROLL</span>
      <span class="mt-2 block h-12 w-px bg-gradient-to-b from-mineral/40 to-transparent mx-auto"></span>
    </a>
  </section>
</template>

<style scoped>
.audio-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #a39e92;
}
.audio-dot.active {
  background: #e04a3f;
  box-shadow: 0 0 8px #e04a3f;
  animation: glowPulse 1.5s ease-in-out infinite;
}
@keyframes glowPulse {
  0%,100% { opacity: .4; }
  50% { opacity: 1; }
}

.hero-img {
  animation: heroZoom 18s ease-out forwards;
}
@keyframes heroZoom {
  from { transform: scale(1.15); }
  to { transform: scale(1); }
}
</style>
