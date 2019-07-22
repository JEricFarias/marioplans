const initState = {
  projects: []
};

const projecReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.error('CREATE_PROJECT_ERROR:', action.error);
      return state;
    default:
      return state;
  }
};

export default projecReducer;
