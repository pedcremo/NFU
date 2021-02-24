import { IonIcon } from "@ionic/react";
import React, { useContext } from "react";
import "./ButtonLink.css";
import { Link } from "react-router-dom";
import {
  chevronForward
} from "ionicons/icons";
import { AppContext } from '../../State';
interface dispatchObj {
  type: string,
  value: any
}

const ButtonLink: React.FC<{ link: string; text: string; icon: any; changeState?: dispatchObj; }> = ({
  link,
  text,
  icon,
  changeState
}) => {
  const { dispatch } = useContext(AppContext);
  return (
    // <div className="ButtonLink__Container">
      <Link to={link} className="ButtonLink__Container" onClick={() => changeState ? dispatch({type: changeState.type ,value: changeState.value}) : null}>
        <IonIcon style={{ color: "primary", fontSize: "1.5rem" }} icon={icon} />
        <p>{text}</p>
        <IonIcon style={{ color: "grey", fontSize: "1.5rem" }} icon={chevronForward} />
      </Link>
    // </div>
  );
};
export default ButtonLink;
