<script setup>
import { computed } from 'vue'

const props = defineProps({
  mask: { type: Object, required: true },
  size: { type: Number, default: 200 },
  animate: { type: Boolean, default: false }
})

// 根据面具 id 选择不同的绘制方案
const variant = computed(() => props.mask.id)

// 主色系
const c = computed(() => props.mask.accent || '#c0322a')
const bg = computed(() => {
  // 背景色根据 colorScheme 调整
  const cs = props.mask.colorScheme || ''
  if (cs.includes('红')) return { base: '#8b1f1a', shade: '#5a1210', light: '#c0322a' }
  if (cs.includes('黑')) return { base: '#1a1a20', shade: '#0d0d0f', light: '#3a3a42' }
  if (cs.includes('青')) return { base: '#1a4a4a', shade: '#0d3030', light: '#3a6b6b' }
  if (cs.includes('金')) return { base: '#8a7020', shade: '#5a4810', light: '#c9a24b' }
  if (cs.includes('白')) return { base: '#c4beb0', shade: '#9a9488', light: '#e8e2d6' }
  if (cs.includes('褐')) return { base: '#5a4030', shade: '#3a2818', light: '#8a6850' }
  return { base: '#2a2a30', shade: '#1a1a20', light: c.value }
})

// 是否有獠牙
const hasFangs = computed(() => props.mask.tags?.includes('獠牙') || props.mask.tags?.includes('兽面'))
// 是否有第三只眼
const hasThirdEye = computed(() => props.mask.tags?.includes('三目'))
// 是否有胡须
const hasBeard = computed(() => ['关公', '土地神', '古音婆婆'].includes(props.mask.name))
// 是否开口笑
const isSmiling = computed(() => ['笑面童子'].includes(props.mask.name))
// 是否有角
const hasHorns = computed(() => ['牛头'].includes(props.mask.name))
// 是否有冠饰
const hasCrown = computed(() => ['关公', '灵官', '开路将军'].includes(props.mask.name))
</script>

