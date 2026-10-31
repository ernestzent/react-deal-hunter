import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameDetails, clearSelectedGame } from '../../redux/slices/dealsSlice';
import { addToWishlist, removeFromWishlist } from '../../redux/slices/wishlistSlice';
import {
  PageWrapper,
  BackButton,
  DetailCard,
  GameCover,
  InfoSection,
  BestPriceText,
  HistoricalBox,
  ActionButton,
  OffersList,
  OfferRow,
  OfferSavingsText,
  OfferPriceGroup,
  OfferSalePrice,
  OfferRetailPrice,
} from './GameDetailPage.styles';

const GameDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedGame, detailStatus, error } = useSelector((state) => state.deals);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isSaved = wishlistItems.some((item) => item.gameID === id);

  useEffect(() => {
    dispatch(fetchGameDetails(id));
    return () => {
      dispatch(clearSelectedGame());
    };
  }, [dispatch, id]);

  if (detailStatus === 'loading') {
    return <PageWrapper><p>Cargando información del juego...</p></PageWrapper>;
  }

  if (detailStatus === 'failed') {
    return <PageWrapper><p>{error}</p></PageWrapper>;
  }

  if (!selectedGame || !selectedGame.info) {
    return null;
  }

  const { info, cheapestPriceEver, deals = [] } = selectedGame;
  const bestDeal = deals[0] || { price: '0.00', retailPrice: '0.00', savings: '0' };

  const handleWishlistAction = () => {
    if (isSaved) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(
        addToWishlist({
          gameID: id,
          title: info.title,
          thumb: info.thumb,
          salePrice: bestDeal.price,
          normalPrice: bestDeal.retailPrice,
          savings: bestDeal.savings,
        })
      );
    }
  };

  return (
    <PageWrapper>
      <BackButton onClick={() => navigate(-1)}>&larr; Volver</BackButton>

      <DetailCard>
        <GameCover src={info.thumb} alt={info.title} />
        <InfoSection>
          <div>
            <h1>{info.title}</h1>
            <BestPriceText>
              Mejor precio actual: <strong>${bestDeal.price} USD</strong> (Antes ${bestDeal.retailPrice})
            </BestPriceText>
          </div>

          {cheapestPriceEver && (
            <HistoricalBox>
              <p>Precio más bajo histórico registrado:</p>
              <strong>${cheapestPriceEver.price} USD</strong>
            </HistoricalBox>
          )}

          <ActionButton $saved={isSaved} onClick={handleWishlistAction}>
            {isSaved ? 'Quitar de mi Wishlist' : '+ Agregar a mi Wishlist'}
          </ActionButton>
        </InfoSection>
      </DetailCard>

      <OffersList>
        <h2>Comparativa de ofertas activas ({deals.length})</h2>
        {deals.slice(0, 6).map((offer) => (
          <OfferRow key={offer.dealID}>
            <div>
              <strong>Tienda ID #{offer.storeID}</strong>
              <OfferSavingsText>
                Ahorro del {Math.round(parseFloat(offer.savings))}%
              </OfferSavingsText>
            </div>
            <OfferPriceGroup>
              <OfferSalePrice>${offer.price}</OfferSalePrice>
              <OfferRetailPrice>${offer.retailPrice}</OfferRetailPrice>
            </OfferPriceGroup>
          </OfferRow>
        ))}
      </OffersList>
    </PageWrapper>
  );
};

export default GameDetailPage;