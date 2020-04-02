import React from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';
import {getPhoneById} from "../Phones";
import {getTotalBasketPrice} from "../../components/BasketCart";
import { removePhoneFromBasket, cleanBasket, basketCheckout } from '../../actions';
import {Link} from "react-router-dom";

const getBasketPhonesWithCount = state => {
  const phoneCount = id => R.compose(
    R.length,
    R.filter(basketId => R.equals(id, basketId))
  )(state.basket);

  const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone);

  const uniqueIds = R.uniq(state.basket);

  const phones = R.compose(
    R.map(phoneWithCount),
    R.map(id => getPhoneById(state, id))
  )(uniqueIds)
  return phones
};

const Basket = ({phones, totalPrice, cleanBasket}) => {

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {
              phones.length
                ? (
                  <>
                    <div className="table-responsive">
                      <table className="table-bordered table-striped table-condensed cf">
                        <tbody>
                        {
                          phones.map((phone, index) => (
                            <tr
                              key={index}
                              className="item-checout"
                            >
                              <td className="first-column-checkout">
                                <img
                                  src={phone.image}
                                  alt={phone.name}
                                  className='img-thumbnail'
                                />
                              </td>
                              <td>{ phone.name }</td>
                              <td>{ phone.price }</td>
                              <td>{ phone.count }</td>
                              <td>
                                <span
                                  className="delete-cart"
                                  onClick={() => removePhoneFromBasket(phone.id)}></span>
                              </td>
                            </tr>
                          ))
                        }
                        </tbody>
                      </table>
                    </div>
                    <div className="pull-right total-user-checkout">
                      <b>Total:</b>
                      ${totalPrice}
                    </div>
                  </>
                )
                : (
                  <div>Your shopping cart is empty</div>
                )
            }
          </div>
          <div className="col-md-3 btn-user-checkout">
            <>
              {
                phones.length && (
                  <>
                    <Link to="/" className="btn btn-info">
                      <span className="glyphicon glyphicon-info--sign"></span>
                      <span>Continue shopping</span>
                    </Link>
                    <button
                      onClick={() => cleanBasket()}
                      className='btn btn-danger'
                    >
                      <span className="glyphicon glyphicon-trash"></span>
                      Clean cart
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => basketCheckout(phones)}
                    >
                      <span className="glyphicon glyphicon-envelope"></span>
                      Checkout
                    </button>
                  </>
                )
              }
            </>
          </div>
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
  }
};

const mapDispatchToProps = {
  removePhoneFromBasket,
  cleanBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);