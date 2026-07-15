// 硬核微观解剖 —— 面具拆解数据
// 交互热点坐标基于 0~100 的相对百分比定位，与面具图适配
export const anatomyHotspots = [
  {
    id: 'crown',
    title: '冠饰 · 神格标识',
    pos: { x: 50, y: 8 },
    icon: '冠',
    category: 'structure',
    field: '物理结构',
    content: '冠饰判定神格等级：火焰冠属护法神，将盔属武将，平顶素冠属世俗吉神。',
    detail: '香樟木整木雕刻，冠与面部一体成型，避免接缝断裂。'
  },
  {
    id: 'brow',
    title: '眉棱 · 怒相开关',
    pos: { x: 50, y: 28 },
    icon: '眉',
    category: 'structure',
    field: '物理结构',
    content: '眉棱高耸外凸，是"怒相"的开关。眉形上扬则凶，平缓则吉。',
    detail: '采用"剔地起凸"刀法，使眉骨立体悬出，强化威压。'
  },
  {
    id: 'eye',
    title: '眼瞳 · 朱砂点睛',
    pos: { x: 32, y: 38 },
    icon: '目',
    category: 'color',
    field: '色彩隐喻',
    content: '朱砂红点睛，被认为可镇魂开光。无点睛则不可入坛。',
    detail: '矿物朱砂（HgS）研磨调胶，千年不褪，是傩面"开光"的核心仪轨。'
  },
  {
    id: 'color-red',
    title: '朱砂红 · 忠武血性',
    pos: { x: 70, y: 45 },
    icon: '红',
    category: 'color',
    field: '色彩隐喻',
    content: '红表忠义武勇，属火，对应关公、灵官等武系神祇。',
    detail: '矿物朱砂 + 桐油调和，色泽沉稳，区别于廉价有机红颜料的浮艳。'
  },
  {
    id: 'color-black',
    title: '矿物黑 · 审判肃杀',
    pos: { x: 28, y: 55 },
    icon: '黑',
    category: 'color',
    field: '色彩隐喻',
    content: '黑表刚直无私，属水，主审判驱疫，如判官、牛头。',
    detail: '松烟碳墨反复涂刷烟熏做旧，形成哑光质感与岁月包浆。'
  },
  {
    id: 'jaw',
    title: '下颌机关 · 开口跳',
    pos: { x: 50, y: 72 },
    icon: '颌',
    category: 'mechanism',
    field: '活动机关',
    content: '下颌以竹销铰接，可张合开合。演出时随唱词"开口跳"，神人合一。',
    detail: '德江傩堂戏独有机关：下颌可活动，是"开口傩"的灵魂。演员以舌抵内壁控制开合。'
  },
  {
    id: 'wood',
    title: '丁木 · 神木灵材',
    pos: { x: 75, y: 80 },
    icon: '木',
    category: 'material',
    field: '材质',
    content: '丁木为安顺地戏脸子首选良材，贵州称"神木"，木质软而韧，易雕而不璺不裂。',
    detail: '据沈福馨考证：制地戏脸子最好的材料是丁木（神木），其次白杨木，再才香樟等其它木材。丁木除雕面具外几乎不能派作其它用场。一堂脸子一般有几十面，多的超过100面。'
  }
]

// 解剖分类标签
export const anatomyCategories = [
  { key: 'all', label: '全部' },
  { key: 'material', label: '材质' },
  { key: 'color', label: '色彩隐喻' },
  { key: 'structure', label: '物理结构' },
  { key: 'mechanism', label: '活动机关' }
]

// 色彩体系（红黄青黑）—— 据丁慧论文：红色表有勇有谋，黄色表正面忠臣，蓝青表阴险桀骜，黑色表刚直不阿
export const triColor = [
  { name: '朱砂红', hex: '#c0322a', meaning: '勇武 · 忠义 · 火', count: '矿物朱砂' },
  { name: '忠臣黄', hex: '#c9a24b', meaning: '正面 · 忠臣 · 金', count: '石黄铅黄' },
  { name: '矿物黑', hex: '#1d1d24', meaning: '刚直 · 不阿 · 水', count: '松烟碳墨' },
  { name: '矿物白', hex: '#e8e2d6', meaning: '慈和 · 纯净 · 和合', count: '蛤粉铅白' }
]
