const usersData = (state = [], action) => {
  switch (action.type) {
    case 'USERS_DATA':
      state = [...action.payload];
      return state;
    default:
      return state;
  }
}

export default usersData;