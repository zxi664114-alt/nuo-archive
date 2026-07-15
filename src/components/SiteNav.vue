<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { siteNav, allSectionIds } from '../data/siteNav.js'

const activeId = ref(null)
const expandedGroup = ref(null)
const navOpen = ref(false)
const scrolled = ref(false)
let observer = null

const activeGroup = computed(() => {
  if (!activeId.value) return null
  return siteNav.find(g => g.children.some(c => c.id === activeId.value))
})

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeId.value = id
  }
  navOpen.value = false
}

function toggleGroup(groupId) {
  expandedGroup.value = expandedGroup.value === groupId ? null : groupId
}

function handleScroll() {
  scrolled.value = window.scrollY > 80
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  expandedGroup.value = siteNav[0].id
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          activeId.value = e.target.id
          const grp = siteNav.find(g => g.children.some(c => c.id === e.target.id))
          if (grp) expandedGroup.value = grp.id
        }
      })
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  )
  setTimeout(() => {
    allSectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  }, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
})
</script>

<template>
  <!-- 桌面端：固定右侧竖向导航 —— 收起态只显示圆点，hover 展开 -->
  <aside
    class="site-nav pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    :class="{ 'site-nav-hidden': !scrolled }"
  >
    <nav class="pointer-events-auto">
      <!-- 背景面板 —— 收起时窄，hover 展开 -->
      <div class="nav-panel group relative rounded-2xl border border-smoke/40 bg-void/80 p-2.5 backdrop-blur-md transition-all duration-300 hover:w-[200px] hover:p-4">
        <!-- 顶部标签 —— 收起时隐藏，hover 显示 -->
        <p class="mb-3 text-center text-[9px] tracking-[0.4em] text-cinnabar/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">目录 INDEX</p>

        <!-- 竖向进度线 -->
        <div class="absolute left-1/2 top-10 h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-smoke/30 transition-all duration-300 group-hover:top-12 group-hover:h-[calc(100%-3rem)]"></div>
        <div
          class="absolute left-1/2 top-10 w-px -translate-x-1/2 bg-cinnabar transition-all duration-500"
          :style="{ height: activeGroup ? siteNav.findIndex(g => g.id === activeGroup.id) / (siteNav.length - 1) * 100 + '%' : '0%' }"
        ></div>

        <div class="relative space-y-3 transition-all duration-300 group-hover:space-y-5">
          <button
            v-for="(g, gi) in siteNav"
            :key="g.id"
            @click="toggleGroup(g.id)"
            class="group block w-full"
          >
            <!-- 大类节点 -->
            <div class="flex flex-col items-center gap-0 transition-all duration-300 group-hover:gap-1">
              <!-- 大圆点 -->
              <span
                class="nav-dot flex h-8 w-8 items-center justify-center rounded-full border-2 font-serif text-sm font-black transition-all duration-300 group-hover:h-9 group-hover:w-9"
                :style="{
                  borderColor: activeGroup?.id === g.id ? g.accent : '#3a3a42',
                  color: activeGroup?.id === g.id ? g.accent : '#5a5a62',
                  backgroundColor: activeGroup?.id === g.id ? g.accent + '22' : '#0a0a0a',
                  boxShadow: activeGroup?.id === g.id ? '0 0 20px ' + g.accent + '99' : 'none'
                }"
              >{{ g.index }}</span>
              <!-- 大类名 —— 收起时隐藏，hover 显示 -->
              <span
                class="font-serif text-sm font-black tracking-wider transition opacity-0 group-hover:opacity-100"
                :style="{ color: activeGroup?.id === g.id ? g.accent : '#5a5a62' }"
              >{{ g.label }}</span>
            </div>

            <!-- 小类展开列表 —— 收起时隐藏，hover 且展开时显示 -->
            <Transition name="subnav">
              <div v-if="expandedGroup === g.id" class="mt-2 space-y-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  v-for="c in g.children"
                  :key="c.id"
                  @click.stop="scrollTo(c.id)"
                  class="sub-item block w-full rounded-lg px-2 py-1.5 text-center text-[11px] font-bold leading-tight transition"
                  :style="{
                    color: activeId === c.id ? g.accent : '#a39e9288',
                    backgroundColor: activeId === c.id ? g.accent + '22' : 'transparent'
                  }"
                >
                  <span class="text-[8px] opacity-50">{{ c.no }}</span>
                  <span class="ml-1">{{ c.label }}</span>
                </button>
              </div>
            </Transition>
          </button>
        </div>
      </div>
    </nav>
  </aside>

  <!-- 移动端：顶部悬浮按钮 + 抽屉菜单 -->
  <div class="lg:hidden">
    <button
      @click="navOpen = !navOpen"
      class="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cinnabar/60 bg-void/90 text-mineral shadow-lg backdrop-blur transition hover:border-cinnabar"
    >
      <span v-if="!navOpen" class="font-serif text-lg">目录</span>
      <span v-else class="text-lg">✕</span>
    </button>

    <Transition name="drawer">
      <div v-if="navOpen" class="fixed inset-0 z-40 flex items-end justify-center" @click.self="navOpen = false">
        <div class="max-h-[80vh] w-full overflow-y-auto rounded-t-2xl border-t border-smoke/60 bg-void/95 p-6 backdrop-blur">
          <div class="mb-4 flex items-center justify-between">
            <p class="text-xs tracking-[0.4em] text-cinnabar/70">SITE INDEX · 全站目录</p>
            <button @click="navOpen = false" class="text-mineral/40 hover:text-cinnabar">✕</button>
          </div>
          <div class="space-y-5">
            <div v-for="g in siteNav" :key="g.id">
              <div class="mb-2 flex items-center gap-3">
                <span class="font-serif text-2xl font-black" :style="{ color: g.accent }">{{ g.index }}</span>
                <div>
                  <p class="font-serif text-lg font-black text-mineral">{{ g.label }}</p>
                  <p class="text-[9px] tracking-widest text-mineral/30">{{ g.en }}</p>
                </div>
              </div>
              <div class="ml-9 space-y-1 border-l pl-4" :style="{ borderColor: g.accent + '33' }">
                <button
                  v-for="c in g.children"
                  :key="c.id"
                  @click="scrollTo(c.id)"
                  class="block w-full py-1.5 text-left text-sm transition hover:translate-x-1"
                  :style="{ color: activeId === c.id ? g.accent : '#e8e2d699' }"
                >
                  <span class="text-[10px] opacity-50">{{ c.no }}</span>
                  <span class="ml-2">{{ c.label }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.site-nav {
  transition: opacity .4s ease;
}
.site-nav-hidden {
  opacity: 0;
  pointer-events: none !important;
}
.nav-panel {
  box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 1px rgba(192,50,42,0.2);
}
.nav-dot {
  position: relative;
  z-index: 1;
}
.nav-dot::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid currentColor;
  opacity: 0;
  transition: opacity .3s ease;
}
.sub-item:hover {
  transform: translateX(-2px);
}
.subnav-enter-active, .subnav-leave-active {
  transition: all .3s cubic-bezier(.16,1,.3,1);
  overflow: hidden;
}
.subnav-enter-from, .subnav-leave-to {
  opacity: 0;
  max-height: 0;
}
.subnav-enter-to, .subnav-leave-from {
  opacity: 1;
  max-height: 120px;
}
.drawer-enter-active, .drawer-leave-active {
  transition: opacity .3s ease;
}
.drawer-enter-from, .drawer-leave-to {
  opacity: 0;
}
</style>
