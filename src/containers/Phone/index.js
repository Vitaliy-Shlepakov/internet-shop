import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPoneById} from "../../actions";

class Phone extends Component {

  componentDidMount() {
    const { fetchPoneById, match } = this.props;
    fetchPoneById(match.params.id)
  };

  render() {
    return (
      <div>
        Phone
      </div>
    );
  }
};

const mapDispatchToProps = {
  fetchPoneById,
};

export default connect(null, mapDispatchToProps)(Phone);
