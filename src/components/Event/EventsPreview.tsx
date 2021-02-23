import React, { useContext, useState } from "react";
import { AppContext } from "../../State";

import {
  peopleOutline,
  locationOutline,
  timeOutline,
  heartOutline,
  enterOutline,
} from "ionicons/icons";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { IonCard, IonIcon, IonLabel } from "@ionic/react";
import "./eventsPreview.css";
type CommentProps = {
  comments: any[];
  gameID: number;
};
type EventsPreviewProps = {
  event: {
    id: number;
    title: string;
    sport?: string;
    time: string;
    status: string;
    image: string;
    maxplayers: number;
    players: number;
    location: {
      city: string;
      country: string;
      postalcode: string;
    };
    p: Array<string>;
    coordinates: {
      lat: number;
      lng: number;
    };
    author: {
      username: string;
      image: string;
      bio: string;
      rate: string;
    };
    comments: Array<CommentProps>;
  };
};

const EventsPreview: React.FC<EventsPreviewProps> = (props) => {
  const event = props.event;
  const history = useHistory();

  const EVENT_DETAILS_PATH = "/app/event/";

  const { state, dispatch } = useContext(AppContext);

  let likes = (e, id) => {
    if (state.user) {
      let LikeIndex = state.likes.indexOf(id);
      console.log(state);

      if (e.target.className.includes("liked") && LikeIndex != -1) {
        e.target.className = e.target.className.replace(" liked", "");
        state.likes.splice(LikeIndex, 1);
      } else {
        e.target.className = e.target.className += " liked";
        state.likes.push(id);
      }
      dispatch({ type: "LIKES", value: state.likes });
    } else {
      history.push("/login");
    }
  };
  return (
    <IonCard className="eventCard">
      <div className="eventContent">
        <div
          className="eventContent__left"
          onClick={() => history.push(EVENT_DETAILS_PATH + event.id)}
        >
          <img src={event.image} alt="Ion Card img" />
        </div>
        <div
          className="eventContent__right"
          onClick={() => history.push(EVENT_DETAILS_PATH + event.id)}
        >
          <IonLabel className="eventTitle">{event.title}</IonLabel>
          <span className="eventLocation">
            <IonIcon icon={locationOutline} className="playersIcon" />
            {event.location.country} - {event.location.postalcode} -{" "}
            {event.location.city}
          </span>
          <div className="eventInfo">
            <div className="eventInfo--option badge badge-green">
              <span className="badge-icon">
                <IonIcon icon={timeOutline} className="playersIcon" />
              </span>
              <span>{event.time}</span>
            </div>
            <div className="eventInfo--option badge badge-blue">
              <span className="badge-icon">
                <IonIcon icon={peopleOutline} className="playersIcon" />
              </span>
              <span>{event.p.length + "/" + event.maxplayers}</span>
            </div>
          </div>
        </div>
        <div className="eventContent__actions">
          <div
            className={
              state.likes.includes(event.id)
                ? "eventContent__actions--option option1 liked"
                : "eventContent__actions--option option1"
            }
          >
            <IonIcon
              icon={heartOutline}
              className="eventContent__actions--icon"
              onClick={(e) => {
                likes(e, event.id);
              }}
            />
          </div>
          <Link to={EVENT_DETAILS_PATH + event.id}>
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
