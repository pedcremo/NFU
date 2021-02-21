import React, { useContext, useState } from "react";
import "./Notifications.css";
import { useTranslation } from "react-i18next";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonItemSliding,
  IonIcon,
  IonItemOption,
  IonItemOptions,
  IonList,
  IonToast,
} from "@ionic/react";

import Header from "../../components/header/HeaderComponent";
import { checkmark, close } from "ionicons/icons";
import { AppContext } from "../../State";
import EventsPreview from "../../components/Event/EventsPreview";

const Notifications: React.FC = () => {
  const { t } = useTranslation();
  const { state } = useContext(AppContext);

  const [showToast, setShowToast] = useState(false);
  const [toastMode, setToastMode] = useState(false);

  const ACCEPTED = "Perfect! Invitation accepted";
  const DENIED = "Not for you! Invitation denied";

  return (
    <IonPage>
      <Header page={t("pages.notifications")} />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList className="eventsList">
          {Object.values(state.events).map((event, index) => (
            <IonItemSliding
              key={"item" + index}
              className="fit  ion-no-padding  primary--bg"
            >
              <IonItem className="ion-no-padding  primary--bg">
                <EventsPreview key={"event_" + index} event={event as any} />
              </IonItem>
              <IonItemOptions
                className="ion-no-padding  primary--bg"
                side="end"
              >
                <IonItemOption color="primary" onClick={() => {setToastMode(true); setShowToast(true)}}>
                  <IonIcon
                    style={{ fontSize: "2rem" }}
                    color="light"
                    icon={checkmark}
                  />
                </IonItemOption>
              </IonItemOptions>
              <IonItemOptions className="danger--bg" side="start">
                <IonItemOption color="danger" onClick={() => {setToastMode(false); setShowToast(true)}}>
                  <IonIcon
                    style={{ fontSize: "2rem" }}
                    color="light"
                    icon={close}
                  />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMode ? ACCEPTED : DENIED}
          duration={3000}
          mode="ios"
          color={toastMode ? "success" : "danger"}
        />
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
