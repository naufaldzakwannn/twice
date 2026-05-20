// data/members.ts

export interface Member {
  slug: string;
  name: string;
  stageName: string;
  position: string[];
  birthName: string;
  birthday: string;
  zodiac: string;
  nationality: string;
  height: string;
  bloodType: string;

  image: string;
  banner: string;

  description: string;
  theme: string;

  quote: string;

  favoriteColor: string;
  hobby: string;
  emoji: string;
  mbti: string;

  representativeSong: string;
  favoriteEra: string;

  youtube: string;

  instagram?: string;

  gallery: string[];

  funFacts: string[];

  stats: {
    dance: number;
    vocal: number;
    rap: number;
    charisma: number;
  };
}

export const members: Member[] = [
  {
    slug: "nayeon",
    name: "Im Nayeon",
    stageName: "Nayeon",
    position: ["Lead Vocalist", "Lead Dancer", "Center"],

    birthName: "Im Na-yeon",
    birthday: "1995-09-22",
    zodiac: "Virgo",
    nationality: "South Korean",
    height: "163 cm",
    bloodType: "A",

    image: "/members/nayeon.jpg",
    banner: "/members/banners/nayeon-banner.jpg",

    description: "Member tertua TWICE dengan smile ikonik dan stage presence kuat. Nayeon dikenal karena vocal stabil, energy bright, dan kemampuan membangun suasana di atas panggung.",

    theme: "from-pink-100 via-white to-pink-50",

    quote: "Once, you make me feel special.",

    favoriteColor: "Pink",
    hobby: "Photography",
    emoji: "🐰",
    mbti: "ENFP",

    representativeSong: "POP!",
    favoriteEra: "Feel Special",

    youtube: "https://www.youtube.com/embed/POe9SOEKotk",

    instagram: "https://www.instagram.com/nayeonyny",

    gallery: ["/members/nayeon/1.jpg", "/members/nayeon/2.jpg", "/members/nayeon/3.jpg"],

    funFacts: ["Dijuluki fake maknae karena personality yang playful.", "Member pertama TWICE yang debut solo.", "Sangat suka dessert dan makanan manis.", "Memiliki smile yang sangat ikonik di fandom."],

    stats: {
      dance: 82,
      vocal: 95,
      rap: 40,
      charisma: 98,
    },
  },

  {
    slug: "jeongyeon",
    name: "Yoo Jeongyeon",
    stageName: "Jeongyeon",
    position: ["Lead Vocalist"],

    birthName: "Yoo Kyung-wan",
    birthday: "1996-11-01",
    zodiac: "Scorpio",
    nationality: "South Korean",
    height: "169 cm",
    bloodType: "O",

    image: "/members/jeongyeon.jpg",
    banner: "/members/banners/jeongyeon-banner.jpg",

    description: "Jeongyeon dikenal dengan suara khas dan image tomboy elegan. Ia sering dianggap sebagai salah satu member paling caring terhadap member lainnya.",

    theme: "from-emerald-100 via-white to-teal-50",

    quote: "Stay healthy and stay happy.",

    favoriteColor: "Green",
    hobby: "Cleaning & Gaming",
    emoji: "🐶",
    mbti: "ISFJ",

    representativeSong: "ONE IN A MILLION",
    favoriteEra: "Fancy",

    youtube: "https://www.youtube.com/embed/kOHB85vDuow",

    instagram: "https://www.instagram.com/jy_piece",

    gallery: ["/members/jeongyeon/1.jpg", "/members/jeongyeon/2.jpg", "/members/jeongyeon/3.jpg"],

    funFacts: ["Punya kakak perempuan seorang aktris.", "Sangat suka anjing.", "Dikenal memiliki personality tenang.", "Salah satu vocalist paling stabil di live performance."],

    stats: {
      dance: 70,
      vocal: 91,
      rap: 35,
      charisma: 88,
    },
  },

  {
    slug: "momo",
    name: "Hirai Momo",
    stageName: "Momo",
    position: ["Main Dancer", "Sub Vocalist"],

    birthName: "Hirai Momo",
    birthday: "1996-11-09",
    zodiac: "Scorpio",
    nationality: "Japanese",
    height: "164 cm",
    bloodType: "A",

    image: "/members/momo.jpg",
    banner: "/members/banners/momo-banner.jpg",

    description: "Main dancer TWICE dengan dance precision luar biasa. Momo dikenal memiliki aura performance yang sangat powerful.",

    theme: "from-orange-100 via-white to-pink-50",

    quote: "Practice makes perfect.",

    favoriteColor: "Purple",
    hobby: "Eating & Dancing",
    emoji: "🍑",
    mbti: "INFP",

    representativeSong: "MOVE",
    favoriteEra: "MORE & MORE",

    youtube: "https://www.youtube.com/embed/QTfzryUBlO0",

    instagram: "https://www.instagram.com/momo",

    gallery: ["/members/momo/1.jpg", "/members/momo/2.jpg", "/members/momo/3.jpg"],

    funFacts: ["Dikenal sebagai dance machine TWICE.", "Sangat suka jokbal.", "Pernah hampir tereliminasi di SIXTEEN.", "Memiliki energy performance sangat kuat."],

    stats: {
      dance: 100,
      vocal: 65,
      rap: 55,
      charisma: 96,
    },
  },

  {
    slug: "sana",
    name: "Minatozaki Sana",
    stageName: "Sana",
    position: ["Sub Vocalist"],

    birthName: "Minatozaki Sana",
    birthday: "1996-12-29",
    zodiac: "Capricorn",
    nationality: "Japanese",
    height: "164 cm",
    bloodType: "B",

    image: "/members/sana.jpg",
    banner: "/members/banners/sana-banner.jpg",

    description: "Sana terkenal karena charm yang sangat cute dan lovable. Personality cerahnya menjadi salah satu daya tarik utama TWICE.",

    theme: "from-pink-100 via-white to-rose-50",

    quote: "Shy shy shy~",

    favoriteColor: "Lavender",
    hobby: "Shopping",
    emoji: "🐹",
    mbti: "ENFP",

    representativeSong: "CHEER UP",
    favoriteEra: "Feel Special",

    youtube: "https://www.youtube.com/embed/V2hlQkVJZhE",

    instagram: "https://www.instagram.com/m.by__sana",

    gallery: ["/members/sana/1.jpg", "/members/sana/2.jpg", "/members/sana/3.jpg"],

    funFacts: ["Catchphrase 'Shy Shy Shy' viral secara global.", "Sangat ekspresif di variety show.", "Suka parfum dan fashion.", "Dikenal punya fanservice luar biasa."],

    stats: {
      dance: 84,
      vocal: 76,
      rap: 40,
      charisma: 99,
    },
  },

  {
    slug: "jihyo",
    name: "Park Jihyo",
    stageName: "Jihyo",
    position: ["Leader", "Main Vocalist"],

    birthName: "Park Ji-soo",
    birthday: "1997-02-01",
    zodiac: "Aquarius",
    nationality: "South Korean",
    height: "160 cm",
    bloodType: "O",

    image: "/members/jihyo.jpg",
    banner: "/members/banners/jihyo-banner.jpg",

    description: "Leader TWICE dengan vocal power luar biasa dan leadership yang sangat kuat. Jihyo memiliki masa trainee paling lama di JYP.",

    theme: "from-yellow-100 via-white to-orange-50",

    quote: "Hard work never betrays you.",

    favoriteColor: "Red",
    hobby: "Web surfing",
    emoji: "🦄",
    mbti: "ESFP",

    representativeSong: "Killin' Me Good",
    favoriteEra: "Eyes Wide Open",

    youtube: "https://www.youtube.com/embed/jyw_vrI4ySg",

    instagram: "https://www.instagram.com/_zyozyo",

    gallery: ["/members/jihyo/1.jpg", "/members/jihyo/2.jpg", "/members/jihyo/3.jpg"],

    funFacts: ["Training selama 10 tahun sebelum debut.", "Dikenal sangat profesional di stage.", "Memiliki live vocal sangat stabil.", "Leader yang sangat caring."],

    stats: {
      dance: 80,
      vocal: 100,
      rap: 50,
      charisma: 97,
    },
  },

  {
    slug: "mina",
    name: "Myoui Mina",
    stageName: "Mina",
    position: ["Main Dancer", "Sub Vocalist"],

    birthName: "Myoui Mina",
    birthday: "1997-03-24",
    zodiac: "Aries",
    nationality: "Japanese-American",
    height: "163 cm",
    bloodType: "A",

    image: "/members/mina.jpg",
    banner: "/members/banners/mina-banner.jpg",

    description: "Mina memiliki aura elegan dan graceful. Background ballet membuat movement dan performance-nya sangat unik.",

    theme: "from-sky-100 via-white to-cyan-50",

    quote: "Stay calm and shine quietly.",

    favoriteColor: "Mint",
    hobby: "Gaming",
    emoji: "🐧",
    mbti: "ISFP",

    representativeSong: "Feel Special",
    favoriteEra: "Feel Special",

    youtube: "https://www.youtube.com/embed/f5_wn8mexmM",

    instagram: "https://www.instagram.com/mina_sr_my",

    gallery: ["/members/mina/1.jpg", "/members/mina/2.jpg", "/members/mina/3.jpg"],

    funFacts: ["Pernah belajar ballet selama bertahun-tahun.", "Lahir di Amerika Serikat.", "Sangat suka gaming Minecraft.", "Dikenal dengan aura elegant."],

    stats: {
      dance: 94,
      vocal: 78,
      rap: 35,
      charisma: 90,
    },
  },
  {
    slug: "dahyun",
    name: "Kim Dahyun",
    stageName: "Dahyun",
    position: ["Lead Rapper", "Sub Vocalist"],

    birthName: "Kim Da-hyun",
    birthday: "1998-05-28",
    zodiac: "Gemini",
    nationality: "South Korean",
    height: "159 cm",
    bloodType: "O",

    image: "/members/dahyun.jpg",
    banner: "/members/banners/dahyun-banner.jpg",

    description: "Dahyun dikenal sebagai mood maker TWICE dengan personality ceria dan ekspresi ikonik. Ia memiliki kemampuan variety show yang sangat kuat.",

    theme: "from-slate-100 via-white to-gray-50",

    quote: "Smile brighter every day.",

    favoriteColor: "White",
    hobby: "Playing Piano",
    emoji: "🦅",
    mbti: "ISFJ",

    representativeSong: "MOONLIGHT",
    favoriteEra: "Talk That Talk",

    youtube: "https://www.youtube.com/embed/HuoOEry-Yc4",

    instagram: "https://www.instagram.com/dahhyunnee",

    gallery: ["/members/dahyun/1.jpg", "/members/dahyun/2.jpg", "/members/dahyun/3.jpg"],

    funFacts: ["Dikenal dengan eagle dance yang viral.", "Punya kemampuan variety show luar biasa.", "Sangat aktif berinteraksi dengan fans.", "Sering disebut tofu karena kulitnya yang sangat putih."],

    stats: {
      dance: 76,
      vocal: 74,
      rap: 85,
      charisma: 95,
    },
  },

  {
    slug: "chaeyoung",
    name: "Son Chaeyoung",
    stageName: "Chaeyoung",
    position: ["Main Rapper", "Sub Vocalist"],

    birthName: "Son Chae-young",
    birthday: "1999-04-23",
    zodiac: "Taurus",
    nationality: "South Korean",
    height: "159 cm",
    bloodType: "B",

    image: "/members/chaeyoung.jpg",
    banner: "/members/banners/chaeyoung-banner.jpg",

    description: "Chaeyoung dikenal dengan style artistik yang unik dan kemampuan menulis lirik. Ia memiliki aura bebas dan expressive.",

    theme: "from-red-100 via-white to-pink-50",

    quote: "Art is freedom.",

    favoriteColor: "Red",
    hobby: "Drawing",
    emoji: "🐯",
    mbti: "INFP",

    representativeSong: "BASICS",
    favoriteEra: "Scientist",

    youtube: "https://www.youtube.com/embed/nbK2aNGei2I",

    instagram: "https://www.instagram.com/chaeyo.0",

    gallery: ["/members/chaeyoung/1.jpg", "/members/chaeyoung/2.jpg", "/members/chaeyoung/3.jpg"],

    funFacts: ["Sangat suka menggambar dan seni.", "Ikut menulis beberapa lirik lagu TWICE.", "Memiliki fashion style yang unik.", "Dikenal dengan personality bebas dan chill."],

    stats: {
      dance: 78,
      vocal: 70,
      rap: 97,
      charisma: 92,
    },
  },

  {
    slug: "tzuyu",
    name: "Chou Tzuyu",
    stageName: "Tzuyu",
    position: ["Lead Dancer", "Sub Vocalist", "Visual", "Maknae"],

    birthName: "Chou Tzuyu",
    birthday: "1999-06-14",
    zodiac: "Gemini",
    nationality: "Taiwanese",
    height: "172 cm",
    bloodType: "A",

    image: "/members/tzuyu.jpg",
    banner: "/members/banners/tzuyu-banner.jpg",

    description: "Tzuyu adalah maknae TWICE yang dikenal karena visual luar biasa dan aura elegan. Ia juga memiliki personality yang tenang dan humble.",

    theme: "from-violet-100 via-white to-fuchsia-50",

    quote: "Always stay humble.",

    favoriteColor: "Blue",
    hobby: "Watching performances",
    emoji: "🦌",
    mbti: "ISFP",

    representativeSong: "Run Away",
    favoriteEra: "I CAN'T STOP ME",

    youtube: "https://www.youtube.com/embed/CMNahhgR_ss",

    instagram: "https://www.instagram.com/thinkaboutzu",

    gallery: ["/members/tzuyu/1.jpg", "/members/tzuyu/2.jpg", "/members/tzuyu/3.jpg"],

    funFacts: ["Member paling tinggi di TWICE.", "Berasal dari Taiwan.", "Dikenal dengan visual yang sangat iconic.", "Memiliki personality yang kalem dan sopan."],

    stats: {
      dance: 88,
      vocal: 72,
      rap: 40,
      charisma: 98,
    },
  },
];
