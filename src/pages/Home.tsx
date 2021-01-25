import React,{useContext,useState, useCallback} from 'react';
import { AppContext } from '../State';
import { useHistory } from 'react-router-dom';

import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonPopover,
  IonList,
  IonItem,
  IonLabel, 
  IonButtons,
  IonButton,
  IonIcon 
} from '@ionic/react';

import './Home.css';
import EventList from '../components/Event/Event_List';
import { Redirect } from 'react-router-dom';
import { ellipsisVertical } from 'ionicons/icons';

const Home: React.FC = () => {
  const history = useHistory();
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
              <IonItem onClick={e => {e.preventDefault();doLogout()} } detail={true} href="">
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
        <EventList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
