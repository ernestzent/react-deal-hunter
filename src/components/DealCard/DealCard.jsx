import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../redux/slices/wishlistSlice';
import {
  Card,
  ThumbWrapper,
  DiscountBadge,
  CardBody,
  Title,
  PriceRow,
  SalePrice,
  NormalPrice,
  ActionsRow,
  DetailLink,
  WishlistBtn,
} from './DealCard.styles';

const DealCard = ({ deal }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isSaved = wishlistItems.some((item) => item.gameID === deal.gameID);
  const savingsPercent = Math.round(parseFloat(deal.savings || 0));

  const handleToggleWishlist = () => {
    if (isSaved) {
      dispatch(removeFromWishlist(deal.gameID));
    } else {
      dispatch(addToWishlist(deal));
    }
  };

  return (
    <Card>
      <ThumbWrapper>
        <img src={deal.thumb} alt={deal.title} loading="lazy" />
        {savingsPercent > 0 && <DiscountBadge>-{savingsPercent}%</DiscountBadge>}
      </ThumbWrapper>

      <CardBody>
        <div>
          <Title title={deal.title}>{deal.title}</Title>
          <PriceRow>
            <SalePrice>${deal.salePrice}</SalePrice>
            {deal.normalPrice !== deal.salePrice && (
              <NormalPrice>${deal.normalPrice}</NormalPrice>
            )}
          </PriceRow>
        </div>

        <ActionsRow>
          <DetailLink to={`/game/${deal.gameID}`}>Ver Detalle</DetailLink>
          <WishlistBtn
            type="button"
            $inWishlist={isSaved}
            onClick={handleToggleWishlist}
          >
            {isSaved ? 'Quitar' : '+ Wishlist'}
          </WishlistBtn>
        </ActionsRow>
      </CardBody>
    </Card>
  );
};

export default DealCard;