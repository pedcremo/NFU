import React, { useContext, useState } from "react";
import {
  IonContent,
  IonModal,
  IonHeader,
  IonPage,
  IonLoading,
  IonTitle,
  IonToolbar,
  IonToast,
  IonIcon,
  IonButton,
  IonLabel,
} from "@ionic/react";

import {
  compass,
  alarm,
  logoWhatsapp,
  mapOutline,
  mapSharp,
  compassSharp,
} from "ionicons/icons";
import { useParams } from "react-router";
import { trash } from "ionicons/icons";
import instalations from "../data/dataInstalaciones.json";
import Author from "../components/author/Author";
import { Link, Redirect, useHistory } from "react-router-dom";
import { AppContext } from "../State";
import Header from "../components/header/HeaderComponent";
import NFUComments from "../components/Comment/NFUComments";

import "./details.css";
import MyModal from "../components/modal/MyModal";

const Details = () => {
  const instalaciones = Object.values(instalations);
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const [showLoading, setShowLoading] = useState(false);
  const [showToastDeleted, setShowToastDeleted] = useState(false);
  const history = useHistory();

  //get id URL
  const { id } = useParams();
  const events_array = Object.values(state.events);
  //get event by id
  // eslint-disable-next-line
  let event = events_array.find((event) => event.id == id);
  if (!event) return <Redirect to="/app/home" />;

  let players = Object.values(event.p);
  const comments = event.comments;

  if (!state.user) {
    return <Redirect to="/login" />;
  }

  let goInstalation = (city) => {
    let pista = instalaciones.filter((pista) => pista.ubication == city);

    if (pista[0]) {
      return "/app/instalacion/" + pista[0].id;
    } else {
      return "/app/instalaciones";
    }
  };


  let deleteEvent = () => {
    if (state.user.username === event.author.username) {
      let eventsPush = events_array.filter((e) => e.id !== event.id);
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        dispatch({ type: "SET_EVENTS", value: eventsPush });
        history.push("/app/home");
        setShowToastDeleted(true);
      }, 1500);
    }
  };

  function handleClick(type) {
    switch (type) {
      case "was":
        // http://localhost:3000/app/event/${event.id}
        let mensaje = `
          *¡Nos Falta Uno!*
          ${event.title}
          _${event.description}_
        `;
        console.log("Id del evento: ", event.id);
        console.log(event);
        //"http://localhost:3000/app/event/"+event.id          // "```<img href='"+event.image+"'/>```" +
        window.open(
          "https://api.whatsapp.com/send?text=" +
            encodeURIComponent(mensaje) +
            " https://www.youtube.com/watch?v=KIeAvaZYxig"
        );

        break;
    }
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
              <span
                className="remove-event-btn"
                onClick={() => deleteEvent()}
                style={{
                  display:
                    state.user.username === event.author.username
                      ? "block"
                      : "none",
                }}
              >
                DELETE
                <IonIcon icon={trash} />
              </span>
              <div className="event-card-image-badges">
                <span
                  className="share-content badge-details badge-details-icon"
                  onClick={() => handleClick("was")}
                >
                  <IonIcon icon={logoWhatsapp} />
                </span>
                {/* <span className="share-content badge-details badge-details-icon" onClick={()=>handleClick("disc")}>
                <IonIcon icon={logoDiscord} />             
                </span> */}
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
                  style={{
                    display:
                      state.user.events_joined.indexOf(event.id) > -1
                        ? "none"
                        : "block",
                  }}
                  className="event-card-content-left-join"
                  color="success"
                  onClick={() =>
                    dispatch({ type: "SET_JOIN", value: event.id })
                  }
                >
                  JOIN
                </IonButton>
                <IonButton
                  style={{
                    display:
                      state.user.events_joined.indexOf(event.id) > -1
                        ? "block"
                        : "none",
                  }}
                  className="event-card-content-left-join"
                  color="success"
                  onClick={() =>
                    dispatch({ type: "REMOVE_JOIN", value: event.id })
                  }
                >
                  REMOVE JOIN
                </IonButton>
              </div>

              <div className="event-card-content-right">
                <span className="event-card-content-right-title">
                  PLAYERS {event.players + "/" + event.maxplayers}
                </span>
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
                <span className="event-card-content-right-title">MAPA</span>
                <p
                  className="mapsDetails"
                  onClick={() => {
                    let newCoordinates = {
                      lat: event.coordinates.lat,
                      lng: event.coordinates.lng,
                    };
                    dispatch({
                      type: "ALL_COORDINATES",
                      value: newCoordinates,
                    });
                    setShowModal(true);
                  }}
                ></p>
                <span className="event-card-content-right-title">
                  INSTALATIONS
                </span>
                <div className="event-card-content-right-players">
                  <Link className="link" to={goInstalation(event.location.city)}>
                    <div className="cardContent__operation--icon ">
                      <IonButton>
                        <IonIcon
                          icon={compassSharp}
                          className="eventContent__actions--icon"
                        />&nbsp;&nbsp;
                        GO INSTALATIONS 
                      </IonButton>
                    </div>
                  </Link>
                </div>
              </div>
              <NFUComments comments={comments} gameID={event.id} />
              {/* MODAL */}
              <IonModal isOpen={showModal}>
                <MyModal></MyModal>
                <IonButton onClick={() => setShowModal(false)}>
                  Close Map
                </IonButton>
              </IonModal>

              {/* END MODAL */}
            </div>
          </div>
        </div>
        <IonLoading isOpen={showLoading} message={"Deleting event"} />
        <IonToast
          isOpen={showToastDeleted}
          onDidDismiss={() => setShowToastDeleted(false)}
          message="Event has been deleted correctly"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Details;
