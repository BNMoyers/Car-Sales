import React from 'react';
import { connect } from  'react-redux';

const mapStateToProps = state => {
  return{
    additionalPrice: state.additionalPrice,
    car: state.car
  }
}
const Total = ({ additionalPrice, car }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default connect(mapStateToProps, {})(Total);
