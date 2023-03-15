import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const defaultStore = { cats: [], selectedCategory: null, categories: [], page: 1 };

function configureStore(state = defaultStore) {
  return createStore(rootReducer, state);
}

export default configureStore;
