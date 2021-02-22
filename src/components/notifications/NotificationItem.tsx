import React, { useContext, useEffect, useState } from "react";
import "./Notification.css";
import { useTranslation } from "react-i18next";

import {
  IonText,
} from "@ionic/react";

type NotificationItemProps = {
  message: string;
  date: string;
  read: boolean;
};

const NotificationItem: React.FC<NotificationItemProps> = (props) => {
  const { message, date, read } = props;
  return (
    <div className="card">
      <IonText className={`notiText ${read && "readed"}`}>{message}</IonText>
      <IonText className="notiDate">{date}</IonText>
    </div>
  );
};

export default NotificationItem;
