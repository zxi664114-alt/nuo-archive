// 中国傩戏分布图谱 —— 全国流派档案数据
// 史料来源：史永佳《安顺地戏与傩戏的多维比较研究》
//          陈薪宇《非遗视角下贵州傩戏的分布及传承》
//          沈福馨《贵州安顺地戏和地戏脸子》
//          方岚《以鼓问山：贵州傩戏中的文化记忆与生命和鸣》
//          丁慧《仪式性与艺术性：傩戏文化的传承困境与活化路径研究》
//          百度百科：傩戏、南丰傩舞、池州傩戏、辰州傩戏、关索戏等词条
// 图片来源：Wikimedia Commons，摄影师 Gary Todd，CC0 公共领域

import heroImg from '../assets/nuo-photos/hero-mask.jpg'
import anshunImg from '../assets/nuo-photos/mask-anshun-01.jpg'
import dejiangImg1 from '../assets/nuo-photos/mask-dejiang-01.jpg'
import dejiangImg2 from '../assets/nuo-photos/mask-dejiang-02.jpg'
import nuoMask1 from '../assets/nuo-photos/Nuo_Opera_Mask_(13918880811).jpg'
import nuoMask2 from '../assets/nuo-photos/Nuo_Opera_Mask_(13918908352).jpg'
import nuoMask3 from '../assets/nuo-photos/Nuo_Opera_Mask_(13918912086).jpg'
import nuoMask4 from '../assets/nuo-photos/Nuo_Opera_Mask_(13942073313).jpg'
import nuoMasks from '../assets/nuo-photos/Nuo_Opera_Masks_(13918893261).jpg'
import caoCao from '../assets/nuo-photos/Mask_of_Cao_Cao.jpg'
import zhangFei from '../assets/nuo-photos/Mask_of_Zhang_Fei.jpg'
import zhaoYun from '../assets/nuo-photos/Mask_of_Zhao_Yun.jpg'
import liuBei from '../assets/nuo-photos/Mask_of_Liu_Bei.jpg'
// 新增不重复面具照片（Wikimedia Commons CC0，Gary Todd 摄）
import nuoMask05 from '../assets/nuo-photos/nuo-mask-05.jpg'
import nuoMask09 from '../assets/nuo-photos/nuo-mask-09.jpg'
import nuoMask10 from '../assets/nuo-photos/nuo-mask-10.jpg'
import nuoMask15 from '../assets/nuo-photos/nuo-mask-15.jpg'
import nuoMask20 from '../assets/nuo-photos/nuo-mask-20.jpg'
import nuoMask25 from '../assets/nuo-photos/nuo-mask-25.jpg'
import maskFierce01 from '../assets/nuo-photos/mask-fierce-01.jpg'
import maskFierce02 from '../assets/nuo-photos/mask-fierce-02.jpg'
import maskAuspicious01 from '../assets/nuo-photos/mask-auspicious-01.jpg'
import maskAuspicious02 from '../assets/nuo-photos/mask-auspicious-02.jpg'
import maskArchive01 from '../assets/nuo-photos/mask-archive-01.jpg'
import maskArchive02 from '../assets/nuo-photos/mask-archive-02.jpg'

