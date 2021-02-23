import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { IonContent, IonPage, IonImg, IonLabel, IonButton, IonIcon } from "@ionic/react";

import { homeSharp } from "ionicons/icons";
import "./login.css";
import DeporteImg from "../../assets/img/deporte_img.png";
import AppTitle from "../../components/shared/AppTitle";
import SocialOptions from "./SocialOptions";
import LocalOptions from "./LocalOptions";
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  const { state } = useContext(AppContext);
  const [currentOptions, setCurrentOptions] = useState<
    React.ReactText | undefined
  >("Social");
  const { t } = useTranslation();

  /* istanbul ignore if */
  if (state.welcome !== "true") {
    return <Redirect to="/welcome" />;
  }
  if (state.user) return <Redirect to="/app/home" />;
  //"initial_text":"Find tournaments and matches for the sport that you prefer",
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="loginPageContent">
          <AppTitle />
          <IonImg src={DeporteImg} alt="Deporte IMG" className="loginImg" />
          <div>
          <div className="event-card-content-right-players">
                  <Link
                    className="link"
                    to={"/app/home"}
                  >
                    <div className="cardContent__operation--icon ">
                      <IonButton>
                        <IonIcon
                          icon={homeSharp}
                          className="eventContent__actions--icon"
                        />
                        &nbsp;&nbsp; 
                        <IonLabel>{t("login.home")}</IonLabel>
                      </IonButton>
                    </div>
                  </Link>
                </div>
          </div>
    
          <IonLabel className="prhaseLogin">{t("login.initial_text")}</IonLabel>
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
