import { IonImg, IonLabel, IonItem } from '@ionic/react';
import React from 'react';
import { useHistory } from "react-router-dom";
import './SocialOptions.css';
import GoogleIcon from "../../assets/img/google_icon.svg";
import FacebookIcon from "../../assets/img/facebook_icon.svg";
import { useTranslation } from "react-i18next";

const SocialOptions: React.FC<{action?: Function}> = ({action}) => {
  const { t } = useTranslation();
  const history = useHistory();
  
  return (
    <div className="loginOptionsContainer">
      <IonItem className="socialOption socialOption--google">
        <IonImg src={GoogleIcon} alt="GoogleIcon" className="socialIcon" />
        <IonLabel className="socialOption--google-label">{t("login.social_options.google")}</IonLabel>
      </IonItem>
      <IonItem className="socialOption socialOption--facebook">
        <IonImg src={FacebookIcon} alt="FacebookIcon" className="socialIcon" />
        <IonLabel className="socialOption--facebook-label">{t("login.social_options.facebook")}</IonLabel>
      </IonItem>
      <IonItem className="socialOption socialOption--local" onClick={() => action('Local')}>
        <IonLabel className="socialOption--local-label">{t("login.social_options.email")}</IonLabel>
      </IonItem>
      <IonItem className="socialOption socialOption--local" onClick={() => history.push("/app/home")}>
        <IonLabel className="socialOption--local-label">{t("login.social_options.back")}</IonLabel>
      </IonItem>
    </div>
  );
}
export default SocialOptions;