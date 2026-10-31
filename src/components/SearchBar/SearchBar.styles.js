import styled from 'styled-components';

export const FilterWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInputGroup = styled.div`
  flex: 1;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const RangeGroup = styled.div`
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
    display: flex;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme.colors.accent};
      font-weight: 700;
    }
  }

  input[type='range'] {
    accent-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;