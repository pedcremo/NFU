// React, Ionic
import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
} from "@ionic/react";
import {
  arrowBackOutline,
  shareSocial,
  heart,
  ellipsisVertical,
  location,
  people,
  barbell,
  calendar,
  star,
} from "ionicons/icons";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";

// Components
import Author from "../components/author/Author";

// Data
import events from "../data/data.json";
import "./details.css";

const Details = () => {
  // Get id in params
  const { id } = useParams();

  // Convert events json
  const events_array = Object.values(events.events);

  // Search id in json
  let event = events_array.find((event) => event.id == id);

  // Get players event
  let players = Object.values(event.p);

  console.log(id);
  console.log(event);
  console.log(players);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{event.title} Event</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="mierda" fullscreen>
        {/* FONDO */}
        <div
          className="event-image"
          style={{ backgroundImage: `url(${event.image})` }}
        >
          <div className="tools">
            <div className="container-1">
              <IonIcon className="icon" icon={arrowBackOutline} />
            </div>
            <div className="container-2">
              <IonIcon className="icon" icon={heart} />
              <IonIcon className="icon" icon={shareSocial} />
              <IonIcon className="icon" icon={ellipsisVertical} />
            </div>
          </div>
        </div>

        {/* LOCATION */}
        <div className="event-locations">
          <IonIcon className="icon" icon={location} />
          <p>{event.location.country},</p>
          <p>{event.location.postalcode}</p>
          <p>{event.location.city}</p>
        </div>

        {/* TITULO */}
        <h1 className="event-title">{event.title}</h1>

        {/* DESCRIPCION */}
        <div className="event-description">{event.description}</div>

        {/* PROPIETARIO */}
        <div className="event-creator">
          <img className="event-creator-image" src={event.author.image} />
          <div class="event-creator-name">
            <strong>{event.author.username}</strong>
            <div class="event-creator-name-rate">
              <IonIcon className="icon" icon={star} />
              <p>{event.author.rate}/10</p>
            </div>
          </div>
        </div>

        {/* JUGADORES */}
        <hr className="event-player-separation"></hr>
        <div className="event-player">
          {players.map((player, index, arr) => (
            <div key={index} className="event-player-informacion">
              <img src="https://picsum.photos/id/237/200/300"></img>
              <strong>{player}</strong>
            </div>
          ))}
        </div>

        {/* INFORMACION */}
        <div className="event-informacion">
          <div className="event-feature">
            <IonIcon className="icon" icon={barbell} />
            <p>
              <strong>Categoria</strong>
            </p>
            <p>{event.type}</p>
          </div>
          <div className="event-feature">
            <IonIcon className="icon" icon={calendar} />
            <p>
              <strong>Fecha</strong>
            </p>
            <p>{event.time}</p>
          </div>
        </div>

        {/* CONTROL */}
        <div className="event-control">
          <div className="event-player-num">
            <IonIcon className="icon" icon={people} />
            <p>
              <span>{event.players}</span>/{event.maxplayers}
            </p>
          </div>
          <button>Apuntarse</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Details;
