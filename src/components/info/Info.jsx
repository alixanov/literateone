// src/components/info/Info.jsx
import React, { useState } from "react";
import styled from "styled-components";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SecurityIcon from "@mui/icons-material/Security";
import ScienceIcon from "@mui/icons-material/Science";
import BuildIcon from "@mui/icons-material/Build";
import ArticleIcon from "@mui/icons-material/Article";
import pc1 from "../../assets/pc1.jpg";
import pc2 from "../../assets/pc2.jpg";
import pc3 from "../../assets/pc3.jpg";
import pc4 from "../../assets/pc4.jpg";
import pc5 from "../../assets/pc5.jpg";
import pc6 from "../../assets/pc6.jpg";
import pc7 from "../../assets/pc7.jpg";

// ==================== СТИЛИ ====================
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 4rem 2rem;
  font-family: 'Georgia', 'Times New Roman', serif;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #2c5282;
`;

const MainTitle = styled.h1`
  font-size: 2.8rem;
  color: #1a202c;
  margin-bottom: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    flex-direction: column;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  background: ${({ active }) =>
    active ? "#2c5282" : "white"};
  color: ${({ active }) => (active ? "white" : "#4a5568")};
  border: 2px solid ${({ active }) => (active ? "#2c5282" : "#e2e8f0")};
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(44, 82, 130, 0.3);
    border-color: #2c5282;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: #2c5282;
  }
`;

const ArticleImage = styled.div`
  width: 100%;
  height: 240px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
  }
`;

const ArticleContent = styled.div`
  padding: 2rem;
`;

const ArticleCategory = styled.span`
  display: inline-block;
  background: #2c5282;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  color: #1a202c;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.4;
`;

const ArticleExcerpt = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const ArticleDate = styled.span`
  font-size: 0.9rem;
  color: #718096;
  font-style: italic;
`;

const ReadMoreButton = styled.button`
  background: #2c5282;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(44, 82, 130, 0.4);
    background: #1a365d;
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
  backdrop-filter: blur(8px);
  padding: 2rem;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
  position: relative;
  margin: 2rem 0;
`;

const ModalImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  border-radius: 16px 16px 0 0;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ModalBody = styled.div`
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CloseButton = styled.button`
  position: sticky;
  top: 1.5rem;
  right: 1.5rem;
  float: right;
  background: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a5568;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;

  &:hover {
    background: #f7fafc;
    transform: rotate(90deg);
  }
`;

const ModalTitle = styled.h2`
  font-size: 2.2rem;
  color: #1a202c;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.3;
  clear: both;
  padding-top: 1rem;
`;

const ModalMeta = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
  flex-wrap: wrap;
`;

const ModalText = styled.div`
  font-size: 1.1rem;
  color: #2d3748;
  line-height: 1.9;
  margin: 1.5rem 0;

  h3 {
    font-size: 1.6rem;
    color: #1a202c;
    margin: 2rem 0 1rem;
    font-weight: 700;
    border-left: 4px solid #2c5282;
    padding-left: 1rem;
  }

  h4 {
    font-size: 1.3rem;
    color: #2d3748;
    margin: 1.5rem 0 0.8rem;
    font-weight: 600;
  }

  p {
    margin: 1rem 0;
    text-align: justify;
  }

  ul, ol {
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.8rem 0;
  }

  strong {
    color: #1a202c;
    font-weight: 700;
  }

  blockquote {
    border-left: 4px solid #2c5282;
    padding-left: 1.5rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #4a5568;
  }
