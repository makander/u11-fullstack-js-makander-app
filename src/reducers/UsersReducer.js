export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        userLoggedIn: false,
      };
    default:
      return state;
  }
};
