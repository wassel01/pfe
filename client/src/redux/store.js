import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "authType",
  storage: storage,
};

const pReducer = persistReducer(persistConfig, userReducer);
const  store = configureStore({
  reducer: pReducer,
});

const persistor = persistStore(store);

export { persistor, store };