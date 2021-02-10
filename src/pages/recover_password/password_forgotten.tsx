import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import { IonContent, IonInput, IonPage, IonLoading } from "@ionic/react";

import "./password_forgotten.css";
import icon from "../../assets/img/icono.png";

import { useTranslation } from "react-i18next";

const PasswordForgotten: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<React.ReactText | undefined>("");
  const [, setFormErrors] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const formRef = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowLoading(true);
      //Here send email with unique token.
      setTimeout(() => {
        window.location.href = "/recover/" + email;
        setShowLoading(false);
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
          message={t("recover_password.loading")}
          onDidDismiss={() => setShowLoading(false)}
        />
        <div className="recoverPageContent">
          <div className="recoverTitleContainer">
            <img src={icon} alt="icon" />
            <span className="recoverTitle">{t("recover_password.title")}</span>
          </div>
          <span className="recoverText">
            {t("recover_password.description")}
          </span>
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
                  title="Email"
                  type="email"
                  required
                  value={email}
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  className="inputFieldrecover"
                  placeholder="Email"
                />
              </div>
              <button
                className="recoverOption recoverOption--submit"
                type="submit"
                id="btnrecover"
                title="button_recover"
              >
                {t("recover_password.button")}
              </button>
              <div
                className="recoverOption recoverOption--local recoverOption--create"
                onClick={() => history.goBack()}
              >
                {t("recover_password.back")}
              </div>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PasswordForgotten;
