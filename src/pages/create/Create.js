import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton, IonLabel, IonInput,IonItem,IonCheckbox,IonSelect, IonSelectOption, IonDatetime } from '@ionic/react';
import { person, compass, alarm,star } from 'ionicons/icons';
import { useParams } from "react-router";

import './create.css';
const Create= () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Añadir Evento</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Añadir evento</IonTitle>
          </IonToolbar>
        </IonHeader>
        <section className="add-event">
          <h1>Añade un evento</h1>
          <form className="add-event-form">
            <IonItem>
              <IonLabel position="floating">Nombre del evento</IonLabel>
              <IonInput />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Jugadores totales</IonLabel>
              <IonInput type="number" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Jugadores que necesitas</IonLabel>
              <IonInput type="number" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Ubicación</IonLabel>
              <IonInput type="test" />
              <IonLabel position="floating">City</IonLabel>
              <IonInput type="text" />
              <IonLabel position="floating">State</IonLabel>
              <IonInput type="text" />
              <IonLabel position="floating">Zip Code</IonLabel>
              <IonInput type="number" />
            </IonItem>
            <IonItem>
              <IonLabel>Selecciona una categoria</IonLabel>
              <IonSelect value="gaming">
                <IonSelectOption value="gaming">Gaming</IonSelectOption>
                <IonSelectOption value="deportes">Deportes</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Cuando es el evento?</IonLabel>
              <IonDatetime value="2021-10-01T15:43:40.394Z" display-timezone="utc">

              </IonDatetime>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Solo gente cerca de mi</IonLabel>
              <IonCheckbox defaultChecked={true} slot="start" />
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block">
              AÑADIR
            </IonButton>
          </form>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Create;
