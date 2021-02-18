import { IonIcon, IonText } from "@ionic/react";
import React from "react";
import "./Sports.css";
import {
  tennisball,
  basketball,
  football,
  gameController,
} from "ionicons/icons";
import { useTranslation } from "react-i18next";

const Sports: React.FC<{ sportsList: string[] }> = ({ sportsList }) => {
  const { t } = useTranslation();

  if (!sportsList) {
    return (
      <div className="Sports">
        <IonText>
          <h5 style={{color: "white"}}>{t("profile.no_sports")}</h5>
        </IonText>
      </div>
    );
  }

  const sports = sportsList?.map((sport, i) => {
    let icon;
    switch (sport) {
      case "tennis":
        icon = tennisball;
        break;

      case "basket":
        icon = basketball;
        break;

      case "football":
        icon = football;
        break;

      case "cs GO":
        icon = gameController;
        break;
    }
    return (
      <IonIcon
        key={sport}
        size="large"
        style={{ color: "white", marginLeft: "0.6rem" }}
        icon={icon}
      />
    );
  });
  return <div className="Sports">{sports}</div>;
};
export default Sports;
