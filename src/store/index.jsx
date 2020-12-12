import React, { createContext, useReducer, useContext } from "react";
import { storeReducer } from "./reducer";

export const StoreContext = createContext();

function StoreProvider(props) {
  const initialState = {
      modalConfig: {
        showModal: false,
        type: ''
      },
      users: {
        loading: true
      },
      tasks: {
        loading: true
      },
      user: null
    }
  const [store, dispatch] = useReducer(storeReducer, initialState);

  const contextData = { store, dispatch };

  return <StoreContext.Provider value={contextData} {...props} />;
}

function useStoreContext() {
  return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };