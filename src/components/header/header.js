import React, { useContext, useState } from 'react';
import { AppContext } from '../../State';
import { ellipsisVertical } from 'ionicons/icons';


import {  
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonPopover,
    IonContent,
    IonList,
    IonLabel,
    IonItem,
    IonMenuButton
} from '@ionic/react';
import './header.css'

const Header = (props) =>{
  const { state,dispatch } = useContext(AppContext);
  const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);

  const doLogout = async () => {  
    setShowUserMenuEvent(null);          
    dispatch({type:'LOGOUT'});
    window.location.reload();  
  };
  
  const page = props.page;
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>{page}</IonTitle>
            <IonButtons slot="end">
              <IonButton
                fill="clear"
                onClick={(e) => {
                  e.persist();
                  setShowUserMenuEvent(e);
                }}
              >
                <IonIcon icon={ellipsisVertical} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonPopover
          event={showUserMenuEvent}
          isOpen={!!showUserMenuEvent}
          onDidDismiss={() => setShowUserMenuEvent(null)}
        >
          <IonContent>
            <IonList>
              <IonItem
                onClick={(e) => {
                  e.preventDefault();
                  doLogout();
                }}
                detail={true}
                href=""
              >
                <IonLabel>LOGOUT</IonLabel>
              </IonItem>
              <IonItem detail={true} href="/profile">
                <IonLabel >{state.user}</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPopover>
      </>
    );
}

export default Header;