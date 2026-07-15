// 傩戏面具制造工艺 —— 八步流程数据
// 资料来源：
// R1 丁慧《仪式性与艺术性：傩戏文化的传承困境与活化路径研究》
// R2 史永佳《安顺地戏与傩戏的多维比较研究》
// R4 沈福馨《贵州安顺地戏和地戏脸子》
// 以及贵池傩戏、萍乡湘东傩面具、恩施傩面具等国家级非遗传承地工艺资料
//
// 真实图片来源：Wikimedia Commons · 江西客家非遗木刻面具展览（CC0 公共领域）
// 视频来源：B站、头条、共产党员网、中国傩戏网等公开平台，跳转观看并标注出处

import craftMask01 from '../assets/nuo-photos/craft-mask-01.jpg'
import craftMask02 from '../assets/nuo-photos/craft-mask-02.jpg'
import craftMask03 from '../assets/nuo-photos/craft-mask-03.jpg'
import craftMask05 from '../assets/nuo-photos/craft-mask-05.jpg'
import craftMask07 from '../assets/nuo-photos/craft-mask-07.jpg'
import craftMask12 from '../assets/nuo-photos/craft-mask-12.jpg'

export const craftSteps = [
  {
    id: 1,
    key: 'wood',
    title: '选木',
    subtitle: 'SELECTION · 选材养木',
    icon: '木',
    field: '原料',
    desc: '以丁木（神木）为首选，次选白杨木、香樟木、柳木。采伐须择吉日，先焚香祈福。木材阴干养护至少一年，忌暴晒。',
    detail: '安顺地戏脸子以丁木（又称神木）为主，民间称丁木有"神光"护佑之力。德江傩堂戏多用柳木或白杨木，白杨木质轻而不易裂。贵池傩戏首选枫香树木，树龄20-30年，秋季采伐。萍乡湘东沿用宋代技艺，以香樟木、杨柳木为材。传统禁忌：不取枯木、雷击木、坟茔旁之木。',
    tools: ['斧', '锯', '量尺'],
    time: '选材1-2天 · 阴干1年以上',
    taboos: '不取枯木、雷击木；采伐须择吉日，先焚香祈福',
    color: '#8a6850',
    accent: '#8a6850',
    img: craftMask05,
    imgCaption: '木刻面具坯体 · 江西客家非遗木刻面具',
    media: [
      { platform: '头条', type: 'video', title: '恩施79岁传承人精雕傩面具（选材起手）', url: 'https://m.toutiao.com/group/7569499801395184143/' },
      { platform: '中国傩戏网', type: 'article', title: '傩面具制作十道工序 · 选材', url: 'https://www.zgnuoxi.com/mianju/view_369.html' }
    ]
  },
  {
    id: 2,
    key: 'draft',
    title: '画稿',
    subtitle: 'DRAFT · 起样打稿',
    icon: '稿',
    field: '画样',
    desc: '依师传神谱或祖传图谱，在木料上以墨线画出面具正面轮廓与五官比例。按角色"五色相"分类：老将、文将、武将、少将、女将，各有固定谱式。',
    detail: '匠人根据师传神谱，在木料上以墨线画出面具正面轮廓与五官比例。傩面具按角色"五色相"分类——老将、文将、武将、少将、女将，各有固定谱式，强调"形神兼备"。萍乡湘东传承人汪儒斌将"画稿子"列为十大工序之首，是后续雕刻的基准。画稿决定了面具的神格、性格与表情走向，一笔之差即失神韵。',
    tools: ['毛笔', '墨', '竹尺', '粉线袋', '神谱图谱'],
    time: '半天至1天',
    taboos: '须依师传图谱，不可自创新样；画稿时心怀敬意',
    color: '#3a3a42',
    accent: '#a39e92',
    img: craftMask07,
    imgCaption: '依谱起样 · 武将面具起稿参照',
    media: [
      { platform: '共产党员网', type: 'video', title: '萍乡傩面具制作技艺微视频 · 起稿', url: 'http://dygbjy.12371.cn/2022/07/11/VIDE1657503305170740.shtml' },
      { platform: '中国傩戏网', type: 'article', title: '傩面具制作十道工序 · 画稿', url: 'https://www.zgnuoxi.com/mianju/view_369.html' }
    ]
  },
  {
    id: 3,
    key: 'rough',
    title: '开坯',
    subtitle: 'ROUGH · 截料出坯',
    icon: '坯',
    field: '粗胚',
    desc: '按画稿尺寸锯下木段，劈去多余木料，用斧凿去除大块余木，形成面具毛坯基本形状。须顺应木纹方向敲击，避免逆纹开裂。',
    detail: '按画稿尺寸锯下木段，劈去多余木料，用斧、凿去除大块余木，形成面具的毛坯基本形状（粗胚）。安顺地戏俗称这一步为"出坯"。要顺应木纹方向敲击，避免逆纹开裂。此步虽粗，但需预留足够的雕刻余量——多留一寸，后续才可精修细刻；留少了则无法补救。匠人需"胸有成面"，一斧一凿都心中有数。',
    tools: ['鎅（锯）', '斧头', '宽凿', '木槌'],
    time: '半天至1天',
    taboos: '不可在"四离四绝"日开工；须顺木纹下刀',
    color: '#5a4a3a',
    accent: '#5a4a3a',
    img: craftMask05,
    imgCaption: '粗胚成型 · 顺应木纹出坯',
    media: [
      { platform: 'B站', type: 'video', title: '傩面雕刻全流程 · 开坯起手', url: 'https://www.bilibili.com/video/BV1Pu411u74k/' },
      { platform: '头条', type: 'video', title: '恩施79岁传承人 · 出坯工序', url: 'https://m.toutiao.com/group/7569499801395184143/' }
    ]
  },
  {
    id: 4,
    key: 'carve',
    title: '雕刻',
    subtitle: 'CARVING · 剔地起凸',
    icon: '雕',
    field: '核心工序',
    desc: '傩面具属深浮雕、镂空雕，正面刻神容、反面挖空以贴合人脸。粗雕凿出体块，细雕刻画五官神态与纹饰。技法综合浮雕、透雕、圆雕、线刻，刀法讲究"剔地起凸"。',
    detail: '傩面具属于深浮雕、镂空雕，正面刻神容、反面挖空以贴合人脸。粗雕（凿粗胚）需2-3天，凿出额头、眉弓、双目、鼻翼、血盆大口的基本体块。细雕（凿细胚、镂空、修光）需5-15天，用精细刻刀刻画五官神态与纹饰——云纹、雷纹、兽面纹、虎头纹。湘西流派将双眼雕成"圆凸深浮雕"突出于脸额，鼻头肥大、鼻梁缩短，嘴角延至耳根、獠牙外露。刀法讲究"剔地起凸"——先剔平地子、再使图像起凸，分层叠刻出立体感。刻时须反复试戴以校验比例与贴合度。口诀："刻刀如笔，一刀一划皆有神。"',
    tools: ['平口凿', '圆口凿', '斜口凿', '三角凿', '平刀', '圆刀', '翘头刀', '木槌'],
    time: '粗雕2-3天 · 细雕5-15天 · 整体1-3周',
    taboos: '须顺木纹下刀；刻五官时心怀敬意，"以刀代笔、以心传神"',
    color: '#c0322a',
    accent: '#c0322a',
    img: craftMask03,
    imgCaption: '深浮雕镂空雕 · 兽面纹剔地起凸',
    media: [
      { platform: 'B站', type: 'video', title: '傩面唐氏太婆面具雕刻全纪录', url: 'https://www.bilibili.com/video/BV1Pu411u74k/' },
      { platform: '头条', type: 'video', title: '恩施79岁传承人精雕傩面具', url: 'https://m.toutiao.com/group/7569499801395184143/' }
    ]
  },
  {
    id: 5,
    key: 'sand',
    title: '打磨',
    subtitle: 'SANDING · 修光砂光',
    icon: '磨',
    field: '抛光',
    desc: '用粗砂到细砂逐级手工抛光，顺木纹打磨至木面光滑无刺，确保后续上色均匀附着。传统亦有用贝壳片磨光的旧法。',
    detail: '用粗砂到细砂逐级手工抛光，顺木纹打磨至木面光滑无刺，确保后续上色均匀附着。传统亦有用贝壳片磨光的旧法。此步最为耗时，任何瑕疵都会影响彩绘效果。五官凹陷处与纹饰细部需小心处理，不可磨平刻痕。打磨的目的是让木面"温润如玉"，触之有肌肤之感，而非冰冷之木。匠人常以指腹反复触摸检验，直到"手过无涩，指摩生温"为止。',
    tools: ['砂纸（粗→细多号）', '贝壳片', '木贼草', '棉布'],
    time: '2-5天',
    taboos: '五官凹陷处不可磨平；须顺木纹方向打磨',
    color: '#c9a24b',
    accent: '#c9a24b',
    img: craftMask07,
    imgCaption: '温润如玉 · 打磨抛光后的武将面具',
    media: [
      { platform: '共产党员网', type: 'video', title: '萍乡傩面具制作技艺 · 修光砂光', url: 'http://dygbjy.12371.cn/2022/07/11/VIDE1657503305170740.shtml' },
      { platform: 'B站', type: 'video', title: '傩面雕刻 · 打磨工序', url: 'https://www.bilibili.com/video/BV1Pu411u74k/' }
    ]
  },
  {
    id: 6,
    key: 'paint',
    title: '彩绘',
    subtitle: 'PAINTING · 矿物敷彩',
    icon: '彩',
    field: '上色',
    desc: '色彩遵循传统配色规则：红=喜庆驱邪、黑=威严、白=纯洁、金=神圣、黄=大地。颜料须用矿物颜料配动物胶，层层薄涂，百年不褪色。',
    detail: '色彩严格遵循传统配色规则，承载文化象征：红=喜庆驱邪、黑=威严、白=纯洁、金=神圣、黄=大地、绿=生机。颜料须用矿物颜料（朱砂红、石青蓝、石绿绿、雄黄黄、烟黑等）配动物胶（牛皮胶、鱼鳔胶）或米汤调和，层层薄涂。分步为：①打底（生漆或桐油封木纹，1-2天干）②勾勒墨线轮廓 ③主色大面积填充 ④细节渲染（金色勾边、光影）⑤上光保护（涂桐油或清漆防水防尘）。匠人需按天气调整胶水浓度——晴天多加胶防干裂，雨天少加水防霉变；边涂边念诵祈福语如"红红火火，驱邪纳福"。',
    tools: ['毛笔（大中小号）', '排刷', '调色碟', '矿物颜料', '动物胶', '桐油', '生漆'],
    time: '含每层干燥等待 · 约7-15天',
    taboos: '忌用现代化学漆，以保"百年不褪色"；须按天气调整胶水浓度',
    color: '#7d1f1a',
    accent: '#7d3c98',
    img: craftMask01,
    imgCaption: '矿物敷彩 · 五色相彩绘女将面具',
    media: [
      { platform: 'B站', type: 'video', title: 'NUO傩戏与手碟 · 彩绘呈现', url: 'https://www.bilibili.com/video/BV1zm4y1W7wW/' },
      { platform: '网易·贵州省博物馆', type: 'article', title: '贵州傩面具彩绘工艺图解', url: 'http://3g.163.com/dy/article/D932PG5Q0514SQM1.html' }
    ]
  },
  {
    id: 7,
    key: 'eye',
    title: '点睛',
    subtitle: 'EYE-DOT · 点睛组装',
    icon: '睛',
    field: '赋灵',
    desc: '用朱砂点画眼珠，象征"开眼见神"，赋予面具灵性。部分流派还须安"腹脏"——在面具背面放入茶叶、灯芯草、稻谷，象征五脏六腑。',
    detail: '彩绘完成后进行点睛与配件组装。点睛：用朱砂（或鸡血）点画眼珠，象征"开眼见神"，赋予面具灵性。安腹脏（萍乡湘东独特）：在面具背面刻一小方洞，放入茶叶、灯芯草、稻谷等物，再以油膏密封，象征五脏六腑，使神灵"有身有命"。装配饰：安装耳翅、冠饰、翎毛、胡须、犄角等可动部件，以动物胶或榫卯粘合固定。点睛后即"有灵"，未开光者不可佩戴登台，亦不可随意触碰眼部。',
    tools: ['细毛笔', '朱砂', '鸡血', '动物胶', '油膏'],
    time: '半天至2天',
    taboos: '朱砂点睛后即"有灵"，未开光者不可佩戴登台；不可随意触碰眼部',
    color: '#c0322a',
    accent: '#c0322a',
    img: craftMask12,
    imgCaption: '朱砂点睛 · 开眼见神 · 额间第三目',
    media: [
      { platform: '中国傩戏网', type: 'article', title: '傩面具制作十道工序 · 点睛安腹脏', url: 'https://www.zgnuoxi.com/mianju/view_369.html' },
      { platform: 'B站', type: 'video', title: '傩面雕刻 · 点睛赋灵', url: 'https://www.bilibili.com/video/BV1Pu411u74k/' }
    ]
  },
  {
    id: 8,
    key: 'consecrate',
    title: '开光',
    subtitle: 'CONSECRATION · 请神仪式',
    icon: '光',
    field: '成神',
    desc: '面具从"工艺品"升华为"神灵载体"的关键仪式。以鸡血涂额、朱砂点"八光"，开光后面具方可登台使用或供奉。',
    detail: '这是面具从"工艺品"升华为"神灵载体"的关键仪式，须由掌案人（处士）于祠庙内主持。仪式神圣隆重：①请动众神，口念咒语 ②以鸡血涂抹面具额头与眼睛 ③以朱砂笔点画面具"八光"——眼光、鼻光、口光、耳光、手光、心光、足光、身光，最后开"天堂之光" ④奠酒祭文，默寄心愿，祈面具护佑平安、驱邪纳吉。开光后面具方可登台使用或供奉。开光须择吉日吉时；妇人、外人回避；未开光之面具不可登台演傩。仪式本身约1-2小时，但前后斋戒、择吉日须数日准备。',
    tools: ['朱砂', '鸡血', '毛笔', '香烛', '酒', '祭文', '法号（牛角号）'],
    time: '仪式1-2小时 · 择吉日斋戒数日',
    taboos: '须择吉日吉时；妇人、外人回避；未开光之面具不可登台演傩',
    color: '#e8a82e',
    accent: '#e8a82e',
    img: craftMask02,
    imgCaption: '开光成神 · 神灵载体 · 供奉登台',
    media: [
      { platform: '网易·贵州省博物馆', type: 'article', title: '贵州傩面具开光仪式图解', url: 'http://3g.163.com/dy/article/D932PG5Q0514SQM1.html' },
      { platform: '中国傩戏网', type: 'article', title: '傩面具制作十道工序 · 开光请神', url: 'https://www.zgnuoxi.com/mianju/view_369.html' }
    ]
  }
]

// 总工艺时长
export const totalTime = {
  active: '3-8周',
  drying: '1年以上',
  total: '从原木到开光完成 · 约1年余'
}

// 工艺概述
export const craftOverview = {
  title: '八步成神',
  subtitle: 'EIGHT STEPS FROM WOOD TO DEITY',
  desc: '从一棵树到一尊神灵，傩面具经历八道核心工序、二十余道细分工序。匠人以刀代笔、以木为纸、以心传神，将信仰与技艺融为一体。',
  quote: '"刻刀如笔，一刀一划皆有神。"——傩面具匠人口诀'
}

// 图片授权信息
export const craftPhotoCredit = {
  source: 'Wikimedia Commons · 江西客家非遗木刻面具展览',
  author: 'HKCL 中央图书馆展览',
  license: 'CC0 1.0 / Public Domain',
  note: '木刻面具实物照片，公共领域，可自由使用'
}

// 视频来源说明
export const videoCredit = {
  platforms: 'B站 · 头条 · 共产党员网 · 中国傩戏网 · 贵州省博物馆',
  note: '视频与图解来源公开平台，点击跳转原页面观看，出处已标注'
}
