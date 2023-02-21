import { applyMiddleware, createStore, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { rootReducer, persistedReducer } from "./modules";
import { persistStore, persistReducer } from "redux-persist";
import ReduxThunk from "redux-thunk";

export let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export let persistor = persistStore(store);

// ==============================================================================

// import { createStore , applyMiddleware } from 'redux';
// import rootReducer from './modules';

// import { persistStore } from 'redux-persist';

// import ReduxThunk from "redux-thunk";


// export default function configureStore() {
//   const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
//   const persistor = persistStore(store);
//   return { store, persistor };
// };



// import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import thunk from "redux-thunk";
// import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "./modules";

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import rootReducer from './reducers'


// const isProduction = process.env.NODE_ENV === "production";

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const makeStore = () => {
//   const enhancer = isProduction
//     ? compose(applyMiddleware(thunk))
//     : composeWithDevTools(applyMiddleware(thunk));
//   const store = createStore(rootReducer, enhancer);
//   return store;
// };


// const wrapper = createWrapper(makeStore, { debug: !isProduction });


// // export default wrapper;

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor, wrapper }
// }