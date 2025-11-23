// src/components/video/VideoLessons.jsx
import React from "react";
import styled from "styled-components";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// ==================== СТИЛИ ====================
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 4rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
`;

const LessonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
`;

const LessonCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
    border-color: #667eea;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  background: #000;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const LessonInfo = styled.div`
  padding: 1.5rem;
`;

const LessonTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.8rem;
  line-height: 1.4;
`;

const LessonMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
L;
  color: #48bb78;
  font-weight: 600;
`;

const LessonDescription = styled.p`
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.6;
`;

// ==================== ДАННЫЕ УРОКОВ ====================
const videoLessons = [

  {
    "id": 1,
    "title": "Mediasavodxonlik va ijtimoiy tarmoqlar",
    "videoId": "UU6EQPcGS5s",
    "duration": "18:32",
    "description": "Mediasavodxonlik — axborotni to‘g‘ri qabul qilish, tahlil qilish va tanqidiy baholash ko‘nikmasi. U soxta yangiliklar, manipulyatsiya va klikbeytni ajratishda yordam beradi.",
    "completed": true
  },
  {
    id: 2,
    title: "Mediasavodxonlik asoslari: Nima uchun bu muhim?",
    videoId: "pyp-v17DKD8",
    duration: "12:45",
    description: "Mediasavodxonlik nima ekanligini, uning zamonaviy jamiyatdagi o‘rni va asosiy tamoyillarini tushuntiramiz.",
    completed: true
  },
  {
    id: 3,
    title: "Faktcheking: Haqiqatni qanday tekshirish kerak?",
    videoId: "P-TS3YXqzwI",
    duration: "15:20",
    description: "Professional faktcheking usullari, vositalar va amaliy maslahatlar.",
    completed: true
  },
  {
    id: 4,
    title: "Deepfake va sun'iy intellekt xavflari",
    videoId: "OOKREHTRqMs",
    duration: "22:10",
    description: "Deepfake texnologiyasi qanday ishlaydi va uni qanday aniqlash mumkin?",
    completed: false
  },
  {
    id: 5,
    title: "Raqamli xavfsizlik: Shaxsiy ma'lumotlarni himoya qilish",
    videoId: "UyHaMjXwPDI",
    duration: "19:55",
    description: "Parollar, 2FA, fishing hujumlari va kiberxavfsizlikning asosiy qoidalari.",
    completed: false
  }
];

// ==================== КОМПОНЕНТ ====================
const VideoLessons = () => {
  return (
    <PageWrapper>
      <Container>
        <Header>
          <Title>
            <PlayCircleOutlineIcon style={{ fontSize: "3rem", marginRight: "1rem" }} />
            Видео уроки по медиаграмотности
          </Title>
          <Subtitle>
            Профессиональные видео-лекции от экспертов. Смотрите в удобное время,
            изучайте в своём темпе и получайте сертификат по окончании.
          </Subtitle>
        </Header>

        <LessonsGrid>
          {videoLessons.map((lesson) => (
            <LessonCard key={lesson.id}>
              <VideoWrapper>
                <iframe
                  src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0&modestbranding=1`}
                  title={lesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>

              <LessonInfo>
                <LessonTitle>{lesson.title}</LessonTitle>

                <LessonMeta>
                  <Duration>
                    <AccessTimeIcon fontSize="small" />
                    {lesson.duration}
                  </Duration>
                  {lesson.completed && (
                    <Status>
                      <CheckCircleIcon fontSize="small" />
                      Пройдено
                    </Status>
                  )}
                </LessonMeta>

                <LessonDescription>{lesson.description}</LessonDescription>
              </LessonInfo>
            </LessonCard>
          ))}
        </LessonsGrid>
      </Container>
    </PageWrapper>
  );
};

export default VideoLessons;