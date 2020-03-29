import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories
} from '../../actions/index';
import * as R from 'ramda';
import {Link} from "react-router-dom";
import Layout from "../Layout";

const getPhones = state => {

  const applySearch = item => R.contains(
    state.phonesPage.search,
    R.prop('name', item)
  );

  const phones = R.compose(
    R.filter(applySearch),
    R.map(id => getPhoneById(state, id))
  )(state.phonesPage.ids);

  return phones;
};

export const getPhoneById = (state, id) => {
  return R.prop(id, state.phones)
};


class Phones extends Component {

  componentDidMount() {
    const {fetchPhones, fetchCategories} = this.props;
    fetchPhones();
    fetchCategories();
  };

  renderPhone = (phone, index) => {
    const { addPhoneToBasket } = this.props;
    const shortDescription = `${R.take(60, phone.description)}...`;
    return (
      <div className="col-sm-4 col-md-4 col-lg-4 book-list" key={index}>
        <img className="img-thumbnail" src={phone.image} alt={phone.name}/>
        <div className="caption">
          <h4 className="pull-right">
            {phone.price}
          </h4>
          <h4>
            <Link to={`/phones/${phone.id}`}>
              {phone.name}
            </Link>
          </h4>
          <p>{shortDescription}</p>
          <div className="itemButton">
            <button
              className="btn btn-primary"
              onClick={addPhoneToBasket.bind(this, phone.id)}
            >
              Buy now!
            </button>
            <Link to={`/phones/${phone.id}`} className="btn btn-default">
              {phone.name}
            </Link>
          </div>
        </div>
      </div>
    )
  };

  render() {
    const {phones, loadMorePhones} = this.props;

    return (
      <Layout>
        <div className="books row">
          {
            phones.map((phone, index) => this.renderPhone(phone, index))
          }
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              className="pull-right btn-primary"
              onClick={loadMorePhones}
            >Load More
            </button>
          </div>
        </div>
      </Layout>
    );
  }
};

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories
};

const mapStateToProps = state => {
  return {
    phones: getPhones(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
