<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './components/HeroSection.vue'
import CategoryBanner from './components/CategoryBanner.vue'
import SiteNav from './components/SiteNav.vue'
import CultureOrigin from './components/CultureOrigin.vue'
import GeoTracing from './components/GeoTracing.vue'
import CraftProcess from './components/CraftProcess.vue'
import CraftAnatomy from './components/CraftAnatomy.vue'
import DeityArchive from './components/DeityArchive.vue'
import FolkloreSection from './components/FolkloreSection.vue'
import FooterSection from './components/FooterSection.vue'

const root = ref(null)
let ctx = null

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  ctx = gsap.context((self) => {
    // Hero 文案入场
    gsap.timeline()
      .from('.hero-title', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out' }, 0.2)
      .from('.hero-sub', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' }, 0.6)
      .from('.hero-desc', { y: 20, opacity: 0, duration: 1, ease: 'power3.out' }, 0.9)
      .from('.hero-tag', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0.1)
      .from('.scroll-cue', { opacity: 0, duration: 1 }, 1.2)

    // Hero 视差：背景随滚动上移 + 渐隐
    gsap.to('.hero-img', {
      yPercent: 22,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    })

    // 各章节标题滚动入场
    gsap.utils.toArray('.section-reveal').forEach((el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' }
      })
    })

    // 大类横幅入场
    gsap.utils.toArray('.category-banner').forEach((el) => {
      gsap.from(el, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      })
    })

    // 顶部进度条
    gsap.to('.progress-bar', {
      scaleX: 1,
      ease: 'none',
      transformOrigin: 'left',
      scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom bottom', scrub: true }
    })
  }, root.value)
})

onUnmounted(() => ctx && ctx.revert())
</script>

<template>
  <div ref="root" class="relative lg:pr-[72px]">
    <!-- 滚动进度条 -->
    <div class="progress-bar fixed left-0 top-0 z-50 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-cinnabar-deep via-cinnabar to-cinnabar-glow"></div>

    <HeroSection />

    <!-- 大类一 · 渊源 -->
    <div class="section-reveal"><CategoryBanner group-id="origin-group" /></div>
    <div class="section-reveal"><CultureOrigin /></div>
    <div class="section-reveal"><GeoTracing /></div>

    <!-- 大类二 · 工艺 -->
    <div class="section-reveal"><CategoryBanner group-id="craft-group" /></div>
    <div class="section-reveal"><CraftProcess /></div>
    <div class="section-reveal"><CraftAnatomy /></div>

    <!-- 大类三 · 神谱 -->
    <div class="section-reveal"><CategoryBanner group-id="deity-group" /></div>
    <div class="section-reveal"><DeityArchive /></div>

    <!-- 大类四 · 传承 -->
    <div class="section-reveal"><CategoryBanner group-id="legacy-group" /></div>
    <div class="section-reveal"><FolkloreSection /></div>

    <FooterSection />

    <!-- 全站大类/小类导航 -->
    <SiteNav />
  </div>
</template>
