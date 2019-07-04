export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // do some async calls
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorId: 12345,
        authorFirstName: 'Net',
        authorLastName: 'Ninja',
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', error });
      });
  };
};
