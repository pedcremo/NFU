import React, { useContext, useState } from "react";
import { AppContext } from "../../State";

import {
  peopleOutline,
  locationOutline,
  timeOutline,
  heartOutline,
  enterOutline,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import { IonCard, IonIcon, IonLabel } from "@ionic/react";
import "./eventsPreview.css";

const EventsPreview = (props) => {
  const { state, dispatch } = useContext(AppContext);

  const event = props;
  return (
    <IonCard className="eventCard">
      <div className="eventContent">
        <div className="eventContent__left">
          <img src={event.event.image} alt="Ion Card img" />
        </div>
        <div className="eventContent__right">
          <IonLabel className="eventTitle">{event.event.title}</IonLabel>
          <span className="eventLocation">
            <IonIcon icon={locationOutline} className="playersIcon" />
            {event.event.location.country} - {event.event.location.postalcode} -{" "}
            {event.event.location.city}
          </span>
          <div className="eventInfo">
            <div className="eventInfo--option badge badge-green">
              <span className="badge-icon">
                <IonIcon icon={timeOutline} className="playersIcon" />
              </span>
              <span>{event.event.time}</span>
            </div>
            <div className="eventInfo--option badge badge-blue">
              <span className="badge-icon">
                <IonIcon icon={peopleOutline} className="playersIcon" />
              </span>
              <span>{event.event.players}</span>
            </div>
          </div>
        </div>
        <div className="eventContent__actions">
          <div className="eventContent__actions--option option1">
            <IonIcon
              icon={heartOutline}
              className="eventContent__actions--icon"
              onClick={ (e) =>  e.target.className= e.target.className.includes("liked") ? e.target.className.replace(" liked", "") : e.target.className += " liked" }
            />
          </div>
          <Link to={"/app/event/" + event.event.id}>
            <div className="eventContent__actions--option option2">
              <IonIcon
                icon={enterOutline}
                className="eventContent__actions--icon"
              />
            </div> 

          </Link>
        </div>
        <div className="shadowMobileCard"></div>
      </div>
    </IonCard>
  );
};

export default EventsPreview;

