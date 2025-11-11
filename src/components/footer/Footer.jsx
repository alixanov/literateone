import React from 'react';
import styled from 'styled-components';
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
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
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }

  svg {
    color: #667eea;
    font-size: 1.8rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const LogoIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  svg {
    font-size: 2rem;
    color: white;
  }
`;

const LogoText = styled.div`
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 0.9rem;
    color: #a0aec0;
    margin: 0.3rem 0 0 0;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #cbd5e0;
  line-height: 1.7;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: #cbd5e0;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: white;
    transform: translateX(5px);
  }

  svg {
    color: #667eea;
    font-size: 1.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const LinkItem = styled.li`
  a {
    color: #cbd5e0;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: white;
      transform: translateX(5px);

      &::before {
        transform: translateX(3px);
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  background: rgba(102, 126, 234, 0.1);
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    color: #cbd5e0;
    font-size: 1.3rem;
    transition: all 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.5);

    svg {
      color: white;
      transform: scale(1.1);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        {/* Logo va Ma'lumot */}
        <FooterSection>
          <LogoSection>
            <LogoIcon>
              <SchoolIcon />
            </LogoIcon>
            <LogoText>
              <h2>NamDTU</h2>
              <p>Mediasavodxonlik</p>
            </LogoText>
          </LogoSection>
          <Description>
            Namangan davlat texnika universiteti mediasavodxonlik portali.
            Zamonaviy axborot texnologiyalari va media ta'limi yo'nalishida
            ilg'or ta'lim va tadqiqotlar markazi.
          </Description>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon href="https://t.me" target="_blank" rel="noopener noreferrer">
              <TelegramIcon />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        {/* Tezkor havolalar */}
        <FooterSection>
          <SectionTitle>Tezkor havolalar</SectionTitle>
          <LinkList>
            <LinkItem><a href="/about">Biz haqimizda</a></LinkItem>
            <LinkItem><a href="/courses">Kurslar</a></LinkItem>
            <LinkItem><a href="/tests">Testlar</a></LinkItem>
            <LinkItem><a href="/crossword">Krossvord</a></LinkItem>
            <LinkItem><a href="/resources">Resurslar</a></LinkItem>
            <LinkItem><a href="/news">Yangiliklar</a></LinkItem>
            <LinkItem><a href="/contact">Bog'lanish</a></LinkItem>
          </LinkList>
        </FooterSection>

        {/* Foydali havolalar */}
        <FooterSection>
          <SectionTitle>Foydali havolalar</SectionTitle>
          <LinkList>
            <LinkItem><a href="https://namdtu.uz" target="_blank">NamDTU rasmiy sayti</a></LinkItem>
            <LinkItem><a href="/privacy">Maxfiylik siyosati</a></LinkItem>
            <LinkItem><a href="/terms">Foydalanish shartlari</a></LinkItem>
            <LinkItem><a href="/faq">Savol-javoblar</a></LinkItem>
            <LinkItem><a href="/support">Yordam markazi</a></LinkItem>
            <LinkItem><a href="/sitemap">Sayt xaritasi</a></LinkItem>
          </LinkList>
        </FooterSection>

        {/* Kontaktlar */}
        <FooterSection>
          <SectionTitle>Aloqa</SectionTitle>
          <ContactItem>
            <LocationOnIcon />
            <span>Namangan sh., Kosonsoy ko'chasi, 12</span>
          </ContactItem>
          <ContactItem>
            <PhoneIcon />
            <a href="tel:+998691234567">+998 (69) 123-45-67</a>
          </ContactItem>
          <ContactItem>
            <EmailIcon />
            <a href="mailto:info@namdtu.uz">info@namdtu.uz</a>
          </ContactItem>
          <ContactItem>
            <EmailIcon />
            <a href="mailto:media@namdtu.uz">media@namdtu.uz</a>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © 2025 <strong>NamDTU</strong>. Barcha huquqlar himoyalangan.
          Mediasavodxonlik portali.
        </Copyright>
        <DeveloperInfo>
          Ishlab chiqildi: <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            NamDTU IT jamoasi
          </a>
        </DeveloperInfo>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;