import React from 'react';
import {IonHeader, IonContent, IonToolbar, IonTitle} from '@ionic/react';
// import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from '../maps/mapContainer';

class MyModal extends React.Component {

  render() {
    return <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Location of event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <MapContainer></MapContainer>
      </IonContent>
    </>
  };

}

export default MyModal;