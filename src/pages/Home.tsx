import React,{useContext, useState} from 'react';
import { AppContext } from '../State';
import { Redirect } from 'react-router-dom';

import { 
  IonContent, 
  IonPage, 
  IonModal,
  IonButton,
} from '@ionic/react';
import './Home.css';
import EventList from '../components/Event/Event_List';
// import { ellipsisVertical } from 'ionicons/icons';

import MyModal from '../components/modal/MyModal';
import data from '../data/data.json';

import Header from '../components/header/header';


const Home: React.FC = () => {
  // const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const { state,dispatch } = useContext(AppContext);
  // const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);

  // const doLogout = useCallback(async () => {    
  //   setShowUserMenuEvent(null);
  //   dispatch({type:'LOGOUT'});        
  // }, [dispatch]);  


  // // Update profile button
  // const updateProfile = () => {
  //   setShowUserMenuEvent(null);
  //   history.push("/app/profile/update") 
  // }
  
  if (!state.user) {   
    return <Redirect to="/" /> 
  }

  return (
    <IonPage>
      <Header page="Home"/>
      <IonContent fullscreen> 
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

        <EventList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
