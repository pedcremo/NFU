import React, { useContext, useState} from "react";
import { AppContext } from "../../State";
import { Redirect, Link } from "react-router-dom";
import { IonContent, IonPage, IonImg, IonLabel, IonButton, IonIcon } from "@ionic/react";
import { home } from "ionicons/icons";
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
  const [count_click, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  const [easteregg, setEasterEgg] = useState(false);


  /* istanbul ignore if */
  if (state.welcome !== 'true') { return <Redirect to="/welcome" /> }
  if (state.user) return <Redirect to="/app/home" />;

  let clickEasterEgg =(e)=>{
    let now = new Date()
    let date = now.getTime() - time.getTime()
    let sec = Math.floor((date/1000) % 60);

    setTime(new Date())
    sec<1? setCount(count_click + 1) : setCount(0)


    if (count_click == 21 ){
      setCount(0)

      e.target.className = e.target.className += " easteregg";

      if( easteregg){
        alert("Do not be abusive")
      }else{
        alert("You discovered an easteregg")
        setEasterEgg(true)
      }
    }

  }


//"initial_text":"Find tournaments and matches for the sport that you prefer",
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="loginPageContent">
          <AppTitle />
          <IonImg src={DeporteImg} alt="Deporte IMG" className="loginImg" onClick={ (e) => clickEasterEgg(e)} />
          <IonLabel className="prhaseLogin">{t("login.initial_text")}</IonLabel> 
          { currentOptions === "Social" ? <SocialOptions action={setCurrentOptions}/> : <LocalOptions action={setCurrentOptions}/> }
          <Link
            className="link"
            to={'/app/home'}
          >
          <div className="cardContent__operation--icon ">
          <IonButton>
            <IonIcon
              icon={home}
              className="eventContent__actions--icon"
            />
            &nbsp;&nbsp; HOME
          </IonButton>
          </div>
        </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
