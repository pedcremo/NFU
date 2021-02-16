import React,{ Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import PasswordForgotten from "./pages/recover_password/password_forgotten";
import ChangePassword from "./pages/recover_password/change_password";
import { AppContextProvider } from "./State";
import Tabs from "./Tabs";
import PublicRoute from './components/routes/PublicRoute';
// import PrivateRoute from './components/routes/PrivateRoute';


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