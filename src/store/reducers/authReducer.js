const initState = {};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGGIN_ERROR':
      return {
        ...state,
        authError: 'Login Failed'
      };
    case 'LOGGIN_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT_SUCCESS':
      console.log('Logged out');
      return state;
    default:
      return state;
  }
};

export default authReducer;
