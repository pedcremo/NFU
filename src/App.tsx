import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonPage
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import {AppContextProvider} from './State';
import Tabs from './Tabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <AppContextProvider>
  <IonApp>
    <IonReactRouter>
      <IonPage>
        <IonRouterOutlet>
          <Route path="/login" component={Login} />          
          <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
        </IonRouterOutlet>
        <Route path="/app" component={Tabs} />
      </IonPage>
    </IonReactRouter>
  </IonApp>
  </AppContextProvider>
);

export default App;
