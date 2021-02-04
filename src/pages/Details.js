// React, Ionic
import React, { useContext, useState } from "react";
import {
  IonContent,
  IonModal,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
} from "@ionic/react";

import { compass, alarm, create, close } from "ionicons/icons";
import { useParams } from "react-router";
import events from "../data/data.json";
import Author from "../components/author/Author";
import { Redirect } from "react-router-dom";
import { AppContext } from "../State";
import Header from "../components/header/header";

import "./details.css";
import MyModal from "../components/modal/MyModal";

const Details = () => {
  //get id URL
  const { id } = useParams();
  const events_array = Object.values(events.events);
  //gfet event by id
  // eslint-disable-next-line
  let event = events_array.find((event) => event.id == id);
  //get players event

  let players = Object.values(event.p);
  console.log(event.p);
  // const { state } = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  if (!state.user) {
    return <Redirect to="/login" />;
  }

  return (
    <IonPage>
      <Header page={event.title + "#" + id}></Header>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{event.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="details-page">
          <div className="event-card">
            <div className="event-card-image">
              <img src={event.image} alt="" />
              <div className="event-card-image-badges">
                <span className="event-card-image-badges-time badge-details badge-details-blue">
                  <span className="badge-details-icon">
                    <IonIcon icon={alarm} />
                  </span>
                  <span>{event.time}</span>
                </span>
                <span className="event-card-image-badges-location badge-details badge-details-green">
                  <span className="badge-details-icon">
                    <IonIcon icon={compass} />
                  </span>
                  <span>{event.location.country}</span>
                </span>
                <span className="event-card-image-badges-location badge-details badge-details-green">
                  <span className="badge-details-icon">
                    <IonIcon icon={compass} />
                  </span>
                  <span>{event.location.postalcode}</span>
                </span>
                <span className="event-card-image-badges-location badge-details badge-details-green">
                  <span className="badge-details-icon">
                    <IonIcon icon={compass} />
                  </span>
                  <span>{event.location.city}</span>
                </span>
                <div className="UD_buttons">
                  <span>
                  <IonButton>
                      <IonIcon icon={create} />
                    </IonButton>
                  </span>
                  <span>
                    <IonButton>
                      <IonIcon icon={close} />
                    </IonButton>
                  </span>
                </div>
              </div>
            </div>
            <div className="event-card-content">
              <div className="event-card-content-left">
                <span className="event-card-content-left-title">
                  {event.title}
                </span>
                <span className="event-card-content-left-desc">
                  {event.description}
                </span>
                <div className="event-card-content-left-authorinfo">
                  <Author
                    className="event"
                    key={event.id}
                    item={event.author}
                  ></Author>
                </div>
                <IonButton
                  className="event-card-content-left-join"
                  color="success"
                >
                  JOIN
                </IonButton>
              </div>
              <div className="event-card-content-right">
                <span className="event-card-content-right-title">PLAYERS</span>
                <div className="event-card-content-right-players">
                  {players.map((player, index, arr) => (
                    <div key={index} className="player">
                      <img
                        src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
                        alt=""
                      />
                      <span>{player}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL */}
        <IonModal isOpen={showModal}>
          <MyModal></MyModal>
          <IonButton onClick={() => setShowModal(false)}>Close Map</IonButton>
        </IonModal>
        <p
          className="maps"
          onClick={() => {
            let newCoordinates = {
              lat: event.coordinates.lat,
              lng: event.coordinates.lng,
            };
            dispatch({ type: "ALL_COORDINATES", value: newCoordinates });
            setShowModal(true);
          }}
        ></p>

        {/* END MODAL */}
      </IonContent>
    </IonPage>
  );
};

export default Details;
