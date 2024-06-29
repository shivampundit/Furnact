const initialState = {
    furniture: [],
    loading: true,
    error: {},
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_FURNITURE':
        return {
          ...state,
          furniture: payload,
          loading: false,
        };
      case 'FURNITURE_ERROR':
        return {
          ...state,
          error: payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  