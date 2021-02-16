import React, { useState, useEffect, useContext } from "react";
import { AppContext } from '../../State';
import events from "../../data/data.json";
import EventsPreview from "./EventsPreview.js";
import event_model from "./Event.model.js";
import { IonList, IonSearchbar, IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import "./eventList.css";

const EventList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([event_model]);
  const [segment, setSegment] = useState("joined");
  const [yourEvents, setYourEvents] = useState([event_model]);
  
  const { state } = useContext(AppContext);

  useEffect(() => {
    // Joined events
    const joinedevents = Object.values(events.events);
    let tempSearchResult = joinedevents.filter((ele) => {
      let lowerCase = ele.title.toLowerCase();
      let searchToLowerCase = searchQuery.toLowerCase();
      return lowerCase.includes(searchToLowerCase)
    });
    setFilteredSearch([...tempSearchResult]);


    // User events
    const yourevents = Object.values(events.events);
    const example = [yourevents[0], yourevents[1]];
    let tempYourEvents = example.filter((ele) => {
      let lowerCase = ele.title.toLowerCase();
      let searchToLowerCase = searchQuery.toLowerCase();
      return lowerCase.includes(searchToLowerCase)
    });
    setYourEvents([...tempYourEvents]);


    // You are following
    const followingevents = Object.values(events.events);
    let tempFollowingEvents = followingevents.filter((ele) => {
      let lowerCase = ele.title.toLowerCase();
      let searchToLowerCase = searchQuery.toLowerCase();
      return lowerCase.includes(searchToLowerCase)
    });
    setFilteredSearch([...tempFollowingEvents]);

  }, [searchQuery]);


  // IonSegment
  let msg;
  if (segment === "joined") {
    msg = <IonList className="eventsList"  >
            {filteredSearch.map((event, index) => (
              <EventsPreview key={"event_" + index} event={event} />
            ))}
          </IonList>
  } else if (segment === "yours") {
    msg = <IonList className="eventsList"> 
            {yourEvents.map((event, index) => (
              <EventsPreview key={"event_" + index} event={event} />
            ))}
          </IonList>
  } else if (segment === "following") {
    msg = <IonList className="eventsList">
            {filteredSearch.map((event, index) => (
              <EventsPreview key={"event_" + index} event={event} />
            ))}
          </IonList>
  }

  return (
    <>
      <IonSearchbar
        value={searchQuery}
        onIonChange={(e) => setSearchQuery(e.detail.value!)}
      />

      {
        (state.user)?
          <IonSegment value={segment} onIonChange={e => setSegment(e.detail.value)}>
            <IonSegmentButton value="joined">
              <IonLabel>Games joined</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="yours">
              <IonLabel>Your games</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="following">
              <IonLabel>Following</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        :
          <></>
      }

      { msg }
    </>
  );
};

export default EventList;
