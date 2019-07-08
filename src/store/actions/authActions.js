export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
      dispatch({ type: 'LOGGIN_SUCCESS' });
    })
    .catch(err => {
      dispatch({ type: 'LOGGIN_ERROR', err });
    });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    });
};

export const signUp = newUser => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(resp => {
      return firestore
        .collection('users')
        .doc(resp.user.uid)
        .set({
          firstName: newUser.firstname,
          lastName: newUser.lastname,
          abbreviation: newUser.firstname[0] + newUser.lastname[0]
        });
    })
    .then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    })
    .catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
};
