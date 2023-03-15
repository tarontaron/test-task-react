const getCats = (payload) => {
  return {
    type: "setCats",
    payload,
  };
};

const getCategories = (payload) => {
  return {
    type: "setCategories",
    payload,
  };
};

const clearCatsData = () => {
  return {
    type: "clearCatsData",
  };
};

export default {
  getCats,
  getCategories,
  clearCatsData,
};
