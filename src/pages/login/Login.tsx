import React, { useContext, useState} from "react";
import { AppContext } from "../../State";
import { Redirect, useHistory } from "react-router-dom";
import { IonContent, IonPage, IonImg, IonLabel, IonAlert } from "@ionic/react";
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

  const CLICKS_TO_EASTER = 22;
  const [currentClicks, setClick] = useState(0);
  const [showRedeemCode, setShowRedeemCode] = useState(false);

  /* istanbul ignore if */
  if (state.welcome !== 'true') { return <Redirect to="/welcome" /> }
  if (state.user) return <Redirect to="/app/home" />;
//"initial_text":"Find tournaments and matches for the sport that you prefer",
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonAlert
          isOpen={showRedeemCode}
          onDidDismiss={() => setShowRedeemCode(false)}
          header={'Congratulations!'}
          subHeader={'Here\'s your redeem code: '}
          message={'20DISCOUNTCODE'}
          buttons={['Thanks, I got it']}
          onWillDismiss={() => setClick(0)}
        />
        <div className="loginPageContent">
          <AppTitle />
          <IonImg onClick={() => {
            setClick(currentClicks + 1);
            if (currentClicks === CLICKS_TO_EASTER) {
              setShowRedeemCode(true);
            }
          }} src={DeporteImg} alt="Deporte IMG" className="loginImg" />
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
