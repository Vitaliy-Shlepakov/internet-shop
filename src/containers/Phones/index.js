import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import { fetchPhones } from '../../actions/index';
import * as R from 'ramda';
import {Link} from "react-router-dom";

const getPhones = state => {
  const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids);
  return phones;
};

const getPhoneById = (state, id) => {
  return R.prop(id, state.phones)
};

class Phones extends Component {

  componentDidMount() {
    const { fetchPhones } = this.props;
    fetchPhones()
  };

  renderPhone = (phone, index) => {
    const shortDescription = `${R.take(60, phone.description)}...`;
    return (
      <div className="col-sm-4 col-md-4 col-lg-4 book-list" key={index}>
        <img className="img-thumbnail" src={phone.image} alt={phone.name}/>
        <div className="caption">
          <h4 className="pull-right">
            { phone.price }
          </h4>
          <h4>
            <Link to={`/phones/${phone.id}`}>
              { phone.name }
            </Link>
          </h4>
          <p>{ shortDescription }</p>
           <div className="itemButton">
             <button className="btn btn-primary">
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
    const {phones} = this.props;

    return (
      <div className="books row">
        {
          phones.map((phone, index) => this.renderPhone(phone, index))
        }
      </div>
    );
  }
};

const mapDispatchToProps = {
  fetchPhones
};

const mapStateToProps = state => {
  return {
    phones: getPhones(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
