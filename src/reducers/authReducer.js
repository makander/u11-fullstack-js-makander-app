export const authReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    case 'IS_ADMIN':
      return {
        ...state,
        admin: true,
      };
    default:
      return state;
  }
};
