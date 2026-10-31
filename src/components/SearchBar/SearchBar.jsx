import React from 'react';
import { 
  FilterWrapper, 
  SearchInputGroup, 
  RangeGroup 
} from './SearchBar.styles';

const SearchBar = ({ searchQuery, maxPrice, onSearchChange, onPriceChange }) => {
  return (
    <FilterWrapper>
      <SearchInputGroup>
        <label htmlFor="search-game">Buscar videojuego</label>
        <input
          id="search-game"
          type="text"
          placeholder="Ej. Batman, Cyberpunk, Witcher..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </SearchInputGroup>

      <RangeGroup>
        <label htmlFor="price-filter">
          Precio máximo: <span>${maxPrice} USD</span>
        </label>
        <input
          id="price-filter"
          type="range"
          min="1"
          max="50"
          step="1"
          value={maxPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
        />
      </RangeGroup>
    </FilterWrapper>
  );
};

export default SearchBar;