export const schools = {
  // ========== 贵州 ==========
  anshun: {
    id: 'anshun',
    name: '安顺地戏',
    type: '军傩',
    region: '贵州 · 安顺市 · 平坝/天龙屯堡',
    coord: [105.93, 26.25],
    era: '明初 · 洪武十四年(1381)至今 · 600余年',
    origin: '明初"调北征南"屯军入黔，源自军傩，实承弋阳腔',
    maskType: '武将半盔 · 仅遮上半脸（脸子顶戴额前）',
    feature: '屯堡军傩 · 尚武演戏 · 第三人称说唱',
    palette: '朱砂红 + 矿物黑 + 丁木原色',
    performance: '村野旷地围场演出，一锣一鼓伴奏，众人帮腔',
    plays: ['三国演义', '杨家将', '精忠传', '封神演义'],
    spirit: '军魂 · 忠义 · 历史记忆传承',
    quote: '头戴脸子，手执短戈，一锣一鼓，一吼千军。',
    accent: '#c0322a',
    swatch: '#c0322a',
    stat: { age: 600, masks: 24, troops: '江南屯军后裔' },
    cover: anshunImg,
    gallery: [heroImg, anshunImg, caoCao, zhangFei, zhaoYun, liuBei],
    inheritors: '屯堡"神头"世袭传承 · 鲍屯、詹家屯、九溪村等村寨',
    history: '洪武十四年（1381），朱元璋命傅友德率军三十万征讨云贵，史称"太祖平滇"或"调北征南"。洪武十六年结束战事，设普定卫。将士自创以戏曲为形式的武术，演绎金戈铁骑、保家卫国的名人事迹。地戏直接源自弋阳腔，与傩戏本质迥异：地戏重历史记忆传承与尚武精神，傩戏重人神契约。',
    playDetails: [
      { name: '三国演义', role: '关云长', desc: '忠义武圣的代表剧目，半盔红脸，演绎过五关斩六将' },
      { name: '杨家将', role: '杨六郎 / 穆桂英', desc: '杨家忠烈抗击辽兵，女将凤翅盔为性别标识' },
      { name: '精忠传', role: '岳飞', desc: '大鹏星转世的岳飞，头盔装饰大鹏鸟，精忠报国' },
      { name: '封神演义', role: '姜子牙 / 哪吒', desc: '神魔斗法，星宿装饰的武将面具各具神格' }
    ],
    craftFeature: '脸子顶戴额前，便于居高观看；一堂脸子一般几十面，多者超100面；盘龙尖盔、凤翅盔、如意冠数种盔制',
    musicFeature: '仅用一锣一鼓伴奏，采用第三人称说唱形式，演员主唱众人帮腔，刚劲整齐富于战斗气息'
  },
  dejiang: {
    id: 'dejiang',
    name: '德江傩堂戏',
    type: '巫傩',
    region: '贵州 · 铜仁市 · 德江',
    coord: [108.14, 28.26],
    era: '明清以降 · 民间活态传承',
    origin: '巫傩与道教融合，围绕"冲傩还愿"的民间祈福体系',
    maskType: '全脸开脸 · 口部可活动（开口跳）· 雕刻细腻',
    feature: '民间傩坛 · 巫道合一 · 端公执仪',
    palette: '矿物白 + 烟褐 + 朱砂',
    performance: '傩堂设坛，法师"端公"执仪，逐疫纳吉，仪式为主',
    plays: ['开洞', '勾愿', '开山莽将', '捉黄鬼'],
    spirit: '禳灾 · 祈福 · 人神契约',
    quote: '端公摇扇，傩面开口，一拜一愿，冲傩还愿。',
    accent: '#3a6b6b',
    swatch: '#3a6b6b',
    stat: { age: 600, masks: 36, troops: '民间端公' },
    cover: dejiangImg1,
    gallery: [dejiangImg1, dejiangImg2, nuoMask1, nuoMask2, nuoMask3],
    inheritors: '"端公"（法师）执仪传承 · 土家族、苗族为主要传承群体',
    history: '傩戏是中国最古老的民间仪式戏剧之一，源于远古巫傩仪式活动。明清以来傩仪走向民间，德江傩堂戏以巫道合一的组织形式，围绕"冲傩还愿"展开。2006年入选首批国家级非遗，被誉为"中国戏剧活化石"。黔东北深受巴蜀文化影响，面具雕刻细腻，角色丰富多样。',
    playDetails: [
      { name: '开洞', role: '开山莽将', desc: '傩坛开坛第一戏，开山神劈开混沌，为众神开辟通路' },
      { name: '勾愿', role: '判官', desc: '判官手执生死簿，裁决阴阳，勾销信众祈愿' },
      { name: '开山莽将', role: '开路将军', desc: '青面獠牙，怒发冲冠，傩祭第一神，破障开道' },
      { name: '捉黄鬼', role: '牛头 / 马面', desc: '阴司差役拘拿作祟之鬼，驱瘟逐疫的仪式剧' }
    ],
    craftFeature: '全脸开脸，下颌以竹销铰接可张合（开口跳），是"开口傩"的灵魂；演员以舌抵内壁控制开合',
    musicFeature: '鼓点由疏至密、由缓至急，温和而富有叙事性，像一部有关家庭与农耕的"声音日记"'
  },
  // ========== 安徽 ==========
  chizhou: {
    id: 'chizhou',
    name: '池州傩戏',
    type: '乡傩',
    region: '安徽 · 池州市 · 贵池区',
    coord: [117.49, 30.66],
    era: '明代盛行 · 至今约500年',
    origin: '源于原始宗教信仰和图腾崇拜，以宗族为单位传承',
    maskType: '全脸木雕 · 彩绘脸子 · 宗族共有',
    feature: '宗族社祭 · 以姓为坛 · 目连戏融入',
    palette: '朱砂红 + 矿物黑 + 铅白',
    performance: '以宗族为单位演出，戴脸子表演，正月初七至十五最盛',
    plays: ['刘文龙', '孟姜女', '章文显', '摇钱记'],
    spirit: '宗族凝聚 · 祖灵祭祀 · 村社和谐',
    quote: '各姓有各坛，各坛有傩面，一族一戏，世代相承。',
    accent: '#c9a24b',
    swatch: '#c9a24b',
    stat: { age: 500, masks: 18, troops: '宗族世袭' },
    cover: maskAuspicious01,
    gallery: [maskAuspicious01, maskArchive01, nuoMask09],
    inheritors: '刘、姚、章、吴等大姓宗族世袭传承 · 贵池茅坦、刘街等乡镇',
    history: '池州傩戏源于原始宗教信仰和图腾崇拜，以宗族为单位演出，被誉为"戏曲活化石"。明代盛行，吸纳徽剧与目连戏优势，以宗族为单位戴脸子表演。2006年入选首批国家级非遗。池州傩戏保留了大量古剧目，如《刘文龙》《孟姜女》等，是研究中国戏曲起源的重要活态遗存。',
    playDetails: [
      { name: '刘文龙', role: '刘文龙', desc: '池州傩戏代表剧目，讲述刘文龙科举赴任的传奇故事' },
      { name: '孟姜女', role: '孟姜女', desc: '目连戏系列，孟姜女哭长城的傩戏演绎' },
      { name: '章文显', role: '章文显', desc: '宗族故事题材的傩戏剧目' },
      { name: '摇钱记', role: '杂角', desc: '酬神还愿题材，祈求财源广进' }
    ],
    craftFeature: '全脸木雕彩绘，以宗族为单位共有；一堂傩面代代相传，面具有"神灵附体"之意，不可随意更换',
    musicFeature: '以锣鼓伴奏为主，唱腔古朴，保留了大量明代戏曲音乐特征'
  },
  // ========== 江西 ==========
  nanfeng: {
    id: 'nanfeng',
    name: '南丰傩舞',
    type: '乡傩',
    region: '江西 · 抚州市 · 南丰县',
    coord: [116.53, 27.22],
    era: '始于汉初 · 兴于明清 · 两千余年',
    origin: '西汉初年传入，保留自西汉以来傩的古老传承印记',
    maskType: '全脸木雕 · 面具种类丰富 · 古朴粗犷',
    feature: '中国古代舞蹈活化石 · 祭祀与娱乐并存',
    palette: '朱砂红 + 矿物黑 + 铅白',
    performance: '春节期间表演，以舞蹈为主，伴以锣鼓',
    plays: ['开山', '纸钱', '雷公', '傩公傩母'],
    spirit: '驱邪纳吉 · 祖灵崇拜 · 舞蹈传承',
    quote: '汉初开傩，两千年不辍，石邮傩舞，活化石之名。',
    accent: '#3a6b6b',
    swatch: '#3a6b6b',
    stat: { age: 2000, masks: 30, troops: '民间艺人' },
    cover: heroImg,
    gallery: [heroImg, dejiangImg1, anshunImg],
    inheritors: '南丰县石邮村、水北村等大村世袭传承 · 多为家族式代代相传',
    history: '南丰傩舞始于汉初，兴于明清，被誉为"中国古代舞蹈活化石"。保留自西汉以来傩的古老传承印记，面具种类丰富，舞蹈古朴。2006年入选首批国家级非遗（傩舞类）。南丰现存傩班百余个，是江西傩文化核心区。',
    playDetails: [
      { name: '开山', role: '开山神', desc: '傩舞开坛第一戏，开山神劈山开路' },
      { name: '纸钱', role: '纸钱神', desc: '驱邪纳吉，焚烧纸钱送鬼' },
      { name: '雷公', role: '雷公电母', desc: '祭拜雷神，祈求风调雨顺' },
      { name: '傩公傩母', role: '傩公傩母', desc: '始祖崇拜，创世神话的傩舞演绎' }
    ],
    craftFeature: '面具全脸木雕，古朴粗犷，种类丰富；不同角色面具造型各异，是研究中国面具史的重要实物',
    musicFeature: '以锣鼓伴奏为主，节奏明快，舞步古朴，保留了大量古代舞蹈语汇'
  },
  wuyuan: {
    id: 'wuyuan',
    name: '婺源傩舞',
    type: '乡傩',
    region: '江西 · 上饶市 · 婺源县',
    coord: [117.86, 29.25],
    era: '起源远古图腾 · 盛于明清',
    origin: '远古图腾崇拜遗存，以"舞鬼"习俗为核心',
    maskType: '全脸木雕 · 面具兼具祭祀与娱乐功能',
    feature: '古朴原始 · "舞鬼"习俗 · 面具舞蹈',
    palette: '矿物黑 + 朱砂红 + 铅白',
    performance: '春节期间"舞鬼"表演，面具舞蹈兼具祭祀与娱乐',
    plays: ['舞鬼', '丞相操兵', '太阳相公', '和合'],
    spirit: '图腾崇拜 · 驱邪祈福 · 面具通神',
    quote: '舞鬼跳神，面具通灵，婺源古傩，千年一脉。',
    accent: '#3a6b6b',
    swatch: '#3a6b6b',
    stat: { age: 1000, masks: 24, troops: '民间艺人' },
    cover: nuoMask15,
    gallery: [nuoMask15, nuoMask25, maskArchive02],
    inheritors: '婺源县长径村、秋口镇等村寨传承 · 家族式传承为主',
    history: '婺源傩舞起源于远古图腾崇拜，以古朴原始的"舞鬼"习俗为核心，盛于明清。面具舞蹈兼具祭祀与娱乐功能，是研究中国傩文化演变的重要活态遗存。2006年入选首批国家级非遗（傩舞类）。婺源傩舞保留了大量古代舞蹈语汇，被称为"舞蹈活化石"。',
    playDetails: [
      { name: '舞鬼', role: '鬼面神', desc: '婺源傩舞核心节目，戴面具舞鬼驱邪' },
      { name: '丞相操兵', role: '丞相', desc: '历史题材傩舞，演绎将军操兵' },
      { name: '太阳相公', role: '太阳相公', desc: '太阳崇拜题材，祈求光明' },
      { name: '和合', role: '和合二仙', desc: '和合欢喜题材，祈求和睦' }
    ],
    craftFeature: '面具全脸木雕，古朴神秘，"舞鬼"面具兼具祭祀与娱乐功能',
    musicFeature: '以锣鼓伴奏为主，节奏古朴，舞步原始，保留了大量古代图腾舞蹈特征'
  },
  // ========== 湖南 ==========
  chenzhou: {
    id: 'chenzhou',
    name: '辰州傩戏',
    type: '巫傩',
    region: '湖南 · 怀化市 · 沅陵县',
    coord: [110.39, 28.45],
    era: '清康熙年间已有记载 · 300余年',
    origin: '湘西巫傩传统，融合楚文化与巴蜀文化',
    maskType: '全脸木雕 · 面具角色丰富 · 巫师执仪',
    feature: '湘西巫傩 · 古朴神秘 · 楚风遗存',
    palette: '朱砂红 + 矿物黑 + 烟褐',
    performance: '傩堂设坛，巫师执仪，逐疫纳吉，以戏剧为祭品',
    plays: ['孟姜女', '庞氏女', '龙王女', '七仙女'],
    spirit: '禳灾 · 祈福 · 楚风巫韵',
    quote: '辰俗巫作神戏，搬演孟姜女，傩坛之上，楚风千年。',
    accent: '#c0322a',
    swatch: '#c0322a',
    stat: { age: 300, masks: 28, troops: '民间巫师' },
    cover: maskFierce01,
    gallery: [maskFierce01, maskFierce02, nuoMask10],
    inheritors: '沅陵县七甲坪镇、五强溪镇等地巫师家族传承',
    history: '辰州傩戏又称湘西傩戏，《沅陵县志》载"辰俗巫作神戏，搬演孟姜女故事"。清康熙年间已有记载，保留古朴神秘色彩。傩戏重要代表，2006年入选首批国家级非遗。辰州傩戏融汇楚文化与巴蜀文化，是研究湘西巫傩传统的重要活态遗存。',
    playDetails: [
      { name: '孟姜女', role: '孟姜女', desc: '辰州傩戏代表剧目，孟姜女哭长城的傩戏演绎' },
      { name: '庞氏女', role: '庞氏女', desc: '家庭伦理题材，反映民间生活' },
      { name: '龙王女', role: '龙王女', desc: '神话题材，龙王之女下凡故事' },
      { name: '七仙女', role: '七仙女', desc: '仙凡相恋题材，祈求姻缘' }
    ],
    craftFeature: '面具全脸木雕，角色丰富，巫师执仪时佩戴；面具造型古朴，保留楚文化风格',
    musicFeature: '以锣鼓伴奏为主，唱腔古朴神秘，保留了大量湘西巫傩音乐特征'
  },
  // ========== 云南 ==========
  guansuo: {
    id: 'guansuo',
    name: '关索戏',
    type: '军傩',
    region: '云南 · 昆明市 · 阳宗镇小屯村',
    coord: [102.98, 24.68],
    era: '至今三百余年 · 清初传入',
    origin: '三国蜀汉传说，以关索（关羽之子）为主角',
    maskType: '全脸木雕 · 彩绘 · 三国武将造型',
    feature: '古老傩戏活化石 · 三国传说 · 娱神歌舞',
    palette: '朱砂红 + 矿物黑 + 铅白',
    performance: '春节期间演出，头戴面具、边唱边舞，保留娱神歌舞原始面貌',
    plays: ['关索战山', '三战吕布', '古城会', '长坂坡'],
    spirit: '忠义 · 英雄崇拜 · 蜀汉遗风',
    quote: '关索戴面具，边唱且舞，三百年来，蜀风犹存。',
    accent: '#c0322a',
    swatch: '#c0322a',
    stat: { age: 300, masks: 20, troops: '村民世袭' },
    cover: zhaoYun,
    gallery: [zhaoYun, caoCao, liuBei, zhangFei],
    inheritors: '阳宗镇小屯村村民世袭传承 · 以家族为单位',
    history: '关索戏流传于云南澄江（今属昆明阳宗海），至今三百余年。以三国蜀汉传说为题材，以关索（关羽之子）为主角，属古老傩戏"活化石"。演出时头戴面具、边唱边舞，保留娱神歌舞原始面貌。2011年入选国家级非遗。关索戏是研究三国文化在边疆传播的重要活态遗存。',
    playDetails: [
      { name: '关索战山', role: '关索', desc: '关索征战题材，英雄武勇的代表剧目' },
      { name: '三战吕布', role: '刘备/关羽/张飞', desc: '三英战吕布的经典三国故事' },
      { name: '古城会', role: '关羽', desc: '关羽古城相会兄弟，忠义主题' },
      { name: '长坂坡', role: '赵云', desc: '赵云长坂坡救阿斗，勇武题材' }
    ],
    craftFeature: '面具全脸木雕彩绘，三国武将造型，角色分明；面具以家族为单位世代相传',
    musicFeature: '以锣鼓伴奏为主，唱腔古朴，保留了大量明清戏曲音乐特征'
  },
  // ========== 贵州·撮泰吉 ==========
  cuotaiji: {
    id: 'cuotaiji',
    name: '威宁撮泰吉',
    type: '民族傩',
    region: '贵州 · 毕节市 · 威宁板底乡',
    coord: [104.28, 26.87],
    era: '古老彝族遗存 · 千年以上',
    origin: '彝语"变人戏"，彝族先民迁徙与农耕的仪式记忆',
    maskType: '黑白面具 · 粗犷古朴 · 模拟先民',
    feature: '人类进化史活化石 · 彝族独有 · 农耕祭祀',
    palette: '矿物黑 + 矿物白',
    performance: '农历正月初三至十五演出，戴面具模拟先民迁徙与农耕',
    plays: ['变人', '耕作', '迁徙', '祭祀'],
    spirit: '祖先记忆 · 农耕祭祀 · 民族迁徙',
    quote: '撮泰吉者，变人也。戴黑白面具，演先民事，千年一脉。',
    accent: '#a39e92',
    swatch: '#a39e92',
    stat: { age: 1000, masks: 6, troops: '彝族村民' },
    cover: nuoMask20,
    gallery: [nuoMask20, maskFierce02, nuoMask09],
    inheritors: '威宁板底乡裸嘎寨彝族村民世袭传承',
    history: '撮泰吉，彝语意为"变人戏"，威宁板底乡裸嘎寨独有，被誉为"人类进化史活化石"。表演者戴黑白面具，模拟先民迁徙与农耕场景，农历正月初三至十五演出，消灾祈福。2011年入选国家级非遗。撮泰吉是研究彝族文化与古代傩文化演变的重要活态遗存。',
    playDetails: [
      { name: '变人', role: '撮泰老人', desc: '撮泰吉核心节目，模拟人类从猿到人的进化过程' },
      { name: '耕作', role: '农夫', desc: '模拟先民开荒耕种的劳作场景' },
      { name: '迁徙', role: '族人', desc: '模拟彝族先民迁徙的历史记忆' },
      { name: '祭祀', role: '祭司', desc: '消灾祈福的祭祀仪式' }
    ],
    craftFeature: '黑白面具，粗犷古朴，模拟先民形象；面具以木材雕刻，涂黑白两色，造型原始',
    musicFeature: '以锣鼓伴奏为主，节奏古朴，唱腔原始，保留了大量彝族古歌特征'
  },
  // ========== 河北 ==========
  wuan: {
    id: 'wuan',
    name: '武安傩戏',
    type: '乡傩',
    region: '河北 · 邯郸市 · 武安固义村',
    coord: [114.20, 36.70],
    era: '明代 · 600余年',
    origin: '北方傩戏遗存，兼有军傩元素，以《捉黄鬼》为代表',
    maskType: '全脸木雕 · 面具粗犷 · 北方风格',
    feature: '北方傩戏 · 《捉黄鬼》· 社火融合',
    palette: '朱砂红 + 矿物黑 + 铅白',
    performance: '正月十四至十六演出，规模盛大，全村参与',
    plays: ['捉黄鬼', '阎王戏', '判官断案', '吊黑脸'],
    spirit: '驱邪逐疫 · 因果报应 · 村社凝聚',
    quote: '固义捉鬼，北方傩存，一村千人，锣鼓震天。',
    accent: '#c9a24b',
    swatch: '#c9a24b',
    stat: { age: 600, masks: 20, troops: '村民世袭' },
    cover: nuoMask10,
    gallery: [nuoMask10, maskArchive02, nuoMask25],
    inheritors: '武安固义村村民世袭传承 · 全村参与演出',
    history: '武安傩戏流传于河北邯郸武安固义村，明代传入，至今600余年。代表剧目《捉黄鬼》，是北方傩戏重要遗存。兼有军傩元素，以社火形式演出，规模盛大，全村参与。2006年入选首批国家级非遗。武安傩戏是研究北方傩文化的重要活态遗存。',
    playDetails: [
      { name: '捉黄鬼', role: '阎王/判官', desc: '武安傩戏代表剧目，捉拿作恶黄鬼，驱邪逐疫' },
      { name: '阎王戏', role: '阎王', desc: '阴司审判题材，因果报应主题' },
      { name: '判官断案', role: '判官', desc: '判官审理阴阳案件的仪式戏剧' },
      { name: '吊黑脸', role: '黑脸神', desc: '驱邪纳吉题材，黑脸神逐疫' }
    ],
    craftFeature: '面具全脸木雕，粗犷古朴，北方风格；面具以村为单位共有，代代相传',
    musicFeature: '以锣鼓伴奏为主，节奏刚劲，唱腔古朴，保留了大量明代北方戏曲音乐特征'
  },
  // ========== 广东 ==========
  zhanjiang: {
    id: 'zhanjiang',
    name: '湛江傩舞',
    type: '雷傩',
    region: '广东 · 湛江市 · 雷州/吴川',
    coord: [110.09, 20.91],
    era: '起源于原始社会图腾崇拜 · 古老独有',
    origin: '古代雷州半岛人民敬天崇雷形成的独特"雷傩舞"',
    maskType: '全脸木雕 · 雷将面具 · 五方配色',
    feature: '雷傩独有 · 五方雷将 · 图腾崇拜',
    palette: '朱砂红 + 矿物黑 + 铅白 + 金黄 + 矿物青',
    performance: '农历正月/二月表演，以雷首公与五方雷将为主体',
    plays: ['舞雷将', '五方雷', '走清将', '遣灾'],
    spirit: '敬天崇雷 · 驱邪逐疫 · 祈风调雨顺',
    quote: '雷州半岛，敬天崇雷，五方雷将，傩舞千年。',
    accent: '#7d3c98',
    swatch: '#7d3c98',
    stat: { age: 1000, masks: 12, troops: '村民世袭' },
    cover: nuoMask05,
    gallery: [nuoMask05, maskAuspicious02, nuoMask09],
    inheritors: '雷州市、吴川市村民世袭传承',
    history: '湛江傩舞（雷州傩舞）起源于原始社会图腾崇拜祭祀仪式，是古代雷州半岛人民敬天崇雷形成的独特"雷傩舞"。以雷首公与东、南、西、北、中五方雷将为主体，面具造型独特。2006年入选首批国家级非遗（傩舞类）。湛江傩舞是研究中国古代图腾崇拜与傩文化演变的重要活态遗存。',
    playDetails: [
      { name: '舞雷将', role: '雷首公', desc: '雷傩核心节目，雷首公率五方雷将驱邪' },
      { name: '五方雷', role: '五方雷将', desc: '五方雷将分镇东南西北中，驱邪逐疫' },
      { name: '走清将', role: '雷将', desc: '巡游驱邪，清扫村寨' },
      { name: '遣灾', role: '杂角', desc: '送走灾厄，祈求平安' }
    ],
    craftFeature: '面具全脸木雕，雷将造型独特，五方配色分明；面具以村为单位共有，代代相传',
    musicFeature: '以锣鼓伴奏为主，节奏刚烈，保留了大量古代雷州半岛音乐特征'
  },
  // ========== 贵州·补充 ==========
  yanhe: {
    id: 'yanhe', name: '沿河傩堂戏', type: '巫傩',
    region: '贵州 · 铜仁市 · 沿河土家族自治县',
    coord: [108.5, 28.56], era: '明清以降 · 民间活态传承',
    origin: '黔东北巫傩传统，与德江傩堂戏同源',
    maskType: '全脸木雕 · 开口跳 · 雕刻粗犷',
    feature: '土家族傩堂戏 · 巫道合一 · 冲傩还愿',
    palette: '矿物白 + 烟褐 + 朱砂',
    performance: '傩堂设坛，端公执仪，春节期间冲傩还愿',
    plays: ['开山', '勾愿', '关公扫堂', '甘生赶考'],
    spirit: '禳灾 · 祈福 · 土家傩韵',
    quote: '沿河端公，土家傩韵，一坛一愿，千山回响。',
    accent: '#3a6b6b', swatch: '#3a6b6b',
    stat: { age: 500, masks: 24, troops: '土家端公' },
    cover: nuoMask2, gallery: [nuoMask2, nuoMask1, maskArchive01],
    inheritors: '沿河土家族自治县民间端公世袭传承',
    history: '沿河傩堂戏属黔东北巫傩系统，与德江傩堂戏同源。沿河土家族自治县保存了大量傩堂戏坛班，以土家族为主要传承群体。傩仪围绕"冲傩还愿"展开，面具雕刻粗犷有力。2006年与德江傩堂戏一同列入国家级非遗扩展项目。',
    playDetails: [
      { name: '开山', role: '开山莽将', desc: '傩坛开坛第一戏，开山神劈开混沌' },
      { name: '勾愿', role: '判官', desc: '判官勾销信众祈愿，人神契约' },
      { name: '关公扫堂', role: '关公', desc: '关公扫荡坛场，驱邪净场' },
      { name: '甘生赶考', role: '甘生', desc: '世俗题材，书生赶考的趣剧' }
    ],
    craftFeature: '全脸木雕，下颌可活动（开口跳），雕刻粗犷，保留土家族风格',
    musicFeature: '以锣鼓伴奏为主，唱腔古朴，保留了大量土家族音乐元素'
  },
  sinan: {
    id: 'sinan', name: '思南傩戏', type: '巫傩',
    region: '贵州 · 铜仁市 · 思南县',
    coord: [108.25, 27.94], era: '明清以降 · 民间活态传承',
    origin: '黔东北巫傩传统，受巴蜀文化影响',
    maskType: '全脸木雕 · 彩绘 · 雕刻精细',
    feature: '黔东北傩堂戏 · 端公执仪 · 傩愿戏',
    palette: '朱砂红 + 矿物黑 + 铅白',
    performance: '傩堂设坛，端公执仪，冲傩还愿',
    plays: ['开洞', '勾愿', '土地献宝', '笑面童子'],
    spirit: '禳灾 · 祈福 · 乡土秩序',
    quote: '思南傩坛，乌江之畔，端公开愿，一鼓一拜。',
    accent: '#3a6b6b', swatch: '#3a6b6b',
    stat: { age: 500, masks: 20, troops: '民间端公' },
    cover: nuoMask3, gallery: [nuoMask3, nuoMask4, maskArchive02],
    inheritors: '思南县许家坝、塘头等地端公世袭传承',
    history: '思南傩戏属黔东北巫傩系统，深受巴蜀文化影响。思南是乌江中游重要商埠，傩戏在此与商贸文化交融。面具雕刻精细，角色丰富。2006年与德江傩堂戏一同列入国家级非遗扩展项目。',
    playDetails: [
      { name: '开洞', role: '开山莽将', desc: '傩坛开坛，开山神破障开道' },
      { name: '勾愿', role: '判官', desc: '判官裁决信众祈愿' },
      { name: '土地献宝', role: '土地神', desc: '土地神赐福信众，吉神戏' },
      { name: '笑面童子', role: '笑面童子', desc: '和合欢喜，傩堂收尾暖色' }
    ],
    craftFeature: '全脸木雕彩绘，雕刻精细，角色丰富；受巴蜀风格影响',
    musicFeature: '以锣鼓伴奏为主，唱腔融合川渝元素与本土土家音乐'
  },
  pingba: {
    id: 'pingba', name: '平坝地戏', type: '军傩',
    region: '贵州 · 安顺市 · 平坝区 · 天龙屯堡',
    coord: [106.23, 26.42], era: '明初 · 600余年',
    origin: '明初屯军入黔，与安顺地戏同源',
    maskType: '武将半盔 · 仅遮上半脸 · 盘龙尖盔',
    feature: '屯堡军傩 · 尚武演戏 · 屯堡文化核心',
    palette: '朱砂红 + 矿物黑 + 丁木原色',
    performance: '村野旷地围场演出，一锣一鼓伴奏',
    plays: ['三国演义', '薛丁山征西', '封神演义'],
    spirit: '军魂 · 忠义 · 历史记忆',
    quote: '平坝屯堡，军傩一脉，天龙屯中，六百年不辍。',
    accent: '#c0322a', swatch: '#c0322a',
    stat: { age: 600, masks: 22, troops: '屯堡汉人后裔' },
    cover: nuoMask4, gallery: [nuoMask4, caoCao, zhangFei],
    inheritors: '平坝天龙屯堡、鲍屯等地屯堡后裔世袭传承',
    history: '平坝地戏与安顺地戏同源，均为明初屯军入黔后形成的军傩。平坝天龙屯堡是屯堡文化核心区，保存了大量明代江南文化遗存。地戏在此不仅是娱乐，更是屯堡人维系族群认同的重要方式。2006年与安顺地戏一同列入国家级非遗。',
    playDetails: [
      { name: '三国演义', role: '关云长', desc: '忠义武圣代表剧目，红脸半盔' },
      { name: '薛丁山征西', role: '薛丁山', desc: '唐代征西故事，武将题材' },
      { name: '封神演义', role: '姜子牙', desc: '神魔斗法，星宿装饰武将面具' }
    ],
    craftFeature: '半盔脸子顶戴额前，盘龙尖盔、凤翅盔数种盔制；一堂脸子几十面',
    musicFeature: '仅用一锣一鼓伴奏，第三人称说唱，刚劲整齐富于战斗气息'
  },
  fuquan: {
    id: 'fuquan', name: '福泉阳戏', type: '酬神',
    region: '贵州 · 黔南州 · 福泉市',
    coord: [107.87, 26.7], era: '源于明初 · 600余年',
    origin: '傩仪世俗化分支，以"娱人纳吉"为主旨',
    maskType: '全脸木雕 · 彩绘 · 面具较傩堂戏精致',
    feature: '阳戏 · 娱人纳吉 · 内坛法事外坛戏',
    palette: '朱砂红 + 矿物黑 + 金箔',
    performance: '春节及还愿时演出，分内坛（法事）与外坛（戏剧）',
    plays: ['孟姜女', '庞氏女', '安安送米', '二郎神'],
    spirit: '还愿 · 纳吉 · 娱人娱神',
    quote: '福泉阳戏，娱人纳吉，内外两坛，还愿祈福。',
    accent: '#e8a82e', swatch: '#e8a82e',
    stat: { age: 600, masks: 18, troops: '民间艺人' },
    cover: maskAuspicious02, gallery: [maskAuspicious02, maskAuspicious01, nuoMask09],
    inheritors: '福泉市城厢镇、牛场镇等地民间艺人传承',
    history: '福泉阳戏源于明初，是傩仪世俗化的产物。与傩堂戏不同，阳戏以"娱人纳吉"为主旨，分内坛（法事）与外坛（戏剧）。面具较傩堂戏精致，彩绘鲜艳。2006年入选首批国家级非遗扩展项目。福泉阳戏是研究傩戏从祭祀向戏剧演进的重要活态遗存。',
    playDetails: [
      { name: '孟姜女', role: '孟姜女', desc: '阳戏代表剧目，孟姜女哭长城' },
      { name: '庞氏女', role: '庞氏女', desc: '家庭伦理题材，劝善教化' },
      { name: '安安送米', role: '安安', desc: '孝道题材，少年送米孝母' },
      { name: '二郎神', role: '二郎神', desc: '神将题材，驱邪斩蛟' }
    ],
    craftFeature: '全脸木雕彩绘，面具较傩堂戏精致；金箔贴绘，彩绘鲜艳',
    musicFeature: '以锣鼓伴奏为主，唱腔欢快，娱人性强，融合了川剧元素'
  },
  libo: {
    id: 'libo', name: '荔波布依傩', type: '民族傩',
    region: '贵州 · 黔南州 · 荔波县',
    coord: [107.88, 25.41], era: '明清以降 · 民间活态传承',
    origin: '布依族民间祭祀仪式，融合汉族傩戏元素',
    maskType: '全脸木雕 · 布依族风格 · 色彩浓烈',
    feature: '布依族傩戏 · 民族融合 · 农耕祭祀',
    palette: '朱砂红 + 矿物黑 + 矿物青',
    performance: '春节期间演出，以布依语演唱',
    plays: ['交恩', '打锺', '杜主', '土地'],
    spirit: '驱邪 · 祈丰 · 布依风情',
    quote: '荔波布依，傩面通神，布依语唱，山间回响。',
    accent: '#a39e92', swatch: '#a39e92',
    stat: { age: 400, masks: 14, troops: '布依族村民' },
    cover: nuoMask09, gallery: [nuoMask09, maskArchive01, nuoMask25],
    inheritors: '荔波县瑶山、黎明等地布依族村民传承',
    history: '荔波布依傩是布依族民间祭祀仪式与汉族傩戏融合的产物。面具造型独特，色彩浓烈，以布依语演唱。是研究民族傩文化融合的重要活态遗存。荔波布依傩展现了傩文化在少数民族地区的本土化变体。',
    playDetails: [
      { name: '交恩', role: '交恩神', desc: '布依傩核心仪式戏，酬神还愿' },
      { name: '打锺', role: '锺神', desc: '驱邪逐疫，打锺驱鬼' },
      { name: '杜主', role: '社主', desc: '土地祭祀，祈求丰收' },
      { name: '土地', role: '土地神', desc: '土地神赐福，保佑一方' }
    ],
    craftFeature: '全脸木雕，布依族风格，色彩浓烈，造型独特',
    musicFeature: '以锣鼓伴奏为主，唱腔融合布依族民歌元素，以布依语演唱'
  },
  daozhen: {
    id: 'daozhen', name: '道真仡佬傩', type: '巫傩',
    region: '贵州 · 遵义市 · 道真仡佬族苗族自治县',
    coord: [107.6, 28.88], era: '明清以降 · 民间活态传承',
    origin: '仡佬族巫傩传统，融合苗族、土家族元素',
    maskType: '全脸木雕 · 仡佬族风格 · 雕刻古朴',
    feature: '仡佬族傩戏 · 巫道合一 · 民族融合',
    palette: '矿物白 + 烟褐 + 朱砂',
    performance: '傩堂设坛，仡佬族端公执仪',
    plays: ['开山', '勾愿', '关公扫堂', '打回'],
    spirit: '禳灾 · 祈福 · 仡佬傩韵',
    quote: '道真仡佬，傩坛古韵，端公开愿，山间回响。',
    accent: '#3a6b6b', swatch: '#3a6b6b',
    stat: { age: 500, masks: 16, troops: '仡佬族端公' },
    cover: nuoMasks, gallery: [nuoMasks, nuoMask1, maskArchive02],
    inheritors: '道真仡佬族苗族自治县民间端公世袭传承',
    history: '道真仡佬傩是仡佬族巫傩传统的代表，融合了苗族、土家族等民族元素。道真是全国两个仡佬族自治县之一，保存了大量仡佬族傩文化。傩堂戏围绕"冲傩还愿"展开，面具雕刻古朴。2006年与德江傩堂戏一同列入国家级非遗扩展项目。',
    playDetails: [
      { name: '开山', role: '开山莽将', desc: '傩坛开坛，开山神破障开道' },
      { name: '勾愿', role: '判官', desc: '判官勾销信众祈愿' },
      { name: '关公扫堂', role: '关公', desc: '关公扫荡坛场，驱邪净场' },
      { name: '打回', role: '杂角', desc: '送神仪式，傩堂收尾' }
    ],
    craftFeature: '全脸木雕，仡佬族风格，雕刻古朴，保留民族特色',
    musicFeature: '以锣鼓伴奏为主，唱腔融合仡佬族古歌与苗族音乐元素'
  },
  wuchuan: {
    id: 'wuchuan', name: '务川傩戏', type: '巫傩',
    region: '贵州 · 遵义市 · 务川仡佬族苗族自治县',
    coord: [107.98, 28.55], era: '明清以降 · 民间活态传承',
    origin: '黔东北巫傩传统，仡佬族聚居区',
    maskType: '全脸木雕 · 开口跳 · 雕刻粗犷',
    feature: '仡佬族傩堂戏 · 巫道合一 · 冲傩还愿',
    palette: '矿物白 + 烟褐 + 朱砂',
    performance: '傩堂设坛，端公执仪，冲傩还愿',
    plays: ['开洞', '勾愿', '土地献宝', '笑面'],
    spirit: '禳灾 · 祈福 · 仡佬傩韵',
    quote: '务川傩坛，仡佬古韵，一锣一鼓，冲傩还愿。',
    accent: '#3a6b6b', swatch: '#3a6b6b',
    stat: { age: 500, masks: 18, troops: '仡佬族端公' },
    cover: maskArchive01, gallery: [maskArchive01, nuoMask2, nuoMask3],
    inheritors: '务川仡佬族苗族自治县民间端公世袭传承',
    history: '务川仡佬傩是黔东北巫傩系统的重要组成，与道真仡佬傩同源。务川是全国两个仡佬族自治县之一，保存了大量仡佬族傩文化。傩堂戏围绕"冲傩还愿"展开，面具雕刻粗犷。2006年与德江傩堂戏一同列入国家级非遗扩展项目。',
    playDetails: [
      { name: '开洞', role: '开山莽将', desc: '傩坛开坛第一戏' },
      { name: '勾愿', role: '判官', desc: '判官勾销祈愿，人神契约' },
      { name: '土地献宝', role: '土地神', desc: '土地神赐福，吉神戏' },
      { name: '笑面', role: '笑面童子', desc: '和合欢喜，傩堂收尾' }
    ],
    craftFeature: '全脸木雕，下颌可活动，雕刻粗犷，保留仡佬族风格',
    musicFeature: '以锣鼓伴奏为主，唱腔古朴，融合仡佬族音乐元素'
  },
  cengong: {
    id: 'cengong', name: '思州傩戏', type: '巫傩',
    region: '贵州 · 黔东南州 · 岑巩县',
    coord: [108.73, 27.16], era: '明清以降 · 民间活态传承',
    origin: '黔东南巫傩传统，融合苗族、侗族元素',
    maskType: '全脸木雕 · 彩绘 · 雕刻细腻',
    feature: '思州傩戏 · 巫道合一 · 傩愿戏',
    palette: '朱砂红 + 矿物黑 + 铅白',
    performance: '傩堂设坛，端公执仪，冲傩还愿',
    plays: ['开山', '勾愿', '关公扫堂', '甘生赶考'],
    spirit: '禳灾 · 祈福 · 思州古韵',
    quote: '思州古郡，傩坛古戏，端公开愿，一鼓千年。',
    accent: '#3a6b6b', swatch: '#3a6b6b',
    stat: { age: 500, masks: 18, troops: '民间端公' },
    cover: nuoMask25, gallery: [nuoMask25, nuoMask09, maskArchive01],
    inheritors: '岑巩县民间端公世袭传承',
    history: '思州傩戏属黔东南巫傩系统，岑巩古为思州治所，历史文化底蕴深厚。思州傩戏融合了苗族、侗族等民族元素，面具雕刻细腻。傩堂戏围绕"冲傩还愿"展开。思州傩戏是研究黔东南傩文化演变的重要活态遗存。',
    playDetails: [
      { name: '开山', role: '开山莽将', desc: '傩坛开坛，开山神破障' },
      { name: '勾愿', role: '判官', desc: '判官勾销祈愿' },
      { name: '关公扫堂', role: '关公', desc: '关公扫荡坛场，驱邪净场' },
      { name: '甘生赶考', role: '甘生', desc: '世俗题材趣剧' }
    ],
    craftFeature: '全脸木雕彩绘，雕刻细腻，融合苗侗风格',
    musicFeature: '以锣鼓伴奏为主，唱腔融合苗族、侗族音乐元素'
  },
  liping: {
    id: 'liping', name: '黎平侗傩', type: '民族傩',
    region: '贵州 · 黔东南州 · 黎平县',
    coord: [109.18, 26.08], era: '明清以降 · 民间活态传承',
    origin: '侗族民间祭祀仪式，融合汉族傩戏元素',
    maskType: '全脸木雕 · 侗族风格 · 色彩朴素',
    feature: '侗族傩戏 · 民族融合 · 侗声傩韵',
    palette: '矿物黑 + 矿物白 + 朱砂',
    performance: '春节期间演出，以侗语演唱',
    plays: ['萨岁', '暖间', '侗戏傩', '祈丰'],
    spirit: '驱邪 · 祈丰 · 侗族风情',
    quote: '黎平侗乡，萨岁通神，侗语唱傩，鼓楼回响。',
    accent: '#a39e92', swatch: '#a39e92',
    stat: { age: 400, masks: 12, troops: '侗族村民' },
    cover: maskArchive02, gallery: [maskArchive02, nuoMask15, nuoMask05],
    inheritors: '黎平县侗族村寨世袭传承',
    history: '黎平侗傩是侗族民间祭祀仪式与汉族傩戏融合的产物。以侗语演唱，融合侗族声腔。黎平是侗族文化核心区，侗傩展现了傩文化在侗族地区的本土化变体。是研究民族傩文化融合的重要活态遗存。',
    playDetails: [
      { name: '萨岁', role: '萨岁神', desc: '侗族始祖母神祭祀，侗傩核心' },
      { name: '暖间', role: '暖间神', desc: '驱邪逐疫，保护村寨' },
      { name: '侗戏傩', role: '杂角', desc: '侗戏与傩戏融合的世俗剧目' },
      { name: '祈丰', role: '祭司', desc: '祈求丰收的农耕祭祀' }
    ],
    craftFeature: '全脸木雕，侗族风格，色彩朴素，造型简练',
    musicFeature: '以锣鼓伴奏为主，唱腔融合侗族大歌元素，以侗语演唱'
  },
  // ========== 江西·补充 ==========
  wanzai: {
    id: 'wanzai', name: '万载开口傩', type: '乡傩',
    region: '江西 · 宜春市 · 万载县',
    coord: [114.45, 28.10], era: '始于宋元 · 兴于明清 · 800余年',
    origin: '赣西乡傩传统，以"开口傩"为特色',
    maskType: '全脸木雕 · 下颌可活动 · 开口跳',
    feature: '开口傩 · 面具能说话 · 赣西乡傩',
    palette: '朱砂红 + 矿物黑 + 铅白',
    performance: '春节期间表演，面具下颌可活动，演员边跳边说唱',
    plays: ['开山', '关公', '鲍三娘', '比干'],
    spirit: '驱邪 · 纳吉 · 开口通神',
    quote: '万载傩面，开口能言，一跳一说，人神共欢。',
    accent: '#c9a24b', swatch: '#c9a24b',
    stat: { age: 800, masks: 16, troops: '村民世袭' },
    cover: maskFierce02, gallery: [maskFierce02, nuoMask10, nuoMask25],
    inheritors: '万载县株潭镇、潭埠镇等地村民世袭传承',
    history: '万载开口傩是赣西乡傩的代表，以"开口傩"为最大特色——面具下颌可活动，演员边跳边说唱。始于宋元，兴于明清，至今800余年。2008年入选国家级非遗扩展项目。万载开口傩是研究中国傩面具形制演变的重要活态遗存。',
    playDetails: [
      { name: '开山', role: '开山神', desc: '开坛第一戏，开山神劈山开路' },
      { name: '关公', role: '关公', desc: '忠义武圣驱邪戏' },
      { name: '鲍三娘', role: '鲍三娘', desc: '三国女将题材，巾帼英雄' },
      { name: '比干', role: '比干', desc: '忠臣题材，比干剖心' }
    ],
    craftFeature: '全脸木雕，下颌可活动（开口跳），是开口傩的灵魂机关',
    musicFeature: '以锣鼓伴奏为主，节奏明快，演员边跳边说唱'
  },
  lean: {
    id: 'lean', name: '乐安傩舞', type: '乡傩',
    region: '江西 · 抚州市 · 乐安县',
    coord: [115.83, 27.43], era: '始于宋代 · 千余年',
    origin: '赣东乡傩传统，与南丰傩舞同源',
    maskType: '全脸木雕 · 古朴粗犷 · 色彩浓烈',
    feature: '赣东乡傩 · 古朴舞步 · 驱邪纳吉',
    palette: '朱砂红 + 矿物黑 + 铅白',
    performance: '春节期间表演，以舞蹈为主',
    plays: ['开山', '雷公', '纸钱', '傩公傩母'],
    spirit: '驱邪 · 纳吉 · 舞蹈传承',
    quote: '乐安傩舞，古朴一脉，赣东山间，千年不辍。',
    accent: '#c9a24b', swatch: '#c9a24b',
    stat: { age: 1000, masks: 14, troops: '村民世袭' },
    cover: nuoMask05, gallery: [nuoMask05, maskAuspicious02, nuoMask09],
    inheritors: '乐安县流坑村、东湖村等地村民世袭传承',
    history: '乐安傩舞属赣东乡傩系统，与南丰傩舞同源。乐安县保存了大量古傩舞语汇，舞步古朴。流坑古村是乐安傩舞的核心传承地。2008年入选国家级非遗扩展项目。',
    playDetails: [
      { name: '开山', role: '开山神', desc: '开坛驱邪，开山神劈山' },
      { name: '雷公', role: '雷公', desc: '雷神崇拜，祈求风调雨顺' },
      { name: '纸钱', role: '纸钱神', desc: '焚烧纸钱，送鬼驱邪' },
      { name: '傩公傩母', role: '傩公傩母', desc: '始祖崇拜，创世神话' }
    ],
    craftFeature: '全脸木雕，古朴粗犷，色彩浓烈',
    musicFeature: '以锣鼓伴奏为主，节奏古朴，舞步原始'
  },
  dean: {
    id: 'dean', name: '德安潘公戏', type: '乡傩',
    region: '江西 · 九江市 · 德安县',
    coord: [115.48, 29.33], era: '始于明初 · 600余年',
    origin: '赣北乡傩，以潘公（地方保护神）为主角',
    maskType: '全脸木雕 · 潘公面具 · 彩绘',
    feature: '赣北乡傩 · 潘公信仰 · 宗族祭祀',
    palette: '朱砂红 + 矿物黑 + 金箔',
    performance: '春节期间宗族祭祀演出',
    plays: ['潘公斩妖', '潘公巡境', '土地献宝', '和合'],
    spirit: '驱邪 · 庇佑 · 宗族凝聚',
    quote: '德安潘公，镇一方平安，傩面之下，宗族一心。',
    accent: '#c9a24b', swatch: '#c9a24b',
    stat: { age: 600, masks: 10, troops: '宗族世袭' },
    cover: nuoMask10, gallery: [nuoMask10, maskArchive02, nuoMask25],
    inheritors: '德安县潘氏宗族世袭传承',
    history: '德安潘公戏是赣北乡傩的代表，以地方保护神潘公为主角。以宗族为单位传承，潘氏宗族为核心传承群体。面具以潘公面具为主，造型独特。德安潘公戏是研究地方神灵信仰与傩文化融合的重要遗存。',
    playDetails: [
      { name: '潘公斩妖', role: '潘公', desc: '潘公斩妖除魔，保护一方' },
      { name: '潘公巡境', role: '潘公', desc: '潘公巡视村境，驱邪庇佑' },
      { name: '土地献宝', role: '土地神', desc: '土地神赐福，吉神戏' },
      { name: '和合', role: '和合二仙', desc: '和合欢喜，收尾暖色' }
    ],
    craftFeature: '全脸木雕彩绘，潘公面具造型独特，以宗族为单位共有',
    musicFeature: '以锣鼓伴奏为主，唱腔古朴，保留赣北地方音乐特征'
  },
  // ========== 湖南·补充 ==========
  linwu: {
    id: 'linwu', name: '临武傩戏', type: '乡傩',
    region: '湖南 · 郴州市 · 临武县',
    coord: [112.56, 25.28], era: '始于明初 · 600余年',
    origin: '湘南乡傩，融合瑶族文化元素',
    maskType: '全脸木雕 · 彩绘 · 融合瑶族风格',
    feature: '湘南乡傩 · 民族融合 · 宗族祭祀',
    palette: '朱砂红 + 矿物黑 + 矿物青',
    performance: '春节期间宗族演出，以瑶汉融合风格为特色',
    plays: ['盘王', '还愿', '关公', '土地'],
    spirit: '驱邪 · 祈丰 · 瑶汉融合',
    quote: '临武傩戏，瑶汉一坛，盘王座前，傩面通神。',
    accent: '#c9a24b', swatch: '#c9a24b',
    stat: { age: 600, masks: 14, troops: '村民世袭' },
    cover: nuoMask15, gallery: [nuoMask15, nuoMask25, maskArchive01],
    inheritors: '临武县民间村民世袭传承，瑶汉杂居区',
    history: '临武傩戏是湘南乡傩的代表，融合了瑶族文化元素。临武地处瑶汉杂居区，傩戏在此形成了独特的瑶汉融合风格。面具造型融合瑶族风格，色彩独特。2014年入选国家级非遗扩展项目。',
    playDetails: [
      { name: '盘王', role: '盘王', desc: '瑶族始祖盘王祭祀，瑶汉融合' },
      { name: '还愿', role: '杂角', desc: '还愿祈福，酬神戏' },
      { name: '关公', role: '关公', desc: '忠义驱邪戏' },
      { name: '土地', role: '土地神', desc: '土地赐福，吉神戏' }
    ],
    craftFeature: '全脸木雕彩绘，融合瑶族风格，色彩独特',
    musicFeature: '以锣鼓伴奏为主，唱腔融合瑶族民歌与湘南地方戏曲'
  },
  meishan: {
    id: 'meishan', name: '梅山傩戏', type: '巫傩',
    region: '湖南 · 娄底市 · 新化县',
    coord: [111.30, 27.73], era: '源于远古巫傩 · 千年以上',
    origin: '梅山文化巫傩传统，古梅山蛮遗存',
    maskType: '全脸木雕 · 古朴粗犷 · 原始风格',
    feature: '梅山巫傩 · 古老原始 · 蚩尤遗风',
    palette: '矿物黑 + 矿物白 + 朱砂',
    performance: '傩堂设坛，巫师执仪，冲傩还愿',
    plays: ['开山', '和梅山', '倒路', '架桥'],
    spirit: '驱邪 · 祈福 · 梅山古韵',
    quote: '梅山傩韵，蚩尤遗风，巫师起坛，千年回响。',
    accent: '#3a6b6b', swatch: '#3a6b6b',
    stat: { age: 1000, masks: 16, troops: '民间巫师' },
    cover: nuoMask20, gallery: [nuoMask20, maskFierce02, nuoMask09],
    inheritors: '新化县民间巫师家族世袭传承',
    history: '梅山傩戏源于古梅山蛮的巫傩传统，是梅山文化的重要组成部分。古梅山地区（今新化、安化一带）长期不受中央管辖，保留了古老的巫傩仪式。面具古朴粗犷，原始风格浓厚。2014年入选国家级非遗扩展项目。梅山傩戏被誉为研究中国巫傩文化起源的"活化石"。',
    playDetails: [
      { name: '开山', role: '开山神', desc: '开坛驱邪，开山神破障' },
      { name: '和梅山', role: '梅山神', desc: '梅山始祖祭祀，核心仪式' },
      { name: '倒路', role: '杂角', desc: '驱邪逐疫，倒路送鬼' },
      { name: '架桥', role: '杂角', desc: '架桥渡魂，引渡亡灵' }
    ],
    craftFeature: '全脸木雕，古朴粗犷，原始风格浓厚，保留古梅山面具特征',
    musicFeature: '以锣鼓伴奏为主，唱腔原始古朴，保留了大量梅山古歌元素'
  },
  tongdao: {
    id: 'tongdao', name: '通道侗傩', type: '民族傩',
    region: '湖南 · 怀化市 · 通道侗族自治县',
    coord: [109.78, 26.16], era: '明清以降 · 民间活态传承',
    origin: '侗族民间祭祀仪式，融合汉族傩戏',
    maskType: '全脸木雕 · 侗族风格 · 色彩朴素',
    feature: '侗族傩戏 · 民族融合 · 侗声傩韵',
    palette: '矿物黑 + 矿物白 + 朱砂',
    performance: '春节期间演出，以侗语演唱',
    plays: ['萨岁', '暖间', '祈丰', '还愿'],
    spirit: '驱邪 · 祈丰 · 侗族风情',
    quote: '通道侗乡，萨岁通神，鼓楼之下，傩舞千年。',
    accent: '#a39e92', swatch: '#a39e92',
    stat: { age: 400, masks: 12, troops: '侗族村民' },
    cover: maskAuspicious01, gallery: [maskAuspicious01, nuoMask15, nuoMask05],
    inheritors: '通道侗族自治县侗族村寨世袭传承',
    history: '通道侗傩是侗族民间祭祀仪式与汉族傩戏融合的产物。通道是湖南重要的侗族聚居区，保存了大量侗族文化。侗傩以侗语演唱，融合侗族声腔。2014年入选国家级非遗扩展项目。',
    playDetails: [
      { name: '萨岁', role: '萨岁神', desc: '侗族始祖母神祭祀' },
      { name: '暖间', role: '暖间神', desc: '驱邪逐疫，保护村寨' },
      { name: '祈丰', role: '祭司', desc: '祈求丰收的农耕祭祀' },
      { name: '还愿', role: '杂角', desc: '还愿酬神，人神契约' }
    ],
    craftFeature: '全脸木雕，侗族风格，色彩朴素，造型简练',
    musicFeature: '以锣鼓伴奏为主，唱腔融合侗族大歌元素，以侗语演唱'
  },
  // ========== 湖北·补充 ==========
  enshi: {
    id: 'enshi', name: '恩施傩戏', type: '巫傩',
    region: '湖北 · 恩施土家族苗族自治州',
    coord: [109.49, 30.27], era: '明清以降 · 民间活态传承',
    origin: '鄂西巫傩传统，土家族聚居区',
    maskType: '全脸木雕 · 开口跳 · 雕刻精细',
    feature: '土家族傩戏 · 巫道合一 · 冲傩还愿',
    palette: '矿物白 + 烟褐 + 朱砂',
    performance: '傩堂设坛，端公执仪，冲傩还愿',
    plays: ['开山', '勾愿', '关公扫堂', '打回'],
    spirit: '禳灾 · 祈福 · 土家傩韵',
    quote: '恩施傩坛，土家端公，一锣一鼓，冲傩还愿。',
    accent: '#3a6b6b', swatch: '#3a6b6b',
    stat: { age: 500, masks: 22, troops: '土家族端公' },
    cover: nuoMask1, gallery: [nuoMask1, nuoMask2, maskArchive01],
    inheritors: '恩施三岔乡、红土乡等地土家族端公世袭传承',
    history: '恩施傩戏属鄂西巫傩系统，是土家族傩文化的代表。恩施是湖北唯一的少数民族自治州，保存了大量土家族傩文化。傩堂戏围绕"冲傩还愿"展开，面具雕刻精细。2008年入选国家级非遗扩展项目。恩施傩戏与德江傩堂戏同源，是研究鄂黔傩文化走廊的重要活态遗存。',
    playDetails: [
      { name: '开山', role: '开山莽将', desc: '傩坛开坛，开山神破障' },
      { name: '勾愿', role: '判官', desc: '判官勾销祈愿，人神契约' },
      { name: '关公扫堂', role: '关公', desc: '关公扫荡坛场，驱邪净场' },
      { name: '打回', role: '杂角', desc: '送神仪式，傩堂收尾' }
    ],
    craftFeature: '全脸木雕，下颌可活动（开口跳），雕刻精细',
    musicFeature: '以锣鼓伴奏为主，唱腔古朴，融合土家族音乐元素'
  },
  hefeng: {
    id: 'hefeng', name: '鹤峰傩戏', type: '巫傩',
    region: '湖北 · 恩施州 · 鹤峰县',
    coord: [110.03, 29.89], era: '明清以降 · 民间活态传承',
    origin: '鄂西巫傩传统，土家族聚居区',
    maskType: '全脸木雕 · 彩绘 · 雕刻粗犷',
    feature: '土家族傩戏 · 巫道合一 · 冲傩还愿',
    palette: '朱砂红 + 矿物黑 + 铅白',
    performance: '傩堂设坛，端公执仪，冲傩还愿',
    plays: ['开洞', '勾愿', '土地', '笑面'],
    spirit: '禳灾 · 祈福 · 土家傩韵',
    quote: '鹤峰傩坛，土家端公，山间开愿，傩面通神。',
    accent: '#3a6b6b', swatch: '#3a6b6b',
    stat: { age: 500, masks: 18, troops: '土家族端公' },
    cover: nuoMask2, gallery: [nuoMask2, nuoMask3, maskArchive02],
    inheritors: '鹤峰县民间土家族端公世袭传承',
    history: '鹤峰傩戏属鄂西巫傩系统，与恩施傩戏同源。鹤峰古为容美土司辖区，保存了大量土家族了大量土家族傩文化。傩堂戏围绕"冲傩还愿"展开，面具雕刻粗犷。2008年与恩施傩戏一同列入国家级非遗扩展项目。',
    playDetails: [
      { name: '开洞', role: '开山莽将', desc: '傩坛开坛第一戏' },
      { name: '勾愿', role: '判官', desc: '判官勾销祈愿' },
      { name: '土地', role: '土地神', desc: '土地赐福，吉神戏' },
      { name: '笑面', role: '笑面童子', desc: '和合欢喜，傩堂收尾' }
    ],
    craftFeature: '全脸木雕彩绘，雕刻粗犷，保留土家族风格',
    musicFeature: '以锣鼓伴奏为主，唱腔古朴，融合土家族音乐元素'
  },
  // ========== 山西 ==========
  renzhuang: {
    id: 'renzhuang', name: '任庄扇鼓傩', type: '乡傩',
    region: '山西 · 临汾市 · 曲沃县任庄村',
    coord: [111.42, 35.87], era: '源于宋元 · 盛于明清 · 800余年',
    origin: '晋南乡傩，以扇鼓为法器，驱傩逐疫',
    maskType: '全脸木雕 · 扇鼓面具 · 古朴风格',
    feature: '北方乡傩 · 扇鼓驱傩 · 黄河风情',
    palette: '朱砂红 + 矿物黑 + 铅白',
    performance: '正月十四至十六演出，以扇鼓为法器',
    plays: ['驱傩', '调扇', '跑马', '祭风'],
    spirit: '驱邪 · 逐疫 · 黄河风情',
    quote: '任庄扇鼓，傩舞驱邪，黄河岸边，八百年回响。',
    accent: '#c9a24b', swatch: '#c9a24b',
    stat: { age: 800, masks: 8, troops: '村民世袭' },
    cover: maskFierce01, gallery: [maskFierce01, nuoMask10, maskArchive02],
    inheritors: '曲沃县任庄村村民世袭传承',
    history: '任庄扇鼓傩是晋南乡傩的代表，源于宋元，盛于明清。以扇鼓为法器驱傩逐疫，是北方傩戏的重要遗存。任庄村是任庄扇鼓傩的唯一传承地，村民世袭传承。2014年入选国家级非遗扩展项目。任庄扇鼓傩是研究北方傩文化与黄河民俗的重要活态遗存。',
    playDetails: [
      { name: '驱傩', role: '驱傩神', desc: '核心仪式，扇鼓驱傩逐疫' },
      { name: '调扇', role: '杂角', desc: '扇鼓表演，节奏刚劲' },
      { name: '跑马', role: '杂角', desc: '驱邪巡游，跑马送鬼' },
      { name: '祭风', role: '祭司', desc: '祭风调雨顺，祈丰收' }
    ],
    craftFeature: '全脸木雕，扇鼓面具古朴，北方风格',
    musicFeature: '以扇鼓为主要乐器，节奏刚劲，保留了大量晋南古乐特征'
  },
  // ========== 四川 ==========
  qingtan: {
    id: 'qingtan', name: '庆坛（巴蜀傩）', type: '酬神',
    region: '四川 · 广元市 · 苍溪县',
    coord: [105.84, 32.43], era: '源于明初 · 600余年',
    origin: '巴蜀傩戏分支，吸收花灯艺术成分',
    maskType: '全脸木雕 · 彩绘 · 融合川剧风格',
    feature: '巴蜀傩戏 · 庆坛还愿 · 花灯融合',
    palette: '朱砂红 + 矿物黑 + 金箔',
    performance: '庆坛还愿时演出，分法事与戏剧两部分',
    plays: ['庆坛', '还愿', '二郎神', '土地'],
    spirit: '还愿 · 纳吉 · 巴蜀风情',
    quote: '庆坛还愿，巴蜀傩韵，花灯一脉，傩面通神。',
    accent: '#e8a82e', swatch: '#e8a82e',
    stat: { age: 600, masks: 14, troops: '民间艺人' },
    cover: nuoMask3, gallery: [nuoMask3, nuoMask4, maskArchive01],
    inheritors: '苍溪县、剑阁县等地民间艺人传承',
    history: '庆坛（巴蜀傩）是四川傩戏的代表，源于明初。庆坛以"还愿"为核心，分法事与戏剧两部分。吸收了花灯艺术成分，面具融合川剧风格。2014年入选国家级非遗扩展项目。庆坛是研究巴蜀傩文化与川剧融合的重要活态遗存。',
    playDetails: [
      { name: '庆坛', role: '坛神', desc: '核心仪式，酬谢坛神' },
      { name: '还愿', role: '杂角', desc: '还愿祈福，人神契约' },
      { name: '二郎神', role: '二郎神', desc: '神将驱邪，斩蛟除魔' },
      { name: '土地', role: '土地神', desc: '土地赐福，吉神戏' }
    ],
    craftFeature: '全脸木雕彩绘，融合川剧风格，金箔贴绘',
    musicFeature: '以锣鼓伴奏为主，唱腔融合川剧与花灯元素'
  },
  // ========== 广西 ==========
  shigong: {
    id: 'shigong', name: '壮族师公戏', type: '民族傩',
    region: '广西 · 南宁市 · 武鸣区',
    coord: [108.37, 22.82], era: '源于远古巫傩 · 千年以上',
    origin: '壮族民间祭祀仪式，师公（巫师）执仪',
    maskType: '全脸木雕 · 壮族风格 · 色彩鲜艳',
    feature: '壮族傩戏 · 师公执仪 · 民族独有',
    palette: '朱砂红 + 矿物黑 + 金黄 + 矿物青',
    performance: '壮族节日演出，以壮语演唱',
    plays: ['莫一大王', '布洛陀', '甘王', '白马姑娘'],
    spirit: '驱邪 · 祈丰 · 壮族风情',
    quote: '壮族师公，傩面通神，壮语唱戏，千年一脉。',
    accent: '#a39e92', swatch: '#a39e92',
    stat: { age: 1000, masks: 16, troops: '壮族师公' },
    cover: nuoMask4, gallery: [nuoMask4, nuoMask1, maskAuspicious02],
    inheritors: '武鸣区、马山县等地壮族师公世袭传承',
    history: '壮族师公戏是壮族民间祭祀仪式与傩戏融合的产物，师公（巫师）执仪。以壮语演唱，融合壮族声腔。2014年入选国家级非遗扩展项目。壮族师公戏是研究中国南方民族傩文化演变的重要活态遗存。',
    playDetails: [
      { name: '莫一大王', role: '莫一大王', desc: '壮族英雄神，力大无穷的传说' },
      { name: '布洛陀', role: '布洛陀', desc: '壮族始祖神，创世神话' },
      { name: '甘王', role: '甘王', desc: '地方保护神，驱邪庇佑' },
      { name: '白马姑娘', role: '白马姑娘', desc: '女英雄题材，巾帼传说' }
    ],
    craftFeature: '全脸木雕，壮族风格，色彩鲜艳，造型独特',
    musicFeature: '以锣鼓伴奏为主，唱腔融合壮族民歌元素，以壮语演唱'
  }
}

