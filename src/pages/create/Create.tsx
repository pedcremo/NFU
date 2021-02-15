import React, { useContext } from 'react';
import { AppContext } from '../../State';
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
  IonDatetime,
  IonMenuButton,
  IonButtons
} from '@ionic/react';
import { Redirect } from 'react-router-dom';
import './create.css';
import { useTranslation } from 'react-i18next';

const Create= () => {
  const { state } = useContext(AppContext);
  const { t } = useTranslation();

  if (!state.user) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>{t ('create.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t ('create.title')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <section className="add-event">
          <h1>{t ('create.add')}</h1>
          <form className="add-event-form">
            <IonItem>
              <IonLabel position="floating">{t ('create.name')}</IonLabel>
              <IonInput />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">{t ('create.players')}</IonLabel>
              <IonInput type="number" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">{t ('create.needplayers')}</IonLabel>
              <IonInput type="number" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">{t ('create.location')}</IonLabel>
              <IonInput type="text" />
              <IonLabel position="floating">{t ('create.city')}</IonLabel>
              <IonInput type="text" />
              <IonLabel position="floating">{t ('create.province')}</IonLabel>
              <IonInput type="text" />
              <IonLabel position="floating">{t ('create.postal')}</IonLabel>
              <IonInput type="number" />
            </IonItem>
            <IonItem>
              <IonLabel>{t ('create.category')}</IonLabel>
              <IonSelect value="gaming">
                <IonSelectOption value="gaming">{t ('create.gaming')}</IonSelectOption>
                <IonSelectOption value="deportes">{t ('create.sport')}</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>{t ('create.when')}</IonLabel>
              <IonDatetime
                value="2021-10-01T15:43:40.394Z"
                display-timezone="utc"
              ></IonDatetime>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>{t ('create.only')}</IonLabel>
              <IonCheckbox defaultChecked={true} slot="start" />
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block">
            {t ('create.submit')}
            </IonButton>
          </form>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Create;
