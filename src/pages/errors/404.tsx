import React from "react";
import {
    IonContent,
    IonPage,
    IonImg,
    IonLabel
} from "@ionic/react";
import { Link } from "react-router-dom";

import "./404.css";

const Error404: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className="error404">
              <IonImg className="image404" src={require('../../img/errors/404.png') } />
              <Link to="/app/home" slot="end" className="error_home">
              <IonLabel>Go Home</IonLabel>
            </Link>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Error404;