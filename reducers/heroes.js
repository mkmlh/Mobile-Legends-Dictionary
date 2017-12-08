const initialState = {
  fetching: false,
  fetched: false,
  error: false,
  heroes: []
};

export default (heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HERO_PENDING":
      return { ...state, fetching: true };
      break;

    case "FETCH_HERO_FAILED":
      return { ...state, error: true };
      break;

    case "FETCH_HERO_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        heroes: action.payload.data
      };
      break;
    default:
  }
  return state;
});