// 全国地图上全部热点 —— 按省份/傩系分布
export const geoPoints = [
  // ===== 贵州（6个） =====
  { id: 'dejiang', name: '德江傩堂戏', coord: [108.14, 28.26], type: '巫傩' },
  { id: 'yanhe', name: '沿河傩堂戏', coord: [108.5, 28.56], type: '巫傩' },
  { id: 'sinan', name: '思南傩戏', coord: [108.25, 27.94], type: '巫傩' },
  { id: 'anshun', name: '安顺地戏', coord: [105.93, 26.25], type: '军傩' },
  { id: 'pingba', name: '平坝地戏', coord: [106.23, 26.42], type: '军傩' },
  { id: 'fuquan', name: '福泉阳戏', coord: [107.87, 26.7], type: '酬神' },
  { id: 'libo', name: '荔波布依傩', coord: [107.88, 25.41], type: '民族傩' },
  { id: 'daozhen', name: '道真仡佬傩', coord: [107.6, 28.88], type: '巫傩' },
  { id: 'wuchuan', name: '务川傩戏', coord: [107.98, 28.55], type: '巫傩' },
  { id: 'cengong', name: '思州傩戏', coord: [108.73, 27.16], type: '巫傩' },
  { id: 'liping', name: '黎平侗傩', coord: [109.18, 26.08], type: '民族傩' },
  { id: 'cuotaiji', name: '威宁撮泰吉', coord: [104.28, 26.87], type: '民族傩' },
  // ===== 江西（5个） =====
  { id: 'nanfeng', name: '南丰傩舞', coord: [116.53, 27.22], type: '乡傩' },
  { id: 'wuyuan', name: '婺源傩舞', coord: [117.86, 29.25], type: '乡傩' },
  { id: 'wanzai', name: '万载开口傩', coord: [114.45, 28.10], type: '乡傩' },
  { id: 'lean', name: '乐安傩舞', coord: [115.83, 27.43], type: '乡傩' },
  { id: 'dean', name: '德安潘公戏', coord: [115.48, 29.33], type: '乡傩' },
  // ===== 湖南（4个） =====
  { id: 'chenzhou', name: '辰州傩戏', coord: [110.39, 28.45], type: '巫傩' },
  { id: 'linwu', name: '临武傩戏', coord: [112.56, 25.28], type: '乡傩' },
  { id: 'meishan', name: '梅山傩戏', coord: [111.30, 27.73], type: '巫傩' },
  { id: 'tongdao', name: '通道侗傩', coord: [109.78, 26.16], type: '民族傩' },
  // ===== 安徽（1个） =====
  { id: 'chizhou', name: '池州傩戏', coord: [117.49, 30.66], type: '乡傩' },
  // ===== 湖北（2个） =====
  { id: 'enshi', name: '恩施傩戏', coord: [109.49, 30.27], type: '巫傩' },
  { id: 'hefeng', name: '鹤峰傩戏', coord: [110.03, 29.89], type: '巫傩' },
  // ===== 云南（1个） =====
  { id: 'guansuo', name: '关索戏', coord: [102.98, 24.68], type: '军傩' },
  // ===== 广东（1个） =====
  { id: 'zhanjiang', name: '湛江傩舞', coord: [110.09, 20.91], type: '雷傩' },
  // ===== 河北（1个） =====
  { id: 'wuan', name: '武安傩戏', coord: [114.20, 36.70], type: '乡傩' },
  // ===== 山西（1个） =====
  { id: 'renzhuang', name: '任庄扇鼓傩', coord: [111.42, 35.87], type: '乡傩' },
  // ===== 四川（1个） =====
  { id: 'qingtan', name: '庆坛（巴蜀傩）', coord: [105.84, 32.43], type: '酬神' },
  // ===== 广西（1个） =====
  { id: 'shigong', name: '壮族师公戏', coord: [108.37, 22.82], type: '民族傩' }
]

// 流派对比维度
export const compareFields = [
  { key: 'origin', label: '源流', icon: '溯源' },
  { key: 'era', label: '年代', icon: '纪元' },
  { key: 'maskType', label: '面具形制', icon: '形制' },
  { key: 'palette', label: '色彩谱系', icon: '色彩' },
  { key: 'performance', label: '演出形态', icon: '演绎' },
  { key: 'spirit', label: '精神内核', icon: '内核' }
]

// 图片授权信息
export const photoCredit = {
  source: 'Wikimedia Commons',
  author: 'Gary Todd',
  license: 'CC0 1.0 公共领域（Public Domain Dedication）',
  licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  note: '图片已进入公共领域，可自由商用、修改，无需署名'
}
