import React from 'react';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.2rem 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavbarContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: white;
`;

const LogoText = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-family: 'Arial', sans-serif;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);

  .MuiSvgIcon-root {
    font-size: 2rem;
    color: white;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  background: #ffffff;
  color: #333333;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.6rem 1.4rem;
  border: 1px solid #cccccc;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: #f2f2f2;
    color: #000000;
    border-color: #999999;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo to="/">
          <IconWrapper>
            <LocalLibraryIcon />
          </IconWrapper>
          <LogoText>Literate</LogoText>
        </Logo>
        <NavLinks>
          <StyledLink to="/tasks">Topshiriqlar</StyledLink>
        </NavLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
