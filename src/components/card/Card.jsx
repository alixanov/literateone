// src/components/learning/LearningCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// ==================== СТИЛИ ====================
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 3rem;
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  font-family: 'Georgia', 'Times New Roman', serif;
`;

const CardWrapper = styled(Link)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  border: 2px solid transparent;
  position: relative;
  display: block;

  &:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
    border-color: #667eea;

    .icon-wrapper {
      transform: scale(1.15) rotate(8deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  }
`;

const CardHeader = styled.div`
  padding: 2.5rem 2rem 1.5rem;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  transition: transform 0.4s ease;

  svg {
    font-size: 2.8rem;
    color: white;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.8rem;
  font-family: 'Georgia', serif;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;
  font-style: italic;
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;

  li {
    font-size: 1.05rem;
    color: #2d3748;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-family: 'Segoe UI', sans-serif;

    &::before {
      content: "✓";
      color: #48bb78;
      font-weight: bold;
      font-size: 1.3rem;
    }
  }
`;

const CardFooter = styled.div`
  padding: 1.5rem 2rem;
  background: #f7fafc;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionButton = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.9rem 1.8rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Segoe UI', sans-serif;

  &:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }
`;

const Badge = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

// ==================== КОМПОНЕНТ ====================
const LearningCards = () => {
  return (
    <CardsContainer>
      {/* КАРТОЧКА 1: ВИДЕО УРОКИ */}
      <CardWrapper to="/content">
        <CardHeader>
          <IconWrapper className="icon-wrapper">
            <PlayCircleOutlineIcon />
          </IconWrapper>
          <Title>Видео уроки</Title>
          <Subtitle>Интерактивные видео-курсы по медиаграмотности</Subtitle>
        </CardHeader>

        <CardContent>
          <FeatureList>
            <li>Профессиональные видео-лекции от экспертов</li>
            <li>Практические задания после каждого урока</li>
            <li>Интерактивные тесты и викторины</li>
            <li>Сертификат по окончании курса</li>
            <li>Доступ с любого устройства</li>
          </FeatureList>
        </CardContent>

        <CardFooter>
          <Badge>30+ уроков</Badge>
          <ActionButton>
            Перейти к урокам <ArrowForwardIcon fontSize="small" />
          </ActionButton>
        </CardFooter>
      </CardWrapper>

      {/* КАРТОЧКА 2: ИНФОРМАЦИОННОЕ ОБУЧЕНИЕ */}
      <CardWrapper to="/info">
        <CardHeader>
          <IconWrapper className="icon-wrapper">
            <MenuBookIcon />
          </IconWrapper>
          <Title>Информационное обучение</Title>
          <Subtitle>Глубокие статьи, исследования и методические материалы</Subtitle>
        </CardHeader>

        <CardContent>
          <FeatureList>
            <li>Научные статьи и исследования</li>
            <li>Практические руководства и чек-листы</li>
            <li>Юридические основы медиаграмотности</li>
            <li>Методики фактчекинга и анализа</li>
            <li>Обновления и новости в сфере медиа</li>
          </FeatureList>
        </CardContent>

        <CardFooter>
          <Badge>150+ материалов</Badge>
          <ActionButton>
            Открыть библиотеку <ArrowForwardIcon fontSize="small" />
          </ActionButton>
        </CardFooter>
      </CardWrapper>
    </CardsContainer>
  );
};

export default LearningCards;