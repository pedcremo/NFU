import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Redirect, useHistory } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonImg,
  IonLabel,
  IonButton,
  IonToast,
} from "@ionic/react";
import "./login.css";
import DeporteImg from "../../assets/img/deporte_img.png";
import AppTitle from "../../components/shared/AppTitle";
import SocialOptions from "./SocialOptions";
import LocalOptions from "./LocalOptions";
import { useTranslation } from "react-i18next";
import { Toast } from "@capacitor/core";

const Login: React.FC = () => {
  const { state } = useContext(AppContext);
  const [currentOptions, setCurrentOptions] = useState<
    React.ReactText | undefined
  >("Social");
  const { t } = useTranslation();
  const history = useHistory();
  const [showToast, setShowToast] = useState(0);
  

  const anonimousLogin = (e) => {
    history.push("/");
  };

  const handleEasterEgg = (e) => {
    setShowToast(showToast + 1);
  };

  /* istanbul ignore if */
  if (state.welcome !== "true") {
    return <Redirect to="/welcome" />;
  }
  if (state.user) return <Redirect to="/app/home" />;
  //"initial_text":"Find tournaments and matches for the sport that you prefer",
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonToast
          isOpen={showToast === 22}
          message={`${t("easterEgg")}`}
          duration={3000}
        />

        <div className="loginPageContent">
          <AppTitle />
          <IonImg
            src={DeporteImg}
            alt="Deporte IMG"
            className="loginImg"
            onClick={(e) => {
              handleEasterEgg(e);
            }}
          />
          <IonLabel className="prhaseLogin">{t("login.initial_text")}</IonLabel>
          <IonButton
            onClick={(e) => {
              anonimousLogin(e);
            }}
            className="loginOption loginOption--submit"
            id="btnAnonimous"
          >
            Anonimo
            {/* {" "} */}
            {/* {t("login.local_options.login")}{" "} */}
          </IonButton>
          {currentOptions === "Social" ? (
            <SocialOptions action={setCurrentOptions} />
          ) : (
            <LocalOptions action={setCurrentOptions} />
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
