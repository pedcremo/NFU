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
  const [segment, setSegment] = useState("all");
  const [yourEvents, setYourEvents] = useState([event_model]);
  
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    // All events
    const allevents = Object.values(events.events);
    let tempSearchResult = allevents.filter((ele) => {
      let lowerCase = ele.title.toLowerCase();
      let searchToLowerCase = searchQuery.toLowerCase();
      return lowerCase.includes(searchToLowerCase)
    });
    setFilteredSearch([...tempSearchResult]);

    // Related to you
    const relatedevents = Object.values(events.events);
    let tempRelatedEvents = relatedevents.filter((ele) => {
      let lowerCase = ele.title.toLowerCase();
      let searchToLowerCase = searchQuery.toLowerCase();
      return lowerCase.includes(searchToLowerCase)
    });
    setFilteredSearch([...tempRelatedEvents]);

    // User events
    const yourevents = Object.values(events.events);
    const example = [yourevents[0]];
    let tempYourEvents = example.filter((ele) => {
      let lowerCase = ele.title.toLowerCase();
      let searchToLowerCase = searchQuery.toLowerCase();
      return lowerCase.includes(searchToLowerCase)
    });
    setYourEvents([...tempYourEvents]);
  }, [searchQuery]);


  // IonSegment
  let msg;
  if (segment == "all") {
    msg = <IonList className="eventsList">
            {filteredSearch.map((event, index) => (
              <EventsPreview key={"event_" + index} event={event} />
            ))}
          </IonList>
  } else if (segment == "yours") {
    msg = <IonList className="eventsList">
            {yourEvents.map((event, index) => (
              <EventsPreview key={"event_" + index} event={event} />
            ))}
          </IonList>
  } else if (segment == "related") {
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

      {
        (state.user)?
          <IonSegment onIonChange={e => setSegment(e.detail.value)}>
            <IonSegmentButton value="all">
              <IonLabel>All games</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="yours">
              <IonLabel>Your games</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="related">
              <IonLabel>Related</IonLabel>
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
