import React, { useContext, useState, useEffect } from "react";
import { AppContextProvider, AppContext } from '../../State';
import { fireEvent, render, screen } from '@testing-library/react';
import SocialOptions from "./SocialOptions";


test("renders Component SocialOptions", () => {

    const { baseElement, container, findByText } = render(<SocialOptions />);
    expect(baseElement).toBeDefined();

    // Expect to be 3 options for login (Google facebook email)  
    const options = container.querySelectorAll('ion-item').length
    expect(options).toBe(3);

    // Expect that those three options are google, facebook and email
    const social_options_google = container.querySelector('.socialOption--google')
    const social_options_facebook = container.querySelector('.socialOption--facebook')
    const social_options_email = container.querySelector('.socialOption--local')
    expect(social_options_google).toBeDefined();
    expect(social_options_facebook).toBeDefined();
    expect(social_options_email).toBeDefined();

});