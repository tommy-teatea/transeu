export interface ProgramStage {
  stage: string;
  code: string;
  name: string;
  nameZh: string;
  duration: string;
  description: string;
  descriptionZh: string;
  keyActivities: string[];
  keyActivitiesZh: string[];
  metrics: { label: string; value: string };
}

export interface FellowStory {
  id: string;
  name: string;
  nameZh: string;
  cohort: string;
  background: string;
  backgroundZh: string;
  school: string;
  schoolZh: string;
  district: string;
  subject: string;
  subjectZh: string;
  quote: string;
  quoteZh: string;
  story: string;
  storyZh: string;
  alumniRole: string;
  alumniRoleZh: string;
  image: string;
  audioTime?: string;
}

export interface PartnerSchool {
  id: string;
  name: string;
  nameZh: string;
  district: string;
  districtZh: string;
  type: 'Primary' | 'Secondary';
  grassrootsRate: string;
  fellowsCount: number;
  studentsReached: number;
  featuredProject: string;
  featuredProjectZh: string;
  coords: { x: number; y: number }; // Relative coordinates on HK radar grid (0-100)
}

export interface MetricTelemetry {
  id: string;
  label: string;
  labelZh: string;
  value: number;
  suffix: string;
  prefix?: string;
  telemetryCode: string;
  trend: string;
  description: string;
  descriptionZh: string;
}

export const TEHK_TELEMETRY: MetricTelemetry[] = [
  {
    id: 'students',
    label: 'Underprivileged Students Impacted',
    labelZh: '基層學生累計受惠人次',
    value: 25000,
    suffix: '+',
    telemetryCode: 'PAYLOAD_IMPACT',
    trend: '+3,500 this cycle',
    description: 'Direct classroom teaching, personalized mentorship, and life horizon expansion across grassroots schools.',
    descriptionZh: '透過全職教學、個人化啟導及多元探索活動，直接提升基層學生的學習動機與未來視野。'
  },
  {
    id: 'fellows',
    label: 'Fellows Trained & Deployed',
    labelZh: '累計培育及派遣項目老師',
    value: 140,
    suffix: '+',
    telemetryCode: 'LEADERSHIP_CORPS',
    trend: 'Cohort XI In Flight',
    description: 'High-caliber graduates and young professionals completing the 1-year intensive leadership mission.',
    descriptionZh: '跨學科優秀大學畢業生及青年專業人士，全職投入基層學校完成一年領袖培育任務。'
  },
  {
    id: 'schools',
    label: 'Partner Schools & Grassroots Hubs',
    labelZh: '合作基層學校及機構夥伴',
    value: 100,
    suffix: '+',
    telemetryCode: 'ORBITAL_STATIONS',
    trend: '18 Districts Covered',
    description: 'Schools meeting strict educational equity criteria (>50% CSSA/SFA or >25% Non-Chinese Speaking students).',
    descriptionZh: '覆蓋全港多區基層學校（逾50%學生獲政府資助或逾25%非華語學生）。'
  },
  {
    id: 'horizon',
    label: 'Student World Exploration Rate',
    labelZh: '學生世界探索意欲提升率',
    value: 83,
    suffix: '%',
    telemetryCode: 'TRAJECTORY_ACCEL',
    trend: 'Independently Evaluated',
    description: 'Students showing marked advancement in global curiosity, self-confidence, and future career awareness.',
    descriptionZh: '83% 學生在項目老師帶領下對未來探索與外在世界抱持更高主動性與自信心。'
  },
  {
    id: 'retention',
    label: 'Sustained Equity Commitment',
    labelZh: '校友長期推動教育公平承諾',
    value: 97,
    suffix: '%',
    telemetryCode: 'ALUMNI_CONTINUUM',
    trend: 'Cross-Sector Vector',
    description: 'Alumni continuing to advocate for educational and social equity across business, policy, technology, and non-profits.',
    descriptionZh: '97% 校友完成項目後，持續在商界、政府政策、科技及創社組織中倡導教育公平。'
  },
  {
    id: 'principal_rating',
    label: 'Partner Principal Super-Rating',
    labelZh: '校長高度肯定比例',
    value: 80,
    suffix: '%',
    telemetryCode: 'FLIGHT_READINESS',
    trend: 'Above standard entry level',
    description: 'School leaders agree Fellows perform beyond average entry-level teachers in innovation and student rapport.',
    descriptionZh: '80% 合作學校校長評定項目老師在創新教學與學生輔導上的表現超越一般新入職教師。'
  }
];

