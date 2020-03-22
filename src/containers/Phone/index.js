import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPoneById} from "../../actions";
import {getPhoneById} from '../Phones';
import * as R from 'ramda';

class Phone extends Component {

    componentDidMount() {
        const {fetchPoneById, match} = this.props;
        fetchPoneById(match.params.id)
    };

    renderFields = () => {
        const { phone } = this.props;
        //метод pick выбирает указанные поля из объекта в новый объект
        //метод compose справа последовательо вызывает функции подряд
        //метод toPPairs преобразует поля объекта масссив ключ-значение
        const columnField = R.compose(
            R.toPairs,
            R.pick([
                'cpu',
                'camera',
                'size',
                'weight',
                'display',
                'battery',
                'memory'
            ])
        )(phone);
        
        return columnField.map(([key, value]) => (
            <div className="column" key={key}>
                <div className="ab-details-title">
                    <p>{key}</p>
                </div>
                <div className="ab-details-info">
                    {value}
                </div>
            </div>
        ));
    };

    render() {
        const {phone} = this.props;
        return (
            <div className="view-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            {
                                phone && (
                                    <div className="thumbnail">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img
                                                    src={phone.image}
                                                    alt={phone.name}
                                                    className="img-thumbnail"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                {
                                                    this.renderFields()
                                                }
                                            </div>
                                        </div>
                                        <div className="caption-full">
                                            <h4 className="pull-right">${phone.price}</h4>
                                            <h4>{phone.description}</h4>
                                            <p>{phone.description}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
                Phone
            </div>
        );
    }
};

const mapDispatchToProps = {
    fetchPoneById,
};

const mapStateToProps = state => {

    return {
        phone: getPhoneById(state, state.phonePage.id)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
