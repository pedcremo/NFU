import React, { useContext, useState } from "react";
import { pinSharp } from "ionicons/icons";
import { IonContent, IonPage, IonIcon, IonCard, IonModal, IonButton } from "@ionic/react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import data from "../data/dataInstalaciones.json";
import { Redirect } from "react-router-dom";
import { AppContext } from "../State";
import MyModal from "../components/modal/MyModal";

import "./instalacion.css";
import Header from "../components/header/HeaderComponent";

import Footer from "../components/Footer/Footer";

const Instalacion: React.FC = () => {
  //get id URL
  const { id } = useParams() as {
    id: string;
  };
  const instalaciones_ar = Object.values(data);
  const instalacion = instalaciones_ar.find(
    (instalacion) => instalacion.id === id
  );
  console.log(instalacion);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  console.log("************************")
  console.log(instalacion.coordinates)

  return (
    <IonPage>
      <Header page={instalacion.name}></Header>
      <IonContent fullscreen>
        <section className="details-page">
          <article className="detail">
            <article className="detail-image">
              <img src={instalacion.imagen} alt="img" />
              <article
                className="detail-image-icons"
                onClick={() => {
                  let newCoordinates = {
                    lat: instalacion.coordinates.lat,
                    lng: instalacion.coordinates.lng,
                  };
                  dispatch({
                    type: "ALL_COORDINATES",
                    value: newCoordinates,
                  });
                  setShowModal(true);
                }}
              >
                <span className="detail-image-icons-location icon-details icon-details-green">
                  <span className="icon-details-icon">
                    <IonIcon icon={pinSharp} />
                  </span>
                  <h5>{instalacion.ubication}</h5>
                </span>
              </article>
            </article>

            <article className="detail-content">
              <article className="detail-content-left">
                <span className="detail-content-left-title">
                  {t("instalation.title")}
                </span>
                <article className="pistas_grid">
                  {instalacion.pistas.map((pista) => (
                    <IonCard className="lista">
                      <a href="/app/create" className="minimodal">
                        CREAR EVENTO
                      </a>
                      <div className="lista-image">
                        <img alt="img" src={pista.Imagen} />
                      </div>
                      <div className="lista-content">
                        <h3 className="lista-content-title">{pista.Nombre}</h3>
                      </div>
                    </IonCard>
                  ))}
                </article>
              </article>
            </article>
          </article>
        </section>

        <IonModal isOpen={showModal}>
          <MyModal></MyModal>
          <IonButton onClick={() => setShowModal(false)}>Close Map</IonButton>
        </IonModal>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Instalacion;
