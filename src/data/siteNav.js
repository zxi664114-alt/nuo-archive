// 站点导航 —— 大类 / 小类 分层结构
// 将全站内容分为四大类，每类下设若干小类，点击可锚点跳转
// 用于侧边导航与章节分隔横幅

export const siteNav = [
  {
    id: 'origin-group',
    index: '一',
    label: '渊源',
    en: 'ORIGIN',
    accent: '#c0322a',
    desc: '从商周方相氏到当代非遗 · 一条流淌3000年的驱疫之河',
    children: [
      { id: 'origin', label: '源流时间轴', en: 'TIMELINE', no: '01' },
      { id: 'geo', label: '全国地理溯源', en: 'GEO TRACING', no: '02' }
    ]
  },
  {
    id: 'craft-group',
    index: '二',
    label: '工艺',
    en: 'CRAFT',
    accent: '#e8a82e',
    desc: '从一棵树到一尊神灵 · 八步成神 · 以刀代笔以心传神',
    children: [
      { id: 'craft', label: '面具制造工艺', en: 'PROCESS', no: '03' },
      { id: 'anatomy', label: '微观解剖', en: 'ANATOMY', no: '04' }
    ]
  },
  {
    id: 'deity-group',
    index: '三',
    label: '神谱',
    en: 'DEITY',
    accent: '#7d3c98',
    desc: '凶神驱疫审判 · 吉神赐福纳祥 · 八面众生',
    children: [
      { id: 'archive', label: '神谱图鉴档案', en: 'DATABASE', no: '05' }
    ]
  },
  {
    id: 'legacy-group',
    index: '四',
    label: '传承',
    en: 'LEGACY',
    accent: '#3a6b6b',
    desc: '人有难，方有傩 · 民间记忆与活态传承',
    children: [
      { id: 'folklore', label: '民间故事', en: 'FOLKLORE', no: '06' }
    ]
  }
]

// 扁平化所有小类 id（供 scroll-spy 监听）
export const allSectionIds = siteNav.flatMap(g => g.children.map(c => c.id))
