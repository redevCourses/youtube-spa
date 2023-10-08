import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import videoReducer from "./videoSlice";
import favsReducer from "./favsSlice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
   key: "root",
   storage,
 };

const rootReducer = combineReducers({
  videos: videoReducer,
  favs: favsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store)
export default store
