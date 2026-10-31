import React from 'react';
import { useSelector } from 'react-redux';
import { calculateWishlistMetrics } from '../../utils/budgetHelpers';
import {
  NavContainer,
  NavContent,
  Logo,
  NavLinks,
  StyledLink,
  Badge,
} from './Navbar.styles';

const Navbar = () => {
  const { items, budgetLimit } = useSelector((state) => state.wishlist);
  const { totalSpent, isOverBudget } = calculateWishlistMetrics(items, budgetLimit);

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">
          Deal<span>Hunter</span>
        </Logo>
        <NavLinks>
          <StyledLink to="/">Explorar Ofertas</StyledLink>
          <StyledLink to="/wishlist">
            Mi Wishlist
            <Badge $isOver={isOverBudget} data-testid="wishlist-badge">
              {items.length} (${totalSpent} / ${budgetLimit})
            </Badge>
          </StyledLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;