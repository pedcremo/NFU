import React, { useContext } from "react";
import { AppContext } from "./State";
import { useTranslation } from "react-i18next";
import { Route } from 'react-router-dom';

import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonBadge,
} from "@ionic/react";

import Home from "./pages/Home";
import CreateEvent from "./pages/create/CreateEvent";

//
import Settings from "./pages/settings/Settings";
import Comments from "./pages/Comments";
import Instalaciones from "./pages/Instalaciones";
import Events from "./pages/Events";
import Details from "./pages/Details";
import Instalacion from "./pages/instalacion";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/profile/UpdateProfile";
import Error404 from "./pages/errors/404";

import { home, addCircle, notifications } from "ionicons/icons";

import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import Notifications from "./pages/notifications/Notifications";

const Tabs: React.FC = () => {
  const { state } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <IonTabs>
      <IonRouterOutlet>
        <PublicRoute component={Home} path="/app/home" exact />
        <PublicRoute
          component={Notifications}
          path="/app/notifications"
          exact
        />
        <PrivateRoute component={CreateEvent} path="/app/create" exact />

        {/* ALL PAGES */}

        <PublicRoute component={Comments} path="/app/comments/:id" exact />
        <PublicRoute
          component={Instalaciones}
          path="/app/instalaciones"
          exact
        />
        <PublicRoute
          component={Instalacion}
          path="/app/instalacion/:id"
          exact
        />
        <PublicRoute component={Events} path="/app/events" exact />
        <PublicRoute component={Details} path="/app/event/:id" exact />

        <PrivateRoute component={Settings} path="/app/settings" exact />
        <PrivateRoute
          component={UpdateProfile}
          path="/app/profile/update"
          exact
        />

        <PrivateRoute component={Profile} path="/app/profile" exact />

        <Route component={Error404} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/app/home">
          <IonIcon icon={home} />
          <IonLabel>{t("tabs.home")}</IonLabel>
        </IonTabButton>

        {state.user ? (
          <IonTabButton tab="notifications" href="/app/notifications">
            <IonBadge color="danger">{state.notifications}</IonBadge>
            <IonIcon icon={notifications} />
            <IonLabel>{t("tabs.notifications")}</IonLabel>
          </IonTabButton>
        ) : (
          <></>
        )}

        {state.user ? (
          <IonTabButton tab="create" href="/app/create">
            <IonIcon icon={addCircle} />
            <IonLabel>{t("tabs.addevent")}</IonLabel>
          </IonTabButton>
        ) : (
          <></>
        )}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
