import React, { useContext, useState} from "react";
import { AppContext } from "../../State";
import { Redirect, useHistory } from "react-router-dom";
import { IonContent, IonPage, IonImg, IonLabel } from "@ionic/react";
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
  const history = useHistory();
  const HOME_PATH = "/app/home";
  /* istanbul ignore if */
  if (state.welcome !== 'true') { return <Redirect to="/welcome" /> }
  if (state.user) return <Redirect to="/app/home" />;
//"initial_text":"Find tournaments and matches for the sport that you prefer",
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="loginPageContent">
          <AppTitle />
          <IonImg src={DeporteImg} alt="Deporte IMG" className="loginImg" />
          <IonLabel className="prhaseLogin">{t("login.initial_text")}</IonLabel> 
          <IonLabel onClick={() => {
            history.push(HOME_PATH)
          }} className="take-look">
            Maybe you want take a look first!
          </IonLabel>
          { currentOptions === "Social" ? <SocialOptions action={setCurrentOptions}/> : <LocalOptions action={setCurrentOptions}/> }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
