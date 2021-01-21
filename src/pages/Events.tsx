import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Event_List from '../components/Event/Event_List';
import './Events.css';

const Events: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EVENTS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">EVENTS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Event_List></Event_List>
      </IonContent>
    </IonPage>
  );
};

export default Events;
