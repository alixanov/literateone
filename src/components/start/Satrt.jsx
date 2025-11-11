// src/components/about/About.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublicIcon from "@mui/icons-material/Public";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SecurityIcon from "@mui/icons-material/Security";
import GavelIcon from "@mui/icons-material/Gavel";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(125, 171, 255) 50%,rgb(255, 255, 255) 100%);
  padding: 4rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;


// new push


const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  svg {
    font-size: 5rem;
    color: white;
    opacity: 0.9;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const CardTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ReadMoreButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.5);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(8px);
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
  position: relative;
  margin: auto;
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2.5rem;
  border-radius: 24px 24px 0 0;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 1.8rem;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
`;

const ModalTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const ModalBody = styled.div`
  padding: 2.5rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #667eea;
  }
`;

const SectionContent = styled.div`
  font-size: 1.05rem;
  color: #4a5568;
  line-height: 1.8;
  
  ul, ol {
    margin-left: 1.5rem;
    margin-top: 0.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: #2d3748;
  }
`;

const Disclaimer = styled.div`
  background: #fff5f5;
  border-left: 4px solid #f56565;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
  
  p {
    color: #742a2a;
    font-size: 0.95rem;
    margin: 0;
  }
`;

// ДАННЫЕ КАРТОЧЕК
const cardsData = [
  {
    id: 1,
    title: "Manbalar ishonchliligini tekshirish",
    icon: <VerifiedIcon />,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shortDescription: "Axborot manbalarini tahlil qilish va ularning ishonchliligini baholash usullari.",
    definition: "Axborot manbasining ishonchliligi — bu ma'lumot manbasi tomonidan taqdim etilgan ma'lumotlarning haqiqiylik darajasi, tasdiqlanganlik va mustaqillik mezonlariga muvofiqligi.",
    legal: [
      "O'zbekiston Respublikasi Konstitutsiyasi 67-modda: Har kim axborot olish huquqiga ega",
      "\"Ommaviy axborot vositalari to'g'risida\"gi Qonun: Manba ko'rsatish majburiyati",
      "Fuqarolik kodeksi: Yolg'on ma'lumot tarqatish uchun javobgarlik",
      "Axborot xavfsizligi to'g'risidagi me'yoriy hujjatlar"
    ],
    social: "Ishonchsiz manbalardan olingan ma'lumotlar jamiyatda noto'g'ri fikr shakllanishiga, ijtimoiy taranglikka va noto'g'ri qarorlar qabul qilishga olib kelishi mumkin. Mediasavodxon jamiyat tanqidiy fikrlash orqali sifatli ma'lumotlarni ajrata oladi.",
    technical: [
      "Domen tahlili (.uz, .gov.uz — rasmiy saytlar)",
      "WHOIS ma'lumotlarini tekshirish",
      "SSL sertifikatlarini tekshirish (HTTPS)",
      "Muallifning professional tarixini o'rganish",
      "Xabarlar sanasini va dolzarbligini tekshirish",
      "Kross-referenslar orqali tasdiqlash"
    ],
    risks: [
      "Huquqiy: Yolg'on ma'lumot tarqatish uchun ma'muriy va jinoiy javobgarlik",
      "Reputatsion: Ishonchni yo'qotish, professional obro'ga putur",
      "Moliyaviy: Noto'g'ri ma'lumotlarga asoslangan zarar",
      "Ijtimoiy: Jamiyatda ishonch inqirozi"
    ],
    recommendations: [
      "Kamida 3 mustaqil manbadan tasdiqlang",
      "Rasmiy davlat manbalari va tan olingan OAV'larni afzal ko'ring",
      "Faktcheking saytlaridan foydalaning (fact-check.uz)",
      "Muallifning malakasini tekshiring",
      "Shubhali ma'lumotlarni tarqatmang"
    ],
    media: "Klikbeyt sarlavhalar, sensatsion til, noma'lum manbalar, muallifsiz maqolalar, emosional manipulyatsiyalar — ishonchsiz manbalarning asosiy belgilari.",
    sources: [
      "UNESCO Media and Information Literacy Framework",
      "O'zbekiston Respublikasi qonunlari",
      "IFLA (Xalqaro kutubxonalar assotsiatsiyasi) tavsiyalari"
    ]
  },
  {
    id: 2,
    title: "Dezinformatsiya va huquqiy javobgarlik",
    icon: <WarningIcon />,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    shortDescription: "Yolg'on ma'lumot tarqatish, uning oqibatlari va huquqiy javobgarlik choralari.",
    definition: "Dezinformatsiya — ataylab yolg'on yoki chalg'ituvchi ma'lumot tarqatish, odamlarni aldash yoki manipulyatsiya qilish maqsadida amalga oshiriladi. Misinformatsiya — tasodifiy noto'g'ri ma'lumot tarqatish.",
    legal: [
      "Jinoiy kodeks 244-modda: Tuhmat (yolg'on ma'lumot tarqatish)",
      "Ma'muriy kodeks: Ommaviy axborot vositalarida qonunchilikni buzish",
      "\"Ommaviy axborot vositalari to'g'risida\"gi Qonun: Axborot taqdim etish talablari",
      "Saylov qonunchiligi: Soxta axborot orqali saylovlarga ta'sir ko'rsatish"
    ],
    social: "Dezinformatsiya demokratik jarayonlarga, sog'liqni saqlashga (masalan, COVID-19 paytida), ijtimoiy barqarorlikga va davlatlar o'rtasidagi munosabatlarga jiddiy zarar yetkazishi mumkin.",
    technical: [
      "Reverse image search orqali rasmlarni tekshirish",
      "Video metadata tahlili",
      "Faktcheking platformalaridan foydalanish",
      "Botlarni aniqlash (sun'iy faollik tahlili)",
      "Manipulyatsiya qilingan kontentni aniqlash vositalari"
    ],
    risks: [
      "Jinoiy javobgarlik: Qamoq jazosi yoki jarima",
      "Fuqarolik javobgarlik: Ma'naviy va moddiy zarar qoplash",
      "Professional oqibatlar: Ishdan bo'shatish, litsenziyadan mahrum qilish",
      "Ijtimoiy bojkot va ishonchni yo'qotish"
    ],
    recommendations: [
      "Shubhali ma'lumotni hech qachon tarqatmang",
      "Noto'g'ri ma'lumot topilsa, tezkor tuzatish e'lon qiling",
      "Faktlarni bir necha manbadan tekshiring",
      "Yuridik maslahat oling",
      "Hujjatlar va skrinshotlar orqali faktlarni fiksirlang"
    ],
    media: "Soxta sarlavhalar, kontekstdan ajratilgan iqtiboslar, manipulyatsiya qilingan statistika, emosional yuklangan tasvirlar — dezinformatsiyaning asosiy usullari.",
    sources: [
      "O'zbekiston Respublikasi Jinoiy va Ma'muriy kodekslari",
      "EEAS (Yevropa tashqi xizmat) EUvsDisinfo loyihasi",
      "First Draft — Dezinformatsiyaga qarshi xalqaro tashkilot"
    ]
  },
  {
    id: 3,
    title: "Mualliflik huquqi va media kontentdan foydalanish",
    icon: <GavelIcon />,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    shortDescription: "Intellektual mulk huquqlari, media kontentdan qonuniy foydalanish qoidalari.",
    definition: "Mualliflik huquqi — muallif o'z asari (matn, rasm, video, musiqa) ustidan egalik qilish, undan foydalanish va tarqatishni nazorat qilish huquqi. Har qanday kontentdan foydalanish ruxsat yoki litsenziya talab qiladi.",
    legal: [
      "\"Mualliflik huquqi va turdosh huquqlar to'g'risida\"gi Qonun",
      "Fuqarolik kodeksi: Intellektual mulk bo'limi",
      "Creative Commons litsenziyalari",
      "Xalqaro konventsiyalar (Bern, TRIPS)"
    ],
    social: "Mualliflik huquqining hurmat qilinishi ijodkorlarni rag'batlantiradi, madaniy rivojlanishni ta'minlaydi va intellektual mulkni himoya qiladi. Bu innovatsiya va ijodiy iqtisodiyot uchun zarur.",
    technical: [
      "Watermark (suv belgisi) qo'llash",
      "DRM (raqamli huquqlarni boshqarish) texnologiyalari",
      "Blockchain orqali mualliflikni tasdiqlash",
      "Google Reverse Image Search",
      "TinEye — rasm muallifini topish"
    ],
    risks: [
      "Jinoiy javobgarlik: Mualliflik huquqini buzish (Jinoiy kodeks)",
      "Fuqarolik javobgarlik: Moddiy va ma'naviy zarar to'lash",
      "Reputatsiya yo'qotish: Professional nomaqbullik",
      "Platform cheklovlari: Akkauntni blokirovka qilish"
    ],
    recommendations: [
      "Har doim muallifdan yozma ruxsat oling",
      "Creative Commons yoki ochiq litsenziyali kontentdan foydalaning",
      "Manbani to'g'ri ko'rsating",
      "Fair use (adolatli foydalanish) tamoyillarini bilib oling",
      "Yuridik maslahat oling"
    ],
    media: "Mualliflik huquqini buzish — plagiat, nusxa ko'chirish, qayta nashr qilish, kontent o'g'irlash. OAV va bloggerlar uchun bu jiddiy huquqiy xavf.",
    sources: [
      "O'zbekiston Respublikasi mualliflik huquqi qonunchiligi",
      "WIPO (Jahon intellektual mulk tashkiloti)",
      "Creative Commons rasmiy sayti"
    ]
  },
  {
    id: 4,
    title: "Shaxsiy ma'lumotlar va maxfiylik",
    icon: <SecurityIcon />,
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    shortDescription: "Shaxsiy ma'lumotlarni himoya qilish, raqamli maxfiylik va ma'lumotlar xavfsizligi.",
    definition: "Shaxsiy ma'lumotlar — aniq shaxsni identifikatsiya qilish imkonini beruvchi har qanday ma'lumot (ism, manzil, telefon, email, biometrik ma'lumotlar). Maxfiylik — bu ma'lumotlarni himoya qilish va ruxsatsiz kirishni oldini olish huquqi.",
    legal: [
      "\"Shaxs ma'lumotlari to'g'risida\"gi Qonun",
      "GDPR (Yevropa) talablari xalqaro aloqalar uchun",
      "O'zbekiston Respublikasi Ma'lumotlar xavfsizligi konsepsiyasi",
      "Konstitutsiya: Shaxsiy hayot daxlsizligi huquqi"
    ],
    social: "Shaxsiy ma'lumotlar suiiste'mol qilinsa, identifikatsiya o'g'irligi, moliyaviy firibgarlik, reputatsiyaga zarar va kiberqo'rqitish kabi jiddiy oqibatlarga olib keladi. Jamiyat darajasida bu ishonchsizlikka olib keladi.",
    technical: [
      "Ikki faktorli autentifikatsiya (2FA)",
      "Kuchli parollardan foydalanish (parol menejerlari)",
      "VPN (Virtual Private Network) ishlatish",
      "Shifrlash texnologiyalari (end-to-end encryption)",
      "Cookie va kuzatuv texnologiyalarini boshqarish",
      "HTTPS protokolidan foydalanish"
    ],
    risks: [
      "Identifikatsiya o'g'irligi",
      "Moliyaviy yo'qotishlar (bank hisobi buzilishi)",
      "Shantaj va kiberqo'rqitish",
      "Reputatsiya va karera zarariga",
      "Ma'lumotlar savdosi (dark web)"
    ],
    recommendations: [
      "Ijtimoiy tarmoqlarda shaxsiy ma'lumotlarni cheklang",
      "Noma'lum manbalardan fayllar yuklamang",
      "Muntazam ravishda parollarni yangilang",
      "Phishing hujumlaridan ehtiyot bo'ling",
      "Ma'lumotlar buzilishi haqida darhol xabar bering"
    ],
    media: "Ijtimoiy tarmoqlardagi ochiq profillar, geolokatsiya ma'lumotlari, onlayn so'rovnomalar — shaxsiy ma'lumotlar uchun xavfli maydonlar. Mediasavodxonlik — bu raqamli iz boshqarish.",
    sources: [
      "O'zbekiston shaxs ma'lumotlari qonunchiligi",
      "Electronic Frontier Foundation (EFF)",
      "Privacy International"
    ]
  },
  {
    id: 5,
    title: "OAV'larda manipulyatsiyalar",
    icon: <NewspaperIcon />,
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    shortDescription: "Media kontentda ishlatiluvchi manipulyatsiya usullari va ularni aniqlash.",
    definition: "Media manipulyatsiya — kontentni maxsus tarzda taqdim etish orqali auditoriya fikri va his-tuyg'ulariga ta'sir ko'rsatish. Bu klikbeyt, selektiv tahrirlash, kontekstdan chiqarish va emosional so'zlardan foydalanishni o'z ichiga oladi.",
    legal: [
      "\"Reklama to'g'risida\"gi Qonun: Aldamchi reklama taqiqi",
      "\"Ommaviy axborot vositalari to'g'risida\"gi Qonun: Obyektiv axborot berish majburiyati",
      "Iste'molchilarni himoya qilish qonunchiligi",
      "Journalistika etikasi kodekslari"
    ],
    social: "Manipulyatsiyalar jamiyatda qutblanish, noto'g'ri e'tiqodlar va emosional qarorlar qabul qilishga olib keladi. Bu demokratiya, saylovlar va ijtimoiy barqarorlikka salbiy ta'sir ko'rsatadi.",
    technical: [
      "Sarlavha vs matn nomuvofiqligini tekshirish",
      "Original manbalarga qaytish",
      "Video/audio timeline tahrirlash izlarini topish",
      "Statistik ma'lumotlarni kontekstda tekshirish",
      "Emosional til tahlili (sentiment analysis)"
    ],
    risks: [
      "Auditoriya ishonchini yo'qotish",
      "Noto'g'ri qarorlar qabul qilish",
      "Huquqiy da'volar (aldamchi axborot uchun)",
      "OAV obro'sining tushishi"
    ],
    recommendations: [
      "Sarlavha va matnni diqqat bilan o'qing",
      "Emotsional reaksiya qilishdan oldin faktlarni tekshiring",
      "Bir necha manbadan tasdiqlang",
      "Kontekstni va to'liq voqealarni o'rganing",
      "Tanqidiy savollar bering: Kim? Nima uchun? Qachon?"
    ],
    media: "Klikbeyt sarlavhalar ('Siz ISHONMAYSIZ!'), selektiv montaj, kontekstdan ajratilgan iqtiboslar, emosional rasmlar — manipulyatsiya usullari.",
    sources: [
      "Poynter Institute — Media etikasi",
      "Reuters Journalism Ethics Guidelines",
      "O'zbekiston jurnalistlar uyushmasi etika kodeksi"
    ]
  },
  {
    id: 6,
    title: "Dipfeyklar va texnik aniqlash",
    icon: <InfoIcon />,
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    shortDescription: "Sun'iy intellekt yordamida yaratilgan soxta media kontentni aniqlash usullari.",
    definition: "Dipfeyk (deepfake) — sun'iy intellekt va mashina o'rganish texnologiyalari orqali yaratilgan soxta video, audio yoki rasm. Bu texnologiya real odamlarning yuzini, ovozini yoki harakatlarini taqlid qiladi.",
    legal: [
      "Ko'pchilik mamlakatlarda dipfeyklar uchun alohida qonunchilik ishlab chiqilmoqda",
      "Jinoiy kodeks: Aldash, tuhmat, shaxsiyatni o'g'irlash",
      "Saylovlarda dipfeyklar taqiqlangan",
      "Ijtimoiy platformalar siyosati: Soxta kontentni bloklash"
    ],
    social: "Dipfeyklar siyosatchilar, jurnalistlar va oddiy odamlarning obro'siga putur etkazishi, saylovlarga ta'sir qilishi, ijtimoiy tartibsizlikka va ishonchsizlikka olib kelishi mumkin.",
    technical: [
      "Yuz chegaralari va harakatlarning tabiiy emasligi",
      "Ko'z pirpilanishi yoki nafas olishning yo'qligi",
      "Soya va yorug'lik nomuvofiqlik",
      "Metadata tahlili (yaratilgan sana, joy)",
      "AI detection tools (Sensity AI, Microsoft Video Authenticator)",
      "Audio tahlil: unli tovushlarning sun'iy ohang"
    ],
    risks: [
      "Siyosiy manipulyatsiya va saylovlarga ta'sir",
      "Shaxsiy obro'ga zarar",
      "Moliyaviy firibgarlik (masalan, rahbar ovozini taqlid qilish)",
      "Kiberqo'rqitish va shantaj",
      "Huquqiy javobgarlik (difamatsiya)"
    ],
    recommendations: [
      "Shubhali videolarni tarqatmang",
      "Original manba va kontekstni tekshiring",
      "Texnik tahlil vositalaridan foydalaning",
      "Diplomatlar, siyosatchilarning rasmiy sahifalaridan tasdiqlang",
      "Mutaxassislar fikrini so'rang"
    ],
    media: "Dipfeyklar ijtimoiy tarmoqlarda tez tarqaladi. OAV va fuqarolar uchun ularni aniqlash muhim mediasavodxonlik ko'nikmasidir.",
    sources: [
      "MIT Media Lab — Deepfake Detection",
      "European Commission — Digital Services Act",
      "Xalqaro axborot xavfsizligi standartlari"
    ]
  },
  {
    id: 7,
    title: "Jurnalistika etikasi standartlari",
    icon: <WorkspacePremiumIcon />,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shortDescription: "Professional jurnalistika uchun xalqaro va milliy etika tamoyillari.",
    definition: "Jurnalistika etikasi — axborot taqdim etishda haqiqat, obyektivlik, mustaqillik, adolatlik va mas'uliyat tamoyillariga amal qilish. Bu professional standartlar va normalardir.",
    legal: [
      "\"Ommaviy axborot vositalari to'g'risida\"gi Qonun",
      "O'zbekiston jurnalistlar uyushmasi etika kodeksi",
      "Xalqaro jurnalistlar federatsiyasi (IFJ) deklaratsiyasi",
      "UNESCO media etikasi tamoyillari"
    ],
    social: "Etik jurnalistika jamiyatdagi ishonchni mustahkamlaydi, demokratik jarayonlarni qo'llab-quvvatlaydi va fuqarolarning axborot olish huquqini ta'minlaydi. Noto'g'ri jurnalistika esa zararli.",
    technical: [
      "Faktlarni bir nechta manbadan tasdiqlash",
      "Barcha tomonlarning fikrini tinglash",
      "Manba va metodologiyani ochiq e'lon qilish",
      "Xatoliklarni tezkor tuzatish",
      "Shaxsiy fikr va faktni ajratish"
    ],
    risks: [
      "Obro'ni yo'qotish va auditoriya ishonchsizligi",
      "Huquqiy da'volar (tuhmat, grivatsiya)",
      "Professional litsenziyani yo'qotish",
      "Moliyaviy jarimalar"
    ],
    recommendations: [
      "Har doim faktlarni tekshiring",
      "Manbalarga anonim himoya bering (agar zarur bo'lsa)",
      "Mol manfaatlar to'qnashuvidan qoching",
      "Xatoliklarni tan oling va tuzating",
      "Professional treninglarga qatnashing"
    ],
    media: "Etik jurnalistika — bu haqiqat, adolat va mas'uliyat. Bu jamiyat va davlat o'rtasidagi ishonch ko'prigi.",
    sources: [
      "O'zbekiston jurnalistlar uyushmasi",
      "International Federation of Journalists (IFJ)",
      "UNESCO — Journalism Ethics"
    ]
  }
];

const Start = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => setSelectedCard(card);
  const closeModal = () => setSelectedCard(null);

  return (
    <PageWrapper>
      <Header>
        <Title>Mediasavodxonlik bo'yicha qo'llanma</Title>
        <Subtitle>
          Huquqiy asoslar, texnik usullar va amaliy tavsiyalar — mediasavodxonlikni oshirish uchun to'liq ma'lumot
        </Subtitle>
      </Header>

      <CardsGrid>
        {cardsData.map((card) => (
          <Card key={card.id} onClick={() => openModal(card)}>
            <CardImage gradient={card.gradient}>
              {card.icon}
            </CardImage>
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.shortDescription}</CardDescription>
              <ReadMoreButton>Batafsil o'qish</ReadMoreButton>
            </CardContent>
          </Card>
        ))}
      </CardsGrid>

      {/* MODAL */}
      {selectedCard && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <CloseButton onClick={closeModal}>×</CloseButton>
              <ModalTitle>{selectedCard.title}</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Section>
                <SectionTitle><InfoIcon /> Ta'rif</SectionTitle>
                <SectionContent>{selectedCard.definition}</SectionContent>
              </Section>

              <Section>
                <SectionTitle><GavelIcon /> Huquqiy asoslar</SectionTitle>
                <SectionContent>
                  <ul>
                    {selectedCard.legal.map((item, i) => (
                      <li key={i}><strong>{item}</strong></li>
                    ))}
                  </ul>
                </SectionContent>
              </Section>

              <Section>
                <SectionTitle><PublicIcon /> Ijtimoiy ta'sir</SectionTitle>
                <SectionContent>{selectedCard.social}</SectionContent>
              </Section>

              <Section>
                <SectionTitle><SchoolIcon /> Texnik usullar</SectionTitle>
                <SectionContent>
                  <ol>
                    {selectedCard.technical.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                </SectionContent>
              </Section>

              <Section>
                <SectionTitle><WarningIcon /> Xavflar</SectionTitle>
                <SectionContent>
                  <ul>
                    {selectedCard.risks.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </SectionContent>
              </Section>

              <Section>
                <SectionTitle><CheckCircleIcon /> Tavsiyalar</SectionTitle>
                <SectionContent>
                  <ol>
                    {selectedCard.recommendations.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                </SectionContent>
              </Section>

              <Section>
                <SectionTitle><NewspaperIcon /> Media misollar</SectionTitle>
                <SectionContent>{selectedCard.media}</SectionContent>
              </Section>

              <Section>
                <SectionTitle><VerifiedIcon /> Manbalar</SectionTitle>
                <SectionContent>
                  <ul>
                    {selectedCard.sources.map((item, i) => (
                      <li key={i}><strong>{item}</strong></li>
                    ))}
                  </ul>
                </SectionContent>
              </Section>

              <Disclaimer>
                <p>
                  Ushbu ma'lumotlar faqat ma'lumot berish maqsadida. Huquqiy masalalarda mutaxassis yordamini oling.
                </p>
              </Disclaimer>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};

export default Start;