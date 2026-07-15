<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import * as echarts from 'echarts'
import { schools, geoPoints, compareFields, photoCredit } from '../data/schools.js'
import SchoolDetailModal from './SchoolDetailModal.vue'
import CitationBox from './CitationBox.vue'

const chartEl = ref(null)
const mapReady = ref(false)
const activeId = ref(null)
const modalShow = ref(false)
let chart = null
let resizeObserver = null

const schoolList = computed(() => Object.values(schools))
const currentSchool = computed(() => activeId.value ? schools[activeId.value] : null)

function openDetail(id) {
  if (!schools[id]) return
  activeId.value = id
  modalShow.value = true
}
function closeModal() { modalShow.value = false }

// 渲染中国暗色系交互地图
async function renderMap() {
  const url = 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json'
  try {
    const res = await fetch(url)
    const geoJson = await res.json()
    echarts.registerMap('china', geoJson)
    mapReady.value = true
  } catch (e) {
    console.warn('中国地图 GeoJSON 拉取失败，使用兜底坐标网格', e)
    mapReady.value = false
  }
  buildChart()
}

function buildChart() {
  chart = echarts.init(chartEl.value, null, { renderer: 'svg' })

  const scatterData = geoPoints.map(p => ({
    name: p.name,
    value: [...p.coord, p.id, p.type]
  }))

  const option = {
    backgroundColor: 'transparent',
    geo: mapReady.value ? {
      map: 'china',
      roam: true,
      zoom: 1.2,
      silent: false,
      itemStyle: {
        areaColor: '#0d0d0f',
        borderColor: '#3a3a42',
        borderWidth: 0.6,
        shadowColor: 'rgba(192,50,42,0.2)',
        shadowBlur: 30
      },
      emphasis: {
        label: { show: false },
        itemStyle: { areaColor: '#15151a', borderColor: '#c0322a' }
      },
      label: {
        show: true,
        color: '#5a5a62',
        fontSize: 9
      }
    } : undefined,
    series: [
      {
        name: '傩戏分布',
        type: 'effectScatter',
        coordinateSystem: mapReady.value ? 'geo' : 'cartesian2d',
        data: mapReady.value
          ? scatterData
          : geoPoints.map((p, i) => ({
              name: p.name,
              value: [i % 10 * 10 + 10, Math.floor(i / 10) * 20 + 15, p.id, p.type]
            })),
        symbolSize: 12,
        rippleEffect: { period: 4, scale: 4, brushType: 'stroke' },
        itemStyle: {
          color: function (params) {
            const t = params.data.value[3]
            if (t === '军傩') return '#c0322a'
            if (t === '巫傩') return '#3a6b6b'
            if (t === '乡傩') return '#c9a24b'
            if (t === '民族傩') return '#a39e92'
            if (t === '雷傩') return '#7d3c98'
            if (t === '酬神') return '#e8a82e'
            return '#5a5a62'
          },
          shadowBlur: 12,
          shadowColor: function (params) {
            const t = params.data.value[3]
            if (t === '军傩') return '#c0322a'
            if (t === '巫傩') return '#3a6b6b'
            if (t === '乡傩') return '#c9a24b'
            if (t === '民族傩') return '#a39e92'
            if (t === '雷傩') return '#7d3c98'
            if (t === '酬神') return '#e8a82e'
            return '#5a5a62'
          }
        },
        label: {
          show: true,
          formatter: '{b}',
          position: 'right',
          color: '#a39e92',
          fontSize: 10,
          distance: 6
        },
        emphasis: {
          scale: 1.6,
          label: { color: '#e8e2d6', fontSize: 12, fontWeight: 'bold' }
        }
      }
    ]
  }

  if (!mapReady.value) {
    option.xAxis = { show: false, min: 0, max: 100 }
    option.yAxis = { show: false, min: 0, max: 100 }
  }

  chart.setOption(option)

  chart.on('click', function (params) {
    if (params.seriesType === 'effectScatter') {
      const id = params.data.value[2]
      openDetail(id)
    }
  })

  resizeObserver = new ResizeObserver(() => chart && chart.resize())
  resizeObserver.observe(chartEl.value)
}

onMounted(async () => {
  await nextTick()
  await renderMap()
})

onUnmounted(() => {
  resizeObserver && resizeObserver.disconnect()
  chart && chart.dispose()
})
</script>