`;

// ==================== ДАННЫЕ ====================
const articles = [
  {
    id: 1,
    category: "Yangiliklar",
    title: "Mediasavodxonlik: Zamonaviy ta'lim tizimida yangi standartlar",
    excerpt: "UNESCO va jahon ta'lim tashkilotlari mediasavodxonlikni 21-asr kompetensiyalarining asosiy qismi sifatida e'tirof etmoqda. Raqamli texnologiyalar taraqqiyoti bilan mediasavodxonlik ta'limi milliy dasturlarga kiritilmoqda.",
    image: pc1,
    date: "15 Noyabr, 2024",
    content: `
      <h3>Mediasavodxonlik: Global ta'lim tizimida yangi yo'nalish</h3>
      
      <p>Zamonaviy raqamli davrda mediasavodxonlik ta'limning ajralmas qismiga aylandi. Jahon Sog'liqni Saqlash Tashkiloti (WHO) va UNESCO ma'lumotlariga ko'ra, internet foydalanuvchilarining 70% dan ortig'i axborot manbalarini tanqidiy baholay olmaydi.</p>

      <h4>Xalqaro standartlar va tavsiyalar</h4>
      <p>UNESCO tomonidan ishlab chiqilgan "Media and Information Literacy" (MIL) standarti 2011-yildan beri 180 dan ortiq mamlakatda qo'llanilmoqda. Ushbu standart quyidagi asosiy yo'nalishlarni o'z ichiga oladi:</p>
      <ul>
        <li><strong>Axborot manbalarini baholash</strong> — ishonchlilik va manba sifatini aniqlash ko'nikmalari</li>
        <li><strong>Tanqidiy fikrlash</strong> — ma'lumotlarni tahlil qilish va xulosalar chiqarish qobiliyati</li>
        <li><strong>Raqamli xavfsizlik</strong> — shaxsiy ma'lumotlarni himoya qilish va onlayn xavfsizlikni ta'minlash</li>
        <li><strong>Media kontent yaratish</strong> — mas'uliyatli va axloqiy kontentni ishlab chiqarish</li>
      </ul>

      <h4>O'zbekistonda mediasavodxonlik</h4>
      <p>2023-yilda O'zbekiston Respublikasi Prezidentining "Ta'lim sohasini 2030-yilgacha rivojlantirish konsepsiyasi to'g'risida"gi Farmoni doirasida mediasavodxonlik ta'limi milliy ta'lim dasturlariga kiritildi. Vazirlar Mahkamasining qarori asosida:</p>
      <ul>
        <li>Umumta'lim maktablarida "Mediasavodxonlik" fanini o'qitish boshlandi</li>
        <li>O'qituvchilar uchun maxsus treninglar va seminarlar tashkil etilmoqda</li>
        <li>Raqamli darsliklar va metodiklar ishlab chiqilmoqda</li>
      </ul>

      <h4>Mediasavodxonlikning ahamiyati</h4>
      <p>Tadqiqotlar shuni ko'rsatadiki, mediasavodxonlik ta'limi quyidagi natijalarga olib keladi:</p>
      <ul>
        <li>Soxta yangiliklarni aniqlash qobiliyati 65% ga oshadi</li>
        <li>Onlayn firibgarlik qurboni bo'lish xavfi 45% kamayadi</li>
        <li>Tanqidiy fikrlash ko'nikmalari 70% yaxshilanadi</li>
        <li>Raqamli ma'lumotlar bilan ishlash samaradorligi oshadi</li>
      </ul>

      <h3>Kelajak istiqbollari</h3>
      <p>2025-2030 yillar uchun rejalashtirilgan tadbirlar:</p>
      <ul>
        <li>Barcha ta'lim muassasalarida mediasavodxonlik fanini joriy etish</li>
        <li>Ota-onalar uchun maxsus o'quv dasturlari yaratish</li>
        <li>Sun'iy intellekt va raqamli texnologiyalar bilan bog'liq yangiliklarni dasturga kiritish</li>
        <li>Milliy mediasavodxonlik markazini tashkil etish</li>
      </ul>

      <blockquote>"Mediasavodxonlik — bu zamonaviy jamiyatda muvaffaqiyatli yashash uchun zarur bo'lgan asosiy ko'nikmadir" — UNESCO Bosh direktori Audrey Azoulay</blockquote>
    `
  },
  {
    id: 2,
    category: "Metodika",
    title: "O'qituvchilar uchun mediasavodxonlik: Amaliy metodikalar",
    excerpt: "Maktab o'qituvchilari uchun ishlab chiqilgan zamonaviy metodikalar to'plami. Interaktiv darslar, amaliy mashqlar va baholash mezonlari. Ta'lim jarayonida qo'llash uchun tayyor materiallar.",
    image: pc2,
    date: "10 Noyabr, 2024",
    content: `
      <h3>Mediasavodxonlikni o'qitish metodikasi</h3>
      
      <p>Mediasavodxonlik fani — bu o'quvchilarga zamonaviy axborot muhitida to'g'ri yo'l topishga yordam beradigan muhim fan. Ushbu qo'llanma o'qituvchilarga darslarni samarali tashkil etish bo'yicha amaliy tavsiyalar beradi.</p>

      <h4>1. Darsni rejalashtirish tamoyillari</h4>
      <p>Har bir mediasavodxonlik darsi quyidagi elementlarni o'z ichiga olishi kerak:</p>
      <ul>
        <li><strong>Nazariy qism (20%)</strong> — asosiy tushunchalar va terminlar bilan tanishish</li>
        <li><strong>Amaliy mashqlar (50%)</strong> — haqiqiy misollar ustida ishlash</li>
        <li><strong>Muhokama (20%)</strong> — guruh ishlar va fikr almashish</li>
        <li><strong>Yakuniy baholash (10%)</strong> — o'rganilgan materiallarni mustahkamlash</li>
      </ul>

      <h4>2. Interaktiv dars metodlari</h4>
      
      <p><strong>Metod 1: Axborot detektivligi</strong></p>
      <p>O'quvchilar guruhlar bo'lib, berilgan yangilikni tahlil qilishadi va uning haqiqiyligini aniqlashga harakat qilishadi. Har bir guruh o'z xulosalarini asoslashi kerak.</p>
      
      <p><strong>Metod 2: Media loyihalari</strong></p>
      <p>O'quvchilar o'zlari media kontent (maqola, video, podcast) yaratishadi. Bu ularga media ishlab chiqarish jarayonini ichidan tushunishga yordam beradi.</p>

      <p><strong>Metod 3: Tanqidiy munozaralar</strong></p>
      <p>Ikki guruh qarama-qarshi nuqtai nazarlarni himoya qiladi. Bu tanqidiy fikrlashni rivojlantirishga yordam beradi.</p>

      <h4>3. Baholash mezonlari</h4>
      <p>O'quvchilarning bilimlarini baholashda quyidagi mezonlardan foydalanish tavsiya etiladi:</p>
      <ul>
        <li>Axborot manbalarini tahlil qilish qobiliyati (25%)</li>
        <li>Tanqidiy fikrlash ko'nikmalari (25%)</li>
        <li>Amaliy topshiriqlarni bajarish (30%)</li>
        <li>Guruh ishida faollik (20%)</li>
      </ul>

      <h4>4. Qo'shimcha resurslar</h4>
      <p>O'qituvchilar uchun foydali materiallar:</p>
      <ul>
        <li>UNESCO mediasavodxonlik dasturi — www.unesco.org</li>
        <li>Faktcheking platformalari — mahalliy va xalqaro</li>
        <li>Interaktiv o'yin va simulyatorlar</li>
        <li>Video darsliklar va vebinarlar</li>
      </ul>

      <h3>Amaliy mashqlar to'plami</h3>
      
      <h4>Mashq 1: Sarlavhalarni tahlil qilish</h4>
      <p>O'quvchilarga turli sarlavhalar beriladi. Ular har bir sarlavhani tahlil qilib, qaysi biri "klikbeyt", qaysi biri oddiy xabar ekanligini aniqlashlari kerak.</p>

      <h4>Mashq 2: Manba izlash</h4>
      <p>Berilgan ma'lumot uchun ishonchli manba topish va uni asoslash. O'quvchilar manbaning ishonchliligini qanday tekshirishni o'rganadilar.</p>

      <h4>Mashq 3: Soxta yangilik yaratish</h4>
      <p>Paradoksal usul: o'quvchilar o'zlari soxta yangilik yaratib, keyin boshqa guruh uni qanday aniqlay olishini ko'rsatadi.</p>

      <blockquote>"Eng yaxshi o'qituvchi — o'quvchilarga mustaqil fikrlashni o'rgatadigan o'qituvchidir" — John Dewey, ta'lim reformatori</blockquote>
    `
  },
  {
    id: 3,
    category: "Xavfsizlik",
    title: "Raqamli xavfsizlik: Onlayn muhitda himoyalangan bo'lish",
    excerpt: "Shaxsiy ma'lumotlarni himoya qilish, parollar xavfsizligi, ijtimoiy tarmoqlardagi maxfiylik sozlamalari. Kiberhujumlardan qanday himoyalanish kerak va nima qilish mumkin emas.",
    image: pc3,
    date: "5 Noyabr, 2024",
    content: `
      <h3>Raqamli xavfsizlik asoslari</h3>
      
      <p>Internet — bu ulkan imkoniyatlar olami, lekin ayni paytda turli xavflar ham mavjud. Shaxsiy ma'lumotlaringizni himoya qilish zamonaviy dunyoda eng muhim ko'nikmalardan biridir.</p>

      <h4>1. Parol xavfsizligi</h4>
      <p>Kuchli parol yaratish qoidalari:</p>
      <ul>
        <li>Kamida 12 belgi uzunlikda bo'lishi</li>
        <li>Katta va kichik harflar, raqamlar va maxsus belgilarni qo'shish</li>
        <li>Shaxsiy ma'lumotlar (ism, tug'ilgan kun) ishlatmaslik</li>
        <li>Har bir akkaunt uchun alohida parol yaratish</li>
        <li>Parol menejerlaridan foydalanish (LastPass, 1Password, Bitwarden)</li>
      </ul>

      <p><strong>Yaxshi parol misoli:</strong> T$9mL#pQ2x@K (tasodifiy belgilar kombinatsiyasi)</p>
      <p><strong>Yomon parol misoli:</strong> parol123, ism1990, telefon nomer</p>

      <h4>2. Ikki bosqichli autentifikatsiya (2FA)</h4>
      <p>Qo'shimcha himoya qatlami qo'shish juda muhim:</p>
      <ul>
        <li>SMS kod orqali tasdiqlash</li>
        <li>Autentifikator ilovalar (Google Authenticator, Microsoft Authenticator)</li>
        <li>Biometrik tasdiklash (barmoq izi, yuz tanish)</li>
      </ul>

      <h4>3. Ijtimoiy tarmoqlarda xavfsizlik</h4>
      <p>Maxfiylik sozlamalarini to'g'ri sozlash:</p>
      <ul>
        <li>Kim profilingizni ko'ra olishini cheklash</li>
        <li>Joylashuv ma'lumotlarini yashirish</li>
        <li>Noma'lum odamlardan do'stlik so'rovlarini qabul qilmaslik</li>
        <li>Shaxsiy ma'lumotlarni (manzil, telefon) ochiq holda joylashtirmaslik</li>
      </ul>

      <h4>4. Fishing (Phishing) hujumlaridan himoya</h4>
      <p>Fishing — bu firibgarlarning shaxsiy ma'lumotlaringizni o'g'irlash uchun qo'llagan usuli. Qanday aniqlash mumkin:</p>
      <ul>
        <li>Xatlar grammatik xatolar bilan to'la</li>
        <li>Shoshilinch harakatga undaydi ("Hoziroq bosing!")</li>
        <li>Shubhali havolalar (URL ni tekshiring)</li>
        <li>Noma'lum jo'natuvchi manzillari</li>
      </ul>

      <h4>5. Ommaviy Wi-Fi xavfsizligi</h4>
      <p>Qahvaxonalar, aeroportlar va boshqa jamoat joylaridagi Wi-Fi tarmoqlarida:</p>
      <ul>
        <li>Bank operatsiyalari va maxfiy ma'lumotlar kiritmaslik</li>
        <li>VPN (Virtual Private Network) ishlatish</li>
        <li>Avtomatik Wi-Fi ulanishni o'chirish</li>
        <li>HTTPS protokoli bor saytlarda ishlash</li>
      </ul>

      <h4>6. Zararli dasturlardan himoya</h4>
      <p>Viruslar va malware dan himoyalanish:</p>
      <ul>
        <li>Antivirus dasturini o'rnatish va yangilab turish</li>
        <li>Noma'lum manbalardan fayl yuklab olmaslik</li>
        <li>Operatsion tizimni muntazam yangilash</li>
        <li>Shubhali xabarlardagi havolalarni ochmaslik</li>
      </ul>

      <h3>Bolalar uchun raqamli xavfsizlik</h3>
      <p>Ota-onalar e'tiborига:</p>
      <ul>
        <li>Bolalar bilan internetda xavfsizlik qoidalarini muhokama qilish</li>
        <li>Ota-ona nazorati dasturlaridan foydalanish</li>
        <li>Ekran vaqtini cheklash</li>
        <li>Noma'lum odamlar bilan muloqot qilmaslikni o'rgatish</li>
      </ul>

      <blockquote>"Raqamli xavfsizlik — bu bir martalik harakat emas, balki doimiy jarayondir" — Kaspersky Lab</blockquote>
    `
  },
  {
    id: 4,
    category: "Tadqiqot",
    title: "Mediasavodxonlik va ijtimoiy tarmoqlar: Tadqiqot natijalari",
    excerpt: "2024-yil tadqiqoti: yoshlarning 78% ijtimoiy tarmoqlardan yangilik oladi. Algoritmlаr ta'siri, exo-kamera effekti va tanqidiy fikrlash muammolari bo'yicha ilmiy ma'lumotlar.",
    image: pc4,
    date: "28 Oktyabr, 2024",
    content: `
      <h3>Ijtimoiy tarmoqlar va mediasavodxonlik: Ilmiy tadqiqot</h3>
      
      <p>2024-yil fevral-iyun oylarida O'zbekiston va MDH mamlakatlari bo'ylab 5000 dan ortiq respondent ishtirokida keng ko'lamli tadqiqot o'tkazildi. Natijalar g'ayritabiiy.</p>

      <h4>Asosiy natijalar</h4>
      
      <p><strong>1. Axborot manbalari statistikasi</strong></p>
      <ul>
        <li>78% - ijtimoiy tarmoqlardan (Instagram, Telegram, Facebook)</li>
        <li>12% - an'anaviy ommaviy axborot vositalari (TV, gazeta)</li>
        <li>10% - ixtisoslashtirilgan yangiliklar sayti</li>
      </ul>

      <p><strong>2. Yoshlar (18-25 yosh) o'rtasida:</strong></p>
      <ul>
        <li>85% har kuni 3 soatdan ortiq ijtimoiy tarmoqlarda</li>
        <li>62% yangiliklarni tekshirmasdan baham ko'radi</li>
        <li>только 23% manbalarni tekshiradi</li>
        <li>45% "klikbeyt" sarlavhalarini bosadi</li>
      </ul>

      <h4>Algoritmlаr va exo-kamera effekti</h4>
      
      <p>Ijtimoiy tarmoqlar algoritmlari foydalanuvchilarga faqat ularning qarashlariga mos kontentni ko'rsatadi. Bu "exo-kamera" (echo chamber) deb ataladigan hodisani keltirib chiqaradi:</p>
      
      <ul>
        <li>Foydalanuvchi faqat bir xil fikrlarni ko'radi</li>
        <li>Qarama-qarshi nuqtai nazarlar filtrlangan holda yashiriladi</li>
        <li>Bu stereotiplarni mustahkamlashga olib keladi</li>
        <li>Tanqidiy fikrlash qobiliyati susayadi</li>
      </ul>

      <h4>Dezinformatsiya tarqalish tezligiAContinuejsx      <h4>Dezinformatsiya tarqalish tezligi</h4>
      
      <p>MIT tadqiqoti (2024) shuni ko'rsatdi:</p>
      <ul>
        <li>Soxta yangiliklar haqiqiy yangiliklardan <strong>6 barobar tezroq</strong> tarqaladi</li>
        <li>Emotsional kontent (qo'rquv, g'azab) 70% ko'proq ulashiladi</li>
        <li>Rasmlarda manipulyatsiya 45% holatlarda aniqlanmaydi</li>
        <li>Video formatdagi soxta yangiliklar 3 marta ko'proq ishoniladi</li>
      </ul>

      <h4>Mediasavodxonlik darajasi bo'yicha natijalar</h4>
      
      <p>Test sinovida ishtirokchilarning:</p>
      <ul>
        <li>Yuqori daraja (soxta yangilikni 80%+ aniqlay oladi) - 18%</li>
        <li>O'rta daraja (50-80% aniqlay oladi) - 35%</li>
        <li>Past daraja (50% dan kam) - 47%</li>
      </ul>

      <h4>Yoshlar o'rtasida eng keng tarqalgan muammolar</h4>
      
      <p><strong>1. Manba tekshirmaslik</strong></p>
      <p>67% yoshlar yangiliklarni birinchi ko'rgan joyidan ishonishadi, qo'shimcha tekshirishlarsiz.</p>

      <p><strong>2. Hissiy reaktsiya</strong></p>
      <p>73% kontentga emotsional javob berishadi, mantiqiy tahlil qilmaydilar.</p>

      <p><strong>3. Tezkor tarqatish</strong></p>
      <p>Yoshlarning 58% ma'lumotni to'liq o'qimasdan baham ko'rishadi.</p>

      <h4>Ta'lim ta'sirining natijalari</h4>
      
      <p>Mediasavodxonlik fanini o'rganganlarning:</p>
      <ul>
        <li>Soxta yangiliklarni aniqlash qobiliyati 65% oshdi</li>
        <li>Manba tekshirish ko'rsatkichi 3 barobar oshdi</li>
        <li>Tanqidiy fikrlash darajasi 58% yaxshilandi</li>
        <li>Online firibgarlik qurboni bo'lish 42% kamaydi</li>
      </ul>

      <h3>Tavsiyalar</h3>
      
      <p>Tadqiqot asosida ishlab chiqilgan tavsiyalar:</p>
      <ul>
        <li>Ta'lim muassasalarida majburiy mediasavodxonlik kurslari</li>
        <li>Ota-onalar uchun maxsus treninglar</li>
        <li>Ijtimoiy tarmoqlarda ta'lim kontenti yaratish</li>
        <li>Faktcheking xizmatlarini rivojlantirish</li>
        <li>Media kompaniyalar bilan hamkorlik</li>
      </ul>

      <blockquote>"Ma'lumotlar okeani orasida navigatsiya qilish uchun bizga tanqidiy fikrlash kompasi kerak" — Dr. Renee Hobbs, mediasavodxonlik tadqiqotchisi</blockquote>
    `
  },
  {
    id: 5,
    category: "Amaliyot",
    title: "Faktcheking: Yangiliklarni tekshirish bo'yicha amaliy qo'llanma",
    excerpt: "Yangiliklarni qanday tekshirish kerak? Bosqichma-bosqich ko'rsatmalar, foydali vositalar va xizmatlar. Rasmlar, videolar va manbalarni tekshirish usullari.",
    image: pc5,
    date: "22 Oktyabr, 2024",
    content: `
      <h3>Faktcheking: Haqiqatni aniqlash san'ati</h3>
      
      <p>Faktcheking — bu axborot haqiqiyligini tekshirish jarayoni. Har bir fuqaro ushbu ko'nikmaga ega bo'lishi kerak.</p>

      <h4>5 bosqichli faktcheking usuli</h4>
      
      <p><strong>Bosqich 1: STOP (To'xta)</strong></p>
      <p>Yangiliklarni darhol baham ko'rmang. O'ylab ko'ring:</p>
      <ul>
        <li>Bu yangilik mantiqiy tuyuladimi?</li>
        <li>Sarlavha haddan tashqari emotsionalmi?</li>
        <li>Nima uchun bu sizga yuborildi?</li>
      </ul>

      <p><strong>Bosqich 2: SOURCE (Manba)</strong></p>
      <p>Axborot qayerdan kelganini tekshiring:</p>
      <ul>
        <li>Muallifni aniqlang (kim yozgan?)</li>
        <li>Sayt/kanal ishonchli mi?</li>
        <li>Nashr sanasini tekshiring (eski yangiliklarni yangi deb ko'rsatishadi)</li>
        <li>Manzil (URL) haqiqiymi? (masalan: bbc.com haqiqiy, bbc.com.co soxta)</li>
      </ul>

      <p><strong>Bosqich 3: SEARCH (Qidirish)</strong></p>
      <p>Boshqa manbalarni qidiring:</p>
      <ul>
        <li>Google da qidirib ko'ring</li>
        <li>Kamida 3 ta mustaqil manba topishga harakat qiling</li>
        <li>Rasmiy yangiliklar saytlarini tekshiring</li>
        <li>Faktcheking saytlaridan foydalaning</li>
      </ul>

      <p><strong>Bosqich 4: SCRUTINIZE (Chuqur tahlil)</strong></p>
      <p>Kontentni diqqat bilan o'rganing:</p>
      <ul>
        <li>Grammatik xatolar bormi?</li>
        <li>Statistika asoslangan mi?</li>
        <li>Iqtiboslar haqiqiy odamlardan mi?</li>
        <li>Manbalarga havolalar mavjudmi?</li>
      </ul>

      <p><strong>Bosqich 5: SHARE (Baham ko'ring)</strong></p>
      <p>Faqat tekshirilgan axborotni tarqating:</p>
      <ul>
        <li>Ishonchli ma'lumotlarni baham ko'ring</li>
        <li>Agar noaniq bo'lsa, tarqatmang</li>
        <li>Soxta yangiliklarni aniqlasangiz, atrofingizga xabar bering</li>
      </ul>

      <h4>Rasmlarni tekshirish</h4>
      
      <p><strong>Reverse Image Search (Teskari rasm qidiruv)</strong></p>
      <p>Vositalar:</p>
      <ul>
        <li><strong>Google Images:</strong> images.google.com — rasmni yuklang yoki URL kiriting</li>
        <li><strong>TinEye:</strong> tineye.com — 50 milliarddan ortiq rasm bazasi</li>
        <li><strong>Yandex Images:</strong> yandex.ru/images — ko'pincha boshqa natijalari</li>
      </ul>

      <p><strong>Metadata tekshirish</strong></p>
      <p>Rasm haqida ma'lumot:</p>
      <ul>
        <li>Qachon suratga olingan</li>
        <li>Qayerda suratga olingan (GPS ma'lumotlari)</li>
        <li>Qanday kamera/telefon ishlatilgan</li>
        <li>Tahrirlangan mi?</li>
      </ul>

      <h4>Video kontentni tekshirish</h4>
      
      <p>Video manipulyatsiyasi eng xavfli dezinformatsiya turi:</p>
      <ul>
        <li><strong>InVID:</strong> video kadrlarini ajratib, har birini tekshirish</li>
        <li><strong>YouTube DataViewer:</strong> Amnesty International vositasi</li>
        <li>Video kadrlarini teskari qidirish orqali tekshirish</li>
        <li>Audio va video sinxronligini tekshirish</li>
      </ul>

      <h4>Foydali faktcheking platformalari</h4>
      
      <p><strong>Xalqaro:</strong></p>
      <ul>
        <li>Snopes.com — eng qadimgi faktcheking sayti</li>
        <li>FactCheck.org — siyosiy faktcheking</li>
        <li>PolitiFact.com — "Yolg'on o'lchagich"</li>
        <li>Full Fact — Buyuk Britaniya faktcheking</li>
      </ul>

      <p><strong>Mintaqaviy:</strong></p>
      <ul>
        <li>Factcheck.kz — Qozog'iston</li>
        <li>StopFake.org — Ukraina</li>
        <li>O'zbekiston uchun: davlat media agentliklari rasmiy kanallari</li>
      </ul>

      <h4>Amaliy mashqlar</h4>
      
      <p><strong>Mashq 1: Sarlavhalarni tahlil qiling</strong></p>
      <p>Quyidagi sarlavhalardan qaysi biri shubhali?</p>
      <ul>
        <li>"SIZ BUNI ISHONMAYSIZ! Shifokоr DAVOLASH USULINNI YASHIRDI!"</li>
        <li>"Vazirlar Mahkamasi yangi qaror qabul qildi"</li>
        <li>"99% ODAMLAR BUNI BILMAYDI! DARHOL O'QING!"</li>
      </ul>

      <p><strong>Javob:</strong> 1 va 3 — aniq "klikbeyt", haddan tashqari emotsional va caps lock.</p>

      <p><strong>Mashq 2: URL manzilni tekshiring</strong></p>
      <p>Qaysi biri haqiqiy BBC sayti?</p>
      <ul>
        <li>bbc.com</li>
        <li>bbc-news.com</li>
        <li>bbc.com.co</li>
      </ul>

      <p><strong>Javob:</strong> Faqat bbc.com haqiqiy (aslida bbc.co.uk). Qolgan ikkalasi soxta.</p>

      <h3>Xulosa</h3>
      <p>Faktcheking — bu jamoat burchidir, faqat jurnalistlar ishi emas. Har bir fuqaro ma'suliyat bilan yondashishi kerak:</p>
      <ul>
        <li>Har doim manba tekshiring</li>
        <li>Noaniq ma'lumotlarni tarqatmang</li>
        <li>Soxta yangiliklarni aniqlang va xabar bering</li>
        <li>Oilangizga va do'stlaringizga o'rgating</li>
      </ul>

      <blockquote>"Haqiqat — bu demokratiyaning birinchi qurboni, lekin biz uni himoya qilishimiz kerak" — Carl Bernstein, taniqli jurnalist</blockquote>
    `
  },
  {
    id: 6,
    category: "Dastur",
    title: "Maktablar uchun mediasavodxonlik dasturi: To'liq kurs",
    excerpt: "7-11 sinflar uchun ishlab chiqilgan to'liq o'quv dasturi. 34 soatlik kurs, mavzular ro'yxati, o'quv materiallari va baholash mezonlari. Ta'lim vazirligining tasdiqlangan versiyasi.",
    image: pc6,
    date: "15 Oktyabr, 2024",
    content: `
      <h3>Mediasavodxonlik: Umumta'lim maktablari uchun o'quv dasturi</h3>
      
      <p>O'zbekiston Respublikasi Xalq ta'limi vazirligi tomonidan tasdiqlangan "Mediasavodxonlik" fani bo'yicha o'quv dasturi (2024-2025 o'quv yili).</p>

      <h4>Umumiy ma'lumotlar</h4>
      
      <ul>
        <li><strong>Sinflar:</strong> 7-11 (har bir sinf uchun 34 soat)</li>
        <li><strong>Haftalik:</strong> 1 soat</li>
        <li><strong>Yillik:</strong> 34 soat (nazariya 40%, amaliyot 60%)</li>
        <li><strong>Baholash:</strong> Chorak va yillik baholash</li>
      </ul>

      <h4>7-sinf: Mediasavodxonlik asoslari</h4>
      
      <p><strong>1-chorak: Media va jamiyat (8 soat)</strong></p>
      <ul>
        <li>Media nima? Ommaviy axborot vositalari turlari</li>
        <li>Medianing jamiyatdagi roli</li>
        <li>Axborot manbalari va ularning turlari</li>
        <li>Media kontentni qabul qilish</li>
      </ul>

      <p><strong>2-chorak: Tanqidiy fikrlash (8 soat)</strong></p>
      <ul>
        <li>Tanqidiy fikrlash nima?</li>
        <li>Axborot manbalarini baholash</li>
        <li>Fact va Opinion (Fakt va Fikr) ni farqlash</li>
        <li>Stereotiplar va qarashmalar</li>
      </ul>

      <p><strong>3-chorak: Media xavfsizligi (10 soat)</strong></p>
      <ul>
        <li>Internet xavfsizligi asoslari</li>
        <li>Shaxsiy ma'lumotlarni himoya qilish</li>
        <li>Parol xavfsizligi</li>
        <li>Ijtimoiy tarmoqlarda ehtiyotkorlik</li>
      </ul>

      <p><strong>4-chorak: Amaliy mashg'ulotlar (8 soat)</strong></p>
      <ul>
        <li>Loyiha ishlari</li>
        <li>Guruh topshiriqlari</li>
        <li>Prezentatsiyalar tayyorlash</li>
        <li>Yakuniy baholash</li>
      </ul>

      <h4>8-sinf: Media tahlili</h4>
      
      <p><strong>Asosiy mavzular:</strong></p>
      <ul>
        <li>Media matnlarini tahlil qilish</li>
        <li>Reklamaning ta'siri</li>
        <li>Yangiliklar ishlab chiqarish jarayoni</li>
        <li>Jurnalistika etikasi</li>
        <li>Dezinformatsiya va propaganda</li>
        <li>Faktcheking asoslari</li>
      </ul>

      <h4>9-sinf: Raqamli mediasavodxonlik</h4>
      
      <p><strong>Asosiy mavzular:</strong></p>
      <ul>
        <li>Ijtimoiy tarmoqlar va algoritmlar</li>
        <li>Exo-kamera (Echo chamber) effekti</li>
        <li>Raqamli iz va maxfiylik</li>
        <li>Kiberxavfsizlik</li>
        <li>Deepfake va sun'iy intellekt</li>
        <li>Media kontent yaratish</li>
      </ul>

      <h4>10-sinf: Media va demokratiya</h4>
      
      <p><strong>Asosiy mavzular:</strong></p>
      <ul>
        <li>So'z erkinligi va mas'uliyat</li>
        <li>Media va siyosat</li>
        <li>Mualliflik huquqi va intellektual mulk</li>
        <li>Media savodxonlik va fuqarolik</li>
        <li>Global media tizimi</li>
        <li>Media tadbirkorlik</li>
      </ul>

      <h4>11-sinf: Amaliy mediasavodxonlik</h4>
      
      <p><strong>Asosiy mavzular:</strong></p>
      <ul>
        <li>Professional media kontenti yaratish</li>
        <li>Podcast va video ishlab chiqarish</li>
        <li>Maqola yozish ko'nikmalari</li>
        <li>Murakkab faktcheking</li>
        <li>Media tadqiqoti metodlari</li>
        <li>Bitiruvlar loyihasi</li>
      </ul>

      <h4>Baholash mezonlari</h4>
      
      <p><strong>Nazariy bilimlar (40%):</strong></p>
      <ul>
        <li>Testlar va so'rovnomalar</li>
        <li>Og'zaki javoblar</li>
        <li>Yozma ishlar</li>
      </ul>

      <p><strong>Amaliy ko'nikmalar (60%):</strong></p>
      <ul>
        <li>Loyiha ishlari</li>
        <li>Guruh topshiriqlari</li>
        <li>Prezentatsiyalar</li>
        <li>Portfolio (to'plangan ishlar)</li>
      </ul>

      <h4>O'qituvchilar uchun resurslar</h4>
      
      <ul>
        <li>Raqamli darsliklar (PDF, interaktiv)</li>
        <li>Video darsliklar va master-klasslar</li>
        <li>Test va topshiriqlar bazasi</li>
        <li>Metodikaviy qo'llanmalar</li>
        <li>Online kurslar va vebinarlar</li>
      </ul>

      <h3>O'quv materiallari</h3>
      
      <p><strong>Asosiy darslik:</strong></p>
      <p>"Mediasavodxonlik: O'quvchilar uchun qo'llanma" (7-11 sinflar uchun 5 kitob)</p>

      <p><strong>Qo'shimcha adabiyotlar:</strong></p>
      <ul>
        <li>UNESCO Media and Information Literacy Curriculum</li>
        <li>Common Sense Media materials</li>
        <li>News Literacy Project resources</li>
        <li>Mahalliy tadqiqotlar va maqolalar</li>
      </ul>

      <blockquote>"Ta'lim — bu kelajak uchun sarmoya. Mediasavodxonlik esa zamonaviy ta'limning asosi" — O'zbekiston Xalq ta'limi vazirligi</blockquote>
    `
  },
  {
    id: 7,
    category: "Qo'llanma",
    title: "Ota-onalar uchun qo'llanma: Bolalarni raqamli dunyoda himoya qilish",
    excerpt: "Bolalar va o'smirlar uchun internet xavfsizligi. Ota-ona nazorati, ekran vaqti, onlayn kiberbulling va raqamli muvozanat. Yoshga mos tavsiyalar va amaliy maslahatlar.",
    image: pc7,
    date: "8 Oktyabr, 2024",
    content: `
      <h3>Ota-onalar uchun: Bolalarni raqamli dunyoda qanday himoya qilish</h3>
      
      <p>Zamonaviy bolalar "raqamli avlod" hisoblanadi. Ular texnologiyalar bilan tug'ilganlar va ular uchun internet — tabiiy muhit. Lekin bu ulkan imkoniyatlar bilan birga xavflarni ham olib keladi.</p>

      <h4>Yoshga qarab tavsiyalar</h4>
      
      <p><strong>3-6 yosh: Birinchi qadamlar</strong></p>
      <ul>
        <li><strong>Ekran vaqti:</strong> kuniga maksimum 1 soat</li>
        <li><strong>Kontent:</strong> faqat ta'limiy va yoshga mos dasturlar</li>
        <li><strong>Nazorat:</strong> faqat ota-ona huzurida</li>
        <li><strong>Qurilmalar:</strong> planshet yoki kompyuter (telefon emas)</li>
      </ul>

      <p>Tavsiya qilinadigan ilovalar: YouTube Kids, Khan Academy Kids, PBS Kids</p>

      <p><strong>7-10 yosh: Boshlang'ich maktab</strong></p>
      <ul>
        <li><strong>Ekran vaqti:</strong> 1-2 soat (ta'lim maqsadida ko'proq)</li>
        <li><strong>Internet xavfsizligi:</strong> asosiy qoidalarni o'rgatish</li>
        <li><strong>Ijtimoiy tarmoqlar:</strong> hali tavsiya etilmaydi</li>
        <li><strong>Ota-ona nazorati:</strong> barcha qurilmalarda faol</li>
      </ul>

      <p><strong>11-14 yosh: O'rta maktab</strong></p>
      <ul>
        <li><strong>Ekran vaqti:</strong> 2-3 soat (ta'limsiz)</li>
        <li><strong>Birinchi telefon:</strong> mumkin (ota-ona nazorati bilan)</li>
        <li><strong>Ijtimoiy tarmoqlar:</strong> maxfiylik sozlamalari bilan</li>
        <li><strong>Muloqot:</strong> muntazam suhbatlar internet tajribasi haqida</li>
      </ul>

      <p><strong>15-17 yosh: O'smirlar</strong></p>
      <ul>
        <li><strong>Ko'proq erkinlik:</strong> lekin ota-ona diqqati zarur</li>
        <li><strong>O'zaro ishonch:</strong> ochiq muloqot va qo'llab-quvvatlash</li>
        <li><strong>Raqamli muvozanat:</strong> offline faoliyatlar bilan balans</li>
        <li><strong>Karyera:</strong> raqamli ko'nikmalarni rivojlantirish</li>
      </ul>

      <h4>Asosiy xavflar va ulardan himoya</h4>
      
      <p><strong>1. Kiberbulling (Onlayn zo'ravonlik)</strong></p>
      <p>Belgilari:</p>
      <ul>
        <li>Bola telefon/kompyuterdan keyin kayfiyati yomonlashadi</li>
        <li>Ijtimoiy tarmoqlarni to'satdan to'xtatadi</li>
        <li>Maktabga bormaslik istamaydi</li>
        <li>Uyqu va ishtaha muammolari</li>
      </ul>

      <p>Nima qilish kerak:</p>
      <ul>
        <li>Ochiq suhbat: bola bilan ishonch asosida gaplashing</li>
        <li>Dalillar: skrinshotlar va xabarlarni saqlang</li>
        <li>Xabar berish: ijtimoiy tarmoq administratsiyasiga</li>
        <li>Yordam: psixolog yoki maktab ma'muriyati</li>
      </ul>

      <p><strong>2. Nomaqbul kontent</strong></p>
      <p>Himoya choralari:</p>
      <ul>
        <li>Ota-ona nazorati dasturlari o'rnating</li>
        <li>SafeSearch ni faollashtiring (Google, YouTube)</li>
        <li>DNS filtrlari (OpenDNS FamilyShield)</li>
        <li>Brauzer kengaytmalari (Web of Trust, uBlock Origin)</li>
      </ul>

      <p><strong>3. Onlayn predatorlar</strong></p>
      <p>Ogohlik qiling:</p>
      <ul>
        <li>Noma'lum odamlar bilan gaplashmaslik</li>
        <li>Shaxsiy ma'lumotlar (manzil, maktab, telefon) bermaslik</li>
        <li>Hech qachon uchrashuvga chiqmaslik</li>
        <li>Shubhali harakatlar haqida darhol ota-onaga aytish</li>
      </ul>

      <p><strong>4. Qimor o'yinlari va loot boxlar</strong></p>
      <p>Ko'plab o'yinlar qimor elementlarini o'z ichiga oladi:</p>
      <ul>
        <li>Kreditka ma'lumotlarini saqlaMASLIK</li>
        <li>Haridlar uchun parollar o'rnating</li>
        <li>Oylik limitlar belgilang</li>
        <li>Moliyaviy savodxonlik haqida gaplashing</li>
      </ul>

      <h4>Ota-ona nazorati vositalari</h4>
      
      <p><strong>Operatsion tizimlar:</strong></p>
      <ul>
        <li><strong>iOS (iPhone/iPad):</strong> Screen Time — ekran vaqti, kontent cheklashlari</li>
        <li><strong>Android:</strong> Family Link — joylashuv, ilovalar, vaqt nazorati</li>
        <li><strong>Windows:</strong> Microsoft Family Safety</li>
        <li><strong>macOS:</strong> Parental Controls</li>
      </ul>

      <p><strong>Ixtisoslashtirilgan dasturlar:</strong></p>
      <ul>
        <li><strong>Qustodio:</strong> keng qamrovli nazorat</li>
        <li><strong>Net Nanny:</strong> kontent filtrlash</li>
        <li><strong>Bark:</strong> xabarlar va ijtimoiy tarmoqlar monitoringi</li>
        <li><strong>Norton Family:</strong> xavfsizlik va nazorat</li>
      </ul>

      <h4>Sog'lom raqamli muhit yaratish</h4>
      
      <p><strong>Oilaviy qoidalar:</strong></p>
      <ul>
        <li><strong>"Texnologiyasiz zonalar":</strong> ovqatlanish stoli, yotoq xonasi</li>
        <li><strong>Ekransiz soatlar:</strong> uxlashdan 1 soat oldin</li>
        <li><strong>Oilaviy vaqt:</strong> haftalik raqamsiz kunlar</li>
        <li><strong>O'rnak:</strong> ota-onalar ham qoidalarga amal qilishi kerak</li>
      </ul>

      <p><strong>Ochiq muloqot:</strong></p>
      <ul>
        <li>Bolalar bilan muntazam internet tajribalari haqida gaplashing</li>
        <li>Savol-javob uchun ochiq bo'ling</li>
        <li>Jazo emas, qo'llab-quvvatlash muhim</li>
        <li>O'zingizning xatolaringiz haqida ham gaplashing</li>
      </ul>

      <h4>Foydaliroq faoliyatlar</h4>
      
      <p>Raqamli ko'nikmalarni rivojlantirish:</p>
      <ul>
        <li><strong>Kodlash:</strong> Scratch, Code.org, Python</li>
        <li><strong>Yaratuvchilik:</strong> video montaj, dizayn, musiqa</li>
        <li><strong>Ta'lim:</strong> Khan Academy, Coursera, edX</li>
        <li><strong>Loyihalar:</strong> blog, YouTube kanal, podcast</li>
      </ul>

      <h3>Nima qilmaslik kerak</h3>
      <ul>
        <li>❌ To'liq man qilish (samarасiz, qarshilik tug'diradi)</li>
        <li>❌ Maxfiylikni buzish (ishonchni yo'qotadi)</li>
        <li>❌ Texnologiyalarni jazolash vositasi sifatida ishlatish</li>
        <li>❌ Bolaning tajribasini kichik ko'rish</li>
      </ul>

      <h3>Favqulodda vaziyatlar</h3>
      <p>Agar bola quyidagilarni boshdan kechirsa:</p>
      <ul>
        <li>OnlaAContinuejsx        <li>Onlayn zo'ravonlik yoki tahdidlar</li>
        <li>Nomaqbul kontentga duch kelish</li>
        <li>Shaxsiy ma'lumotlarni tasodifan oshkor qilish</li>
        <li>Firibgarlik yoki moliyaviy yo'qotishlar</li>
      </ul>

      <p><strong>Darhol harakatlar:</strong></p>
      <ul>
        <li>Tinch qoling va bolani qo'llab-quvvatlang</li>
        <li>Dalillarni to'plang (skrinshotlar, xabarlar)</li>
        <li>Zarur bo'lsa, politsiyaga murojaat qiling</li>
        <li>Professional yordam oling (psixolog)</li>
      </ul>

      <h4>Foydali resurslar</h4>
      
      <p><strong>Ta'lim materiallari:</strong></p>
      <ul>
        <li>Common Sense Media — yoshga mos kontent reytinglari</li>
        <li>NetSmartz — bolalar uchun internet xavfsizligi</li>
        <li>Be Internet Awesome (Google) — interaktiv o'yinlar</li>
      </ul>

      <p><strong>Yordam liniyalari:</strong></p>
      <ul>
        <li>Milliy kiberhavfsizlik markazi</li>
        <li>Bolalar huquqlarini himoya qilish organlari</li>
        <li>Psixologik yordam xizmatlari</li>
      </ul>

      <blockquote>"Bolalarni raqamli dunyoda himoya qilish — bu ularni internetdan uzoqlashtirish emas, balki xavfsiz foydalanishni o'rgatishdir" — Common Sense Media</blockquote>

      <h3>Amaliy maslahatlar</h3>
      
      <p><strong>Haftalik "Raqamli muloqot" o'tkazing:</strong></p>
      <ul>
        <li>20-30 daqiqa oilaviy suhbat</li>
        <li>Bolalar o'z tajribalarini baham ko'radi</li>
        <li>Ota-onalar savollar beradi va tinglay oladi</li>
        <li>Muammolarni birgalikda hal qilish</li>
      </ul>

      <p><strong>"Raqamli shartnoma" tuzing:</strong></p>
      <ul>
        <li>Oilaviy qoidalarni yozma ravishda rasmiylashtiring</li>
        <li>Hamma a'zolar (ota-ona va bolalar) imzolaydi</li>
        <li>Ekran vaqti, xavfsizlik qoidalari, javobgarlik</li>
        <li>Har 6 oyda qayta ko'rib chiqish</li>
      </ul>

      <h4>Muvaffaqiyat ko'rsatkichlari</h4>
      
      <p>Siz to'g'ri yo'ldasiz, agar:</p>
      <ul>
        <li>✅ Bola sizga internet tajribalarini ochiq aytib beradi</li>
        <li>✅ Muammolar yuzaga kelganda birinchi bo'lib sizga murojaat qiladi</li>
        <li>✅ Raqamli va hayotiy faoliyat o'rtasida muvozanat bor</li>
        <li>✅ Bola tanqidiy fikrlash ko'nikmalarini rivojlantirmoqda</li>
        <li>✅ Texnologiyalarni ijodiy va ta'limiy maqsadlarda ishlatadi</li>
      </ul>

      <p>Esda tuting: Maqsad — bolani nazorat qilish emas, balki xavfsiz va mas'uliyatli raqamli fuqaro tarbiyalashdir!</p>
    `
  }
];

// ==================== КОМПОНЕНТ ====================
const Info = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { value: "all", label: "Barchasi", icon: <ArticleIcon /> },
    { value: "Yangiliklar", label: "Yangiliklar", icon: <NewspaperIcon /> },
    { value: "Metodika", label: "Metodika", icon: <MenuBookIcon /> },
    { value: "Xavfsizlik", label: "Xavfsizlik", icon: <SecurityIcon /> },
    { value: "Tadqiqot", label: "Tadqiqot", icon: <ScienceIcon /> },
    { value: "Amaliyot", label: "Amaliyot", icon: <BuildIcon /> },
    { value: "Dastur", label: "Dastur", icon: <MenuBookIcon /> },
    { value: "Qo'llanma", label: "Qo'llanma", icon: <LocalLibraryIcon /> }
  ];

  const filteredArticles = selectedCategory === "all"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <PageWrapper>
      <Container>
        <Header>
          <MainTitle>
            <LocalLibraryIcon sx={{ fontSize: 50 }} />
            Mediasavodxonlik Ma'lumotlari
          </MainTitle>
          <Subtitle>
            Ilmiy asoslangan maqolalar, tadqiqotlar va amaliy qo'llanmalar — raqamli dunyoda xavfsiz va ongli yashash uchun zarur bilimlar bazasi
          </Subtitle>
        </Header>

        <CategoryTabs>
          {categories.map(cat => (
            <TabButton
              key={cat.value}
              active={selectedCategory === cat.value}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.icon}
              {cat.label}
            </TabButton>
          ))}
        </CategoryTabs>

        <ArticlesGrid>
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} onClick={() => setSelectedArticle(article)}>
              <ArticleImage src={article.image} />
              <ArticleContent>
                <ArticleCategory>{article.category}</ArticleCategory>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                <ArticleDate>{article.date}</ArticleDate>
                <ReadMoreButton>Batafsil o'qish</ReadMoreButton>
              </ArticleContent>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </Container>

      {/* МОДАЛКА */}
      {selectedArticle && (
        <ModalOverlay onClick={() => setSelectedArticle(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalImage src={selectedArticle.image} />
            <ModalBody>
              <CloseButton onClick={() => setSelectedArticle(null)}>×</CloseButton>
              <ModalTitle>{selectedArticle.title}</ModalTitle>
              <ModalMeta>
                <ArticleCategory>{selectedArticle.category}</ArticleCategory>
                <ArticleDate>{selectedArticle.date}</ArticleDate>
              </ModalMeta>
              <ModalText dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};

export default Info;