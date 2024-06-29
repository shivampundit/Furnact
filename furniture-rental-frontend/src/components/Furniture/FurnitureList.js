import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFurniture } from '../../actions/furnitureActions';
import FurnitureItem from './FurnitureItem';

const FurnitureList = () => {
  const dispatch = useDispatch();
  const furniture = useSelector((state) => state.furniture.furniture);
  const loading = useSelector((state) => state.furniture.loading);

  useEffect(() => {
    dispatch(getAllFurniture());
  }, [dispatch]);

  return (
    <div>
      <h1>Furniture Catalog</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="furniture-list">
          {furniture.map((item) => (
            <FurnitureItem key={item._id} furniture={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FurnitureList;
