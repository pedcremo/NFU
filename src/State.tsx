import React, { useReducer, useEffect } from "react";

let AppContext = React.createContext(null);

const initialState = {
  language: 'es',
  theme: 'Dark',
  user: '',
  coordinates: "",
  welcome: "",
  BackLogin:""
  
}

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER": {      
      return { ...state, user: action.value }
    }
    case "LOGOUT": {
      return { ...state, user: "" };
    }
    case "SET_THEME": {
      action.value === "Dark" ? document.body.classList.add("dark") : document.body.classList.remove("dark")
      return { ...state, theme: action.value }
    }
    case "ALL_COORDINATES": {
      //Cambiamos la latitud y longitud de lo que queremos mostrar en el map, ya sea uno solo o todos
      return { ...state, coordinates: action.value };
    }
    case "WELCOME": {
      return { ...state, welcome: action.value };
    }
  }
  return state;
};

const logger = (reducer) => {
  const reducerWithLogger = (state, action) => {
    console.log(
      "%cPrevious State:",
      "color: #9E9E9E; font-weight: 700;",
      state
    );
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    console.log(
      "%cNext State:",
      "color: #47B04B; font-weight: 700;",
      reducer(state, action)
    );
    return reducer(state, action);
  };
  return reducerWithLogger;
};

const loggerReducer = logger(reducer);

//GET CURRENT USER SAVED IN LOCALSTORAGE
const persistedState = JSON.parse(
  window.localStorage.getItem("persistedState")
);

function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState,
    ...persistedState
  }
  let [state, dispatch] = useReducer(loggerReducer, fullInitialState);

  // SAVE IN LOCALSTORAGE THE LOGGED USER
  useEffect(() => {
    window.localStorage.setItem('persistedState', JSON.stringify({user: state.user, theme: state.theme, welcome: state.welcome}))
  }, [state]);

  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };

export const isLogin =(state) => { return state.user ? true: false }
