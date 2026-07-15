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

// 傩戏氛围音 —— 五层 WebAudio 合成（仪式级沉浸）
// 第1层：低频 Drone 嗡鸣（三音叠加+LFO呼吸+滤波共振，营造仪式空间感）
// 第2层：风声/篝火氛围（粉红噪音+带通+随机调制，远处山林夜声）
// 第3层：傩鼓节奏（深层皮鼓质感，频率下扫+共振腔体+随机间隔）
// 第4层：法器金属泛音（铜铃/铙钹，非谐泛音列+金属共振）
// 第5层：低吟人声（多共振峰滤波，模拟远处傩腔吟唱）
function toggleAudio() {
  if (audioOn.value) {
    stopAudio()
    return
  }
  audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  masterGain = audioCtx.createGain()
  masterGain.gain.value = 0.0
  masterGain.connect(audioCtx.destination)

  // 全局混响（卷积替代：简易多次延迟反馈）
  const reverbGain = audioCtx.createGain()
  reverbGain.gain.value = 0.35
  const reverbDelay = audioCtx.createDelay(1.0)
  reverbDelay.delayTime.value = 0.18
  const reverbFeedback = audioCtx.createGain()
  reverbFeedback.gain.value = 0.4
  const reverbFilter = audioCtx.createBiquadFilter()
  reverbFilter.type = 'lowpass'
  reverbFilter.frequency.value = 1200
  reverbDelay.connect(reverbFilter)
  reverbFilter.connect(reverbFeedback)
  reverbFeedback.connect(reverbDelay)
  reverbDelay.connect(reverbGain)
  reverbGain.connect(masterGain)

  // === 第1层：低频 Drone 嗡鸣 ===
  // 基频 D1(36.7Hz)+A1(55Hz)+D2(73.4Hz)，深沉的仪式空间嗡鸣
  const drone1 = createDrone(36.7, 0.06, 0.06)
  const drone2 = createDrone(55, 0.05, 0.08)
  const drone3 = createDrone(73.4, 0.035, 0.05)
  droneNodes.push(drone1, drone2, drone3)

  // === 第2层：风声/篝火氛围（粉红噪音） ===
  const bufferSize = audioCtx.sampleRate * 4
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate)
  const data = buffer.getChannelData(0)
  let lastOut = 0
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1
    // 粉红噪音算法（Voss-McCartney 简化版）
    data[i] = (lastOut + 0.02 * white) / 1.02
    lastOut = data[i]
    data[i] *= 3.5
  }
  noiseNode = audioCtx.createBufferSource()
  noiseNode.buffer = buffer
  noiseNode.loop = true

  const noiseFilter = audioCtx.createBiquadFilter()
  noiseFilter.type = 'bandpass'
  noiseFilter.frequency.value = 280
  noiseFilter.Q.value = 0.4

  // 随机调制风声的频率，模拟自然风的变化
  const windLFO = audioCtx.createOscillator()
  windLFO.frequency.value = 0.15
  const windLFOGain = audioCtx.createGain()
  windLFOGain.gain.value = 120
  windLFO.connect(windLFOGain)
  windLFOGain.connect(noiseFilter.frequency)

  const noiseGain = audioCtx.createGain()
  noiseGain.gain.value = 0.07

  noiseNode.connect(noiseFilter)
  noiseFilter.connect(noiseGain)
  noiseGain.connect(masterGain)
  noiseGain.connect(reverbDelay)
  noiseNode.start()
  windLFO.start()
  activeNodes.push(noiseNode, windLFO)

  // === 第3层：傩鼓节奏 ===
  scheduleDrum()

  // === 第4层：法器金属泛音 ===
  scheduleBell()

  // === 第5层：低吟人声 ===
  scheduleChant()

  // 渐入
  masterGain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 3)
  audioOn.value = true

  // --- 辅助函数 ---
  function createDrone(freq, gain, lfoRate) {
    const osc = audioCtx.createOscillator()
    osc.type = 'sine'
    osc.frequency.value = freq

    // 叠加微弱的五度泛音，增加厚度
    const osc2 = audioCtx.createOscillator()
    osc2.type = 'triangle'
    osc2.frequency.value = freq * 1.5
    const osc2Gain = audioCtx.createGain()
    osc2Gain.gain.value = 0.015

    // LFO 频率调制，营造呼吸感
    const lfo = audioCtx.createOscillator()
    lfo.frequency.value = lfoRate + Math.random() * 0.05
    const lfoGain = audioCtx.createGain()
    lfoGain.gain.value = freq * 0.015
    lfo.connect(lfoGain)
    lfoGain.connect(osc.frequency)

    // 低通滤波，去掉尖锐高频
    const filter = audioCtx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 300
    filter.Q.value = 1.5

    const g = audioCtx.createGain()
    g.gain.value = gain

    osc.connect(filter)
    osc2.connect(osc2Gain)
    osc2Gain.connect(filter)
    filter.connect(g)
    g.connect(masterGain)
    g.connect(reverbDelay)
    osc.start()
    osc2.start()
    lfo.start()
    activeNodes.push(osc, osc2, lfo)
    return { osc, osc2, lfo, gain: g }
  }

  function scheduleDrum() {
    if (!audioCtx || !audioOn.value) return
    playDrum()
    // 傩鼓节奏：基本间隔 2.5-4.5秒，偶尔双击
    const nextDelay = 2500 + Math.random() * 2000
    drumTimer = setTimeout(() => {
      if (Math.random() < 0.25) {
        // 25%概率双击
        playDrum()
        drumTimer = setTimeout(scheduleDrum, 600 + Math.random() * 400)
      } else {
        scheduleDrum()
      }
    }, nextDelay)
  }

  function playDrum() {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    // 主鼓声：低频下扫，模拟牛皮鼓的深沉共振
    const osc = audioCtx.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(120, now)
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.35)

    // 鼓皮振动：三角波低频
    const osc2 = audioCtx.createOscillator()
    osc2.type = 'triangle'
    osc2.frequency.setValueAtTime(65, now)
    osc2.frequency.exponentialRampToValueAtTime(28, now + 0.25)

    // 鼓体共振：高通噪音脉冲，模拟击鼓瞬间的"噗"声
    const clickBuf = audioCtx.createBuffer(1, 400, audioCtx.sampleRate)
    const clickData = clickBuf.getChannelData(0)
    for (let i = 0; i < 400; i++) clickData[i] = (Math.random() * 2 - 1) * (1 - i / 400)
    const click = audioCtx.createBufferSource()
    click.buffer = clickBuf
    const clickFilter = audioCtx.createBiquadFilter()
    clickFilter.type = 'highpass'
    clickFilter.frequency.value = 200
    const clickGain = audioCtx.createGain()
    clickGain.gain.value = 0.06

    const g = audioCtx.createGain()
    g.gain.setValueAtTime(0, now)
    g.gain.linearRampToValueAtTime(0.28, now + 0.015)
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.7)

    const g2 = audioCtx.createGain()
    g2.gain.setValueAtTime(0, now)
    g2.gain.linearRampToValueAtTime(0.12, now + 0.01)
    g2.gain.exponentialRampToValueAtTime(0.001, now + 0.5)

    osc.connect(g)
    g.connect(masterGain)
    g.connect(reverbDelay)
    osc2.connect(g2)
    g2.connect(masterGain)
    g2.connect(reverbDelay)
    click.connect(clickFilter)
    clickFilter.connect(clickGain)
    clickGain.connect(masterGain)
    osc.start(now)
    osc2.start(now)
    click.start(now)
    osc.stop(now + 0.8)
    osc2.stop(now + 0.6)
  }

  function scheduleBell() {
    if (!audioCtx || !audioOn.value) return
    playBell()
    const nextDelay = 6000 + Math.random() * 6000
    bellTimer = setTimeout(scheduleBell, nextDelay)
  }

  function playBell() {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    // 法器铃声：非谐泛音列，模拟铜铃/铙钹的金属质感
    // 基频 + 非整数倍泛音（金属共振特征）
    const partials = [
      { freq: 523, vol: 0.014, decay: 3.0 },   // C5 基频
      { freq: 784, vol: 0.010, decay: 2.5 },   // G5 1.5x
      { freq: 1108, vol: 0.008, decay: 2.2 },  // 非谐泛音 2.12x
      { freq: 1487, vol: 0.006, decay: 1.8 },  // 非谐泛音 2.84x
      { freq: 2203, vol: 0.004, decay: 1.5 }   // 非谐泛音 4.21x
    ]
    partials.forEach(p => {
      const osc = audioCtx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = p.freq

      // 轻微频率调制，增加金属颤动感
      const trem = audioCtx.createOscillator()
      trem.frequency.value = 4.5 + Math.random() * 2
      const tremGain = audioCtx.createGain()
      tremGain.gain.value = p.freq * 0.003
      trem.connect(tremGain)
      tremGain.connect(osc.frequency)

      const g = audioCtx.createGain()
      g.gain.setValueAtTime(0, now)
      g.gain.linearRampToValueAtTime(p.vol, now + 0.005)
      g.gain.exponentialRampToValueAtTime(0.0001, now + p.decay)

      osc.connect(g)
      g.connect(masterGain)
      g.connect(reverbDelay)
      osc.start(now)
      trem.start(now)
      osc.stop(now + p.decay + 0.5)
      trem.stop(now + p.decay + 0.5)
    })
  }

  function scheduleChant() {
    if (!audioCtx || !audioOn.value) return
    playChant()
    const nextDelay = 8000 + Math.random() * 6000
    chantTimer = setTimeout(scheduleChant, nextDelay)
  }

  function playChant() {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    // 低吟人声：锯齿波 + 多共振峰带通滤波，模拟傩腔吟唱
    // 音符：D2(73.4Hz) → F2(87.3Hz) → A2(110Hz)，傩戏五声音阶感
    const notes = [73.4, 87.3, 110]
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator()
      osc.type = 'sawtooth'
      osc.frequency.value = freq

      // 第一共振峰（口腔）
      const formant1 = audioCtx.createBiquadFilter()
      formant1.type = 'bandpass'
      formant1.frequency.value = 350 + i * 80
      formant1.Q.value = 3

      // 第二共振峰（鼻腔）
      const formant2 = audioCtx.createBiquadFilter()
      formant2.type = 'bandpass'
      formant2.frequency.value = 900 + i * 150
      formant2.Q.value = 4

      const g = audioCtx.createGain()
      const vol = 0.012
      // 缓入缓出，模拟人声气息
      g.gain.setValueAtTime(0, now)
      g.gain.linearRampToValueAtTime(vol, now + 2)
      g.gain.linearRampToValueAtTime(vol * 0.7, now + 4)
      g.gain.linearRampToValueAtTime(vol * 0.5, now + 6)
      g.gain.exponentialRampToValueAtTime(0.0001, now + 8)

      osc.connect(formant1)
      formant1.connect(formant2)
      formant2.connect(g)
      g.connect(masterGain)
      g.connect(reverbDelay)
      osc.start(now)
      osc.stop(now + 8.5)
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
          try { d.osc2.stop() } catch(e){}
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
