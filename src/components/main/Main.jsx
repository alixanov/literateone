// src/components/main/MainContent.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Badge = styled.div`
  background: #667eea;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  display: inline-block;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h1`
  font-size: clamp(2.8rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 4vw, 1.35rem);
  color: #475569;
  max-width: 820px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4rem;
`;

// Основная кнопка — с градиентом
const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

// Вторичная кнопка — с обводкой
const SecondaryButton = styled(Link)`
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-color: transparent;
  }
`;

const MainContent = () => {
  return (
    <Section>
      <Wrapper>
        <Badge>Rasmiy taʼlim loyihasi</Badge>

        <Title>
          MEDIA SAVODXONLIK VA AXBOROT MADANIYATI
        </Title>

        <Subtitle>
          Dastur mutaxassislar tomonidan tasdiqlangan bo‘lib, oliy pedagogik taʼlim muassasalari talabalariga qo‘shimcha taʼlim resursi sifatida tavsiya etiladi.
        </Subtitle>

        <ButtonGroup>
          <PrimaryButton to="/start">
            Bepul o‘qishni boshlang
          </PrimaryButton>
          <SecondaryButton to="/about">
            Loyiha haqida batafsil maʼlumot
          </SecondaryButton>
        </ButtonGroup>
      </Wrapper>
    </Section>
  );
};

export default MainContent;
