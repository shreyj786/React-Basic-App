import { FETCH_ALL, CREATE, UPDATE,DELETE,LIKE } from "../constants/actionTypes";


const postReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];

    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case DELETE:
      return state.filter((post) => post._id !== action.payload);

    default:
      return state;
  }
};

//

export default postReducer;
