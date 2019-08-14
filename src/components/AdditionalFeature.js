import React from 'react';
import { addFeatures } from '../actions';
import { connect } from  'react-redux';

const mapStateToProps = state => {
  return{
    addons: state.addons
  }
}

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeatures}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(mapStateToProps, {addFeatures})(AdditionalFeature);
