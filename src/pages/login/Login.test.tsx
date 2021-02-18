import React, { useContext, useState, useEffect } from "react";
import Login from "./Login";
import {AppContextProvider, AppContext} from '../../State';
import { renderHook } from '@testing-library/react-hooks'
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { State } from "ionicons/dist/types/stencil-public-runtime";

const TestLogin = () => {
  const {state,dispatch} = useContext(AppContext);

  useEffect(()=>{
      dispatch({type:'WELCOME',value:'true' as React.ReactText})
  },[])

  return(<Login/>)
}

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter } );
};

test("renders Login page", () => {  

  const  {baseElement, container, findByText}  = renderWithRouter(<AppContextProvider><TestLogin /></AppContextProvider>);
  expect(baseElement).toBeDefined();

  //Should render title
  const title = container.querySelector('.LoginTitleContainer')
  expect(title).toBeDefined();

  //Should render social options
  const social_options = container.querySelector('.loginOptionsContainer')
  const social_options_google = container.querySelector('.socialOption--google')
  const social_options_facebook = container.querySelector('.socialOption--facebook')
  const social_options_email = container.querySelector('.socialOption--local')
  expect(social_options).toBeDefined();
  expect(social_options_google).toBeDefined();
  expect(social_options_facebook).toBeDefined();
  expect(social_options_email).toBeDefined();

  // screen.debug()
});