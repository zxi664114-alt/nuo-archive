<script setup>
import { ref, computed } from 'vue'
import { anatomyHotspots, anatomyCategories, triColor } from '../data/anatomy.js'
import CitationBox from './CitationBox.vue'
// 真实面具照片 —— Wikimedia Commons CC0 公共领域
import maskWarrior from '../assets/nuo-photos/craft-mask-07.jpg'
import maskFierce from '../assets/nuo-photos/craft-mask-03.jpg'
import maskThirdEye from '../assets/nuo-photos/craft-mask-12.jpg'
import maskWood from '../assets/nuo-photos/craft-mask-05.jpg'
import maskColor from '../assets/nuo-photos/craft-mask-01.jpg'

const activeCat = ref('all')
const activeHotspot = ref(anatomyHotspots[0].id)
const demoMode = ref('idle')
const showAnimationScreen = ref(false)

const filteredHotspots = computed(() =>
  activeCat.value === 'all'
    ? anatomyHotspots
    : anatomyHotspots.filter(h => h.category === activeCat.value)
)

const current = computed(() =>
  anatomyHotspots.find(h => h.id === activeHotspot.value)
)

// 根据演示模式切换真实面具照片
const demoPhotos = {
  idle: maskWarrior,
  jaw: maskFierce,
  eye: maskThirdEye,
  crown: maskWarrior,
  wood: maskWood,
  color: maskColor
}
const currentPhoto = computed(() => demoPhotos[demoMode.value] || maskWarrior)

// 各演示模式的真实照片与说明
const demoPhotoList = [
  { k: 'jaw', photo: maskFierce, l: '下颌开合机关', d: '德江傩堂戏独有：下颌可活动，演员以舌抵内壁控制开合，表演「开口跳」', caption: '怒目獠牙 · 下颌张合机关' },
  { k: 'eye', photo: maskThirdEye, l: '朱砂点睛开光', d: '矿物朱砂点睛，面具「开光」后方可入坛，无点睛则不可入坛', caption: '额间第三目 · 朱砂开光' },
  { k: 'crown', photo: maskWarrior, l: '冠饰神格标识', d: '火焰冠属护法神，将盔属武将，平顶素冠属世俗吉神', caption: '武将冠饰 · 神格标识' },
  { k: 'wood', photo: maskWood, l: '丁木年轮纹理', d: '神木丁木的年轮纹理，展示木材的灵性载体特征', caption: '原木纹理 · 神木丁木' }
]

function selectHotspot(h) {
  activeHotspot.value = h.id
  if (h.id === 'jaw') demoMode.value = 'jaw'
  else if (h.id === 'eye' || h.id === 'color-red') demoMode.value = h.id === 'eye' ? 'eye' : 'color'
  else if (h.id === 'crown') demoMode.value = 'crown'
  else if (h.id === 'wood') demoMode.value = 'wood'
  else demoMode.value = 'idle'
}

const viewTab = ref('detail')

const demoList = [
  { k: 'jaw', l: '下颌开合机关', d: '德江傩堂戏独有：下颌可活动，演员以舌抵内壁控制开合，表演「开口跳」' },
  { k: 'eye', l: '朱砂点睛开光', d: '矿物朱砂点睛，面具「开光」后方可入坛，无点睛则不可入坛' },
  { k: 'crown', l: '冠饰神格标识', d: '火焰冠属护法神，将盔属武将，平顶素冠属世俗吉神' },
  { k: 'wood', l: '丁木年轮纹理', d: '神木丁木的年轮纹理，展示木材的灵性载体特征' }
]

function openAnimationScreen(mode) {
  demoMode.value = mode
  showAnimationScreen.value = true
}

function closeAnimationScreen() {
  showAnimationScreen.value = false
  demoMode.value = 'idle'
}
</script>

