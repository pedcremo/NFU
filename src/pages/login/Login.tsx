import React, { useContext, useState} from "react";
import { AppContext } from "../../State";
import { Redirect } from "react-router-dom";
import { IonContent, IonPage, IonImg, IonLabel, IonButton, IonToast } from "@ionic/react";
import "./login.css";
import DeporteImg from "../../assets/img/deporte_img.png";
import AppTitle from '../../components/shared/AppTitle'
import SocialOptions from './SocialOptions'
import LocalOptions from './LocalOptions'
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  const { state } = useContext(AppContext);
  const [ currentOptions, setCurrentOptions] = useState<React.ReactText | undefined>('Social');
  const { t } = useTranslation();
  let count = 0;
  const [showToastEasterEgg, setShowToastEasterEgg] = useState(false);
  const [showToastEasterEggError, setShowToastEasterEggError] = useState(false);

  let EasterEggLogin = () => {
    count++;
    let status = localStorage.getItem('easterEgg');
    if( count === 21 && status !== 'true') {
      localStorage.setItem('easterEgg','true');
      setShowToastEasterEgg(true);
    }else if (count === 21 && status === 'true'){
      setShowToastEasterEggError(true);
    }
  }

  /* istanbul ignore if */
  if (state.welcome !== 'true') { return <Redirect to="/welcome" /> }
  if (state.user) return <Redirect to="/app/home" />;
//"initial_text":"Find tournaments and matches for the sport that you prefer",
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="loginPageContent">
          <IonButton className="login-home-btn" routerLink="/app/home">{t("login.home")}</IonButton>
          <AppTitle />
          <IonImg src={DeporteImg} alt="Deporte IMG" className="loginImg" onClick={() => EasterEggLogin()}/>
          <IonLabel className="prhaseLogin">{t("login.initial_text")}</IonLabel> 
          { currentOptions === "Social" ? <SocialOptions action={setCurrentOptions}/> : <LocalOptions action={setCurrentOptions}/> }
        </div>
        <IonToast color="success" isOpen={showToastEasterEgg} onDidDismiss={() => setShowToastEasterEgg(false)} message={t('easterEgg.enable')} duration={5000} />
        <IonToast color="danger" isOpen={showToastEasterEggError} onDidDismiss={() => setShowToastEasterEggError(false)} message={t('easterEgg.unable')} duration={5000} />
      </IonContent>
    </IonPage>
  );
};

export default Login;
