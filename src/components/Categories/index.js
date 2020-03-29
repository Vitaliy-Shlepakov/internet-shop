import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import classNames from 'classnames';

const getCategories = state => R.values(state.categories);

export const getActiveCategoryId = ownProps => {
  if(ownProps.match && ownProps.match.params && ownProps.match.params.id){
    return ownProps.match.params.id
  };
};


const Categories = ({categories, activeCategoryId }) => {
  if(!categories){
    return <span>Загрузка ...</span>
  };

  return (
    <div className='well'>
      <h4>Brand</h4>
      <div className="list-group">
        <Link
          to={'/'}
          className={classNames({
            "list-group-item": true,
            'active': !activeCategoryId
          })}
        >
          All
        </Link>
        {
          categories.map((category, index) => {
            return (
              <Link
                to={`/categories/${category.id}`}
                className={classNames({
                  'list-group-item': true,
                  'active': activeCategoryId === category.id
                })}
                key={index}
              >
                { category.name }
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Categories);