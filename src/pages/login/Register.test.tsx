import React, { useContext, useState, useEffect } from "react";
import { AppContextProvider, AppContext } from '../../State';
import { fireEvent, render, screen } from '@testing-library/react';
import Register from "./Register";


test("Renders Register page", () => {

    const { baseElement, container, findByText } = render(<AppContextProvider><Register /></AppContextProvider>);
    expect(baseElement).toBeDefined();

    // Expect to be form with action HandleSubmit()
    const form = container.querySelector('form') as HTMLFormElement
    expect(form).toBeDefined();
    expect(form.getAttribute('name')).toBe('register_form')

    // Expect to be 2 inputs for login (email, password)  
    const options = container.querySelectorAll('ion-input').length
    expect(options).toBe(3);

    // Expect to be 4 options for Have Account, Recovery Password, Initial Text and app title
    const links = container.querySelectorAll('ion-label')
    const linksName = ["register.have_account","register.forgotten_password","register.initial_text", "NosFaltaUno"]
    expect(links.length).toBe(4);
    
    links.forEach(link => {
        expect(linksName).toContain(link.textContent.toString().replace(/\s/g, ''))
    })

    // Expect to be Submit Button
    const submitBtn = container.querySelector('ion-button')
    expect(submitBtn).toBeDefined(); //Only one button
    expect(submitBtn.getAttribute('type')).toBe('submit') // The button has to be type submit
});

// Falta comprobaciones al clicar submit

test("check register inputs", () => {

    const { container } = render(<AppContextProvider><Register /></AppContextProvider>);
    const submitBtn = container.querySelector('ion-button')
    const input_email = container.querySelector('ion-input[type="email"]') as HTMLInputElement
    const input_password = container.querySelector('ion-input[type="password"]') as HTMLInputElement

    input_email.value = "example@gmail.com"
    input_password.value = "12345678"
    fireEvent.click(submitBtn)
})