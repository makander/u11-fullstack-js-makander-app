import React, { createContext, useReducer } from 'react';
import { coffeeReducer } from '../reducers/coffeeReducer';

export const CoffeeContext = createContext();

const CoffeeContextProvider = (props) => {
  const [coffeeData, dispatch] = useReducer(coffeeReducer);

  return (
    <CoffeeContext.Provider value={{ coffeeData, dispatch }}>
      {props.children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContextProvider;
