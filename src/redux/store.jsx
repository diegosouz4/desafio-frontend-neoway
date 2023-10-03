import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noticias from "./noticias/noticias";
import updateNoticias from "./middleware/updateNoticias";

const rootReducer = combineReducers({ noticias });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(updateNoticias),
});

export default store;