export const FELLOWSHIP_STAGES: ProgramStage[] = [
  {
    stage: 'STAGE 01',
    code: 'IGNITION_SELECTION',
    name: 'Rigorous Selection & Calibration',
    nameZh: '嚴格選拔與領袖校準',
    duration: 'March – May',
    description: 'A multi-stage assessment identifying visionary change-makers with exceptional empathy, resilience, and problem-solving aptitude.',
    descriptionZh: '經多輪嚴格面試、情境考核與領袖評估，選拔具備同理心、抗逆力及教育變革熱誠的跨領域青年。',
    keyActivities: [
      'Multi-Dimensional Assessment Center',
      'Classroom Simulation & Empathy Testing',
      'Vision Calibration with Founder & Alumni',
      'Cohort Matching to High-Need School Profiles'
    ],
    keyActivitiesZh: [
      '多元領袖評估中心與面試',
      '課堂教學模擬與同理心測試',
      '創辦人及歷屆校友願景校準',
      '精準配對至基層學校前線需求'
    ],
    metrics: { label: 'Acceptance Rate', value: '< 8% Selective' }
  },
  {
    stage: 'STAGE 02',
    code: 'FLIGHT_INSTITUTE',
    name: 'Summer Flight Institute',
    nameZh: '暑期領袖精進培訓學院',
    duration: 'July – August (6 Weeks)',
    description: 'Intensive pedagogical bootcamp, child psychology, curriculum design, classroom leadership, and executive mentoring.',
    descriptionZh: '為期六星期的全天候密集培訓，涵蓋前沿教學法、正向教育、STEAM課程設計及資深教育家指導。',
    keyActivities: [
      '200+ Hours Pedagogical Acceleration',
      'Trauma-Informed & Positive Education Masterclasses',
      'Executive Leadership Coaching by Corporate Partners',
      'Practicum Micro-Teaching in Summer Camps'
    ],
    keyActivitiesZh: [
      '逾200小時專業教學法特訓',
      '創傷知情教育與正向心理學實踐',
      '跨國企業領袖一對一管理思維指導',
      '暑期社區學校微格實踐試教'
    ],
    metrics: { label: 'Training Intensity', value: '240+ Hours' }
  },
  {
    stage: 'STAGE 03',
    code: 'ORBITAL_DEPLOYMENT',
    name: '10-Month In-School Command',
    nameZh: '十個月全職入校前線實戰',
    duration: 'September – June',
    description: 'Full-time classroom teaching, extracurricular initiative leadership, and individualized student life coaching with HK$18,000+ monthly stipend.',
    descriptionZh: '全職進駐基層中小學，肩負主科教學、課外活動創新及學生生涯導航，並享有每月生活津貼與專業督導。',
    keyActivities: [
      'Full-Time Subject & Life Education Instruction',
      'Corporate & STEAM Co-Curricular Expeditions',
      'Dedicated Bi-Weekly Pedagogical Mentor Visits',
      'Cross-School Collective Innovation Sprints'
    ],
    keyActivitiesZh: [
      '全職學科教學與生命教育課堂',
      '帶領學生走進跨國企業及STEAM科創探索',
      '雙週專業督導員入校觀課反思',
      '跨校同儕協同教學與專案創新'
    ],
    metrics: { label: 'Monthly Stipend & Grant', value: 'HK$ 18,000+' }
  },
  {
    stage: 'STAGE 04',
    code: 'ALUMNI_TRAJECTORY',
    name: 'Systemic Leadership Trajectory',
    nameZh: '長期跨界系統性影響力',
    duration: 'Lifelong Fellowship',
    description: 'Alumni transition into leadership roles across EdTech, education policy, corporate ESG, consulting, social entrepreneurship, and continued teaching.',
    descriptionZh: '結業後晉身為跨界教育領袖，持續於創科、政策智庫、企業ESG、顧問及教育界推動深遠系統變革。',
    keyActivities: [
      'Alumni Impact Venture Accelerator Fund',
      'Fast-Track Career Referrals (Goldman Sachs, Bain, Gov, etc.)',
      'Policy Advisory & Systemic Reform Thinktanks',
      'Teach For All Global Network Access (60+ Countries)'
    ],
    keyActivitiesZh: [
      '校友教育創新創投加速基金',
      '頂尖企業及公營機構快速就業網絡',
      '青年教育政策倡議與智庫研究',
      '連結 Teach For All 全球60多國領袖網絡'
    ],
    metrics: { label: 'Cross-Sector Network', value: '60+ Countries' }
  }
];

