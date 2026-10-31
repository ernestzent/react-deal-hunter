import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeals, setSearchQuery, setMaxPrice } from '../../redux/slices/dealsSlice';
import { useDebounce } from '../../hooks/useDebounce';
import SearchBar from '../../components/SearchBar/SearchBar';
import DealCard from '../../components/DealCard/DealCard';
import {
  PageWrapper,
  HeaderTitle,
  DealsGrid,
  StatusMessage,
} from './HomePage.styles';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, status, error, filters } = useSelector((state) => state.deals);

  const debouncedSearch = useDebounce(filters.searchQuery, 450);

  useEffect(() => {
    dispatch(
      fetchDeals({
        title: debouncedSearch,
        upperPrice: filters.maxPrice,
      })
    );
  }, [dispatch, debouncedSearch, filters.maxPrice]);

  return (
    <PageWrapper>
      <HeaderTitle>
        <h1>Ofertas de Videojuegos en Tiempo Real</h1>
        <p>Explora descuentos verificados y arma tu presupuesto gamer</p>
      </HeaderTitle>

      <SearchBar
        searchQuery={filters.searchQuery}
        maxPrice={filters.maxPrice}
        onSearchChange={(val) => dispatch(setSearchQuery(val))}
        onPriceChange={(val) => dispatch(setMaxPrice(val))}
      />

      {status === 'loading' && (
        <StatusMessage>Buscando las mejores ofertas...</StatusMessage>
      )}

      {status === 'failed' && (
        <StatusMessage $isError>{error}</StatusMessage>
      )}

      {status === 'succeeded' && items.length === 0 && (
        <StatusMessage>
          No se encontraron juegos con esos filtros. Intenta subir el precio máximo.
        </StatusMessage>
      )}

      {status === 'succeeded' && items.length > 0 && (
        <DealsGrid>
          {items.map((deal) => (
            <DealCard key={deal.dealID} deal={deal} />
          ))}
        </DealsGrid>
      )}
    </PageWrapper>
  );
};

export default HomePage;