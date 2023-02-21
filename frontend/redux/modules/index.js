import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { createTransform } from "redux-persist";
import  CircularJSON  from "circular-json";
// import Flatted from 'flatted';

// import user from "./user";
import users from "./users";
import streaming from "./streaming";
import funding from "./funding";

const circularTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // serialize the state using circular-json
    return CircularJSON.stringify(inboundState);
  },
  // transform state being rehydrated
  (outboundState, key) => {
    // parse the state using JSON.parse
    return JSON.parse(outboundState);
  }
    // // transform state on its way to being serialized and persisted.
    // (inboundState, key) => {
    //   // convert mySet to an Array.
    //   return { ...inboundState, mySet: [...inboundState.mySet] };
    // },
    // // transform state being rehydrated
    // (outboundState, key) => {
    //   // convert mySet back to a Set.
    //   return { ...outboundState, mySet: new Set(outboundState.mySet) };
    // },
    // // define which reducers this transform gets called for.
    // { whitelist: ['someReducer'] }
);

const persistConfig = {
  key: "root",
  storage,
  whitelist : ["users"],
  transforms: [circularTransform],
};

// export const rootReducer = (state, action) => {
//   switch (action.type) {
//     case HYDRATE:
//       return action.payload;

//     default:
//       return combineReducers({  })(state, action);
//   }
// };
export const rootReducer = combineReducers({
  users,
  streaming,
  funding,
});
export const persistedReducer = persistReducer(persistConfig, rootReducer);