export const PARTNER_SCHOOLS_RADAR: PartnerSchool[] = [
  {
    id: 'ssp-01',
    name: 'Sham Shui Po Grassroots Academy',
    nameZh: '深水埗基層教育先導中學',
    district: 'Sham Shui Po',
    districtZh: '深水埗區',
    type: 'Secondary',
    grassrootsRate: '78% CSSA/SFA',
    fellowsCount: 4,
    studentsReached: 420,
    featuredProject: 'AI Coding & Tech Mentorship with Global Tech Firm',
    featuredProjectZh: '跨國科技企業 AI 程式與職涯啟導專案',
    coords: { x: 38, y: 52 }
  },
  {
    id: 'kt-02',
    name: 'Kwun Tong Future Leaders College',
    nameZh: '觀塘創科領袖中學',
    district: 'Kwun Tong',
    districtZh: '觀塘區',
    type: 'Secondary',
    grassrootsRate: '68% Grassroots',
    fellowsCount: 3,
    studentsReached: 380,
    featuredProject: 'Financial Literacy & English Public Speaking Squad',
    featuredProjectZh: '理財思維與英語演說實戰隊伍',
    coords: { x: 58, y: 62 }
  },
  {
    id: 'tm-03',
    name: 'Tuen Mun Inclusive Primary',
    nameZh: '屯門共融創思小學',
    district: 'Tuen Mun',
    districtZh: '屯門區',
    type: 'Primary',
    grassrootsRate: '82% Assistance',
    fellowsCount: 2,
    studentsReached: 260,
    featuredProject: 'Social Emotional Learning & Creative Storytelling',
    featuredProjectZh: '正向心靈成長與互動故事劇場',
    coords: { x: 18, y: 44 }
  },
  {
    id: 'tsw-04',
    name: 'Tin Shui Wai Horizon Academy',
    nameZh: '天水圍天際探索中學',
    district: 'Yuen Long / Tin Shui Wai',
    districtZh: '元朗／天水圍區',
    type: 'Secondary',
    grassrootsRate: '85% Low-Income Support',
    fellowsCount: 4,
    studentsReached: 510,
    featuredProject: 'Aviation & Science Exploration Labs',
    featuredProjectZh: '航空科技與太空科普專題實驗室',
    coords: { x: 22, y: 28 }
  },
  {
    id: 'wts-05',
    name: 'Wong Tai Sin Multicultural Primary',
    nameZh: '黃大仙多元文化小學',
    district: 'Wong Tai Sin',
    districtZh: '黃大仙區',
    type: 'Primary',
    grassrootsRate: '42% Non-Chinese Speaking (NCS)',
    fellowsCount: 3,
    studentsReached: 310,
    featuredProject: 'Bilingual Immersion & Cross-Cultural Bridge',
    featuredProjectZh: '多元語言沉浸與共融文化橋樑',
    coords: { x: 48, y: 46 }
  },
  {
    id: 'kc-06',
    name: 'Kwai Tsing Systemic Innovation School',
    nameZh: '葵青創新育才書院',
    district: 'Kwai Tsing',
    districtZh: '葵青區',
    type: 'Secondary',
    grassrootsRate: '64% Assistance',
    fellowsCount: 3,
    studentsReached: 340,
    featuredProject: 'Robotics Engineering & Sustainable Energy Sprint',
    featuredProjectZh: '機械人工程與可持續能源專題挑戰',
    coords: { x: 32, y: 42 }
  },
  {
    id: 'st-07',
    name: 'Sha Tin Community Advancement School',
    nameZh: '沙田社群進益學校',
    district: 'Sha Tin',
    districtZh: '沙田區',
    type: 'Secondary',
    grassrootsRate: '56% Grassroots',
    fellowsCount: 2,
    studentsReached: 290,
    featuredProject: 'Youth Social Entrepreneurship Incubator',
    featuredProjectZh: '青少年社會創新與微型創業培育',
    coords: { x: 46, y: 34 }
  },
  {
    id: 'east-08',
    name: 'Hong Kong Eastern Grassroots Primary',
    nameZh: '港島東基層啟發小學',
    district: 'Eastern HK Island',
    districtZh: '港島東區',
    type: 'Primary',
    grassrootsRate: '52% Assistance',
    fellowsCount: 2,
    studentsReached: 220,
    featuredProject: 'Global Music & Creative Arts Expression',
    featuredProjectZh: '跨域音樂創作與多元藝術表達',
    coords: { x: 62, y: 72 }
  }
];