<template>
  <section id="anatomy" class="relative w-full overflow-hidden bg-charcoal px-6 py-24 md:px-16 noise-overlay">
    <!-- 章节标题 -->
    <div class="mb-10 text-center">
      <p class="mb-3 text-xs tracking-[0.5em] text-cinnabar/70">04 · CRAFT ANATOMY</p>
      <h2 class="font-serif text-4xl font-black text-mineral md:text-5xl">硬核微观解剖</h2>
      <p class="mt-4 text-sm text-mineral/40">点击面具交互热点 —— 真实面具照片实时切换，拆解材质 · 色彩 · 机关</p>
    </div>
    <div class="mx-auto mb-14 h-px w-40 bg-gradient-to-r from-transparent via-cinnabar to-transparent"></div>

    <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
      <!-- 左：真实面具照片 + 交互热点 -->
      <div class="relative">
        <div class="relative mx-auto max-w-md">
          <!-- 暗色舞台背景 -->
          <div class="mask-stage relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-smoke/60 bg-void">
            <!-- 背景辉光 -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="h-2/3 w-2/3 rounded-full opacity-30 transition-all duration-500"
                :style="{ background: 'radial-gradient(circle,' + (current?.id==='color-red' ? '#c0322a' : current?.id==='color-black' ? '#1d1d24' : '#c0322a') + ',transparent)' }"
              ></div>
            </div>

            <!-- 真实面具照片 -->
            <Transition name="photo-fade" mode="out-in">
              <img
                :key="demoMode"
                :src="currentPhoto"
                :alt="'傩面具 · ' + (current ? current.title : '微观解剖')"
                class="mask-photo absolute inset-0 h-full w-full object-cover opacity-95"
              />
            </Transition>

            <!-- 暗色渐变叠层（让热点更醒目） -->
            <div class="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-void/30"></div>

            <!-- 交互热点覆盖层 -->
            <button
              v-for="h in filteredHotspots"
              :key="h.id"
              @click="selectHotspot(h)"
              class="hotspot absolute -translate-x-1/2 -translate-y-1/2"
              :class="{ active: activeHotspot === h.id }"
              :style="{ left: h.pos.x + '%', top: h.pos.y + '%' }"
              :aria-label="h.title"
            >
              <span class="hotspot-ring"></span>
              <span class="hotspot-dot">{{ h.icon }}</span>
              <span class="hotspot-label">{{ h.title }}</span>
            </button>

            <!-- 演示模式标签 -->
            <div class="absolute left-4 top-4 z-10 flex flex-col gap-1">
              <span class="rounded bg-void/80 px-2 py-0.5 text-[9px] tracking-widest text-cinnabar/70 backdrop-blur">DEMO: {{ demoMode.toUpperCase() }}</span>
              <span class="rounded bg-cinnabar/80 px-2 py-0.5 text-[9px] tracking-widest text-void backdrop-blur">REAL · 真实图片</span>
            </div>

            <!-- 照片说明 -->
            <div class="absolute bottom-4 left-4 right-4 z-10">
              <p class="text-xs font-bold text-mineral/90">{{ demoPhotoList.find(d => d.k === demoMode)?.caption || '武将冠饰 · 神格标识' }}</p>
              <p class="mt-0.5 text-[10px] text-mineral/50">点击热点切换 · Wikimedia Commons CC0</p>
            </div>

            <!-- 动作按钮 -->
            <div class="absolute bottom-4 right-4 z-10 flex gap-2">
              <button
                @click="demoMode = demoMode === 'jaw' ? 'idle' : 'jaw'; activeHotspot = 'jaw'"
                class="rounded-full border px-3 py-1.5 text-[10px] tracking-widest transition"
                :class="demoMode === 'jaw' ? 'border-cinnabar bg-cinnabar text-void' : 'border-cinnabar/50 bg-void/80 text-cinnabar hover:bg-cinnabar hover:text-void'"
              >开颌</button>
              <button
                @click="demoMode = demoMode === 'eye' ? 'idle' : 'eye'; activeHotspot = 'eye'"
                class="rounded-full border px-3 py-1.5 text-[10px] tracking-widest transition"
                :class="demoMode === 'eye' ? 'border-cinnabar bg-cinnabar text-void' : 'border-cinnabar/50 bg-void/80 text-cinnabar hover:bg-cinnabar hover:text-void'"
              >点睛</button>
            </div>
          </div>

          <!-- 分类筛选 -->
          <div class="mt-6 flex flex-wrap justify-center gap-2">
            <button
              v-for="cat in anatomyCategories"
              :key="cat.key"
              @click="activeCat = cat.key"
              class="filter-btn rounded-full px-4 py-1.5 text-xs tracking-wider transition"
              :class="activeCat === cat.key
                ? 'bg-cinnabar text-void'
                : 'border border-smoke/60 text-mineral/50 hover:border-cinnabar hover:text-cinnabar'"
            >{{ cat.label }}</button>
          </div>
        </div>
      </div>

      <!-- 右：多视图数据面板 -->
      <div class="flex flex-col">
        <!-- 视图Tab -->
        <div class="mb-4 flex gap-1 rounded-lg border border-smoke/60 bg-void/50 p-1">
          <button
            v-for="t in [
              {k:'detail',l:'详情'},
              {k:'animation',l:'动画演示'},
              {k:'color',l:'色彩体系'},
              {k:'structure',l:'结构图'}
            ]"
            :key="t.k"
            @click="viewTab = t.k"
            class="flex-1 rounded-md py-2 text-xs tracking-wider transition"
            :class="viewTab === t.k ? 'bg-cinnabar text-void' : 'text-mineral/50 hover:text-mineral'"
          >{{ t.l }}</button>
        </div>

        <!-- 视图1：详情面板 -->
        <Transition name="panel" mode="out-in">
          <div v-if="viewTab==='detail'" :key="current.id" class="panel-slide flex-1 rounded-2xl border border-smoke/60 bg-void/60 p-8">
            <div class="mb-5 flex items-center gap-4 border-b border-smoke/60 pb-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-serif text-xl text-void" style="background: linear-gradient(135deg, #c0322a, #7d1f1a)">{{ current.icon }}</div>
              <div>
                <p class="text-[10px] tracking-[0.4em] text-cinnabar/70">{{ current.field }}</p>
                <h3 class="font-serif text-2xl font-black text-mineral">{{ current.title }}</h3>
              </div>
            </div>
            <p class="mb-6 leading-loose text-mineral/80">{{ current.content }}</p>
            <div class="rounded-xl border-l-2 border-cinnabar/60 bg-charcoal/50 p-4">
              <p class="mb-1 text-[10px] tracking-widest text-cinnabar/60">深度细节</p>
              <p class="text-sm leading-relaxed text-mineral/60">{{ current.detail }}</p>
            </div>
          </div>
        </Transition>

        <!-- 视图2：动画演示 -->
        <div v-show="viewTab==='animation'" class="flex-1 rounded-2xl border border-smoke/60 bg-void/60 p-6">
          <p class="mb-4 text-[10px] tracking-[0.4em] text-cinnabar/70">ANIMATION DEMO · 点击按钮单独展示动画</p>
          <div class="space-y-3">
            <button
              v-for="demo in demoList"
              :key="demo.k"
              @click="openAnimationScreen(demo.k)"
              class="demo-btn flex w-full items-center gap-3 rounded-xl border p-4 text-left transition"
              :class="demoMode === demo.k ? 'border-cinnabar bg-void/70' : 'border-smoke/40 hover:border-mineral/30'"
            >
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-serif text-sm" :class="demoMode === demo.k ? 'bg-cinnabar text-void' : 'bg-smoke/60 text-mineral/50'">▶</span>
              <div>
                <p class="text-sm font-bold text-mineral">{{ demo.l }}</p>
                <p class="mt-0.5 text-xs text-mineral/45">{{ demo.d }}</p>
              </div>
              <span class="ml-auto text-[10px] tracking-widest text-cinnabar/50">查看 →</span>
            </button>
          </div>
          <div class="mt-4 rounded-lg bg-charcoal/40 p-3">
            <p class="text-[10px] tracking-widest text-cinnabar/50">提示</p>
            <p class="mt-1 text-xs text-mineral/50">点击按钮将弹出全屏动画展示画面，左侧SVG面具实时演示对应动态效果</p>
          </div>
        </div>

        <!-- 视图3：色彩体系 -->
        <div v-show="viewTab==='color'" class="flex-1 rounded-2xl border border-smoke/60 bg-void/40 p-6">
          <p class="mb-4 text-[10px] tracking-[0.4em] text-mineral/40">RED · YELLOW · BLACK · WHITE 四色体系</p>
          <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div v-for="c in triColor" :key="c.name" class="text-center">
              <div class="mx-auto mb-2 h-16 w-full rounded-lg transition hover:scale-105" :style="{ backgroundColor: c.hex, boxShadow: '0 0 20px ' + c.hex + '55' }"></div>
              <p class="font-serif text-sm text-mineral">{{ c.name }}</p>
              <p class="mt-1 text-[10px] leading-tight text-mineral/40">{{ c.meaning }}</p>
              <p class="mt-1 text-[9px] text-mineral/25">{{ c.count }}</p>
            </div>
          </div>
          <div class="mt-5 rounded-lg border-l-2 border-cinnabar/50 bg-charcoal/40 p-4">
            <p class="mb-1 text-[10px] tracking-widest text-cinnabar/60">色彩口诀</p>
            <p class="text-sm leading-relaxed text-mineral/70">红色表勇武忠义，黄色表正面忠臣，蓝青表阴险桀骜，黑色表刚直不阿。三色搭配决定神格与性格。</p>
          </div>
        </div>

        <!-- 视图4：结构图 -->
        <div v-show="viewTab==='structure'" class="flex-1 rounded-2xl border border-smoke/60 bg-void/60 p-6">
          <p class="mb-4 text-[10px] tracking-[0.4em] text-cinnabar/70">STRUCTURE · 结构分解</p>
          <svg viewBox="0 0 300 300" class="mx-auto w-full max-w-xs">
            <g opacity="0.8">
              <rect x="100" y="10" width="100" height="20" rx="4" fill="#2a0a08" stroke="#c0322a" stroke-width="1"/>
              <text x="150" y="24" text-anchor="middle" fill="#e8e2d6" font-size="9">冠饰 · 神格标识</text>
              <line x1="150" y1="30" x2="150" y2="50" stroke="#c0322a" stroke-width="0.5" stroke-dasharray="2,2"/>
            </g>
            <g opacity="0.8">
              <rect x="80" y="55" width="140" height="60" rx="4" fill="#5a1210" stroke="#c0322a" stroke-width="1"/>
              <text x="150" y="80" text-anchor="middle" fill="#e8e2d6" font-size="9">面部 · 丁木雕刻</text>
              <text x="150" y="95" text-anchor="middle" fill="#a39e92" font-size="7">剔地起凸刀法</text>
              <text x="150" y="108" text-anchor="middle" fill="#a39e92" font-size="7">整木一体成型</text>
            </g>
            <g opacity="0.8">
              <rect x="100" y="125" width="100" height="25" rx="4" fill="#3a3a42" stroke="#c0322a" stroke-width="1"/>
              <text x="150" y="142" text-anchor="middle" fill="#e8e2d6" font-size="9">朱砂点睛 · 开光</text>
            </g>
            <g opacity="0.8">
              <rect x="90" y="160" width="120" height="30" rx="4" fill="#1a4a4a" stroke="#3a6b6b" stroke-width="1"/>
              <text x="150" y="175" text-anchor="middle" fill="#e8e2d6" font-size="9">下颌机关 · 开口跳</text>
              <text x="150" y="186" text-anchor="middle" fill="#a39e92" font-size="7">竹销铰接 · 可张合</text>
            </g>
            <line x1="150" y1="115" x2="150" y2="125" stroke="#c0322a" stroke-width="0.5" stroke-dasharray="2,2"/>
            <line x1="150" y1="150" x2="150" y2="160" stroke="#c0322a" stroke-width="0.5" stroke-dasharray="2,2"/>
            <text x="30" y="90" fill="#5a5a62" font-size="7" text-anchor="middle">约30cm</text>
            <line x1="30" y1="55" x2="30" y2="115" stroke="#5a5a62" stroke-width="0.5"/>
            <line x1="25" y1="55" x2="35" y2="55" stroke="#5a5a62" stroke-width="0.5"/>
            <line x1="25" y1="115" x2="35" y2="115" stroke="#5a5a62" stroke-width="0.5"/>
          </svg>
          <div class="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div class="rounded-lg bg-charcoal/40 p-3">
              <p class="text-[10px] tracking-widest text-mineral/30">一体成型</p>
              <p class="mt-1 text-mineral/70">冠与面部整木雕成，避免接缝断裂</p>
            </div>
            <div class="rounded-lg bg-charcoal/40 p-3">
              <p class="text-[10px] tracking-widest text-mineral/30">竹销铰接</p>
              <p class="mt-1 text-mineral/70">下颌以竹销连接，可张合开合</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 单独动画展示弹层 -->
    <Transition name="anim-screen">
      <div v-if="showAnimationScreen" class="fixed inset-0 z-[100] flex items-center justify-center bg-void/95 p-4 md:p-8" @click.self="closeAnimationScreen">
        <div class="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-cinnabar/40 bg-charcoal/80 shadow-2xl">
          <button @click="closeAnimationScreen" class="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-mineral/20 bg-void/80 text-mineral/70 transition hover:border-cinnabar hover:text-cinnabar">✕</button>

          <div class="grid gap-8 p-8 md:grid-cols-2">
            <!-- 左：大图真实面具照片 -->
            <div class="relative">
              <p class="mb-4 text-center text-[10px] tracking-[0.5em] text-cinnabar/70">ANIMATION DISPLAY · 真实图解展示</p>
              <div class="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-smoke/60 bg-void">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="h-2/3 w-2/3 rounded-full opacity-30" :style="{ background: 'radial-gradient(circle,' + (demoMode==='eye' ? '#c0322a' : demoMode==='color' ? '#5a5a62' : '#c0322a') + ',transparent)' }"></div>
                </div>
                <!-- 真实面具大图 -->
                <Transition name="photo-fade" mode="out-in">
                  <img
                    :key="demoMode"
                    :src="currentPhoto"
                    :alt="'傩面具大图 · ' + demoMode"
                    class="absolute inset-0 h-full w-full object-cover opacity-95"
                  />
                </Transition>
                <div class="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-void/30"></div>

                <!-- 标签 -->
                <div class="absolute left-4 top-4 flex flex-col gap-1">
                  <span class="rounded bg-void/80 px-3 py-1 text-xs tracking-widest text-cinnabar/70 backdrop-blur">DEMO: {{ demoMode.toUpperCase() }}</span>
                  <span class="rounded bg-cinnabar/80 px-3 py-1 text-[10px] tracking-widest text-void backdrop-blur">REAL · 真实图片</span>
                </div>

                <!-- 照片说明 -->
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-sm font-bold text-mineral/90">{{ demoPhotoList.find(d => d.k === demoMode)?.caption || '武将冠饰 · 神格标识' }}</p>
                  <p class="mt-1 text-[10px] text-mineral/50">Wikimedia Commons · CC0 公共领域</p>
                </div>
              </div>

              <!-- 缩略图切换栏 -->
              <div class="mt-3 flex gap-2">
                <button
                  v-for="dp in demoPhotoList"
                  :key="dp.k"
                  @click="demoMode = dp.k"
                  class="h-14 w-14 overflow-hidden rounded-lg border-2 transition"
                  :class="demoMode === dp.k ? 'border-cinnabar' : 'border-transparent opacity-50 hover:opacity-90'"
                >
                  <img :src="dp.photo" :alt="dp.l" class="h-full w-full object-cover" />
                </button>
              </div>
            </div>

            <!-- 右：动画说明 -->
            <div class="flex flex-col justify-center">
              <div>
                <p class="mb-2 text-[10px] tracking-[0.4em] text-cinnabar/70">CURRENT DEMO</p>
                <h3 class="mb-4 font-serif text-3xl font-black text-mineral">
                  {{ demoMode === 'jaw' ? '下颌开合机关' : demoMode === 'eye' ? '朱砂点睛开光' : demoMode === 'crown' ? '冠饰神格标识' : demoMode === 'wood' ? '丁木年轮纹理' : demoMode === 'color' ? '色彩分解体系' : '待机' }}
                </h3>
                <div class="mb-6 h-px w-20 bg-cinnabar/50"></div>
                <p class="mb-6 text-sm leading-loose text-mineral/70">
                  <template v-if="demoMode==='jaw'">
                    德江傩堂戏独有：下颌以竹销铰接可张合。演员以舌抵内壁控制开合，配合唱腔形成"开口跳"绝技。这是傩面具区别于地戏面具的核心机关特征。
                  </template>
                  <template v-else-if="demoMode==='eye'">
                    面具完成后，以矿物朱砂点睛，谓之"开光"。开光后面具方可入坛，无点睛则不可入坛。朱砂经岁月不变色，被认为具有镇邪之力。
                  </template>
                  <template v-else-if="demoMode==='crown'">
                    冠饰是面具神格的标识：火焰冠属护法神，将盔属武将，平顶素冠属世俗吉神。观冠即知神格。
                  </template>
                  <template v-else-if="demoMode==='wood'">
                    面具以丁木（神木）为材，年轮纹理即木材的灵性载体。丁木质轻而韧，不易开裂，被傩师视为通灵之木。
                  </template>
                  <template v-else-if="demoMode==='color'">
                    红色表勇武忠义，黑色表刚直不阿，白色表奸诈阴险。三色搭配决定神格与性格，是傩面具的色彩语言。
                  </template>
                </p>

                <!-- 动画切换按钮 -->
                <p class="mb-3 text-[10px] tracking-widest text-mineral/40">切换动画</p>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="demo in demoList"
                    :key="demo.k"
                    @click="demoMode = demo.k"
                    class="rounded-full border px-4 py-2 text-xs tracking-wider transition"
                    :class="demoMode === demo.k ? 'border-cinnabar bg-cinnabar text-void' : 'border-smoke/60 text-mineral/50 hover:border-cinnabar hover:text-cinnabar'"
                  >{{ demo.l }}</button>
                  <button
                    @click="demoMode = 'color'"
                    class="rounded-full border px-4 py-2 text-xs tracking-wider transition"
                    :class="demoMode === 'color' ? 'border-cinnabar bg-cinnabar text-void' : 'border-smoke/60 text-mineral/50 hover:border-cinnabar hover:text-cinnabar'"
                  >色彩分解</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 参考文献 -->
    <CitationBox :cite="['R1','R2','R4','R6']" />
  </section>
