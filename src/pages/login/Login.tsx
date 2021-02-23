import React, { useContext, useState} from "react";
import { AppContext } from "../../State";
import { Redirect, Link } from "react-router-dom";
import { IonContent, IonPage, IonImg, IonLabel,  IonToast} from "@ionic/react";
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
  const [ easterEgg, setEasterEgg] = useState(0);
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  let easterEggClick = () => {
    if(easterEgg>=22){
      setMessage("YEEEEEEEEES, you find the EASTER EGG");
      setShowToast(true);
      setEasterEgg(0)
    }else{
      setEasterEgg(easterEgg+1)
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
        <Link to="/app/home" slot="end" className="go_home">
            <IonLabel>{t("login.home")}</IonLabel>
        </Link>
          <AppTitle />
          <IonImg src={DeporteImg} onClick={() => easterEggClick()} alt="Deporte IMG" className="loginImg" />
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
