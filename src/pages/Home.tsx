import React,{useContext,useState, useCallback} from 'react';
import { AppContext } from '../State';
import { useHistory } from 'react-router-dom';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonModal,
  IonPopover,
  IonList,
  IonItem,
  IonLabel, 
  IonButtons,
  IonButton,
  IonIcon 

} from '@ionic/react';
import './Home.css';
import Event_List from '../components/Event/Event_List';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { Redirect } from 'react-router-dom';
import { ellipsisVertical, removeCircleOutline } from 'ionicons/icons';

import MyModal from '../components/modal/MyModal';
import data from '../data/data.json';

const Home: React.FC = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const { state,dispatch } = useContext(AppContext);
  const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);
  
  const doLogout = useCallback(async () => {    
    setShowUserMenuEvent(null);
    dispatch({type:'LOGOUT'});        
  }, [dispatch, history]);  
  
  if (!state.user) {   
    //history.push("/");
    return <Redirect to="/" /> 
  }

  return (
    <IonPage>
     
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" onClick={e => { e.persist(); setShowUserMenuEvent(e) }}>
              <IonIcon icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>   
         <IonPopover
            event={showUserMenuEvent}
            isOpen={!!showUserMenuEvent}
            onDidDismiss={() => setShowUserMenuEvent(null)}>
          <IonContent>
            <IonList>
              <IonItem onClick={e => doLogout() } detail={true} href="">
                <IonLabel>LOGOUT</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>{state.user}</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
          </IonPopover>     
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1ded</IonTitle>
            
          </IonToolbar>
        </IonHeader>
        <Event_List></Event_List>

        <IonModal isOpen={showModal}>
        <MyModal></MyModal>
        <IonButton onClick={() => setShowModal(false)}>
            Close Map
        </IonButton>
      </IonModal>
      <p className="maps" onClick={() =>{
        // We take all the coordinates of the epg
        let events_array = Object.values(data);
        let events = Object.values(events_array[0])
        let coordinates = []

        events.map((event, index) =>{
            coordinates[index] = {
              "lat": event.coordinates.lat,
              "lng": event.coordinates.lng
            }});
            
        //We assign all the coordinates of the events in which the user is interested
        dispatch({type:'ALL_COORDINATES',value:coordinates});
        setShowModal(true)
      }}></p> 



      </IonContent>
    </IonPage>
  );
};

export default Home;
