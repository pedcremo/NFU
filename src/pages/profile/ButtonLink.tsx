import { IonIcon } from "@ionic/react";
import React, { useContext } from "react";
import { AppContext } from '../../State';
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
  const { state , dispatch } = useContext(AppContext);

  return (
      <Link onClick={() => dispatch({type:'SET_SEGMENT',value: "yours"})} to={link} className="ButtonLink__Container">
        <IonIcon style={{ color: "primary", fontSize: "1.5rem" }} icon={icon} />
        <p>{text}</p>
        <IonIcon style={{ color: "grey", fontSize: "1.5rem" }} icon={chevronForward} />
      </Link>
  );
};
export default ButtonLink;
