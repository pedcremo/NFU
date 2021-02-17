import React, { useContext,useState, useEffect } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonToast,
  IonToggle,
} from "@ionic/react";
import "./Settings.css";
import Header from "../../components/header/header";

const Settings: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [theme, setTheme] = useState<React.ReactText | undefined>(state.theme);
  const [gravatarMode, setgravatarMode] = useState<boolean | undefined>(true);

  const [showToastSettings, setShowToastSettings] = useState(false);

  useEffect(() => {
    dispatch({ type: "SET_THEME", value: theme });
    setShowToastSettings(true);
  }, [theme, dispatch]);

  const toggleDarkModeHandler = () => {};

  const toggleGravatar = (e) => {
    console.log(e.detail.checked);
  };


  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage className="ion-page-settings">
      <Header page="Settings" />
      <IonContent fullscreen className="ion-content-settings">
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Notifications</IonLabel>
          </IonItemDivider>

          <IonItem className="settings-item">
            <IonLabel className="settings-label">Mostrar notificaciones de eventos{" "}
              <IonToggle color="secondary" name="darkMode" onIonChange={toggleDarkModeHandler} />
            </IonLabel>
          </IonItem>
          <IonItem className="settings-item">
            <IonLabel className="settings-label"> 
              Activar sonido de notificaciones <IonToggle color="secondary" />
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <br/>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Profile</IonLabel>
          </IonItemDivider>

          <IonItem className="settings-item">
            <IonLabel className="settings-label">Utilizar imagen de gravatar{" "}
              <IonToggle color="secondary" name="darkMode" checked={gravatarMode} onIonChange={(e) => toggleGravatar(e)} />
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <br/>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Appearance</IonLabel>
          </IonItemDivider>

          <IonItem className="settings-item">
            <IonLabel className="settings-label"> Change theme
              <IonSelect value={theme} onIonChange={(e) => setTheme(e.detail.value)} >
                <IonSelectOption value="Light">Light</IonSelectOption>
                <IonSelectOption value="Dark">Dark</IonSelectOption>
              </IonSelect>
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <br />
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Others</IonLabel>
          </IonItemDivider>
          <IonItem className="settings-item settings-option" routerLink="/app/profile/update" routerDirection="none" lines="none">
            <IonLabel className="settings-label">Profile settings</IonLabel>
          </IonItem>
          <Link to={{ pathname: '/welcome', state: { about: true } }}>
            <IonItem className="settings-item settings-option">
              <IonLabel className="settings-label">About</IonLabel>
            </IonItem>
          </Link>
          
        </IonItemGroup>
        <IonToast isOpen={showToastSettings} onDidDismiss={() => setShowToastSettings(false)} message="Your settings have been saved." duration={1200} />
      </IonContent>
    </IonPage>
  );
};

export default Settings;
