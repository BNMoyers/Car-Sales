import React from 'react';
import { connect } from 'react-redux';
import { Reducer } from './reducers'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = ({ store }) => {
 

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={store.car} />
        <AddedFeatures car={store.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store.addons} />
        <Total car={store.car} additionalPrice={store.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
