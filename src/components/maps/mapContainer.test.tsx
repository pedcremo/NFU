import React from "react";
import { AppContextProvider } from "../../State";
import { render } from "@testing-library/react";
import App from '../../App';
import MapContainer from "./mapContainer";


it('renders map correctly', () => {
    const { baseElement,container } = render(
        <AppContextProvider> 
            <App>
              <MapContainer />
          </App>
        </AppContextProvider>
      );
      expect(baseElement).toBeDefined();
});
