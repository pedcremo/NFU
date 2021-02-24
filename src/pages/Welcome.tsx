import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../State";
import { Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IonButton,
  IonContent,
  IonPage,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import "./Welcome.css";
import icon from "../assets/img/nfu_icon.png";
import DeporteImg from "../assets/img/deporte_img.png";
import geo from "../assets/img/geo.png";
import friends from "../assets/img/friends-welcome.png";
import ready from "../assets/img/ready.png";
import { isPlatform } from "@ionic/react";
import { nextTick } from "process";

const Welcome: React.FC = () => {
  // const refContainer = useRef(initialValue);
  const { state, dispatch } = useContext(AppContext);
  const [welcome, setWelcome] = useState<React.ReactText | undefined>("");
  const { t } = useTranslation();


  const slideRef = useRef<HTMLIonSlidesElement>(null);
  function next(){
    slideRef.current.slideNext();
  }
  function prev(){
    slideRef.current.slidePrev();
  }



  useEffect(() => {
    dispatch({ type: "WELCOME", value: welcome });
  }, [welcome, dispatch]);

  if (state.welcome === "true") {
    return <Redirect to="/" />;
  }

  let PlataformDesktop = isPlatform("desktop");

  return (
    <IonPage>
      <IonContent fullscreen className="welcome-page-content" scroll-y="false">
        <div className="welcome-page-content">
          <IonSlides pager={true} ref={slideRef}>
            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div className="WelcomeAppTitleContainer">
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">{t("welcome.title")}</span>
                  </div>
                  <img
                    src={DeporteImg}
                    alt="Deporte IMG"
                    className="welcomeImg"
                  />
                </div>

                <h2 className="slideTitle">{t("welcome.welcome")}</h2>
                <p className="slideText">
                  {t("welcome.description")}
                  {/* next() */}
                  {PlataformDesktop ? 
                    //Si es desktop
                    <>
                    <IonButton className="btnPrev" onClick={() => prev()}>  
                    {t("welcome.prev")}
                    </IonButton>
                    <IonButton className="btnNext" onClick={() => next()}>  
                    {t("welcome.next")}
                    </IonButton>
                    </>
                  : (
                    ""
                  )}
                </p>
              </div>
            </IonSlide>

            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div
                    className="WelcomeAppTitleContainer"
                    style={{ visibility: "hidden" }}
                  >
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">{t("welcome.title")}</span>
                  </div>
                  <img src={friends} alt="Deporte IMG" className="welcomeImg" />
                </div>

                <h2 className="slideTitle">{t("welcome.meet")}</h2>
                <p className="slideText">{t("welcome.meetDescription")}</p>
                {PlataformDesktop ? 
                    //Si es desktop
                    <>
                    <IonButton className="btnPrev" onClick={() => prev()}>  
                    {t("welcome.prev")}
                    </IonButton>
                    <IonButton className="btnNext" onClick={() => next()}>  
                    {t("welcome.next")}
                    </IonButton>
                    </>
                  : (
                    ""
                  )}
              </div>
            </IonSlide>

            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div
                    className="WelcomeAppTitleContainer"
                    style={{ visibility: "hidden" }}
                  >
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">{t("welcome.title")}</span>
                  </div>
                  <img src={geo} alt="Deporte IMG" className="welcomeImg" />
                </div>

                <h2 className="slideTitle">{t("welcome.find")}</h2>
                <p className="slideText">{t("welcome.findDescription")}</p>
                {PlataformDesktop ? 
                    //Si es desktop
                    <>
                    <IonButton className="btnPrev" onClick={() => prev()}>  
                    {t("welcome.prev")}
                    </IonButton>
                    <IonButton className="btnNext" onClick={() => next()}>  
                    {t("welcome.next")}
                    </IonButton>
                    </>
                  : (
                    ""
                  )}
              </div>
            </IonSlide>

            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div className="WelcomeAppTitleContainer">
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">{t("welcome.title")}</span>
                  </div>
                  <img
                    src={ready}
                    alt="Deporte IMG"
                    className="welcomeImg flipImg"
                  />
                </div>

                <h2 className="slideTitle">{t("welcome.ready")}</h2>
                {PlataformDesktop ? 
                    //Si es desktop
                    <IonButton className="btnNext" onClick={() => next()}>  
                      {t("welcome.next")}
                    </IonButton>
                  : (
                    ""
                  )}
                <IonButton
                  fill="clear"
                  className="welcome-btn continue-welcome-btn"
                  onClick={() => setWelcome("true")}
                >
                  {t("welcome.continue")}
                </IonButton>
              </div>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
