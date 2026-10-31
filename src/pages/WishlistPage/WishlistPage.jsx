import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromWishlist,
  updateBudgetLimit,
  clearWishlist,
} from '../../redux/slices/wishlistSlice';
import { calculateWishlistMetrics } from '../../utils/budgetHelpers';
import {
  PageWrapper,
  PageTitle,
  DashboardGrid,
  MetricCard,
  BudgetControl,
  WishlistItem,
  ItemInfo,
  ItemTitleLink,
  ItemPriceText,
  RemoveBtn,
  ClearBtn,
  EmptyState,
  ExploreLink,
} from './WishlistPage.styles';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const { items, budgetLimit } = useSelector((state) => state.wishlist);

  const { totalSpent, totalSavings, remainingBudget, isOverBudget } =
    calculateWishlistMetrics(items, budgetLimit);

  return (
    <PageWrapper>
      <PageTitle>Mi Wishlist y Simulador de Presupuesto</PageTitle>

      <BudgetControl>
        <div>
          <label htmlFor="budget-input">
            Definir Presupuesto Máximo (USD):
          </label>
          <input
            id="budget-input"
            type="number"
            min="0"
            step="5"
            value={budgetLimit}
            onChange={(e) => dispatch(updateBudgetLimit(e.target.value))}
          />
        </div>

        {items.length > 0 && (
          <ClearBtn onClick={() => dispatch(clearWishlist())}>
            Vaciar Wishlist
          </ClearBtn>
        )}
      </BudgetControl>

      <DashboardGrid>
        <MetricCard>
          <span>Total a Pagar</span>
          <h3>${totalSpent} USD</h3>
        </MetricCard>

        <MetricCard $accent>
          <span>Ahorro Total Acumulado</span>
          <h3>${totalSavings} USD</h3>
        </MetricCard>

        <MetricCard $alert={isOverBudget}>
          <span>{isOverBudget ? 'Presupuesto Excedido por' : 'Presupuesto Disponible'}</span>
          <h3>${Math.abs(remainingBudget).toFixed(2)} USD</h3>
        </MetricCard>
      </DashboardGrid>

      {items.length === 0 ? (
        <EmptyState>
          <p>Aún no has agregado juegos a tu lista de deseos.</p>
          <ExploreLink to="/">
            Ir a explorar ofertas &rarr;
          </ExploreLink>
        </EmptyState>
      ) : (
        items.map((game) => (
          <WishlistItem key={game.gameID}>
            <ItemInfo>
              <img src={game.thumb} alt={game.title} />
              <div>
                <ItemTitleLink to={`/game/${game.gameID}`}>
                  {game.title}
                </ItemTitleLink>
                <ItemPriceText>
                  ${game.salePrice} USD
                  <span>${game.normalPrice}</span>
                </ItemPriceText>
              </div>
            </ItemInfo>

            <RemoveBtn onClick={() => dispatch(removeFromWishlist(game.gameID))}>
              Eliminar
            </RemoveBtn>
          </WishlistItem>
        ))
      )}
    </PageWrapper>
  );
};

export default WishlistPage;