import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordForgotten from "./pages/recover_password/password_forgotten";
import ChangePassword from "./pages/recover_password/change_password";
import { AppContextProvider } from "./State";
import Tabs from "./Tabs";

/* App style */
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Profile from "./pages/profile/Profile";

const App: React.FC = () => (
  <AppContextProvider>
    <IonApp>
      <IonReactRouter>
        <IonPage>
          <IonRouterOutlet>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route
              path="/"
              render={() => <Redirect to="/login" />}
              exact={true}
            />
            <Route path="/app" component={Tabs} />
            <Route path="/recover" component={PasswordForgotten} />
            <Route path="/recover/:token" component={ChangePassword} />
          </IonRouterOutlet>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  </AppContextProvider>
);

export default App;
