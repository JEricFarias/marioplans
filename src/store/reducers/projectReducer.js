const initState = {
  projects: [
    {
      id: 1,
      title: 'Find the Peach princess',
      content: 'Bla bla bla bla bla bla bla bla bla bla bla'
    },
    {
      id: 2,
      title: 'Find Mashroms',
      content: 'Bla bla bla bla bla bla bla bla bla bla bla'
    },
    {
      id: 3,
      title: 'Find yoshi',
      content: 'Bla bla bla bla bla bla bla bla bla bla bla'
    }
  ]
};
const projecReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Action:', action);
    default:
      return state;
  }
};

export default projecReducer;
