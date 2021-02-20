import { IonImg,IonLabel } from '@ionic/react';
import React from 'react';
import './AppTitle.css';
import icon from '../../assets/img/nfu_icon.png'


const AppTitle: React.FC = () => {

  return (

    <div className="LoginTitleContainer">
      <IonImg src={icon} alt="icon" />
      <IonLabel className="LoginTitle">Nos Falta Uno</IonLabel>
    </div>


  );

}
export default AppTitle;