import React from "react";
import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublicIcon from "@mui/icons-material/Public";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Section = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 100%;
  padding: 4rem 2rem;
  border-top: 1px solid #e2e8f0;
  color: white;
`;

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const Item = styled.div`
  h3 {
    font-size: 2.8rem;
    font-weight: 800;
    color: #fff;
    margin: 0;
  }
  p {
    color: #f1f5f9;
    margin: 0.5rem 0 0;
    font-size: 1rem;
  }
`;

const Partners = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  opacity: 0.85;
  transition: all 0.4s ease;

  &:hover {
    opacity: 1;
  }

  .MuiSvgIcon-root {
    font-size: 3rem;
    color: #fff;
    transition: transform 0.3s ease;
  }

  .MuiSvgIcon-root:hover {
    transform: scale(1.2);
    color: #ffd700; /* oltin rang hoverda */
  }
`;

const TrustSection = () => {
  return (
    <Section>
      <Grid>
        <Item><h3>15 000+</h3><p>foydalanuvchilar 2025 yilda</p></Item>
        <Item><h3>92%</h3><p>ijobiy fikrlar</p></Item>
        <Item><h3>48</h3><p>O‘zbekiston hududlari</p></Item>
        <Item><h3>100%</h3><p>bepul va reklamasiz</p></Item>
      </Grid>

      <Partners>
        <SchoolIcon titleAccess="Oliy taʼlim vazirligi" />
        <VerifiedIcon titleAccess="Nazorat organlari" />
        <PublicIcon titleAccess="Akademiya" />
        <WorkspacePremiumIcon titleAccess="Universitet" />
      </Partners>
    </Section>
  );
};

export default TrustSection;
