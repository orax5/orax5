import { applyMiddleware, createStore, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer, persistedReducer } from "./modules";
import { persistStore, persistReducer } from "redux-persist";

const isProduction = process.env.NODE_ENV === "production";
const enhancer = isProduction ? compose(applyMiddleware(thunk)) : composeWithDevTools(applyMiddleware(thunk));
const makeConfiguredStore = (reducer) => createStore(reducer, undefined, enhancer);

const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    const store = makeConfiguredStore(persistedReducer);
    let persistor = persistStore(store);
    return { persistor, ...store };
  }
};
export const wrapper = createWrapper(makeStore, {
  debug: !isProduction,
});
