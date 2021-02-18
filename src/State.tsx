/**
 * This is a simple redux-like state management pattern for React using hooks
 * that might be useful in your simpler Ionic React apps that don't
 * require something as complex as Redux.
 * 
 * See each page for an example of how to read from state and
 * dispatch actions.
 * 
 * Learn more:
 * https://ionicframework.com/blog/a-state-management-pattern-for-ionic-react-with-react-hooks/
 */

import { stat } from "fs";
import React, { useReducer, useEffect } from "react";

let AppContext = React.createContext(null);

const initialState = {
  language: 'es',
  theme: 'Light',
  user: '',
  notifications: Math.floor(Math.random() * (10 - 1) + 1),
  welcome: "",
  BackLogin:"",
  coordinates: "",
  user_coordinates: "no",
  segment: "joined",
  currentAvatar: "",
  event: []
};

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE": {      
      return { ...state, ...action.value }
    }
    case "SET_USER": {      
      return { ...state, user: action.value }
    }
    case "SET_EVENT": {  
      let events = [...state.event]
      events.push(action.value)
      return { ...state, event: events }
    }
    case "SET_SEGMENT": {      
      return { ...state, segment: action.value }
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
    case "SET_FILTERS": {
      return { ...state, filters: action.value };
    }
    case "USER_COORDINATES":{
      return {...state, user_coordinates: action.value}; //Aqui estan las coordenadas del usuario
    }
    case "WELCOME": {
      return { ...state, welcome: action.value };
    }
    case "SET_AVATAR_TYPE": {
      return { ...state, currentAvatar: action.value };
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
    const actionReducer = reducer(state, action);
    console.log(
      "%cNext State:",
      "color: #47B04B; font-weight: 700;",
      actionReducer
    );
    return actionReducer;
  };
  return reducerWithLogger;
};

const loggerReducer = logger(reducer);

function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState
  }

  let [state, dispatch] = useReducer(loggerReducer, fullInitialState);

  // SAVE IN LOCALSTORAGE THE LOGGED USER
  useEffect(() => {

    window.localStorage.setItem('persistedState', JSON.stringify({user: state.user, segment: state.segment, theme: state.theme, welcome: state.welcome, currentAvatar: state.currentAvatar, event: state.event}))
  }, [state]);

  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };

export const isLogin =(state) => { return state.user ? true: false }
