import React from 'react';
import PropTypes from 'prop-types';

const FurnitureItem = ({ furniture }) => {
  return (
    <div className="furniture-item">
      <img src={furniture.images[0]} alt={furniture.name} />
      <h2>{furniture.name}</h2>
      <p>{furniture.description}</p>
      <p>Price: ${furniture.price}</p>
      <p>Available: {furniture.availability ? 'Yes' : 'No'}</p>
    </div>
  );
};

FurnitureItem.propTypes = {
  furniture: PropTypes.object.isRequired,
};

export default FurnitureItem;
