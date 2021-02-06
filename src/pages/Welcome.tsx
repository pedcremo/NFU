import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../State';
import { Redirect } from 'react-router-dom';
import {
  IonButton,
  IonContent,
  IonPage,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import "./Welcome.css";
import icon from "../assets/img/icono.png";
import DeporteImg from "../assets/img/deporte_img.png";
import geo from "../assets/img/geo.png";
import friends from "../assets/img/friends-welcome.png";
import ready from "../assets/img/ready.png";

// import { Redirect } from 'react-router-dom';

const Welcome: React.FC = () => {

  const { state, dispatch } = useContext(AppContext);
  const [ welcome, setWelcome ] = useState<React.ReactText | undefined>('');

  useEffect(() => {
    dispatch({ type: 'WELCOME', value: welcome})
  }, [welcome, dispatch]);

  if (state.welcome === 'true'){return <Redirect to="/" />}

  return (
    <IonPage>
      <IonContent fullscreen className="welcome-page-content" scroll-y="false">
        <div className="welcome-page-content">
          <IonSlides pager={true}>
            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div className="WelcomeAppTitleContainer">
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">Nos Falta Uno</span>
                  </div>
                  <img
                    src={DeporteImg}
                    alt="Deporte IMG"
                    className="welcomeImg"
                  />
                </div>

                <h2 className="slideTitle">Welcome</h2>
                <p className="slideText">
                Find tournaments and matches for the sport you prefer. Join
                with a single click
                </p>
              </div>
            </IonSlide>

            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div className="WelcomeAppTitleContainer" style={{visibility: "hidden"}}>
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">Nos Falta Uno</span>
                  </div>
                  <img src={friends} alt="Deporte IMG" className="welcomeImg" />
                </div>

                <h2 className="slideTitle">Meet new friends</h2>
                <p className="slideText">
                  Meet new friends with the same interests and play sports together
                </p>
              </div>
            </IonSlide>

            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div className="WelcomeAppTitleContainer" style={{visibility: "hidden"}}>
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">Nos Falta Uno</span>
                  </div>
                  <img
                    src={geo}
                    alt="Deporte IMG"
                    className="welcomeImg"
                  />
                </div>

                <h2 className="slideTitle">Find the nearest events</h2>
                <p className="slideText">
                  Choose your preferences and we will show you the related events closest to you.
                </p>
              </div>
            </IonSlide>

            <IonSlide>
              <div className="slide">
                <div className="topSlide">
                  <div className="WelcomeAppTitleContainer">
                    <img src={icon} alt="icon" />
                    <span className="AppTitle">Nos Falta Uno</span>
                  </div>
                  <img
                    src={ready}
                    alt="Deporte IMG"
                    className="welcomeImg flipImg"
                  />
                </div>

                <h2 className="slideTitle">Are you ready?</h2>
                <IonButton fill="clear" className="welcome-btn continue-welcome-btn" onClick={() => setWelcome('true')}>Continue</IonButton>
              </div>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
