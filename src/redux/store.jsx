import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noticias from "./noticias/noticias";

const rootReducer = combineReducers({noticias});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
