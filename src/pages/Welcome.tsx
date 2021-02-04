import React, { useContext } from "react";
// import { AppContext } from '../State';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import "./Welcome.css";
import icon from "../assets/img/icono.png";
import DeporteImg from "../assets/img/deporte_img.png";
import balls from "../assets/img/ballsimg.png";

// import { Redirect } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="welcome-page-content" scroll-y="false">
        <div className="welcome-page-content">
          <IonSlides>
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
                  The ionic conference app is a practical preview of the ionic
                  framework in action, and a demonstration of proper code use.
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
                  <img src={balls} alt="Deporte IMG" className="welcomeImg" />
                </div>

                <h2 className="slideTitle">What is Ionic?</h2>
                <p className="slideText">
                  <b>Ionic Framework</b> is an open source SDK that enables
                  developers to build high quality mobile apps with web
                  technologies like HTML, CSS, and JavaScript.
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
                    src={DeporteImg}
                    alt="Deporte IMG"
                    className="welcomeImg"
                  />
                </div>

                <h2 className="slideTitle">What is Ionic Appflow?</h2>
                <p className="slideText">
                  <b>Ionic Appflow</b> is a powerful set of services and
                  features built on top of Ionic Framework that brings a totally
                  new level of app development agility to mobile dev teams.
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
                    src={DeporteImg}
                    alt="Deporte IMG"
                    className="welcomeImg"
                  />
                </div>

                <h2 className="slideTitle">Ready to Play?</h2>
                <IonButton fill="clear" className="welcome-btn continue-welcome-btn">Continue</IonButton>
              </div>
            </IonSlide>
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
