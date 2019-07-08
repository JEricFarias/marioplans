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
    case 'SIGNUP_SUCCESS':
      console.log('sign up success');
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_ERROR':
      console.error('Error on signup');
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