</template>

<style scoped>
/* 真实照片切换过渡 */
.photo-fade-enter-active, .photo-fade-leave-active {
  transition: opacity .5s ease, transform .5s ease;
}
.photo-fade-enter-from {
  opacity: 0;
  transform: scale(1.05);
}
.photo-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

/* 交互热点 */
.hotspot { display: flex; flex-direction: column; align-items: center; cursor: pointer; z-index: 5; }
.hotspot-ring { position: absolute; width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid #c0322a; opacity: 0.5; animation: ringPulse 2s ease-out infinite; }
.hotspot-dot { position: relative; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: rgba(5,5,5,0.85); border: 1.5px solid #c0322a; color: #e04a3f; font-size: 11px; font-weight: bold; transition: all .3s ease; }
.hotspot-label { margin-top: 4px; padding: 1px 6px; background: rgba(5,5,5,0.85); border-radius: 3px; color: #a39e92; font-size: 9px; white-space: nowrap; opacity: 0; transform: translateY(-4px); transition: all .3s ease; }
.hotspot:hover .hotspot-dot, .hotspot.active .hotspot-dot { background: #c0322a; color: #fff; box-shadow: 0 0 16px #c0322a; transform: scale(1.2); }
.hotspot:hover .hotspot-label, .hotspot.active .hotspot-label { opacity: 1; transform: translateY(0); color: #e8e2d6; }
.hotspot.active .hotspot-ring { opacity: 0.8; }
@keyframes ringPulse { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(2.2); opacity: 0; } }

/* SVG面具动画 */
.jaw-lower { transform-origin: 88px 115px; transition: transform 0.6s cubic-bezier(.34,1.56,.64,1); }
.jaw-lower.open { transform: rotate(12deg); }
.cinnabar-dot { transition: all .3s ease; }
.cinnabar-dot.active { animation: cinnabarBreathe 1.5s ease-in-out infinite; }
@keyframes cinnabarBreathe { 0%, 100% { r: 2; opacity: 0.8; } 50% { r: 4; opacity: 1; } }
.eye-rays line { animation: rayPulse 1.5s ease-in-out infinite; }
@keyframes rayPulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.7; } }
.pupil { transition: all .3s ease; }
.eye-group.highlight .pupil { animation: pupilDilate 1s ease-in-out infinite; }
@keyframes pupilDilate { 0%, 100% { r: 4; } 50% { r: 5; } }
.anatomy-part { transition: all .3s ease; }
.anatomy-part.highlight { filter: drop-shadow(0 0 6px #c0322a); }
.hinge-pin { animation: hingeGlow 2s ease-in-out infinite; }
@keyframes hingeGlow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }

/* 面板过渡 */
.panel-enter-active, .panel-leave-active { transition: all .4s cubic-bezier(.16,1,.3,1); }
.panel-enter-from { opacity: 0; transform: translateX(24px); }
.panel-leave-to { opacity: 0; transform: translateX(-24px); }

/* 动画展示弹层过渡 */
.anim-screen-enter-active, .anim-screen-leave-active { transition: opacity .3s ease; }
.anim-screen-enter-from, .anim-screen-leave-to { opacity: 0; }
</style>