<template>
  <section id="geo" class="relative w-full bg-void px-6 py-24 md:px-16 noise-overlay">
    <!-- 章节标题 -->
    <div class="mb-10 text-center">
      <p class="mb-3 text-xs tracking-[0.5em] text-cinnabar/70">02 · GEO-TRACING</p>
      <h2 class="font-serif text-4xl font-black text-mineral md:text-5xl">全国溯源图谱</h2>
      <p class="mt-4 text-sm text-mineral/40">覆盖11省 · 30个分布点 · 6大傩系 · 点击地图热点或右侧流派进入详情</p>
    </div>
    <div class="mx-auto mb-12 h-px w-40 bg-gradient-to-r from-transparent via-cinnabar to-transparent"></div>

    <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-5">
      <!-- 左：中国交互地图 -->
      <div class="relative lg:col-span-3">
        <div ref="chartEl" class="h-[520px] w-full rounded-xl border border-smoke/60 bg-charcoal/60"></div>
        <div class="mt-4 flex flex-wrap justify-center gap-4 text-xs text-mineral/50">
          <span class="flex items-center gap-2"><span class="inline-block h-2.5 w-2.5 rounded-full bg-cinnabar shadow-[0_0_8px] shadow-cinnabar"></span>军傩</span>
          <span class="flex items-center gap-2"><span class="inline-block h-2.5 w-2.5 rounded-full shadow-[0_0_8px]" style="background:#3a6b6b;box-shadow:0 0 8px #3a6b6b"></span>巫傩</span>
          <span class="flex items-center gap-2"><span class="inline-block h-2.5 w-2.5 rounded-full shadow-[0_0_8px]" style="background:#c9a24b;box-shadow:0 0 8px #c9a24b"></span>乡傩</span>
          <span class="flex items-center gap-2"><span class="inline-block h-2.5 w-2.5 rounded-full shadow-[0_0_8px]" style="background:#a39e92;box-shadow:0 0 8px #a39e92"></span>民族傩</span>
          <span class="flex items-center gap-2"><span class="inline-block h-2.5 w-2.5 rounded-full shadow-[0_0_8px]" style="background:#7d3c98;box-shadow:0 0 8px #7d3c98"></span>雷傩</span>
          <span class="flex items-center gap-2"><span class="inline-block h-2.5 w-2.5 rounded-full shadow-[0_0_8px]" style="background:#e8a82e;box-shadow:0 0 8px #e8a82e"></span>酬神</span>
        </div>
        <p class="mt-3 text-center text-[10px] text-mineral/30">共 {{ geoPoints.length }} 个分布点 · 覆盖全国 11 省 · 拖拽地图可平移缩放</p>
      </div>

      <!-- 右：流派档案列表 -->
      <div class="lg:col-span-2">
        <p class="mb-3 text-[10px] tracking-[0.4em] text-mineral/40">SCHOOLS · 全国流派档案入口</p>
        <div class="max-h-[520px] space-y-2 overflow-y-auto pr-2">
          <button
            v-for="s in schoolList"
            :key="s.id"
            @click="openDetail(s.id)"
            class="school-entry card-glow group flex w-full items-center gap-3 overflow-hidden rounded-xl border bg-charcoal/50 p-3 text-left transition hover:bg-charcoal/80"
            :style="{ borderColor: s.accent + '33' }"
          >
            <img :src="s.cover" :alt="s.name" class="h-14 w-14 shrink-0 rounded-lg object-cover" />
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2">
                <span class="rounded px-1.5 py-0.5 text-[9px] tracking-widest" :style="{ backgroundColor: s.accent + '22', color: s.accent }">{{ s.type }}</span>
                <h3 class="font-serif text-base font-bold text-mineral">{{ s.name }}</h3>
              </div>
              <p class="mt-0.5 truncate text-xs text-mineral/40">{{ s.region }}</p>
            </div>
            <span class="text-mineral/20 transition group-hover:translate-x-1 group-hover:text-cinnabar">→</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 图片授权说明 -->
    <p class="mx-auto mt-10 max-w-7xl text-center text-[10px] text-mineral/25">
      图片来源：{{ photoCredit.source }} · {{ photoCredit.author }} · {{ photoCredit.license }}
    </p>

    <!-- 参考文献溯源 -->
    <div class="mx-auto mt-4 max-w-7xl">
      <CitationBox :cite="['R1','R2','R3','R4','R6','R12','R15']" />
    </div>

    <!-- 流派详情弹层 -->
    <SchoolDetailModal
      :show="modalShow"
      :school="currentSchool"
      @close="closeModal"
    />
  </section>
</template>
