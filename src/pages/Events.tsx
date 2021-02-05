import React,{useContext} from 'react';
import { AppContext } from '../State';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import EventList from '../components/Event/Event_List';
import './Events.css';
import { Redirect } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/Footer/Footer';

const Events: React.FC = () => {
  const { state } = useContext(AppContext);
  
  if (!state.user) {
    return <Redirect to="/login" /> 
  }
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>EVENTS</IonTitle>
        </IonToolbar>
      </IonHeader> */}
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
