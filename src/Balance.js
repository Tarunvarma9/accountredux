import React, { useState, useEffect } from "react";
import { store } from "./ReduxAccount";


const Balance = () => {
  const [count, setCount] = useState(0);
  const { getState, dispatch, subscribe } = store;
  const [storeState, setStoreState] = useState(getState());

  useEffect(() => 
  store.subscribe(() => 
  setStoreState(getState()),
  
 []));

  return [storeState, dispatch]
}

export default Balance;