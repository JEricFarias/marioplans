export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // do some async calls
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;

    firestore
      .collection('projects')
      .add({
        ...project,
        authorId: uid,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
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
