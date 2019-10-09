import React from 'react';
import { connect } from 'react-redux';

import { addExtra, removeExtra } from './actions'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = props => {

const removeFeature = item => {
  props.removeExtra(item)
}

const addFeature = item => {
  props.addExtra(item)
}

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={addFeature}/>
        <Total car={props.car} additionalPrice= {props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
  ...state
  }
}

export default connect(mapStateToProps, { addExtra, removeExtra })(App);
