import React from 'react';
import { connect } from  'react-redux';

const mapStateToProps = state => {
  return{
    car: state.car
  }
}
const AddedFeature = ({ car }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {car.feature.name}
    </li>
  );
};

export default connect(mapStateToProps, {})(AddedFeature);
