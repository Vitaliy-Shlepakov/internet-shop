import React, {Component} from 'react';
import { connect } from "react-redux";
import { searchPhone } from '../../actions'

class Search extends Component {

  state = {
    value: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    this.props.searchPhone(value);
  };

  handleChange = target => {
    this.setState({
      value: target.value
    });
  };

  render() {
    return (
      <div className="well blosd">
        <h3 className="lead">Quick shop</h3>
        <div className="input-group">
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              onChange={e => this.handleChange(e.target)}
              className="form-control"
            />
          </form>
          <span className="input-group-btn">
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </div>
    );
  };

};

const mapDispatchToProps = {
  searchPhone
};

const mapStateToProps = state => ({
    fake: state
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
