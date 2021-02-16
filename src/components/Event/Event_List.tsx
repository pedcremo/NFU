import React, { useState, useEffect, useContext } from "react";
import { AppContext } from '../../State';
import events from "../../data/data.json";
import EventsPreview from "./EventsPreview.js";
import event_model from "./Event.model.js";
import { IonList, IonSearchbar, IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import { useTranslation } from 'react-i18next';
import "./eventList.css";

const EventList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([event_model]);
  const [segment, setSegment] = useState("");
  const [yourEvents, setYourEvents] = useState([event_model]);
  const { t } = useTranslation();
  
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setSegment(state.segment);

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

  let set_segment = (value) => {
      dispatch({ type: "SET_SEGMENT", value: value });
      setSegment(value);
  }

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
        placeholder={t("home.events.search.placeholder")}
        value={searchQuery}
        onIonChange={(e) => setSearchQuery(e.detail.value!)}
      />

      {
        (state.user)?
          <IonSegment value={segment} onIonChange={e => set_segment(e.detail.value)}>

            <IonSegmentButton value="joined">
              <IonLabel>{t("home.segments.joined")}</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton value="yours">
              <IonLabel>{t("home.segments.yours")}</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton value="following">
              <IonLabel>{t("home.segments.following")}</IonLabel>
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
