import React, { useContext, useState } from 'react';
import {IonHeader, IonContent, IonToolbar, IonTitle} from '@ionic/react';
// import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from '../maps/mapContainer';
import { AppContext } from '../../State';

const Modal = () =>{
  const { state,dispatch } = useContext(AppContext);

  console.log("MODAL")

  return (
    <>
      <IonHeader>
         <IonToolbar color="primary">
           <IonTitle>Location of event</IonTitle>
         </IonToolbar>
       </IonHeader>
       <IonContent className="ion-padding">
         <MapContainer lat = {state.lat} lng = {state.lng}></MapContainer>
       </IonContent>
    </>

  );
};

export default Modal;


// class MyModal extends React.Component {

//   render() {
//     return <>
//       <IonHeader>
//         <IonToolbar color="primary">
//           <IonTitle>Location of event</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent className="ion-padding">
//         <MapContainer></MapContainer>
//       </IonContent>
//     </>
//   };

// }

// export default MyModal;