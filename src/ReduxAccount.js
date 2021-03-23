import { createStore } from "redux";

import React, { createContext, useReducer, useContext } from "react";



const WITHDRAW = "WITHDRAW";
const DEPOSIT = "DEPOSIT";

export const withdraw = () => {
  return {
    type: WITHDRAW,
  };
};
export const deposit = () => {
  return {
    type: DEPOSIT, 
  };
};


const Account = (state = 200, action) => {
  console.log("accessing" + JSON.stringify(action));
  switch (action.type) {
    case WITHDRAW:
      return state - action.selectedamount;

    case DEPOSIT:
      return state + action.selectedamount;

    default:
      return state;
  }
};

export const store = createStore(Account);