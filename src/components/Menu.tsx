import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AppContext } from '../State';
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
  IonImg,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

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
import { home, logIn, logOut, football, map, pin, people, notifications } from "ionicons/icons";

const Menu = () => {
  const { state, dispatch } = useContext(AppContext);

  const logout = () => {
    dispatch({type:'LOGOUT'});
  }

  return (
    <IonMenu contentId="NFU_Navigation">
      <IonHeader>
        <IonToolbar>
          <IonTitle>NFU</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={""} />
        <IonList>
          <IonMenuToggle>
            <IonItem routerLink="/app/home" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle>
            <IonItem routerLink="/match" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={home} />
              <IonLabel>Match</IonLabel>
            </IonItem>
          </IonMenuToggle>
          
          <IonMenuToggle>
            <IonItem routerLink="/app/notifications" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={notifications} />
              <IonLabel>Notifications</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle>
            <IonItem
              routerLink="/app/instalaciones"
              routerDirection="none"
              lines="none"
            >
              <IonIcon  color="medium" slot="start" icon={pin} />
              <IonLabel>Instalations</IonLabel>
            </IonItem>
          </IonMenuToggle>

          {
            (state.user)?
            <>
            <IonMenuToggle>
              <IonItem routerLink="/app/profile" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={logIn} />
                <IonLabel>Profile</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle>
              <IonItem onClick={logout} routerLink="/app/home" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={logOut} />
                <IonLabel>Logout</IonLabel>
              </IonItem>
            </IonMenuToggle>
            </>
            :
            <IonMenuToggle>
                <IonItem routerLink="/login" routerDirection="none" lines="none">
                  <IonIcon color="medium" slot="start" icon={logIn} />
                  <IonLabel>Login</IonLabel>
                </IonItem>
            </IonMenuToggle>
          }

        </IonList>
      </IonContent>
    </IonMenu>
  )
};

export default Menu;
