import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";
import { Redirect, Link } from "react-router-dom";
import { IonContent, IonPage, IonImg, IonLabel,IonToast } from "@ionic/react";
import "./login.css";
import DeporteImg from "../../assets/img/deporte_img.png";
import AppTitle from '../../components/shared/AppTitle'
import SocialOptions from './SocialOptions'
import LocalOptions from './LocalOptions'
import { useTranslation } from "react-i18next";


const Login: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [ currentOptions, setCurrentOptions] = useState<React.ReactText | undefined>('Social');
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");
  let egg = 0;

  /* istanbul ignore if */
  if (state.welcome !== 'true') { return <Redirect to="/welcome" /> }
  if (state.user) return <Redirect to="/app/home" />;

  //"initial_text":"Find tournaments and matches for the sport that you prefer",
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="loginPageContent">
          <AppTitle />
          <Link to="/app/home" slot="end" className="back-button">
              <IonLabel>{t("login.back")}</IonLabel>
            </Link>
          <IonImg src={DeporteImg} alt="Deporte IMG" className="loginImg" onClick={() => {
            if (!state.EasterEgg) {
              egg++;
              if (egg > 22){
                dispatch({ type: "SET_EGG", value: true})
                setShowToast(true);
                setMessage("Ahora eres desarrollador");
              }
            }
          }}/>
          <IonLabel className="prhaseLogin">{t("login.initial_text")}</IonLabel> 
          { currentOptions === "Social" ? <SocialOptions action={setCurrentOptions}/> : <LocalOptions action={setCurrentOptions}/> }
        </div>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={message}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
