import React, { useContext, useState, useEffect } from "react";
import { generateGravatar } from '../../utils'
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
  IonButton,
  IonModal,
  IonToast,
  IonToggle,
} from "@ionic/react";
import "./Settings.css";
import Header from "../../components/header/HeaderComponent";
import { useTranslation } from "react-i18next";

const Settings: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [theme, setTheme] = useState<React.ReactText | undefined>(state.theme);
  const [ lang, setLang ] = useState<React.ReactText | undefined>(state.language);
  const [gravatarMode, setGravatarMode] = useState<boolean | undefined>(state.currentAvatar === 'gravatar' ? true : false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showToastSettings, setShowToastSettings] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch({ type: "SET_THEME", value: theme });
    setAvatarUser();
    setShowToastSettings(true);
  }, [theme, gravatarMode]);
  const toggleDarkModeHandler = () => { };  
  let setAvatarUser = () => {
    dispatch({ type: "SET_AVATAR_TYPE", value: (gravatarMode ? 'gravatar' : 'local') });
    let user = state.user;
    if (gravatarMode) {
      user.image = generateGravatar(user.email);
    }else{
      user.image = state.user.imageLocal;
    }
    dispatch({ type: "SET_USER", value: user });
  }

  const updateLang = (lang) => {
    dispatch({ type: "SET_LANG", value: lang.toString()});
    setLang(lang.toString());
    window.location.reload();
  }

  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage className="ion-page-settings">
      <Header page="Settings" />
      <IonContent fullscreen className="ion-content-settings">
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>{t("settings.divider.notifications")}</IonLabel>
          </IonItemDivider>

          <IonItem className="settings-item">
            <IonLabel className="settings-label">{t("settings.showNotifications")}
              <IonToggle color="secondary" name="darkMode" onIonChange={toggleDarkModeHandler} />
            </IonLabel>
          </IonItem>
          <IonItem className="settings-item">
            <IonLabel className="settings-label">
            {t("settings.soundNotifications")} <IonToggle color="secondary" />
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <br />
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>{t("settings.divider.profile")}</IonLabel>
          </IonItemDivider>

          <IonItem className="settings-item">
            <IonLabel className="settings-label">{t("settings.useGravatarImage")}{" "}
              <IonToggle color="secondary" name="darkMode" checked={gravatarMode} onIonChange={(e) => setGravatarMode(e.detail.checked)} />
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <br />
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>{t("settings.divider.appearance")}</IonLabel>
          </IonItemDivider>

          <IonItem className="settings-item">
            <IonLabel className="settings-label"> {t("settings.changeTheme")} </IonLabel>
            <IonSelect value={theme} onIonChange={(e) => setTheme(e.detail.value)} >
                <IonSelectOption value="Light">{t("settings.lightMode")}</IonSelectOption>
                <IonSelectOption value="Dark">{t("settings.darkMode")}</IonSelectOption>
              </IonSelect>
          </IonItem>
          <IonItem className="settings-item">
            <IonLabel className="settings-label"> {t("settings.lang")} </IonLabel>
            <IonSelect value={lang} onIonChange={(e) => updateLang(e.detail.value)} >
                <IonSelectOption value="es-ES">{t("settings.esp")}</IonSelectOption>
                <IonSelectOption value="ca-ES">{t("settings.cat")}</IonSelectOption>
                <IonSelectOption value="en">{t("settings.en")}</IonSelectOption>
              </IonSelect>
          </IonItem>
        </IonItemGroup>
        <br />
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>{t("settings.divider.others")}</IonLabel>
          </IonItemDivider>
          <IonItem className="settings-item settings-option" routerLink="/app/profile/update" routerDirection="none" lines="none">
            <IonLabel className="settings-label">{t("settings.profileSettings")}</IonLabel>
          </IonItem>
          <IonItem className="settings-item settings-option" onClick={() => setShowAboutUs(true)}>
            <IonLabel className="settings-label">{t("settings.about")}</IonLabel>
          </IonItem>
        </IonItemGroup>

        <IonModal isOpen={showAboutUs} onDidDismiss={() => setShowAboutUs(false)}>
          <h1>{t('settings.aboutModal.text')}</h1>
          <IonButton onClick={() => setShowAboutUs(false)}>Return</IonButton>
        </IonModal>
        <IonToast isOpen={showToastSettings} onDidDismiss={() => setShowToastSettings(false)} message="Your settings have been saved." duration={1200} />
      </IonContent>
    </IonPage>
  );
};

export default Settings;
