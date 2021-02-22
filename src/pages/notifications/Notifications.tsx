import React, { useContext, useEffect, useState } from "react";
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
  IonButtons,
} from "@ionic/react";

import Header from "../../components/header/HeaderComponent";
import { checkmark, close, remove, trash } from "ionicons/icons";
import { AppContext } from "../../State";
import NotificationItem from "../../components/notifications/NotificationItem";

const Notifications: React.FC = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AppContext);

  const [showToast, setShowToast] = useState(false);
  const [toastMode, setToastMode] = useState(false);

  const ACCEPTED = "Perfect! Notification accepted";
  const DENIED = "Not for you! Notification denied";
  const REMOVED = "Maybe another day! Notification removed";

  const { user_notifications } = state;

  const readNotification = (notificationIndex: number) => {
    user_notifications[notificationIndex].read = !user_notifications[notificationIndex].read;
    dispatch({ type: "SET_USER_NOTIFICATIONS", value: user_notifications });
    setToastMode(user_notifications[notificationIndex].read);
    setShowToast(true);
  };

  const removeNotification = (notificationIndex: number) => {

  }

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
          {Object.values(state.user_notifications).map((noti: any, index) => (
            <IonItemSliding
              key={"item" + index}
              className={`fit  ion-no-padding ${noti.read ? "danger--bg" : "primary--bg"}`}
            >
              <IonItem className="ion-no-padding  primary--bg">
                <NotificationItem
                  message={noti.msg}
                  date={noti.date}
                  read={noti.read}
                />
              </IonItem>
              <IonItemOptions
                className={`ion-no-padding  ${noti.read ? "danger" : "primary"}`}
                side="start"
              >
                <IonItemOption
                  color={`${noti.read ? "danger" : "primary"}`}
                  onClick={() => readNotification(index)}
                >
                  <IonIcon
                    style={{ fontSize: "2rem" }}
                    color="light"
                    icon={noti.read ? close : checkmark}
                  />
                </IonItemOption>
              </IonItemOptions>
              <IonItemOptions
                className={"ion-no-padding  danger--bg"}
                side="end"
              >
                <IonItemOption
                  color="danger"
                  onClick={() => readNotification(index)}
                >
                  <IonIcon
                    style={{ fontSize: "2rem" }}
                    color="light"
                    icon={trash}
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
