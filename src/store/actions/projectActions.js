export const createProject = project => {
  return (dispatch, getState) => {
    // do some async calls

    dispatch({ type: 'CREATE_PROJECT', project });
  };
};
