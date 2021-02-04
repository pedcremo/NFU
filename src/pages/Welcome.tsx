import React, { useContext } from 'react';
// import { AppContext } from '../State';
import { IonButton, IonContent, IonIcon, IonPage, IonSlide, IonSlides } from '@ionic/react';
import './Welcome.css';
import icon from '../assets/img/icono.png'

// import { Redirect } from 'react-router-dom';

const Welcome: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen className="welcome-page-content" scroll-y="false">
        <div className="welcome-page-content">
          <IonSlides>

            <IonSlide>
              <div className="slide">

                <div className="WelcomeAppTitleContainer">
                  <img src={icon} alt="icon" />
                  <span className="AppTitle">Nos Falta Uno</span>
                </div>
                <h2>Welcome</h2>
                <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
              </div>
            </IonSlide>

            <IonSlide>
              <img src="./slide-2.png" />
              <h2>What is Ionic?</h2>
              <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>
            </IonSlide>

            <IonSlide>
              <img src="./slide-3.png" />
              <h2>What is Ionic Appflow?</h2>
              <p><b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
            </IonSlide>

            <IonSlide>
              <img src="./slide-4.png" />
              <h2>Ready to Play?</h2>
              <IonButton fill="clear">Continue <IonIcon slot="end" name="arrow-forward"></IonIcon></IonButton>
            </IonSlide>

          </IonSlides>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Welcome;
