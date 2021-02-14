import React, { useContext, useState } from 'react';
import {IonHeader, IonContent, IonToolbar, IonTitle} from '@ionic/react';
// import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from '../maps/mapContainer';
import { AppContext } from '../../State';

const Modal = () =>{
  const { state,dispatch } = useContext(AppContext);

  return (
    <>
      <IonHeader>
         <IonToolbar color="primary">
           <IonTitle>Location of event</IonTitle>
         </IonToolbar>
       </IonHeader>
       <IonContent className="ion-padding">
         <MapContainer coordinates = {state.coordinates} user_coordinates = {state.user_coordinates} action="details"></MapContainer>
       </IonContent>
    </>

  );
};

export default Modal;
