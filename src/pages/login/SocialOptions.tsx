import { IonImg, IonLabel, IonItem } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './SocialOptions.css';
import GoogleIcon from "../../assets/img/google_icon.svg";
import FacebookIcon from "../../assets/img/facebook_icon.svg";

const SocialOptions: React.FC = () => {
  const history = useHistory();
  return (
    <div className="loginOptionsContainer">
      <IonItem className="socialOption socialOption--google">
        <IonImg src={GoogleIcon} alt="GoogleIcon" className="socialIcon" />
        <IonLabel className="socialOption--google-label">Continue with Google</IonLabel>
      </IonItem>
      <IonItem className="socialOption socialOption--facebook">
        <IonImg src={FacebookIcon} alt="FacebookIcon" className="socialIcon" />
        <IonLabel className="socialOption--facebook-label">Continue with Facebook</IonLabel>
      </IonItem>
      <IonItem className="socialOption socialOption--local" onClick={() => history.push('login/local')}>
        <IonLabel className="socialOption--local-label">Continue with Email</IonLabel>
      </IonItem>
    </div>
  );

}
export default SocialOptions;