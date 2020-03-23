import React from 'react';
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";


export const getTotalBasketCount = (state) => {
  return state.basket.length;
};

export const getTotalBasketPrice = (state) => {
  if (!state.basket.length) return;
  const ArrOfPrices = state.basket.map(item => {
    return state.phones[item].price
  });

  return ArrOfPrices.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
  });
};

const BasketCart = ({totalBasketCount, totalPrice}) => {

  return (
    <div className="cart">
      <div className="dropdown">
        <Link
          to="/basket"
          id="dLabel"
          className="btn btn-inverse btn-blick btn-lg"
        >
          <i className="fa fa-fa-shoping-cart"></i>
          <span>{ totalBasketCount } item(s) - ${totalPrice}</span>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  totalBasketCount: getTotalBasketCount(state),
  totalPrice: getTotalBasketPrice(state) || 0
});

export default connect(mapStateToProps, null)(BasketCart);
