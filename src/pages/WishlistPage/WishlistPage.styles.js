import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

export const PageTitle = styled.h1`
  margin-bottom: 1.5rem;
`;

export const DashboardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const MetricCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme, $alert }) =>
    $alert ? theme.colors.danger : theme.colors.border};
  padding: 1.25rem;
  border-radius: 12px;

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  h3 {
    font-size: 1.6rem;
    margin-top: 0.4rem;
    color: ${({ theme, $alert, $accent }) =>
      $alert
        ? theme.colors.danger
        : $accent
        ? theme.colors.accent
        : theme.colors.text};
  }
`;

export const BudgetControl = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.25rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  label {
    font-weight: 700;
    margin-right: 1rem;
  }

  input {
    padding: 0.6rem 1rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    width: 140px;
  }
`;

export const WishlistItem = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 90px;
    height: 50px;
    object-fit: cover;
    border-radius: 6px;
  }
`;

export const ItemTitleLink = styled(Link)`
  font-weight: 700;
  font-size: 1.1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ItemPriceText = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: line-through;
    font-size: 0.85rem;
    margin-left: 0.4rem;
  }
`;

export const RemoveBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
`;

export const ClearBtn = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.danger};
  border: 1px solid ${({ theme }) => theme.colors.danger};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ExploreLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  display: inline-block;
  margin-top: 1rem;
`;