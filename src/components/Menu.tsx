import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AppContext } from '../State';
import {
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
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  
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
              <IonLabel>{t('Menu.Home')}</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle>
            <IonItem routerLink="/match" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={home} />
              <IonLabel>{t('Menu.Match')}</IonLabel>
            </IonItem>
          </IonMenuToggle>
          
          <IonMenuToggle>
            <IonItem routerLink="/notifications" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={notifications} />
              <IonLabel>{t('Menu.Notifications')}</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle>
            <IonItem
              routerLink="/instalaciones"
              routerDirection="none"
              lines="none"
            >
              <IonIcon  color="medium" slot="start" icon={pin} />
              <IonLabel>{t('Menu.Instalations')}</IonLabel>
            </IonItem>
          </IonMenuToggle>

          {
            (state.user)?
            <>
            <IonMenuToggle>
              <IonItem routerLink="/profile" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={logIn} />
                <IonLabel>{t('Menu.Profile')}</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle>
              <IonItem onClick={logout} routerLink="/app/home" routerDirection="none" lines="none">
                <IonIcon color="medium" slot="start" icon={logOut} />
                <IonLabel>{t('Menu.LogOut')}</IonLabel>
              </IonItem>
            </IonMenuToggle>
            </>
            :
            <IonMenuToggle>
                <IonItem routerLink="/login" routerDirection="none" lines="none">
                  <IonIcon color="medium" slot="start" icon={logIn} />
                  <IonLabel>{t('Menu.Login')}</IonLabel>
                </IonItem>
            </IonMenuToggle>
          }

        </IonList>
      </IonContent>
    </IonMenu>
  )
};

export default Menu;
