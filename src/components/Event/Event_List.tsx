import React, { useState, useEffect } from "react";
import events from "../../data/data.json";
import EventsPreview from "./EventsPreview.js";
import event_model from "./Event.model.js";
import { IonList, IonSearchbar, IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import "./eventList.css";

const EventList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([event_model]);
  const [segment, setSegment] = useState("yours");
  const [yourEvents, setYourEvents] = useState([event_model]);

  useEffect(() => {
    // All events
    const allevents = Object.values(events.events);
    let tempSearchResult = allevents.filter((ele) => {
      let lowerCase = ele.title.toLowerCase();
      let searchToLowerCase = searchQuery.toLowerCase();
      return lowerCase.includes(searchToLowerCase)
    }
    );
    setFilteredSearch([...tempSearchResult]);

    // User events
    const yourevents = Object.values(events.events);
    setYourEvents([yourevents[0]]);
  }, [searchQuery]);


  // IonSegment
  let msg;
  if(segment == "yours") {
    msg = <IonList className="eventsList">
            {yourEvents.map((event, index) => (
              <EventsPreview key={"event_" + index} event={event} />
            ))}
          </IonList>
  } else {
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
      ></IonSearchbar>

      <IonSegment defaultValue="yours" onIonChange={e => setSegment(e.detail.value)}>
        <IonSegmentButton  value="yours">
          <IonLabel>Your games</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="related">
          <IonLabel>Related</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      {msg}

    </>
  );
};

export default EventList;
