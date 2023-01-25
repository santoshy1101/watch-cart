// NOTE: use this store variable to create a store.
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./AppReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";

const allReducer = combineReducers({appReducer,authReducer})
const store = legacy_createStore(allReducer,applyMiddleware(thunk))

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
