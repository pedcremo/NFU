import React, { useState, useEffect } from "react";
import events from "../../data/data.json";
import EventsPreview from "./EventsPreview.js";
import event_model from "./Event.model.js";
import { IonList, IonSearchbar } from "@ionic/react";
import "./eventList.css";

const EventList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([event_model]);

  useEffect(() => {
    const allevents = Object.values(events.events);
    let tempSearchResult = allevents.filter((ele) => {
      let lowerCase = ele.title.toLowerCase();
      let searchToLowerCase = searchQuery.toLowerCase();
      return lowerCase.includes(searchToLowerCase)
    }
    );
    setFilteredSearch([...tempSearchResult]);
  }, [searchQuery]);

  return (
    <>
      <IonSearchbar
        value={searchQuery}
        onIonChange={(e) => setSearchQuery(e.detail.value!)}
      ></IonSearchbar>
      <IonList className="eventsList">
        {filteredSearch.map((event, index) => (
          <EventsPreview key={"event_" + index} event={event} />
        ))}
      </IonList>
    </>
  );
};

export default EventList;
