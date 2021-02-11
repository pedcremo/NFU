import React from "react";
import Login from "./Login";
import {AppContextProvider} from '../../State';
import App from "../../App";
import { render, screen } from '@testing-library/react';

test("renders a login page", () => {
  const  baseElement  = render(<App><Login /></App>);   
  expect(baseElement).toBeDefined();   
});
