import React, { useContext, useState, useEffect } from "react";
import Login from "./Login";
import {AppContextProvider, AppContext} from '../../State';
import { renderHook } from '@testing-library/react-hooks'
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { State } from "ionicons/dist/types/stencil-public-runtime";

function Init() {
  const { state, dispatch } = useContext(AppContext);
  const [ welcome, setWelcome ] = useState<React.ReactText | undefined>('true');
  dispatch({ type: 'WELCOME', value: welcome})
  return <div>{welcome}</div>
}
// export default Init()

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter } );
};

// export interface state {
//   welcome: string;
// }

test("renders Login page", () => {

  const state = { welcome: "true" }
  

  // const state: state = {
  //   welcome:'true'
  // } 
  // Init()
  // const  {debug}  = render(<Init/>); 
  // const { result } = renderHook(() => <AppContextProvider>{Init()}</AppContextProvider>)

  const  {baseElement, container, findByText}  = render(<AppContextProvider><Login /></AppContextProvider>);
  expect(baseElement).toBeDefined();
  // findByText(state['welcome']);

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