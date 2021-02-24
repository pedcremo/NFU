import React, { useContext, useState} from "react";
import { AppContext } from "../../State";
import { Redirect } from "react-router-dom";
import { IonContent, IonPage, IonImg, IonLabel, IonButton, IonToast, IonModal } from "@ionic/react";
import "./login.css";
import DeporteImg from "../../assets/img/deporte_img.png";
import AppTitle from '../../components/shared/AppTitle'
import SocialOptions from './SocialOptions'
import LocalOptions from './LocalOptions'
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  const { state, dispatch  } = useContext(AppContext);
  const [ currentOptions, setCurrentOptions] = useState<React.ReactText | undefined>('Social');
  const { t } = useTranslation();
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showToastEasterEggError, setShowToastEasterEggError] = useState(false);
  let count = 0;
  let time = 5000;

  let EasterEggLogin = () => {
    count++;
    if( count === 22 && !state.loginEasterEgg) {
      dispatch({ type: "SET_LOGIN_EASTEREGG", value: true})
      setShowEasterEgg(true);
    }else if (count === 21 && state.loginEasterEgg){
      setShowToastEasterEggError(true);
    }
    setTimeout( () => count = 0, time); //You only have 5 seconds for click 22 times, if you can't reach it, time resets
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
        <IonToast color="danger" isOpen={showToastEasterEggError} onDidDismiss={() => setShowToastEasterEggError(false)} message={t('easterEgg.unable')} duration={5000} />
        <IonModal isOpen={showEasterEgg} onDidDismiss={() => setShowEasterEgg(false)}>
          <h1>{t('easterEgg.title')}</h1>
          <span>1723MB82H</span>
          <span>{t('easterEgg.info')}</span>
          <IonButton onClick={() => setShowEasterEgg(false)}>Return</IonButton>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Login;
