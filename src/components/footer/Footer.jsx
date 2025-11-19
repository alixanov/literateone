// src/components/footer/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  padding: 5rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  margin-top: auto; /* для sticky footer */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%);
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: white;
  position: relative;
  padding-bottom: 0.8rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }

  svg {
    color: #667eea;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);

  svg {
    font-size: 2.5rem;
    color: white;
  }
`;

const LogoText = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 0.95rem;
    color: #a0aec0;
    margin: 0.4rem 0 0;
    font-weight: 500;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: #cbd5e0;
  line-height: 1.8;
  max-width: 380px;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.05rem;
  color: #cbd5e0;
  text-decoration: none;
  padding: 0.7rem 0.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.15);
    color: white;
    transform: translateX(8px);
    padding-left: 1rem;
  }

  svg {
    color: #667eea;
    font-size: 1.6rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  background: rgba(102, 126, 234, 0.1);
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  cursor: pointer;

  svg {
    color: #cbd5e0;
    font-size: 1.4rem;
    transition: all 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-color: transparent;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.5);

    svg {
      color: white;
      transform: scale(1.2);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 2rem;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: #a0aec0;
  margin: 0;

  strong {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
`;

const DeveloperInfo = styled.p`
  font-size: 0.9rem;
  color: #718096;
  margin: 1rem 0 0 0;

  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #764ba2;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        {/* Логотип и описание */}
        <FooterSection>
          <LogoSection>
            <LogoIcon>
              <SchoolIcon />
            </LogoIcon>
            <LogoText>
              <h2>NamDTU</h2>
              <p>Mediasavodxonlik Portali</p>
            </LogoText>
          </LogoSection>

          <Description>
            Namangan davlat texnika universiteti rasmiy mediasavodxonlik platformasi.
            Zamonaviy axborot dunyosida xavfsiz va ongli harakat qilish uchun ta'lim.
          </Description>

          <SocialLinks>
            <SocialIcon href="https://t.me/namdtx_mediasavodxonlik" target="_blank" rel="noopener noreferrer">
              <TelegramIcon />
            </SocialIcon>
            <SocialIcon href="https://instagram.com/namdtu_official" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href="https://youtube.com/@namdtu" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        {/* Контакты */}
        <FooterSection>
          <SectionTitle><LocationOnIcon /> Aloqa</SectionTitle>

          <ContactItem href="https://share.google/4yx3dhqvKu7leisAi" target="_blank">
            <LocationOnIcon />
            <span>Namangan sh., Kosonsoy ko'chasi, 7</span>
          </ContactItem>

          <ContactItem href="tel:+998975554472">
            <PhoneIcon />
            <span>+998 97 555 44 72</span>
          </ContactItem>

          <ContactItem href="https://namdtu.uz/">
            <EmailIcon />
            <span>namdtu.uz</span>
          </ContactItem>

          <ContactItem href="https://t.me/alisherhoji" target="_blank">
            <TelegramIcon />
            <span>Telegram</span>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © 2025 <strong>NamDTU</strong>. Barcha huquqlar himoyalangan.
        </Copyright>
        <DeveloperInfo>
          Ishlab chiqaruvchi: <a href="https://t.me/alisherhoji" target="_blank" rel="noopener noreferrer">Alisher Anvarov</a>
        </DeveloperInfo>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;