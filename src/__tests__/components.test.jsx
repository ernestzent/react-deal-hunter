import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// 1. Agregamos este import para habilitar .toBeInTheDocument() y .toHaveTextContent()
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { setupStore } from '../redux/store';
import { theme } from '../styles/theme';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import DealCard from '../components/DealCard/DealCard';

const renderWithProviders = (ui, { preloadedState = {} } = {}) => {
  const store = setupStore(preloadedState);
  return {
    store,
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* 2. Agregamos los future flags para limpiar los warnings de la consola */}
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            {ui}
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    ),
  };
};

describe('Pruebas de Componentes UI', () => {
  test('SearchBar: debe disparar callbacks cuando el usuario escribe o cambia el precio', () => {
    const mockSearchChange = jest.fn();
    const mockPriceChange = jest.fn();

    renderWithProviders(
      <SearchBar
        searchQuery=""
        maxPrice={50}
        onSearchChange={mockSearchChange}
        onPriceChange={mockPriceChange}
      />
    );

    const searchInput = screen.getByLabelText(/Buscar videojuego/i);
    fireEvent.change(searchInput, { target: { value: 'Witcher' } });
    expect(mockSearchChange).toHaveBeenCalledWith('Witcher');

    const priceSlider = screen.getByLabelText(/Precio máximo/i);
    fireEvent.change(priceSlider, { target: { value: '20' } });
    expect(mockPriceChange).toHaveBeenCalledWith(20);
  });

  test('DealCard y Navbar: al hacer clic en "+ Wishlist" debe agregarse al store y reflejarse en el Navbar', () => {
    const mockDeal = {
      dealID: 'd1',
      gameID: 'g100',
      title: 'Elden Ring',
      thumb: 'https://via.placeholder.com/150',
      salePrice: '39.99',
      normalPrice: '59.99',
      savings: '33.33',
    };

    renderWithProviders(
      <>
        <Navbar />
        <DealCard deal={mockDeal} />
      </>
    );

    expect(screen.getByText('Elden Ring')).toBeInTheDocument();
    expect(screen.getByText('-33%')).toBeInTheDocument();

    expect(screen.getByTestId('wishlist-badge')).toHaveTextContent('0 ($0 / $30)');

    const addButton = screen.getByRole('button', { name: /\+ Wishlist/i });
    fireEvent.click(addButton);

    expect(screen.getByRole('button', { name: /Quitar/i })).toBeInTheDocument();
    expect(screen.getByTestId('wishlist-badge')).toHaveTextContent('1 ($39.99 / $30)');
  });
});