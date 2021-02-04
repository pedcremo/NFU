import { IonIcon } from "@ionic/react";
import React from "react";
import "./Sports.css";
import {
  tennisball,
  basketball,
  football,
  gameController,
} from "ionicons/icons";

const Sports: React.FC<{ sportsList: string[] }> = ({ sportsList }) => {
  const sports = sportsList.map((sport) => {
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
    return <IonIcon size="large" style={{ color: "white", marginLeft: "0.6rem" }} icon={icon} />;
  });
  return <div className="Sports">{sports}</div>;
};
export default Sports;
