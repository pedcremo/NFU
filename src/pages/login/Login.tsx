import React, { useContext, useState,useEffect} from "react";
import { AppContext } from "../../State";
import { Redirect } from "react-router-dom";
import { IonContent, IonPage, IonImg, IonLabel,IonToast } from "@ionic/react";
import "./login.css";
import DeporteImg from "../../assets/img/deporte_img.png";
import AppTitle from '../../components/shared/AppTitle'
import SocialOptions from './SocialOptions'
import LocalOptions from './LocalOptions'
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";


const Login: React.FC = () => {
  const { state,dispatch } = useContext(AppContext);
  const [ currentOptions, setCurrentOptions] = useState<React.ReactText | undefined>('Social');
  const { t } = useTranslation();
  const history = useHistory();
  const [count,setCount]= useState(0);
  const [showToast,setShowToast]= useState(false);


  useEffect(() => {
    if(!state.easteregg){
      if(count == 22){
        dispatch({ type: 'EASTER_EGG', value: true})
        setShowToast(true)
      }
    }

  },[count,dispatch]);

  /* istanbul ignore if */
  if (state.welcome !== 'true') { return <Redirect to="/welcome" /> }
  if (state.user) return <Redirect to="/app/home" />;
//"initial_text":"Find tournaments and matches for the sport that you prefer",
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="loginPageContent">
          <AppTitle />
          <IonImg src={DeporteImg} alt="Deporte IMG" className="loginImg" onClick={() => setCount(count + 1)} />
          <IonLabel className="prhaseLogin">{t("login.initial_text")}</IonLabel> 
          { currentOptions === "Social" ? <SocialOptions action={setCurrentOptions}/> : <LocalOptions action={setCurrentOptions}/> }
          <IonLabel className="btn-home"
          onClick={() => history.push("app/home")}>{t("login.home")}</IonLabel>
        </div>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={t("login.easteregg")}
          duration={5000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
