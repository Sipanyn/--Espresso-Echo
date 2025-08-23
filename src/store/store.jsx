import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import productsReducer from "../features/ProductsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { combineReducers } from "redux";

// export const store = configureStore({

//   reducer: {
//     login: loginReducer,
//   },
// });
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "products"], // only persist these slices
};
const rootReducer = combineReducers({
  login: loginReducer,
  products: productsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Correct spelling
    }),
});
export const persistor = persistStore(store);
