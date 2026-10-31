import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ThumbWrapper = styled.div`
  position: relative;
  height: 150px;
  background-color: #090d16;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DiscountBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: #052e16;
  font-weight: 800;
  font-size: 0.85rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
`;

export const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-top: 0.4rem;
`;

export const SalePrice = styled.span`
  font-size: 1.3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.accent};
`;

export const NormalPrice = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: line-through;
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DetailLink = styled(Link)`
  flex: 1;
  text-align: center;
  padding: 0.6rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.surfaceHover};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.85rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const WishlistBtn = styled.button`
  flex: 1;
  padding: 0.6rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  background-color: ${({ theme, $inWishlist }) =>
    $inWishlist ? theme.colors.danger : theme.colors.primary};
  color: ${({ $inWishlist }) => ($inWishlist ? '#fff' : '#0f172a')};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;