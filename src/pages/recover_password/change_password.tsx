import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { alertCircleOutline } from "ionicons/icons";
import {
  IonContent,
  IonInput,
  IonPage,
  IonLoading,
  IonIcon,
} from "@ionic/react";

import "./password_forgotten.css";
import icon from "../../assets/img/icono.png";

const ChangePassword: React.FC = () => {
  const [password, setPassword] = useState<React.ReactText | undefined>("");
  let repeatpassword;
  const [, setFormErrors] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const formRef = useRef(null);
  let errors = document.getElementById("recoverError");

  const params = useParams();

  const setRepeatPassword = (event) => {
    repeatpassword = event;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowLoading(true);
      //Here send email with unique token.
      setTimeout(() => {
        // eslint-disable-next-line
        if (password == repeatpassword) {
          errors.style.display = "none";
          window.location.href = "/login";
        } else {
          errors.style.display = "flex";
          setShowLoading(false);
        }
      }, 2000);
    } catch (e) {
      setShowLoading(false);
      setFormErrors(e);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonLoading
          isOpen={showLoading}
          message={"Wait please..."}
          onDidDismiss={() => setShowLoading(false)}
        />
        <div className="recoverPageContent">
          <div className="recoverTitleContainer">
            <img src={icon} alt="icon" />
            <span className="recoverTitle">Change Password</span>
          </div>
          <span className="recoverText">
            Hello {params["token"]}, enter your new password.
          </span>
          <div id="recoverError" className="recoverError">
            <IonIcon icon={alertCircleOutline} /> Passwords do not match
          </div>
          <form
            onSubmit={handleSubmit}
            method="post"
            name="recover_form"
            ref={formRef}
            action=""
            className="recoverOptionsContainer_form"
          >
            <div className="recoverInputsContainer" id="localOps">
              <div className="recoverOption recoverOption--input">
                <IonInput
                  type="password"
                  required
                  value={password}
                  onInput={(e) => setPassword(e.currentTarget.value)}
                  className="inputFieldrecover"
                  placeholder="New Password..."
                />
              </div>
              <div className="recoverOption recoverOption--input">
                <IonInput
                  type="password"
                  required
                  value={repeatpassword}
                  onInput={(e) => setRepeatPassword(e.currentTarget.value)}
                  className="inputFieldrecover"
                  placeholder="Repeat Password"
                />
              </div>
              <button
                className="recoverOption recoverOption--submit"
                type="submit"
                id="btnrecover"
              >
                Change
              </button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ChangePassword;
