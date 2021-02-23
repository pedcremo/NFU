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

import React, { useReducer, useEffect } from "react";
import event_model from "./components/Event/Event.model";

let AppContext = React.createContext(null);

const initialState = {
  language: "es",
  theme: "Light",
  user: "",
  notifications: Math.floor(Math.random() * (10 - 1) + 1),
  user_notifications: [],
  welcome: "",
  BackLogin: "",
  coordinates: "",
  user_coordinates: "no",
  segment: "recent",
  currentAvatar: "",
  events: [],
  events_joined: [],
  likes: [],
  EasterEggClick: 0,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE": {
      return { ...state, ...action.value };
    }
    case "SET_USER": {
      return { ...state, user: action.value };
    }
    case "SET_USER_NOTIFICATIONS": {
      return { ...state, user_notifications: action.value };
    }
    case "SET_EVENTS": {
      return { ...state, events: action.value };
    }
    case "SET_SEGMENT": {
      return { ...state, segment: action.value };
    }
    case "LOGOUT": {
      return { ...state, user: "" };
    }
    case "SET_THEME": {
      action.value === "Dark"
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
      return { ...state, theme: action.value };
    }
    case "ALL_COORDINATES": {
      //Cambiamos la latitud y longitud de lo que queremos mostrar en el map, ya sea uno solo o todos
      return { ...state, coordinates: action.value };
    }
    case "SET_FILTERS": {
      return { ...state, filters: action.value };
    }
    case "USER_COORDINATES": {
      return { ...state, user_coordinates: action.value }; //Aqui estan las coordenadas del usuario
    }
    case "WELCOME": {
      return { ...state, welcome: action.value };
    }
    case "SET_AVATAR_TYPE": {
      return { ...state, currentAvatar: action.value };
    }
    case "LIKES": {
      return { ...state, likes: action.value };
    }
    case "SET_JOIN": {
      // Añadimos el idevento al state.
      let new_events_joined = state.events_joined
        ? [...state.events_joined, action.value]
        : [action.value];

      // Actualizamos los eventos
      let new_events = Object.values(state.events).map(
        (event: typeof event_model) => {
          return event.id == action.value
            ? { ...event, ...{ p: [...event.p, [state.user.username]] } }
            : event;
        }
      );

      return { ...state, events_joined: new_events_joined, events: new_events };
    }
    case "REMOVE_JOIN": {
      // Eliminamos el idevento al state.
      let new_events_joined =
        state.events_joined.indexOf(action.value) > -1
          ? state.events_joined.splice(
              state.events_joined.indexOf(action.value),
              1
            )
            ? state.events_joined
            : "error"
          : state.events_joined;

      // Actualizamos los eventos
      let new_events = Object.values(state.events).map(
        (event: typeof event_model) =>
          event.id == action.value
            ? {
                ...event,
                ...{
                  p: event.p.splice(event.p.indexOf(action.value), 1)
                    ? event.p
                    : "error",
                },
              }
            : event
      );

      return { ...state, events_joined: new_events_joined, events: new_events };
    }
    case "EASTER__EGG": {
      return { ...state, EasterEggClick: action.value };
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
    ...initialState,
  };

  let [state, dispatch] = useReducer(loggerReducer, fullInitialState);

  // SAVE IN LOCALSTORAGE THE LOGGED USER
  useEffect(() => {
    window.localStorage.setItem(
      "persistedState",
      JSON.stringify({
        user: state.user,
        segment: state.segment,
        theme: state.theme,
        welcome: state.welcome,
        currentAvatar: state.currentAvatar,
        user_notifications: state.user_notifications,
      })
    );
  }, [state]);

  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };

export const isLogin = (state) => {
  return state.user ? true : false;
};
