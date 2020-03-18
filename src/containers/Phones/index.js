import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import { fetchPhones } from '../../actions/index';

class Phones extends Component {

  componentDidMount() {
    const { fetchPhones } = this.props;
    fetchPhones()
  }

  render() {
    return (
      <div>

      </div>
    );
  }
};

const mapDispatchToProps = {
  fetchPhones
};

export default connect(null, mapDispatchToProps)(Phones);
