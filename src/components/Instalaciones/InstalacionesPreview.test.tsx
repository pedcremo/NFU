import React from "react";
import { render } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import InstalacionesPreview from "./instalaciones-preview";
import App from '../../App';




test("renders a Instalaciones List Page,link", () => {

  const { baseElement,container } = render(
      <App>
        <InstalacionesPreview />
      </App>
  );
    // Expecting that is rendered
    expect(baseElement).toBeDefined();

    // Expect that there is a Instalation Image
    const image = container.querySelectorAll(".cardContent__left");
    expect(image).not.toBeNull();

    // Expect The icons of the IonCard

      let icon = container.querySelector(".cardContent__operation--icon,.playersIcon");
      expect(icon).toBeDefined();

      //  // Expect to be 3
      //   const links = container.querySelectorAll('.link')
      //   expect(links.length).toBe(3);
        
      //   links.forEach(link => {
      //       expect(links).toContain(link.textContent.toString().replace(/\s/g, ''))
      //   })

  // Interact with page
  // act(() => {
  //   // Find the link (perhaps using the text content)
  //   const GoInstalationLInk = document.querySelector('#link');
  //   // Click it
  //   GoInstalationLInk.dispatchEvent(new MouseEvent("link", { bubbles: true }));

    
  // });

     // Check correct page content showed up
    //expect(document.body.textContent).toBe('Instalacion');

    // assert about url
    // expect(testLocation.pathname).toBe("/instalation/:id");
    // const searchParams = new URLSearchParams(testLocation.search);
    // expect(searchParams.has("id")).toBe(true);
    // expect(searchParams.get("id")).toEqual("1234");

});