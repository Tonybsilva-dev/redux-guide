const initialState = {
  currentUser: null,
};

const useReducer = (state = initialState, action) => {
  if (action.type === "users/login") {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  return state;
};

export default useReducer;
