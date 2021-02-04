import { IonIcon } from "@ionic/react";
import React from "react";
import "./ButtonLink.css";

import { Link } from "react-router-dom";

const ButtonLink: React.FC<{ link: string; text: string; icon: any }> = ({
  link,
  text,
  icon,
}) => {
  return (
    <Link to={link}>
      <div className="ButtonLink__Container">
        <div className="ButtonLink">
          <IonIcon style={{ color: "white", fontSize: "1.7rem" }} icon={icon} />
        </div>
        <p>{text}</p>
      </div>
    </Link>
  );
};
export default ButtonLink;
