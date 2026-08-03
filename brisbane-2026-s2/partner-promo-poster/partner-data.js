export const event = {
  id: '6a616fb6bbc08a65e1586c71',
  url: 'https://jiangren.com.au/events/6a616fb6bbc08a65e1586c71',
  date: '2026-08-21',
  time: '14:00–17:00',
  venue: 'Market Square · Sunnybank',
  address: '341 Mains Rd, Sunnybank QLD 4109',
  schools: ['UQ', 'QUT', 'Griffith'],
};

export const partners = [
  {
    slug: 'bupa',
    name: 'Bupa',
    logo: 'assets/partners/bupa.webp',
    prizes: [
      {
        catalogId: 'bupa-gift-pack',
        name: 'Bupa 大礼包',
        quantity: 3,
        sponsor: 'Bupa',
      },
    ],
    onsiteGift: {
      quantityLabel: '500+',
      name: 'Bupa 精选礼品',
      items: ['Bupa 健康纸巾', 'Bupa 周边圆珠笔', 'Bupa 保湿唇膏'],
      evidencePattern: '500+Bupa精选礼品',
    },
  },
  {
    slug: 'fortune-forward',
    name: '方圆财富',
    logo: 'assets/partners/fortune-forward.webp',
    prizes: [],
    onsiteGift: {
      quantityLabel: '600+',
      name: '方圆财富礼品',
      items: ['五色幸运花荧光笔', '金属商务签字笔', '小熊毛巾伴手礼', '高档浴巾'],
      evidencePattern: '600+方圆财富礼品',
    },
  },
  {
    slug: 'hungry-panda',
    name: '熊猫外卖',
    logo: 'assets/partners/hungry-panda.webp',
    prizes: [
      { catalogId: 'hungry-panda-credit', name: '熊猫外卖 $30 无门槛红包', quantity: 5, sponsor: '熊猫外卖' },
      { catalogId: 'hungry-panda-membership', name: '熊猫外卖免费会员', quantity: 25, sponsor: '熊猫外卖' },
    ],
    onsiteGift: {
      quantityLabel: '800+',
      name: '熊猫外卖新生盲盒礼包',
      items: ['线下堂食优惠券', '草稿本', '鼠标垫', '限量随机水果公仔'],
      evidencePattern: '800+熊猫外卖新生盲盒礼包',
    },
  },
  {
    slug: 'bank-of-china',
    name: '中国银行',
    logo: 'assets/partners/bank-of-china.webp',
    prizes: [],
  },
  {
    slug: 'mobile-connect',
    name: 'Mobile Connect',
    logo: 'assets/partners/mobile-connect.webp',
    prizes: [],
  },
  {
    slug: 'goodlife',
    name: 'Goodlife',
    logo: 'assets/partners/goodlife.png',
    prizes: [
      { catalogId: 'goodlife-season-pass', name: 'Goodlife 全澳通用健身季卡', quantity: 1, sponsor: 'Goodlife' },
      { catalogId: 'goodlife-gym-bag-bottle', name: '健身包与水杯套装', quantity: 1, sponsor: 'Goodlife' },
      { catalogId: 'sunfox-tennis-skirt', name: 'Sunfox 网球裙', quantity: 1, sponsor: 'Goodlife' },
      { catalogId: 'sunfox-fitness-pants', name: 'Sunfox 健身裤', quantity: 1, sponsor: 'Goodlife' },
      { catalogId: 'muscle-building-pack', name: '增肌健身大礼包', quantity: 1, sponsor: 'Goodlife' },
      { catalogId: 'lorna-jane-gift-card', name: 'Lorna Jane $50 Gift Card', quantity: 1, sponsor: 'Goodlife' },
      { catalogId: 'lskd-gift-card', name: 'LSKD $50 Gift Card', quantity: 2, sponsor: 'Goodlife' },
    ],
    onsiteGift: {
      quantityLabel: '300+',
      name: 'Goodlife 健身房礼品',
      items: ['健身包', '运动水杯', '健身季卡', 'LSKD $50 Gift Card'],
      evidencePattern: '300+Goodlife 健身房礼品',
    },
  },
  {
    slug: 'compass',
    name: '指南针留学移民',
    logo: 'assets/partners/compass.jpg',
    prizes: [
      { catalogId: 'monika-food-processor', name: 'Monika 料理机', quantity: 1, sponsor: '指南针留学移民' },
      { catalogId: 'miniso-teddy-bear', name: 'MINISO 小熊玩偶', quantity: 2, sponsor: '指南针留学移民' },
    ],
    onsiteGift: {
      quantityLabel: '400+',
      name: '指南针礼品',
      items: ['精美帆布袋', '卡套挂绳', '定制 U 盘', '保温杯'],
      evidencePattern: '400+指南针礼品',
    },
  },
  {
    slug: 'sol',
    name: '思安留学移民',
    logo: 'assets/partners/sol.jpg',
    prizes: [
      { catalogId: 'byron-bay-day-trip', name: '拜伦湾一日游免费名额', quantity: 2, sponsor: '思安留学移民' },
      { catalogId: 'sol-plush-toy', name: '思安周边玩偶', quantity: 1, sponsor: '思安留学移民' },
    ],
    onsiteGift: {
      quantityLabel: '900+',
      name: '思安留学新生礼包',
      items: ['垃圾鸟玩偶', '夏日小风扇', '逢考必过钥匙扣', '摇摇杯', '考拉文件夹', '笔记本'],
      evidencePattern: '900+思安留学新生礼包',
    },
  },
  {
    slug: 'luggeasy',
    name: 'LuggEasy',
    logo: 'assets/partners/luggeasy.png',
    prizes: [],
    onsiteGift: {
      quantityLabel: '500+',
      name: 'LuggEasy 新生礼品',
      items: ['LuggEasy 专属定制行李识别牌'],
      evidencePattern: '500+Luggeasy新生礼品',
    },
  },
  {
    slug: 'uqhac',
    name: 'UQ 手工艺术俱乐部',
    logo: 'assets/partners/uqhac.webp',
    prizes: [
      { catalogId: 'uqhac-crystal-bracelet', name: '水晶手链', quantity: 5, sponsor: 'UQ 手工艺术俱乐部' },
      { catalogId: 'uqhac-pearl-necklace', name: '珍珠项链', quantity: 1, sponsor: 'UQ 手工艺术俱乐部' },
      { catalogId: 'uqhac-membership', name: 'UQ 手工艺术俱乐部一年会员', quantity: 5, sponsor: 'UQ 手工艺术俱乐部' },
    ],
    onsiteGift: {
      quantityLabel: '300+',
      name: 'UQ 手工社新会员套装',
      items: ['精美钥匙扣', '限定胸章', '实用记事本', '多款神秘小惊喜'],
      evidencePattern: '300+UQ手工社新会员套装',
    },
  },
  {
    slug: 'uqcssa',
    name: 'UQCSSA',
    logo: 'assets/partners/uqcssa.webp',
    prizes: [],
  },
  {
    slug: 'dealmoon',
    name: '澳新省钱快报',
    logo: 'assets/partners/dealmoon.webp',
    prizes: [
      { catalogId: 'ulike-air3', name: 'Ulike Air 3 脱毛仪', quantity: 1, sponsor: '澳新省钱快报' },
    ],
    onsiteGift: {
      quantityLabel: '500+',
      name: '澳新省钱快报新生盲盒福利',
      items: ['Ulike Air 3', '学校限定 tote 包', '冰箱贴', '红绿灯钥匙扣', '随机饮品'],
      evidencePattern: '500+ 澳新省钱快报新生盲盒福利',
    },
  },
  {
    slug: 'yeeyi',
    name: '亿忆网',
    logo: 'assets/partners/yeeyi.webp',
    prizes: [],
  },
  {
    slug: 'telstra',
    name: 'Telstra',
    logo: 'assets/partners/telstra.webp',
    prizes: [
      { catalogId: 'sprout-headphones-a', name: 'SPROUT 耳机', quantity: 1, sponsor: 'Telstra' },
      { catalogId: 'sprout-speaker', name: 'SPROUT 音响', quantity: 1, sponsor: 'Telstra' },
      { catalogId: 'sprout-headphones-b', name: 'SPROUT 耳机', quantity: 1, sponsor: 'Telstra' },
    ],
    onsiteGift: {
      quantityLabel: '500+',
      name: 'Telstra 礼品',
      items: ['手机支架', '文件夹', 'SPROUT 耳机', '耳麦', '音响'],
      evidencePattern: '500+Telstra礼品',
    },
  },
];
