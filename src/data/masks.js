// 神谱图鉴档案 —— 面具角色系统结构化数据
// 每条记录对应一张"神谱卡片"
// 图片来源：Wikimedia Commons，CC0 公共领域 / Public Domain
// 分类体系：按角色来源分为五大系，每系不重叠
import fierce01 from '../assets/nuo-photos/mask-fierce-01.jpg'
import fierce02 from '../assets/nuo-photos/mask-fierce-02.jpg'
import auspicious01 from '../assets/nuo-photos/mask-auspicious-01.jpg'
import auspicious02 from '../assets/nuo-photos/mask-auspicious-02.jpg'
import archive01 from '../assets/nuo-photos/mask-archive-01.jpg'
import archive02 from '../assets/nuo-photos/mask-archive-02.jpg'
import nuoMask1 from '../assets/nuo-photos/Nuo_Opera_Mask_(13918880811).jpg'
import nuoMask2 from '../assets/nuo-photos/Nuo_Opera_Mask_(13918908352).jpg'
import nuoMask3 from '../assets/nuo-photos/Nuo_Opera_Mask_(13918912086).jpg'
import nuoMask4 from '../assets/nuo-photos/Nuo_Opera_Mask_(13942073313).jpg'
import nuoMasks from '../assets/nuo-photos/Nuo_Opera_Masks_(13918893261).jpg'
import caoCao from '../assets/nuo-photos/Mask_of_Cao_Cao.jpg'
import zhangFei from '../assets/nuo-photos/Mask_of_Zhang_Fei.jpg'
import zhaoYun from '../assets/nuo-photos/Mask_of_Zhao_Yun.jpg'
import liuBei from '../assets/nuo-photos/Mask_of_Liu_Bei.jpg'
import nuoMask10 from '../assets/nuo-photos/nuo-mask-10.jpg'
import heroImg from '../assets/nuo-photos/hero-mask.jpg'
import anshunImg from '../assets/nuo-photos/mask-anshun-01.jpg'
import dejiangImg1 from '../assets/nuo-photos/mask-dejiang-01.jpg'
import dejiangImg2 from '../assets/nuo-photos/mask-dejiang-02.jpg'
import nuoMask05 from '../assets/nuo-photos/nuo-mask-05.jpg'
import nuoMask09 from '../assets/nuo-photos/nuo-mask-09.jpg'
import nuoMask15 from '../assets/nuo-photos/nuo-mask-15.jpg'
import nuoMask20 from '../assets/nuo-photos/nuo-mask-20.jpg'
import nuoMask25 from '../assets/nuo-photos/nuo-mask-25.jpg'
import craftMask01 from '../assets/nuo-photos/craft-mask-01.jpg'
import craftMask03 from '../assets/nuo-photos/craft-mask-03.jpg'
import craftMask05 from '../assets/nuo-photos/craft-mask-05.jpg'
import craftMask07 from '../assets/nuo-photos/craft-mask-07.jpg'
import craftMask12 from '../assets/nuo-photos/craft-mask-12.jpg'
import anatomyMask from '../assets/nuo-photos/anatomy-mask.jpg'

