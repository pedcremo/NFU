import React, { useContext, useState, useEffect } from "react";
import { AppContextProvider, AppContext } from '../../State';
import { fireEvent, render, screen } from '@testing-library/react';
import CreateEvent from "./CreateEvent";
import { generateGravatar, imageLocal } from "../../utils";

const TestLocalOptions = () => {
  const {state,dispatch} = useContext(AppContext);
  const user = {
    email: "example@gmail.com",
    username: "example",
    image:
      state.currentAvatar === "gravatar"
        ? generateGravatar("example@gmail.com")
        : imageLocal,
    imageLocal: imageLocal,
    events_joined: []
  };

  useEffect(()=>{
    dispatch({type:'WELCOME',value:'true' as React.ReactText})
    dispatch({ type: 'SET_USER', value: user })
  },[])

  console.log(state);

  return(<>{setTimeout(() => {
    return (<CreateEvent/>)
  }, 500)}</>)
}

test("check login inputs", () => {
  const { baseElement, container, findByText } = render(<AppContextProvider><TestLocalOptions /></AppContextProvider>);
  expect(baseElement).toBeDefined();

})