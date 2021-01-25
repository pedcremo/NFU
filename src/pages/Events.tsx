import React,{useContext} from 'react';
import { AppContext } from '../State';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EventList from '../components/Event/Event_List';
import './Events.css';
import { Redirect } from 'react-router-dom';

const Events: React.FC = () => {
  const { state } = useContext(AppContext);
  
  if (!state.user) {
    return <Redirect to="/login" /> 
  }
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
        <EventList />
      </IonContent>
    </IonPage>
  );
};

export default Events;
