import React, { useContext, useState, useEffect } from "react";
import { AppContextProvider, AppContext } from '../../State';
import { fireEvent, render, screen } from '@testing-library/react';
import Settings from "./Settings";
import { generateGravatar, imageLocal } from "../../utils";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

const TestSettingsInit = () => {
  const { state, dispatch } = useContext(AppContext);
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
  useEffect(() => {
    dispatch({type:'WELCOME',value:'true' as React.ReactText})
    dispatch({ type: 'SET_USER', value: user })
  }, [])

  return(<>{setTimeout(() => {
    return (<Settings/>)
  }, 500)}</>)
  // return <Settings/>

}


test("renders Component Settings", () => {

  const { baseElement, container } = render(<AppContextProvider><TestSettingsInit /></AppContextProvider>);
  expect(baseElement).toBeDefined();

  const darkToggle = container.querySelector('#dark-toggle')
  // screen.debug();
  console.log(container);
  console.log(darkToggle);

});
