import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavContent = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -0.5px;

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.active, &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Badge = styled.span`
  background-color: ${({ theme, $isOver }) =>
    $isOver ? theme.colors.danger : theme.colors.primary};
  color: #0f172a;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
`;