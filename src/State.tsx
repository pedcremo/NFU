import React, { useReducer } from "react";

let AppContext = React.createContext(null);

const initialState = {
  language:'es',
  theme:'light',
  user:'',
  lat:0,
  lng:0
}

let reducer = (state, action) => {
 
  switch(action.type) {
    case "SET_USER": {      
      return { ...state, user: action.value }
    }
    case "LOGOUT": {      
      return { ...state, user: '' }
    }
    case "SET_THEME": {
      return { ...state, theme: action.value }
    }

    case "SET_COORDINATES":{  //Cambiamos la latitud y longitud de lo que queremos mostrar en el map

      console.log("SET COORDINATEEEES:")
      console.log(action.value.lat)
      return {
          ...state, 
          lat: action.value.lat,
          lng: action.value.lng
      }
    }

  }
  return state;
};

const logger = (reducer) => {
  const reducerWithLogger = (state, action) => {
    console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    console.log("%cNext State:", "color: #47B04B; font-weight: 700;", reducer(state,action));
    return reducer(state,action);
  };
  return reducerWithLogger;
}

const loggerReducer = logger(reducer);

function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState,
  }

  let [state, dispatch] = useReducer(loggerReducer, fullInitialState);
  let value = { state, dispatch };


  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };