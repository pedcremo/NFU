import React, { useContext } from "react";
import { AppContext } from "../../State";
// import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonToggle,
} from "@ionic/react";
import "./Settings.css";
import { Redirect } from "react-router-dom";
import Header from "../../components/header/header";

const Settings: React.FC = () => {
  // const history = useHistory();
  const { state } = useContext(AppContext);

  if (!state.user) {
    return <Redirect to="/" />;
  }

  const toggleDarkModeHandler = () => window.matchMedia('(prefers-color-scheme: dark)');

  return (
    <IonPage className="ion-page-settings">
      <Header page="Settings" />
      <IonContent fullscreen className="ion-content-settings">
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Notifications</IonLabel>
          </IonItemDivider>

          <IonItem className="settings-item" >
            <IonLabel className="settings-label">Mostrar notificaciones de eventos <IonToggle color="secondary" name="darkMode"
              onIonChange={toggleDarkModeHandler}/></IonLabel>
          </IonItem>
          <IonItem className="settings-item">
            <IonLabel className="settings-label">Activar sonido de notificaciones <IonToggle color="secondary" /></IonLabel>
          </IonItem>
        </IonItemGroup>
        <br />
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Appearance</IonLabel>
          </IonItemDivider>

          <IonItem className="settings-item">
            <IonLabel className="settings-label">Change theme
              <IonSelect>
                <IonSelectOption>Light</IonSelectOption>
                <IonSelectOption>Dark</IonSelectOption>
              </IonSelect>
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <br/>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Others</IonLabel>
          </IonItemDivider>
          <IonItem className="settings-item settings-option" >
            <IonLabel className="settings-label">Profile settings</IonLabel>
          </IonItem>
          <IonItem className="settings-item settings-option">
            <IonLabel className="settings-label">About</IonLabel>
          </IonItem>
          <IonItem className="settings-item settings-option">
            <IonLabel className="settings-label">Help</IonLabel>
          </IonItem>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
