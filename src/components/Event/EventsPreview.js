import React from 'react';
import { peopleOutline, locationOutline, timeOutline, heartOutline, enterOutline, cashOutline } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import {
  IonCard,
  IonIcon,
} from '@ionic/react';
import './eventsPreview.css';

const EventsPreview = (props) =>{
    const event = props

    console.log(event);

    // function enterEvent(id){
    //     history.push("/app/event/"+id);
    // }


    return (
        <IonCard className="eventCard">
            <div className="eventContent" routerLink={'/app/event/'+event.id}>
                <div className="eventContent__left">
                <img src={event.event.image} alt="Ion Card img" />
                </div>
                <div className="eventContent__right">
                <span className="eventTitle">{event.event.title}</span>
                <span className="eventLocation"><IonIcon icon={locationOutline} className="playersIcon" />{event.event.location.country} - {event.event.location.postalcode} - {event.event.location.city}</span>
                <div className="eventInfo">
                    <div className="eventInfo--option badge badge-green">
                    <span className="badge-icon"><IonIcon icon={timeOutline} className="playersIcon" /></span>
                    <span>{event.event.time}</span>
                    </div>
                    <div className="eventInfo--option badge badge-blue">
                    <span className="badge-icon"><IonIcon icon={peopleOutline} className="playersIcon" /></span>
                    <span>{event.event.players}</span>
                    </div>
                </div>
                </div>
                <div className="eventContent__actions">
                    <div className="eventContent__actions--option option1">
                        <IonIcon icon={heartOutline} className="eventContent__actions--icon" />
                    </div>
                    <div className="eventContent__actions--option option2">
                        <IonIcon icon={enterOutline} className="eventContent__actions--icon" />
                    </div>
                    </div>
                <div className="shadowMobileCard"></div>
            </div>
        </IonCard>

    );
}

export default EventsPreview