export default (state = {}, action) => {
  switch (action.type) {
    case "SET_DETAIL":
      return action.data;
    default:
      return state;
  }
};
