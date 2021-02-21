import React from "react";
import {
  peopleOutline,
  locationOutline,
  timeOutline,
  heartOutline,
  enterOutline,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { IonCard, IonIcon, IonLabel } from "@ionic/react";
import "./eventsPreview.css";
import { State } from "ionicons/dist/types/stencil-public-runtime";
type CommentProps = {
  comments: any[],
  gameID: number
}
type EventsPreviewProps = {
  event: {
    id: number,
    title: string,
    sport?: string,
    time: string,
    status: string,
    image: string,
    players: number,
    location: {
      city: string,
      country: string,
      postalcode: string
    },
    p: {},
    coordinates: {
      lat: number,
      lng: number
    },
    author: {
      username: string,
      image: string,
      bio: string,
      rate: string
    },
    comments: Array<CommentProps>

  }
}

const EventsPreview: React.FC<EventsPreviewProps> = (props) => {
  const event = props.event;
  const history = useHistory();

  const EVENT_DETAILS_PATH = '/app/event/';

  return (
    <IonCard className="eventCard">
      <div className="eventContent">
        <div className="eventContent__left" onClick={() => history.push(EVENT_DETAILS_PATH + event.id)}>
          <img src={event.image} alt="Ion Card img" />
        </div>
        <div className="eventContent__right" onClick={() => history.push(EVENT_DETAILS_PATH + event.id)}>
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
              <span>{event.players}</span>
            </div>
          </div>
        </div>
        <div className="eventContent__actions">
          <div className="eventContent__actions--option option1">
            <IonIcon
              icon={heartOutline}
              className="eventContent__actions--icon"
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

  )
}

export default EventsPreview;