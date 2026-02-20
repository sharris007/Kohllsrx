'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { LogoIcon, ChevronDownIcon, CartIcon } from './icons';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 24px;
  border-bottom: 1px solid ${theme.colors.border};
  background: ${theme.colors.white};
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.primary};
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 28px;
`;

const MenuItem = styled.li`
  position: relative;
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: ${theme.colors.text};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const CartLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: ${theme.colors.text};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.textSecondary};
  }
`;

const LogInLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.text};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.textSecondary};
  }
`;

const ViewDemoBtn = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  background: ${theme.colors.orange};
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const menuItems = ['Products', 'Demos', 'Developers', 'Industries', 'Stay Updated', 'Pricing'];

export default function Header() {
  return (
    <Nav>
      <LeftSection>
        <Logo href="#">
          <LogoIcon size={28} />
          SurveyJS
        </Logo>
        <Menu>
          {menuItems.map((item) => (
            <MenuItem key={item}>
              <MenuLink href="#">
                {item}
                <ChevronDownIcon size={12} />
              </MenuLink>
            </MenuItem>
          ))}
        </Menu>
      </LeftSection>
      <RightSection>
        <CartLink href="#">
          <CartIcon size={18} />
          Cart
        </CartLink>
        <LogInLink href="#">Log In</LogInLink>
        <ViewDemoBtn href="#">View Demo</ViewDemoBtn>
      </RightSection>
    </Nav>
  );
}