export const FELLOW_STORIES: FellowStory[] = [
  {
    id: 'story-1',
    name: 'Arnold Chan',
    nameZh: '陳君洋 (Arnold)',
    cohort: 'Founder & Chairman',
    background: 'Ex-Goldman Sachs Institutional Sales / Harvard Business School MBA',
    backgroundZh: '前高盛投資銀行家 / 哈佛商學院工商管理碩士',
    school: 'Teach For Hong Kong (Founding Team)',
    schoolZh: '良師香港創辦人',
    district: 'Hong Kong',
    subject: 'Educational Equity Leadership',
    subjectZh: '教育公平與體制變革',
    quote: 'If you want to solve poverty and inequality at its roots, you have to build leaders who understand the real pain of classrooms.',
    quoteZh: '要從根本解決貧窮與不公，我們必須培育真正走進基層教室、懂得孩子痛點的長遠變革者。',
    story: 'Leaving Wall Street after witnessing deep disparities in educational opportunities, Arnold founded Teach For Hong Kong in 2015 to direct top-tier talent into high-need schools, pioneering an education movement.',
    storyZh: '看見基層學童缺乏資源的殘酷現實，Arnold 毅然放下高盛工作，創立良師香港，將頂尖人才帶到最需要的課堂。',
    alumniRole: 'Forbes 30 Under 30, Social Entrepreneur',
    alumniRoleZh: '福布斯 30 Under 30、傑出青年社會創業家',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    audioTime: '04:12'
  },
  {
    id: 'story-2',
    name: 'Rachel Tang',
    nameZh: '鄧慧芝 (Rachel)',
    cohort: 'Cohort VIII Fellow',
    background: 'HKU Computer Science & Engineering Graduate',
    backgroundZh: '香港大學計算機工程學士',
    school: 'Sham Shui Po Secondary School',
    schoolZh: '深水埗區基層中學',
    district: 'Sham Shui Po',
    subject: 'STEAM & Mathematics',
    subjectZh: 'STEAM 科創與數學',
    quote: 'My students thought AI and coding were reserved for elite international school kids. We proved they could build autonomous rovers too.',
    quoteZh: '我的學生曾以為編程與AI是名校專利。一年後，他們親手製造出自動避障探測車，眼裡燃起了光芒。',
    story: 'Rachel established an extracurricular robotics league in an underprivileged school, taking 15 grassroots teenagers to place Top 3 in an international robotics tournament.',
    storyZh: 'Rachel 在深水埗基層中學創立機械人研發小隊，帶領從未接觸過科創的學生奪得全港創科大賽三甲。',
    alumniRole: 'AI Product Lead at Global Tech Unicorn',
    alumniRoleZh: '國際科技獨角獸 AI 產品主管',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    audioTime: '03:45'
  },
  {
    id: 'story-3',
    name: 'Kevin Lam',
    nameZh: '林家豪 (Kevin)',
    cohort: 'Cohort IX Fellow',
    background: 'CUHK Global Business Studies',
    backgroundZh: '香港中文大學環球商業學士',
    school: 'Tin Shui Wai Secondary School',
    schoolZh: '天水圍津貼中學',
    district: 'Tin Shui Wai',
    subject: 'English & Career Exploration',
    subjectZh: '英語溝通與生涯規劃',
    quote: 'Teaching is the most high-stakes leadership laboratory on the planet. When 30 kids count on you, you discover what true impact means.',
    quoteZh: '教室是全世界最具挑戰的領袖實驗室。當三十雙眼睛信任地望著你，你才會明白何謂真正的影響力。',
    story: 'Kevin brought 120 grassroots students into mock boardroom pitching sessions with Fortune 500 executives, dramatically boosting their conversational English and self-worth.',
    storyZh: 'Kevin 策劃「青年商業視野專案」，安排基層學生與跨國企業高管進行全英語提案演練，徹底打破升學自信藩籬。',
    alumniRole: 'Strategy Consultant & Education Policy Advisor',
    alumniRoleZh: '頂尖策略顧問及教育政策倡議顧問',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    audioTime: '05:08'
  },
  {
    id: 'story-4',
    name: 'Amina Khan',
    nameZh: '簡美娜 (Amina)',
    cohort: 'Cohort X Fellow',
    background: 'CityU Linguistics & Psychology',
    backgroundZh: '香港城市大學語言學與心理學',
    school: 'Wong Tai Sin Multicultural Primary',
    schoolZh: '黃大仙多元文化小學',
    district: 'Wong Tai Sin',
    subject: 'NCS Chinese Language & Inclusion',
    subjectZh: '非華語中文與共融教育',
    quote: 'Language should be a bridge to dignity, not a barrier to survival in this city.',
    quoteZh: '語言應該是尊嚴的橋樑，而不是孩子在這座城市求存與融入的障礙。',
    story: 'Developing a gamified Cantonese phonics curriculum for non-Chinese speaking minority children, Amina raised grade-level reading proficiency by 45% in 9 months.',
    storyZh: 'Amina 研發專為少數族裔學童設計的沉浸式廣東話桌遊教材，使班內非華語學童的中文閱讀及格率由32%躍升至77%。',
    alumniRole: 'Non-Profit Inclusion Director',
    alumniRoleZh: '跨文化共融非牟利機構總監',
    image: 'https://images.unsplash.com/photo-1534751516642-a171edd25218?auto=format&fit=crop&w=600&q=80',
    audioTime: '04:30'
  }
];

