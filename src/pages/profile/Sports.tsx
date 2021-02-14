import { IonIcon, IonText } from "@ionic/react";
import React from "react";
import "./Sports.css";
import {
  tennisball,
  basketball,
  football,
  gameController,
} from "ionicons/icons";

const Sports: React.FC<{ sportsList: string[] }> = ({ sportsList }) => {
  if (!sportsList) {
    return (
      <div className="Sports">
        <IonText color="primary">No tienes deportes seleccionados aún</IonText>
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
