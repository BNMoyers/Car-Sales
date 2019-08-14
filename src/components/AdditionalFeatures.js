import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from  'react-redux';

const mapStateToProps = state => {
  return{
    addons: state.addons
  }
}
const AdditionalFeatures =  ({ addons }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {addons.length ? (
        <ol type="1">
          {addons.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(mapStateToProps, {})(AdditionalFeatures);
