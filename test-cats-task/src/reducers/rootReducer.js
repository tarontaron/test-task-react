export default (state, action) => {
  switch (action.type) {
    case "setCats":
      return {
        ...state,
        cats: [...state.cats, ...action.payload],
      };
    case "setCategories":
      return {
        ...state,
        categories: action.payload,
      };
    case "clearCatsData":
      return {
        ...state,
        cats: [],
      };

    default:
      return state;
  }
};
