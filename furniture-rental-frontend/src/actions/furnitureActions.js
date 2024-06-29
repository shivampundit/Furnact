import axios from 'axios';

// Get All Furniture
export const getAllFurniture = () => async dispatch => {
  try {
    const res = await axios.get('/api/furniture');

    dispatch({
      type: 'GET_FURNITURE',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'FURNITURE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
