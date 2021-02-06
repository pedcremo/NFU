import React from 'react';
import { pinSharp, heartOutline, enterOutline } from 'ionicons/icons';

import {
  
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from '@ionic/react';
import './Instalaciones_preview.css';


const InstalacionesPreview = (props) => {

  const Props = props;

   let eventClick = (event_id) =>{
       //alert(event_id);    
    }

  return (
    <IonCard className="cardList"  onClick={() => eventClick(Props.info.id)} routerLink={'/app/instalacion/'+Props.info.id}>
      <section className="cardContent">
        <article className="cardContent__left">
          <img src={Props.info.imagen} alt="img" />
        </article>
        <article className="cardContent__right">
          <IonCardTitle>{Props.info.name}</IonCardTitle>
          <IonCardSubtitle className="cardContent__ubications"><IonIcon icon={pinSharp} className="playersIcon" />{Props.info.ubication}</IonCardSubtitle>
          <IonCardContent>

            <IonIcon icon={heartOutline} className="cardContent__operation--icon " />&nbsp; &nbsp; &nbsp;
            <IonIcon icon={enterOutline} className="cardContent__operation--icon "  />

          </IonCardContent>

        </article>

      </section>
    </IonCard>
  );

}


export default InstalacionesPreview;