<template>
  <svg
    :viewBox="`0 0 ${size} ${size * 1.2}`"
    :width="size"
    :height="size * 1.2"
    xmlns="http://www.w3.org/2000/svg"
    class="mask-glyph"
    :class="{ animate: animate }"
  >
    <defs>
      <radialGradient :id="`face-${mask.id}`" cx="50%" cy="40%" r="60%">
        <stop offset="0%" :stop-color="bg.light" />
        <stop offset="60%" :stop-color="bg.base" />
        <stop offset="100%" :stop-color="bg.shade" />
      </radialGradient>
      <filter :id="`glow-${mask.id}`">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- 冠饰（如有） -->
    <g v-if="hasCrown" class="crown-group">
      <!-- 火焰冠 / 将盔 -->
      <path
        d="M 50,18 Q 60,5 70,18 Q 80,2 90,18 Q 100,8 110,20 Q 120,5 130,18 Q 140,8 150,20 L 50,20 Z"
        transform="translate(0,0)"
        :fill="bg.shade"
        :stroke="c"
        stroke-width="1.5"
        opacity="0.8"
      />
      <!-- 冠饰装饰珠 -->
      <circle cx="100" cy="12" r="4" :fill="c" opacity="0.7" />
    </g>

    <!-- 角（牛头） -->
    <g v-if="hasHorns">
      <path d="M 55,30 Q 35,15 25,35 Q 30,25 50,40 Z" :fill="bg.shade" :stroke="c" stroke-width="1.5" />
      <path d="M 145,30 Q 165,15 175,35 Q 170,25 150,40 Z" :fill="bg.shade" :stroke="c" stroke-width="1.5" />
    </g>

    <!-- 面部主体 -->
    <ellipse cx="100" cy="72" rx="48" ry="56" :fill="`url(#face-${mask.id})`" :stroke="c" stroke-width="1.5" opacity="0.95" />

    <!-- 脸颊红晕（吉神暖色） -->
    <ellipse v-if="mask.category === 'auspicious'" cx="72" cy="85" rx="8" ry="5" :fill="c" opacity="0.15" />
    <ellipse v-if="mask.category === 'auspicious'" cx="128" cy="85" rx="8" ry="5" :fill="c" opacity="0.15" />

    <!-- 眉骨 -->
    <g class="brow-group">
      <!-- 怒眉（凶神上扬） -->
      <path v-if="mask.category === 'fierce'"
        d="M 68,55 L 92,62 M 108,62 L 132,55"
        :stroke="bg.shade" stroke-width="4" stroke-linecap="round" fill="none"
      />
      <!-- 慈眉（吉神平缓） -->
      <path v-else
        d="M 70,58 Q 80,54 92,57 M 108,57 Q 120,54 130,58"
        :stroke="bg.shade" stroke-width="3" stroke-linecap="round" fill="none"
      />
    </g>

    <!-- 眼睛 -->
    <g class="eye-group">
      <!-- 丹凤眼（关公） -->
      <template v-if="mask.name === '关公'">
        <path d="M 70,68 Q 80,62 92,68 Q 85,72 70,70 Z" fill="#fff" :stroke="c" stroke-width="1" />
        <path d="M 108,68 Q 120,62 130,68 Q 123,72 108,70 Z" fill="#fff" :stroke="c" stroke-width="1" />
        <circle cx="82" cy="68" r="3" :fill="c" class="pupil" />
        <circle cx="118" cy="68" r="3" :fill="c" class="pupil" />
      </template>
      <!-- 怒目圆睁（凶神） -->
      <template v-else-if="mask.category === 'fierce'">
        <ellipse cx="82" cy="68" rx="8" ry="7" fill="#fff" />
        <ellipse cx="118" cy="68" rx="8" ry="7" fill="#fff" />
        <circle cx="82" cy="69" r="4" :fill="c" class="pupil" />
        <circle cx="118" cy="69" r="4" :fill="c" class="pupil" />
        <!-- 怒目红丝 -->
        <line x1="74" y1="68" x2="90" y2="68" :stroke="c" stroke-width="0.5" opacity="0.5" />
        <line x1="110" y1="68" x2="126" y2="68" :stroke="c" stroke-width="0.5" opacity="0.5" />
      </template>
      <!-- 笑眼（笑面童子） -->
      <template v-else-if="isSmiling">
        <path d="M 74,68 Q 82,62 90,68" :stroke="bg.shade" stroke-width="2.5" fill="none" stroke-linecap="round" />
        <path d="M 110,68 Q 118,62 126,68" :stroke="bg.shade" stroke-width="2.5" fill="none" stroke-linecap="round" />
      </template>
      <!-- 慈目（吉神） -->
      <template v-else>
        <ellipse cx="82" cy="68" rx="6" ry="5" fill="#fff" />
        <ellipse cx="118" cy="68" rx="6" ry="5" fill="#fff" />
        <circle cx="82" cy="68" r="3" :fill="bg.shade" class="pupil" />
        <circle cx="118" cy="68" r="3" :fill="bg.shade" class="pupil" />
      </template>

      <!-- 朱砂点睛（所有面具都有） -->
      <circle cx="82" cy="68" r="1.5" fill="#c0322a" class="cinnabar-dot" v-if="!isSmiling" />
      <circle cx="118" cy="68" r="1.5" fill="#c0322a" class="cinnabar-dot" v-if="!isSmiling" />
    </g>

    <!-- 第三只眼（灵官） -->
    <g v-if="hasThirdEye" class="third-eye">
      <ellipse cx="100" cy="45" rx="6" ry="5" fill="#fff" :stroke="c" stroke-width="1.5" />
      <circle cx="100" cy="45" r="3" :fill="c" class="pupil" />
      <!-- 火焰纹 -->
      <path d="M 95,38 Q 100,32 105,38" :stroke="c" stroke-width="1" fill="none" opacity="0.6" />
    </g>

    <!-- 鼻子 -->
    <path d="M 100,75 L 95,90 Q 100,93 105,90 Z" :fill="bg.shade" opacity="0.5" />

    <!-- 嘴部 -->
    <g class="mouth-group">
      <!-- 獠牙（凶神） -->
      <template v-if="hasFangs">
        <!-- 张嘴露獠牙 -->
        <ellipse cx="100" cy="102" rx="14" ry="8" :fill="bg.shade" />
        <!-- 上獠牙 -->
        <path d="M 92,97 L 90,106 L 94,100 Z" fill="#fff" />
        <path d="M 108,97 L 110,106 L 106,100 Z" fill="#fff" />
        <!-- 下獠牙 -->
        <path d="M 93,106 L 95,112 L 97,107 Z" fill="#eee" />
        <path d="M 107,106 L 105,112 L 103,107 Z" fill="#eee" />
      </template>
      <!-- 笑嘴（笑面童子） -->
      <template v-else-if="isSmiling">
        <path d="M 86,98 Q 100,112 114,98" :stroke="bg.shade" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- 酒窝 -->
        <circle cx="84" cy="96" r="2" :fill="c" opacity="0.3" />
        <circle cx="116" cy="96" r="2" :fill="c" opacity="0.3" />
      </template>
      <!-- 怒嘴（凶神无獠牙） -->
      <template v-else-if="mask.category === 'fierce'">
        <path d="M 88,100 Q 100,95 112,100" :stroke="bg.shade" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M 88,100 L 88,105 M 112,100 L 112,105" :stroke="bg.shade" stroke-width="2" />
      </template>
      <!-- 慈嘴微抿（吉神） -->
      <template v-else>
        <path d="M 90,100 Q 100,104 110,100" :stroke="bg.shade" stroke-width="2.5" fill="none" stroke-linecap="round" />
      </template>
    </g>

    <!-- 胡须（关公/土地/古音婆婆） -->
    <g v-if="hasBeard" class="beard-group" opacity="0.8">
      <!-- 关公长髯 -->
      <path v-if="mask.name === '关公'" d="M 80,108 Q 85,130 100,135 Q 115,130 120,108" fill="none" :stroke="c" stroke-width="2" opacity="0.6" />
      <path v-if="mask.name === '关公'" d="M 82,110 Q 88,125 100,128 Q 112,125 118,110" fill="none" :stroke="c" stroke-width="1.5" opacity="0.4" />
      <!-- 土地白须 -->
      <path v-if="mask.name === '土地神'" d="M 82,108 Q 88,128 100,132 Q 112,128 118,108" fill="#e8e2d6" opacity="0.7" />
      <!-- 古音婆婆皱纹 -->
      <g v-if="mask.name === '古音婆婆'" opacity="0.3">
        <path d="M 75,88 Q 78,90 81,88" stroke="#5a4030" stroke-width="1" fill="none" />
        <path d="M 119,88 Q 122,90 125,88" stroke="#5a4030" stroke-width="1" fill="none" />
      </g>
    </g>

    <!-- 脸部纹饰（凶神的额纹/兽纹） -->
    <g v-if="mask.category === 'fierce'" opacity="0.2">
      <path d="M 80,42 Q 100,38 120,42" :stroke="c" stroke-width="1" fill="none" />
      <path d="M 75,50 Q 100,46 125,50" :stroke="c" stroke-width="0.8" fill="none" />
    </g>

    <!-- 外轮廓辉光 -->
    <ellipse cx="100" cy="72" rx="50" ry="58" fill="none" :stroke="c" stroke-width="0.5" opacity="0.3" filter="url(#glow-${mask.id})" class="aura-ring" />
  </svg>
</template>

<style scoped>
.mask-glyph {
  display: block;
}

/* 动画模式：点睛呼吸 */
.mask-glyph.animate .cinnabar-dot {
  animation: cinnabarBreathe 2s ease-in-out infinite;
}
@keyframes cinnabarBreathe {
  0%, 100% { opacity: 0.7; r: 1.5; }
  50% { opacity: 1; r: 2.5; }
}

/* 瞳孔微动 */
.mask-glyph.animate .pupil {
  animation: pupilShift 4s ease-in-out infinite;
  transform-origin: center;
}
@keyframes pupilShift {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-1px); }
  75% { transform: translateX(1px); }
}

/* 辉光环 */
.mask-glyph.animate .aura-ring {
  animation: auraPulse 3s ease-in-out infinite;
}
@keyframes auraPulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.5; }
}
</style>
