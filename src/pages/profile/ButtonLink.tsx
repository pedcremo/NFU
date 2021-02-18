import { IonIcon } from "@ionic/react";
import React from "react";
import "./ButtonLink.css";
import { Link } from "react-router-dom";
import {
  chevronForward
} from "ionicons/icons";

const ButtonLink: React.FC<{ link: string; text: string; icon: any }> = ({
  link,
  text,
  icon,
}) => {
  return (
    // <div className="ButtonLink__Container">
      <Link to={link} className="ButtonLink__Container">
        <IonIcon style={{ color: "grey", fontSize: "1.5rem" }} icon={icon} />
        <p>{text}</p>
        <IonIcon style={{ color: "grey", fontSize: "1.5rem" }} icon={chevronForward} />
      </Link>
    // </div>
  );
};
export default ButtonLink;