export const CORE_PILLARS = [
  {
    id: 'pillar-1',
    code: 'SYSTEM_VECTOR_01',
    title: 'THE 1-YEAR FELLOWSHIP',
    titleZh: '一年全職領袖項目',
    tagline: 'High-Caliber Talent in High-Need Classrooms',
    taglineZh: '頂尖跨界青年進駐基層學校',
    description: 'We recruit university graduates and young professionals with exceptional leadership grit, placing them full-time into schools serving predominantly underprivileged families.',
    descriptionZh: '挑選具領袖潛質的青年全職擔任項目老師，為期一年，專注基層學生學術突破、品格薰陶與視野擴闊。',
    specs: [
      { key: 'Duration', val: '12 Months (2 Mo Prep + 10 Mo Placement)' },
      { key: 'Monthly Stipend', val: 'HK$ 18,000 – 20,000' },
      { key: 'Mentorship', val: '1-on-1 Pedagogical & Corporate Advisors' },
      { key: 'Eligibility', val: 'All Degree Disciplines (Fresh Grads & Young Pros)' }
    ]
  },
  {
    id: 'pillar-2',
    code: 'SYSTEM_VECTOR_02',
    title: 'FUTURE-READY ACCELERATION',
    titleZh: '未來技能與生涯啟航',
    tagline: 'STEAM, Global Vision, & Social-Emotional Grit',
    taglineZh: 'STEAM 科創、國際視野與心理韌性',
    description: 'Beyond traditional textbook syllabi, Fellows create specialized experiential modules: coding sprints, corporate expeditions, debate squads, and positive psychology labs.',
    descriptionZh: '突破傳統應試框架，項目老師親自策劃編程實驗室、外資企業參訪、演說辯論隊及正向生命教育。',
    specs: [
      { key: 'Programs', val: 'EdTech Labs, Financial Literacy, Career Journeys' },
      { key: 'Corporate Partners', val: 'Goldman Sachs, Swire, Tencent, Google HK' },
      { key: 'Impact Velocity', val: '83% Student World Curiosity Increase' },
      { key: 'Coverage', val: 'Primary & Secondary Grassroots Students' }
    ]
  },
  {
    id: 'pillar-3',
    code: 'SYSTEM_VECTOR_03',
    title: 'ALUMNI SYSTEMIC IMPACT',
    titleZh: '校友跨界系統革新',
    tagline: 'Sustained Leadership for Long-Term Equity',
    taglineZh: '深耕各行各業 長遠推動體制改革',
    description: 'Our mission does not end after 1 year. 97% of Alumni continue advancing educational equity through leadership positions in corporate management, education policy, technology, and social ventures.',
    descriptionZh: '一年項目只是起點。97% 校友將前線體會轉化為長遠動力，在政商創科各界推動教育資源均等與社會創新。',
    specs: [
      { key: 'Alumni Base', val: '140+ Visionary Leaders' },
      { key: 'Global Alliance', val: 'Teach For All (Global Network in 60+ Nations)' },
      { key: 'Sectors', val: '35% Business/Tech, 30% Education/Policy, 25% Social Sector' },
      { key: 'Venture Incubation', val: 'Seed Funding for Alumni Education Startups' }
    ]
  }
];

