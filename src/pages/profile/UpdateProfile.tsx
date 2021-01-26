import React, { useContext } from 'react';
import { AppContext } from '../../State';
import { useHistory, Redirect } from 'react-router-dom';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonDatetime
} from '@ionic/react';

import './UpdateProfile.css';


const UpdateProfile = () => {

  const { state,dispatch } = useContext(AppContext);


  if (!state.user) {   
      return <Redirect to="/" /> 
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Update profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Update profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <section className="update-profile">
          <h1>UPDATE PROFILE</h1>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default UpdateProfile;