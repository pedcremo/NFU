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

import { compass, alarm, logoWhatsapp } from "ionicons/icons";
import { useParams } from "react-router";
import instalations from "../data/dataInstalaciones.json";
import Author from "../components/author/Author";
import { Redirect } from "react-router-dom";
import { AppContext } from "../State";
import Header from "../components/header/HeaderComponent";
import NFUComments from "../components/Comment/NFUComments";

import "./details.css";
import MyModal from "../components/modal/MyModal";

const Details = () => {
  const instalaciones = Object.values(instalations);
  const all = instalaciones.map((pista) => {
    const all = pista;
    return all;
  });

  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  //get id URL
  const { id } = useParams();
  const events_array = Object.values(state.events);
  //get event by id
  // eslint-disable-next-line
  let event = events_array.find((event) => event.id == id);
  //get players event

  let players = Object.values(event.p);
  const comments = event.comments;
  // const { state } = useContext(AppContext);
  console.log(event);
  console.log("IFFFFFFFFFF");

  // console.log(all);
  // const elements =  all.forEach((element) => {
  //   const elements = element;
  //   return elements;
  // });

  // console.log(elements);
  console.log(event.location.city);
  if (event.location.city == all[0].ubication || all[1].ubication || all[3].ubication) {
    console.log("emtra");
    console.log(all[1].id)
    
  }

  if (!state.user) {
    return <Redirect to="/login" />;
  }

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
                  className="event-card-content-left-join"
                  color="success"
                >
                  JOIN
                </IonButton>
              </div>

              <div className="event-card-content-right">
                <span className="event-card-content-right-title">
                  PLAYERS {event.players}/{event.maxplayers}
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
                <span className="event-card-content-right-title"> MAP</span>
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
                  INSTALATION
                </span>
                <div className="event-card-content-right-players">
                  <IonButton href={"/app/instalaciones/"}>
                    GO INSTALATION
                  </IonButton>
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
      </IonContent>
    </IonPage>
  );
};

export default Details;