export const STRATEGIC_PARTNERS = [
  { name: 'The D. H. Chen Foundation', type: 'Strategic Funder', role: 'Major Anchor & Capacity Partner' },
  { name: 'The Hong Kong Jockey Club Charities Trust', type: 'Trust Partner', role: 'Leadership Development Grant' },
  { name: 'Goldman Sachs Gives', type: 'Corporate Partner', role: 'Career Exploration & Financial Literacy' },
  { name: 'Swire Trust', type: 'Community Partner', role: 'Grassroots Community Resiliency' },
  { name: 'Tencent Charity Foundation', type: 'Tech Partner', role: 'STEAM & Digital Empowerment' },
  { name: 'Teach For All', type: 'Global Alliance', role: 'Global Knowledge Network (60+ Nations)' },
  { name: 'Sie Fund (Social Innovation & Entrepreneurship)', type: 'Government Matching', role: 'Social Innovation Incubation' },
  { name: 'The University of Hong Kong (HKU)', type: 'Academic Partner', role: 'Pedagogical Research & Evaluation' }
];

export const FAQS = [
  {
    q: 'What is Teach For Hong Kong (良師香港)?',
    qZh: '甚麼是良師香港（Teach For Hong Kong）？',
    a: 'Teach For Hong Kong is a registered S88 non-profit charitable organization (IR File No. 91/14187) founded in 2015. We recruit promising university graduates and young professionals to serve as full-time Fellows for one year in schools serving underprivileged students, driving educational equity and developing future leaders.',
    aZh: '良師香港是於2015年成立的香港第88條獲豁免繳稅慈善機構（檔案編號：91/14187）。我們每年招募並培訓優秀大學畢業生及青年專業人士，全職投入基層學校擔任一年項目老師，解決教育不公問題並培育跨界領袖。'
  },
  {
    q: 'Do I need a teaching degree or PGDE to apply for the Fellowship?',
    qZh: '申請項目老師需要具備教育文憑（PGDE）或教育學位嗎？',
    a: 'No prior teaching qualification or degree in education is required. We welcome graduates from all academic majors (STEM, Business, Humanities, Arts, Social Sciences, Law, etc.). We provide a comprehensive 6-week Summer Flight Institute and continuous mentorship during your service.',
    aZh: '不需要。我們歡迎所有學科背景（工程、商業、文史哲、社科、法律、理科等）的應屆畢業生或青年專業人士申請。入職前本會提供為期6星期的全方位暑期培訓學院，並於任教期間提供專業督導。'
  },
  {
    q: 'What financial support and benefits do Fellows receive?',
    qZh: '項目老師享有甚麼津貼與支援？',
    a: 'Fellows receive a monthly living stipend (approx. HK$18,000–$20,000), comprehensive professional training, 1-on-1 coaching by senior education & corporate leaders, health coverage, and exclusive fast-track networking with our corporate partners.',
    aZh: '項目老師享有每月約港幣 18,000 至 20,000 元之生活津貼、全額資助培訓、資深教育家及跨國企業高管一對一啟導、醫療保險，以及參與企業夥伴快速職業對接機會。'
  },
  {
    q: 'How does Teach For Hong Kong ensure lasting impact beyond the 1-year Fellowship?',
    qZh: '一年項目結束後，如何確保長遠的社會影響力？',
    a: '97% of our Alumni stay committed to educational equity. Our alumni community spans government policy units, global technology companies, top-tier management consultancies, education startups, and senior school administration, transforming the education ecosystem from multiple key levers.',
    aZh: '97% 校友在結業後持續推動教育公平。校友網絡遍佈政府決策部門、跨國科技巨頭、頂尖管理顧問公司、自創教育社企及學校管理層，從多個核心維度推動體制改革。'
  },
  {
    q: 'Is donation to Teach For Hong Kong tax-deductible in Hong Kong?',
    qZh: '向良師香港捐款可享有香港稅務扣減嗎？',
    a: 'Yes. Teach For Hong Kong is a tax-exempt charitable institution under Section 88 of the Inland Revenue Ordinance. Donations of HK$100 or above are fully tax-deductible in Hong Kong.',
    aZh: '可以。良師香港為獲香港稅務局根據《稅務條例》第88條認可之獲豁免繳稅慈善團體。捐款滿港幣 100 元或以上，均可憑正式收據申請扣稅。'
  }
];
