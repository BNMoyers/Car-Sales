import React from 'react';
import { connect } from  'react-redux';

const mapStateToProps = state => {
  return{
    car: state.car
  }
}

const Header = ({ car }) => {
  
  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

export default connect(mapStateToProps,{})(Header);
