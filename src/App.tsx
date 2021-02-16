import React,{ Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import PasswordForgotten from "./pages/recover_password/password_forgotten";
import ChangePassword from "./pages/recover_password/change_password";
import Settings from './pages/settings/Settings';
import Comments from './pages/Comments';
import Instalaciones from './pages/Instalaciones'
import Details from './pages/Details'
import Instalacion from './pages/instalacion'

import UpdateProfile from './pages/profile/UpdateProfile';
import Notifications from './pages/notifications/Notifications';
import { AppContextProvider } from "./State";
import Tabs from "./Tabs";
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';


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
import Welcome from './pages/Welcome';
import Menu from "./components/Menu";

const App: React.FC = () => (
  <AppContextProvider>
    <IonApp>
      <IonReactRouter>
      <Suspense fallback="loading">
        <IonPage>
          <Menu />
          <IonRouterOutlet id="NFU_Navigation">

          <PublicRoute component={Login} path="/login" exact />
          <PublicRoute component={Register} path="/register" exact />
          <PublicRoute component={Welcome} path="/welcome" exact />
          <PublicRoute component={PasswordForgotten} path="/recover" exact />
          <PublicRoute component={ChangePassword} path="/recover/:token" exact />
          <PublicRoute component={Comments} path="/comments/:id" exact />
        <PublicRoute component={Instalaciones} path="/instalaciones" exact />
        <PublicRoute component={Instalacion} path="/instalacion/:id" exact />
        <PublicRoute component={Details} path="/event/:id" exact />

        <PrivateRoute component={Settings} path="/settings" exact />
        <PrivateRoute component={UpdateProfile} path="/profile/update" exact />   

          <PrivateRoute component={Profile} path="/profile" exact />

            <Route
              path="/"
              render={() => <Redirect to="/app/home" />}
              exact={true}
            />
            <Route path="/app" component={Tabs} />
            

          </IonRouterOutlet>
        </IonPage>
        </Suspense>
      </IonReactRouter>
    </IonApp>
  </AppContextProvider>
);

export default App;