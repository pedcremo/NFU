import React, { useContext, useState, useEffect } from "react";
import { AppContextProvider, AppContext } from '../../State';
import { fireEvent, render, screen } from '@testing-library/react';
import LocalOptions from "./LocalOptions";


test("renders Component LocalOptions", () => {

    const { baseElement, container, findByText } = render(<AppContextProvider><LocalOptions /></AppContextProvider>);
    expect(baseElement).toBeDefined();

    // Expect to be form with action HandleSubmit()
    const form = container.querySelector('form') as HTMLFormElement
    expect(form).toBeDefined();
    expect(form.getAttribute('name')).toBe('login_form')

    // Expect to be 2 inputs for login (email, password)  
    const options = container.querySelectorAll('ion-input').length
    expect(options).toBe(2);

    // Expect to be 3 options for Create Account, Recovery Password or go back to Social Options
    const links = container.querySelectorAll('ion-label')
    const linksName = ["login.local_options.forgotten_password","login.local_options.create_account","login.local_options.social_options"]
    expect(links.length).toBe(3);
    
    links.forEach(link => {
        expect(linksName).toContain(link.textContent.toString().replace(/\s/g, ''))
    })

    // Expect to be Submit Button
    const submitBtn = container.querySelector('ion-button')
    expect(submitBtn).toBeDefined(); //Only one button
    expect(submitBtn.getAttribute('type')).toBe('submit') // The button has to be type submit
});

// Falta comprobaciones al clicar login

test("check login inputs", () => {
    const { container } = render(<AppContextProvider><LocalOptions /></AppContextProvider>);

    const submitBtn = container.querySelector('ion-button')
    const input_email = container.querySelector('ion-input[type="email"]') as HTMLInputElement
    const input_password = container.querySelector('ion-input[type="password"]') as HTMLInputElement

    input_email.value = "example@gmail.com"
    input_password.value = "12345678"


    fireEvent.click(submitBtn)
})