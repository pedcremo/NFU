import React, {useContext} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {AppContext} from '../State';

const Tab1: React.FC = () => {
  const { stateGlobal,dispatch } = useContext(AppContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1 {stateGlobal.user}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1dd</IonTitle>
            
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" >
         
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