export const masks = [
  // ========== 三国系（8）—— 安顺地戏 / 关索戏 ==========
  {
    id: 'guan-gong',
    name: '关公',
    alias: '武圣 / 关帝',
    group: 'sanguo',
    category: 'auspicious',
    colorScheme: '红脸赤面',
    material: '丁木（神木）· 矿物彩绘',
    region: '安顺',
    plays: ['过五关', '斩华雄', '单刀会'],
    essence: '忠义 · 武德 · 镇邪',
    tags: ['武将', '明代军傩', '半盔', '忠义'],
    desc: '赤面长髯，丹凤眼卧蚕眉。傩坛之上的绝对秩序符号，以武德镇守方寸。',
    accent: '#c0322a',
    img: fierce01,
    detail: '关羽，字云长，三国蜀汉名将。地戏中"红脸出五关"的代表，赤面表忠义，卧蚕眉丹凤眼为固定谱式。半盔顶戴，长髯及胸，手持青龙偃月刀。屯堡人视其为忠义武德的化身，每年正月跳神必演"三国"戏目。'
  },
  {
    id: 'cao-cao',
    name: '曹操',
    alias: '魏武王 / 奸雄',
    group: 'sanguo',
    category: 'fierce',
    colorScheme: '白脸粉面',
    material: '丁木 · 粉彩铅白',
    region: '安顺',
    plays: ['战濮阳', '长坂坡', '华容道'],
    essence: '权谋 · 奸雄 · 乱世枭雄',
    tags: ['武将', '明代军傩', '白脸', '三国'],
    desc: '粉白脸膛，细眼吊眉。傩坛之上的权谋符号，以智计雄踞乱世。',
    accent: '#a39e92',
    img: caoCao,
    detail: '曹操，字孟德，三国曹魏奠基者。地戏中"白脸奸雄"的代表，粉白脸表权谋奸诈，细眼吊眉为固定谱式。在三国戏目中与关公相对，构成忠奸对立的核心戏剧张力。安顺地戏中曹操面具多为全脸白粉做底，眉眼细长上挑。'
  },
  {
    id: 'zhang-fei',
    name: '张飞',
    alias: '燕人 / 猛张飞',
    group: 'sanguo',
    category: 'fierce',
    colorScheme: '黑脸豹头',
    material: '丁木 · 矿物黑彩',
    region: '安顺',
    plays: ['长坂坡', '战马超', '古城会'],
    essence: '勇猛 · 刚烈 · 万夫莫敌',
    tags: ['武将', '明代军傩', '黑脸', '三国'],
    desc: '黑脸豹头环眼，钢髯倒竖。傩坛之上的勇武符号，以刚烈震慑八方。',
    accent: '#3a3a42',
    img: zhangFei,
    detail: '张飞，字翼德，三国蜀汉名将。地戏中"黑脸猛将"的代表，黑脸表刚烈勇猛，豹头环眼钢髯为固定谱式。在"长坂坡"一折中独立喝退曹军百万，是勇武形象的巅峰。安顺地戏中张飞面具黑彩浓重，眉如火焰，气势威猛。'
  },
  {
    id: 'zhao-yun',
    name: '赵云',
    alias: '子龙 / 常山赵子龙',
    group: 'sanguo',
    category: 'auspicious',
    colorScheme: '俊面英武',
    material: '丁木 · 矿物彩绘',
    region: '安顺',
    plays: ['长坂坡救主', '截江夺斗', '汉水战'],
    essence: '忠勇 · 仁义 · 全身是胆',
    tags: ['武将', '明代军傩', '俊脸', '三国'],
    desc: '俊面星目，英武挺拔。傩坛之上的仁勇符号，以忠勇护主闻名千古。',
    accent: '#c9a24b',
    img: zhaoYun,
    detail: '赵云，字子龙，三国蜀汉名将。地戏中"俊脸儒将"的代表，俊面星目表忠勇仁义，英武挺拔为固定谱式。在"长坂坡"一折中单骑救阿斗，七进七出曹军重围，是忠勇形象的典范。安顺地戏中赵云面具面容俊朗，眉目清秀而英气逼人。'
  },
  {
    id: 'liu-bei',
    name: '刘备',
    alias: '皇叔 / 昭烈帝',
    group: 'sanguo',
    category: 'auspicious',
    colorScheme: '俊面龙颜',
    material: '丁木 · 矿物彩绘',
    region: '安顺',
    plays: ['三顾茅庐', '古城会', '甘露寺'],
    essence: '仁德 · 帝王 · 汉室宗亲',
    tags: ['武将', '明代军傩', '俊脸', '三国'],
    desc: '俊面龙颜，双耳垂肩。傩坛之上的仁德符号，以宽厚仁德凝聚人心。',
    accent: '#c9a24b',
    img: liuBei,
    detail: '刘备，字玄德，三国蜀汉开国皇帝。地戏中"仁德之主"的代表，俊面龙颜表帝王之相，双耳垂肩为固定谱式。在三国戏目中为核心人物，以仁德感召天下英雄。安顺地戏中刘备面具面容慈和，眉目端庄，有帝王气象。'
  },
  {
    id: 'guan-suo',
    name: '关索',
    alias: '花关索 / 关羽之子',
    group: 'sanguo',
    category: 'auspicious',
    colorScheme: '俊面花脸',
    material: '丁木 · 矿物彩绘',
    region: '云南',
    plays: ['关索战山', '三战吕布'],
    essence: '忠勇 · 英雄 · 蜀汉遗风',
    tags: ['武将', '明代军傩', '俊脸', '三国'],
    desc: '俊面花脸，英武年少。关羽第三子，随父征战，边地英雄崇拜的化身。',
    accent: '#c0322a',
    img: craftMask07,
    detail: '关索，传说为关羽第三子，云南关索戏的核心主角。俊面花脸，英武年少，手持兵器征战边地。关索戏以三国蜀汉传说为题材，流传于云南澄江阳宗镇小屯村，至今三百余年，是研究三国文化在边疆传播的重要活态遗存。'
  },
  {
    id: 'guan-ping',
    name: '关平',
    alias: '关公子 / 关公义子',
    group: 'sanguo',
    category: 'auspicious',
    colorScheme: '俊面少年',
    material: '丁木 · 矿物彩绘',
    region: '安顺',
    plays: ['过五关', '关平捧印'],
    essence: '忠义 · 护卫 · 少年忠勇',
    tags: ['武将', '明代军傩', '俊脸', '三国'],
    desc: '俊面少年，手持帅印。关羽义子，随父征战，忠勇护卫的化身。',
    accent: '#c9a24b',
    img: nuoMask20,
    detail: '关平，关羽义子，随父征战，在"过五关"中捧印随行。俊面少年，英武忠勇。安顺地戏三国戏目中的重要配角，与周仓一同护卫关公，构成忠义武将的经典组合。民间奉为关帝庙中的少保。'
  },
  {
    id: 'zhou-cang',
    name: '周仓',
    alias: '黑面力士 / 关公部将',
    group: 'sanguo',
    category: 'fierce',
    colorScheme: '黑面虬髯',
    material: '丁木 · 矿物黑彩',
    region: '安顺',
    plays: ['过五关', '周仓扛刀'],
    essence: '勇力 · 忠诚 · 力士',
    tags: ['武将', '明代军傩', '黑脸', '三国'],
    desc: '黑面虬髯，体魄魁梧。关羽部将，扛刀随行，忠勇力士的化身。',
    accent: '#3a3a42',
    img: nuoMask25,
    detail: '周仓，原为黄巾军，后归顺关羽，成为其扛刀部将。黑面虬髯，体魄魁梧，力大无穷。安顺地戏"过五关"中扛青龙偃月刀随行，与关平一同护卫关公。民间奉为关帝庙中的黑面力士，是忠诚与勇力的象征。'
  },

  // ========== 封神系（3）—— 封神演义题材 ==========
  {
    id: 'jiang-ziya',
    name: '姜子牙',
    alias: '太公望 / 封神之神',
    group: 'fengshen',
    category: 'auspicious',
    colorScheme: '白须道颜',
    material: '香樟木 · 矿物彩绘',
    region: '安顺',
    plays: ['封神榜', '子牙封神'],
    essence: '封神 · 智慧 · 兵法',
    tags: ['文神', '封神', '智慧', '镇场'],
    desc: '白须道颜，手持封神榜。封神之神，代天封神，众神之首。',
    accent: '#e8e2d6',
    img: nuoMask05,
    detail: '姜子牙，姜姓吕氏，名尚，字子牙，周朝开国功臣。手持封神榜，代天封神，是众神之首。安顺地戏"封神演义"戏目中为核心人物，白须道颜，仙风道骨。民间有"太公在此，百无禁忌"之说，是傩坛镇场之神。'
  },
  {
    id: 'zhao-gongming',
    name: '赵公明',
    alias: '玄坛真君 / 武财神',
    group: 'fengshen',
    category: 'auspicious',
    colorScheme: '红面黑须',
    material: '香樟木 · 朱砂重彩',
    region: '池州',
    plays: ['财神出巡', '赵公明下山'],
    essence: '财运 · 镇邪 · 迎祥',
    tags: ['武神', '封神', '财神', '镇邪'],
    desc: '红面黑须，手持铁鞭骑黑虎。封神截教弟子，死后封为武财神，驱疫赐福双全。',
    accent: '#b8341f',
    img: auspicious01,
    detail: '赵公明，封神演义中截教弟子，被陆压道人以钉头七箭书所杀，死后封为"金龙如意正一龙虎玄坛真君"，民间奉为武财神。红面黑须，手持铁鞭，骑黑虎。在傩戏中既是驱疫的凶神，也是赐福的财神，体现了傩文化中"以凶制凶、以威纳福"的辩证逻辑。池州傩戏"财神出巡"中为核心角色。'
  },
  {
    id: 'er-lang',
    name: '二郎神',
    alias: '杨戬 / 清源妙道真君',
    group: 'fengshen',
    category: 'fierce',
    colorScheme: '三目金面',
    material: '香樟木 · 矿物彩绘',
    region: '安顺',
    plays: ['二郎降魔', '劈山救母'],
    essence: '降魔 · 辟邪 · 天将',
    tags: ['武将', '三目', '天将', '降魔'],
    desc: '三目金面，手持三尖两刃刀。天庭第一战将，额间神目洞察妖邪。',
    accent: '#c9a24b',
    img: craftMask12,
    detail: '二郎神杨戬，清源妙道真君，天庭第一战将。额间竖第三目，手持三尖两刃刀，携哮天犬。安顺地戏"二郎降魔"中降服妖魔，是道教与傩坛共尊的战神。三目表洞察阴阳，金面表天将之尊。'
  },

  // ========== 阴司系（4）—— 驱疫捉鬼 ==========
  {
    id: 'caipan',
    name: '判官',
    alias: '崔府君 / 阴司判官',
    group: 'yinsi',
    category: 'fierce',
    colorScheme: '黑脸白纹',
    material: '香樟木 · 烟熏做旧',
    region: '德江',
    plays: ['勾簿', '判官断案'],
    essence: '审判 · 因果 · 驱疫',
    tags: ['凶神', '全脸', '驱疫', '审判'],
    desc: '面如黑漆，怒目圆睁。手执生死簿，于傩堂之上裁决阴阳，驱瘟逐疫。',
    accent: '#3a6b6b',
    img: anatomyMask,
    detail: '判官即崔府君，阴司之主。傩堂戏"勾愿"一折的主角，手执生死簿与判官笔，裁决信众祈愿。黑面表刚直无私，怒目圆睁以镇邪。德江傩堂戏中"勾簿"仪式的核心神祇。'
  },
  {
    id: 'niu-tou',
    name: '牛头',
    alias: '阿傍 / 狱卒',
    group: 'yinsi',
    category: 'fierce',
    colorScheme: '青黑兽面',
    material: '香樟木 · 矿物彩绘',
    region: '安顺',
    plays: ['巡城', '捉鬼'],
    essence: '拘魂 · 镇恶 · 阴司役',
    tags: ['凶神', '兽面', '阴司', '驱疫'],
    desc: '青黑兽面，双角如钩。阴司差役，与马面同行，拘拿作祟之鬼。',
    accent: '#3a6b6b',
    img: fierce02,
    detail: '牛头，梵名阿傍，阴司差役。青黑兽面，双角如钩，与马面搭档。傩堂"巡城""捉鬼"戏目中，牛头马面同行，拘拿作祟之鬼，驱瘟逐疫。源于佛教地狱形象，融入民间傩坛。'
  },
  {
    id: 'ma-mian',
    name: '马面',
    alias: '马面罗刹 / 阴差',
    group: 'yinsi',
    category: 'fierce',
    colorScheme: '青白兽面',
    material: '香樟木 · 矿物彩绘',
    region: '德江',
    plays: ['巡城', '捉鬼', '过奈河'],
    essence: '拘魂 · 引渡 · 阴司役',
    tags: ['凶神', '兽面', '阴司', '引渡'],
    desc: '青白兽面，马首长吻。阴司差役，与牛头同行，引渡亡魂过奈河桥。',
    accent: '#5a6b6b',
    img: dejiangImg2,
    detail: '马面，又称马面罗刹，阴司差役。青白兽面，马首长吻，与牛头搭档。傩堂"巡城""捉鬼"戏目中，牛头马面同行，拘拿作祟之鬼，引渡亡魂过奈河桥。源于佛教地狱形象，融入民间傩坛。'
  },
  {
    id: 'zhong-kui',
    name: '钟馗',
    alias: '赐福镇宅圣君',
    group: 'yinsi',
    category: 'fierce',
    colorScheme: '豹头环眼',
    material: '香樟木 · 朱砂重彩',
    region: '池州',
    plays: ['钟馗捉鬼', '钟馗嫁妹'],
    essence: '驱鬼 · 镇宅 · 赐福',
    tags: ['凶神', '驱鬼', '镇宅', '捉鬼'],
    desc: '豹头环眼，铁面虬髯。终南进士，死后封神，专司捉鬼驱邪。',
    accent: '#7d1f1a',
    img: craftMask03,
    detail: '钟馗，唐代终南进士，因貌丑落第，愤而自杀，死后被封为"赐福镇宅圣君"。豹头环眼，铁面虬髯，专司捉鬼驱邪。池州傩戏"钟馗捉鬼""钟馗嫁妹"为代表剧目，是民间最受欢迎的驱鬼之神。'
  },

  // ========== 傩坛祖神系（4）—— 创世与开坛 ==========
  {
    id: 'nuo-gong',
    name: '傩公',
    alias: '东山圣公 / 傩神始祖',
    group: 'zuling',
    category: 'auspicious',
    colorScheme: '原木无脸',
    material: '丁木 · 原木本色',
    region: '德江',
    plays: ['敬傩公', '开坛'],
    essence: '创世 · 祖灵 · 万神之祖',
    tags: ['吉神', '祖灵', '创世', '开坛'],
    desc: '原木本色，无脸或仅刻轮廓。混沌初开，万物未形，傩神之始祖。',
    accent: '#8a6b3a',
    img: archive01,
    detail: '傩公，又称东山圣公，与傩母并为人类始祖。相传远古洪荒，天崩地裂，仅余傩公傩母兄妹二人。面具无五官或仅刻轮廓，象征创世前的混沌——"以不完整表神圣"。傩坛设祭必先敬傩公傩母，是傩祭的最高神祇。'
  },
  {
    id: 'nuo-mu',
    name: '傩母',
    alias: '南山圣母 / 傩神始祖',
    group: 'zuling',
    category: 'auspicious',
    colorScheme: '原木无脸',
    material: '丁木 · 原木本色',
    region: '德江',
    plays: ['敬傩母', '开坛'],
    essence: '创世 · 祖灵 · 万神之祖',
    tags: ['吉神', '祖灵', '创世', '开坛'],
    desc: '原木本色，无脸或仅刻轮廓。混沌初开，万物未形，傩神之始祖。',
    accent: '#9a7b4a',
    img: archive02,
    detail: '傩母，又称南山圣母，与傩公并为人类始祖。面具无五官或仅刻轮廓，象征创世前的混沌。傩公傩母是傩坛的最高神祇，凡傩坛设祭必先敬二圣。无脸的美学是傩面具"以不完整表神圣"传统的源头。'
  },
  {
    id: 'gu-yin',
    name: '古音婆婆',
    alias: '傩婆 / 祖母神',
    group: 'zuling',
    category: 'auspicious',
    colorScheme: '褐面慈纹',
    material: '香樟木 · 烟褐做旧',
    region: '德江',
    plays: ['敬婆', '祈寿'],
    essence: '祖灵 · 庇幼 · 传承',
    tags: ['吉神', '祖灵', '祈寿', '庇幼'],
    desc: '褐面布纹，慈眉低垂。傩坛的祖母神，庇佑孩童，承载族群记忆。',
    accent: '#c9a24b',
    img: craftMask01,
    detail: '古音婆婆，又称傩婆、祖母神。褐面布纹，慈眉低垂，手持蒲扇。傩坛的祖母神，庇佑孩童、祈寿延年。承载族群记忆与祖灵信仰，是傩堂戏"敬婆"戏目的主角，体现傩文化的人伦温度。'
  },
  {
    id: 'kai-lu',
    name: '开路将军',
    alias: '先锋 / 开山',
    group: 'zuling',
    category: 'fierce',
    colorScheme: '青面獠牙',
    material: '白杨木 · 石彩',
    region: '安顺',
    plays: ['开山', '探路'],
    essence: '破障 · 开道 · 净场',
    tags: ['凶神', '獠牙', '净场', '开道'],
    desc: '青面獠牙，怒发冲冠。傩祭第一神，劈开混沌，为众神开辟通路。',
    accent: '#3a6b6b',
    img: nuoMask1,
    detail: '开路将军又称开山莽将，傩坛"开洞"第一戏的主角。青面獠牙，怒发冲冠，手持开山斧，劈开混沌为众神开道。是傩祭净场的破障之神，凡傩坛必先请开山。'
  },

  // ========== 民间吉神系（5）—— 赐福纳祥 ==========
  {
    id: 'tudi',
    name: '土地神',
    alias: '福德正神 / 伯公',
    group: 'minjian',
    category: 'auspicious',
    colorScheme: '金面慈容',
    material: '香樟木 · 金箔贴绘',
    region: '德江',
    plays: ['土地献宝', '勾愿'],
    essence: '福禄 · 丰饶 · 庇佑',
    tags: ['吉神', '全脸', '祈福', '丰饶'],
    desc: '金面笑颜，白须及胸。司掌一方土地，赐福纳祥，民间最亲的傩神。',
    accent: '#c9a24b',
    img: nuoMask2,
    detail: '土地神，民间称"福德正神"或"伯公"。金面笑颜，白须及胸，手持龙头拐杖。司掌一方土地、五谷丰登。傩堂戏"土地献宝"中赐福信众，是民间最亲近的吉神。'
  },
  {
    id: 'ling-guan',
    name: '灵官',
    alias: '王灵官 / 火神',
    group: 'minjian',
    category: 'fierce',
    colorScheme: '赤面三眼',
    material: '香樟木 · 朱砂重彩',
    region: '安顺',
    plays: ['灵官镇坛', '巡坛'],
    essence: '镇坛 · 监察 · 护法',
    tags: ['凶神', '三目', '护法', '镇坛'],
    desc: '赤面三目，手持火轮。道教护法神入傩，监察坛场，降妖伏魔。',
    accent: '#c0322a',
    img: nuoMask4,
    detail: '王灵官，道教护法神，入傩后任坛场监察。赤面三目（额间竖目），手持火轮金鞭。"灵官镇坛"一折中巡视傩坛，驱逐邪祟，护持正法。三目表洞察阴阳，火轮表降魔之威。'
  },
  {
    id: 'xiao-mian',
    name: '笑面童子',
    alias: '和合童子 / 喜神',
    group: 'minjian',
    category: 'auspicious',
    colorScheme: '白面笑颜',
    material: '白杨木 · 矿物白',
    region: '德江',
    plays: ['和合', '送子'],
    essence: '和合 · 欢喜 · 延嗣',
    tags: ['吉神', '开口跳', '和合', '欢喜'],
    desc: '白面圆颊，咧嘴大笑。象征和合欢喜，傩堂收尾的暖色注脚。',
    accent: '#e8e2d6',
    img: auspicious02,
    detail: '笑面童子，又称和合童子、喜神。白面圆颊，咧嘴大笑，象征和合欢喜、延嗣送子。傩堂戏"和合"一折收尾出场，以欢喜氛围送神，是傩祭的暖色注脚。下颌可活动的"开口跳"代表。'
  },
  {
    id: 'lei-gong',
    name: '雷公',
    alias: '雷神 / 雷师',
    group: 'minjian',
    category: 'fierce',
    colorScheme: '青面鸟喙',
    material: '香樟木 · 矿物彩绘',
    region: '湛江',
    plays: ['舞雷将', '五方雷'],
    essence: '敬天 · 崇雷 · 驱邪',
    tags: ['凶神', '雷傩', '自然神', '驱邪'],
    desc: '青面鸟喙，背生双翼。雷州半岛敬天崇雷，五方雷将之首。',
    accent: '#7d3c98',
    img: craftMask05,
    detail: '雷公，又称雷神、雷师，古代雷州半岛人民敬天崇雷形成的独特"雷傩舞"核心神祇。青面鸟喙，背生双翼，手持雷锤。湛江傩舞以雷首公与五方雷将为主体，源于古代图腾崇拜祭祀仪式，是岭南傩文化的独特分支。'
  },
  {
    id: 'zao-mu',
    name: '灶王奶奶',
    alias: '灶母 / 司命夫人',
    group: 'minjian',
    category: 'auspicious',
    colorScheme: '暖面慈颜',
    material: '香樟木 · 矿物彩绘',
    region: '池州',
    plays: ['祭灶', '送灶'],
    essence: '家宅 · 司命 · 上天言好事',
    tags: ['吉神', '家宅', '司命', '祈福'],
    desc: '暖面慈颜，高髻花饰。家家户户的守护女神，腊月二十三上天言好事。',
    accent: '#8a6b3a',
    img: nuoMask10,
    detail: '灶王奶奶，又称灶母、司命夫人，灶王爷的夫人。暖面慈颜，高髻花饰，与灶王爷共同司掌一家善恶。腊月二十三祭灶送神上天，除夕迎回。池州傩戏"祭灶"戏目中，灶王奶奶司命赐福，是民间信仰中与生活最贴近的女性神祇。'
  }
]

// 筛选标签 —— 按角色来源分为五大系，互不重叠
export const filterTags = [
  { key: 'all', label: '全部' },
  { key: 'sanguo', label: '三国系' },
  { key: 'fengshen', label: '封神系' },
  { key: 'yinsi', label: '阴司系' },
  { key: 'zuling', label: '傩坛祖神' },
  { key: 'minjian', label: '民间吉神' }
]

// 系别说明
export const groupInfo = {
  sanguo: { name: '三国系', desc: '安顺地戏与关索戏核心，源自明初军傩', count: 8 },
  fengshen: { name: '封神系', desc: '封神演义题材，道教神话入傩', count: 3 },
  yinsi: { name: '阴司系', desc: '驱疫捉鬼，阴司审判与引渡', count: 4 },
  zuling: { name: '傩坛祖神', desc: '创世神话与开坛破障，傩祭最高神', count: 4 },
  minjian: { name: '民间吉神', desc: '赐福纳祥，民间最亲近的守护神', count: 5 }
}

// 图片授权信息
export const photoCredit = {
  source: 'Wikimedia Commons',
  author: 'Gary Todd et al.',
  license: 'CC0 1.0 / Public Domain',
  licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  note: '图片已进入公共领域，可自由商用、修改，无需署名'
}
