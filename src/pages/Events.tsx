import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EventList from '../components/Event/Event_List';
import './Events.css';
import Header from '../components/header/HeaderComponent';
import Footer from '../components/Footer/Footer';

const Events: React.FC = () => {
  return (
    <IonPage>
      <Header page={"Events"} ></Header>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">EVENTS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EventList />
      </IonContent>
      <Footer/>
    </IonPage>
  );
};

export default Events;
