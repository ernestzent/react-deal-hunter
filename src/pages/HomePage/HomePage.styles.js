import styled from 'styled-components';

export const PageWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

export const HeaderTitle = styled.div`
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const DealsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const StatusMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.danger : theme.colors.textSecondary};
  font-size: 1.1rem;
`;