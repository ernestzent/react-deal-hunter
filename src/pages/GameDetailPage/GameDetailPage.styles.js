import styled from 'styled-components';

export const PageWrapper = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

export const BackButton = styled.button`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DetailCard = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const GameCover = styled.img`
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
  }
`;

export const BestPriceText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.5rem;

  strong {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.4rem;
  }
`;

export const HistoricalBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  strong {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ActionButton = styled.button`
  padding: 0.9rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${({ theme, $saved }) =>
    $saved ? theme.colors.danger : theme.colors.primary};
  color: ${({ $saved }) => ($saved ? '#fff' : '#0f172a')};
`;

export const OffersList = styled.div`
  margin-top: 2rem;

  h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const OfferRow = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem 1.25rem;
  border-radius: 10px;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OfferSavingsText = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const OfferPriceGroup = styled.div`
  text-align: right;
`;

export const OfferSalePrice = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 800;
  font-size: 1.2rem;
`;

export const OfferRetailPrice = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: line-through;
  margin-left: 0.5rem;
  font-size: 0.9rem;
`;