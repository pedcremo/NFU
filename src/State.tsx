import React, { useReducer } from "react";

let AppContext = React.createContext(null);

const initialState = {
  language:'es',
  theme:'light',
  user:'',
  count: 0
}

let reducer = (state, action) => {
  switch(action.type) {
    case "SET_COUNT": {
      return { ...state, count: action.count }
    }
    case "SET_USER": {
      return { ...state, user: action.value }
    }
    case "SET_THEME": {
      return { ...state, theme: action.value }
    }

  }
  return state;
};

function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState,
  }

  let [state, dispatch] = useReducer(reducer, fullInitialState);
  let value = { state, dispatch };


  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };