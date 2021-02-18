import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../State";
import events from "../../data/data.json";
import EventsPreview from "./EventsPreview.js";
import event_model from "./Event.model.js";
import {
  IonList,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonCheckbox,
  IonIcon,
  IonRadioGroup,
  IonListHeader,
  IonRadio,
  IonDatetime,
  IonButton,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import { starOutline, star } from "ionicons/icons";
import "./eventList.css";

const EventList = () => {
  const [filterPanel, setFilterPanel] = useState(Boolean);
  const [filteredSearch, setFilteredSearch] = useState([event_model]);
  const [segment, setSegment] = useState("");
  const [yourEvents, setYourEvents] = useState([event_model]);
  const { t } = useTranslation();
  const [filters, setFilter] = useState({
    search: "",
    valuation: "1",
    date: null,
    players: null,
  });

  const { state, dispatch } = useContext(AppContext);

  // Function to filter events, receives events and applies state filters.
  function filterEvents(events) {
    let eventsFiltred = [...events];

    // We filter by valuation.
    eventsFiltred = eventsFiltred.filter(
      (event) => event.author.rate > filters.valuation
    );

    // We filter by search.
    eventsFiltred = eventsFiltred.filter((event) =>
      event.title.toLowerCase().includes(filters.search.toLowerCase())
    );

    return eventsFiltred;
  }

  useEffect(() => {
    setSegment(state.segment);
    // Joined events
    const tempSearchResult = filterEvents(Object.values(events.events));
    setFilteredSearch([...tempSearchResult]);

    // User events
    const yourevents = Object.values(events.events);
    const tempYourEvents = filterEvents([yourevents[0], yourevents[1]]);
    setYourEvents([...tempYourEvents]);

    // You are following
    const tempFollowingEvents = filterEvents(Object.values(events.events));
    setFilteredSearch([...tempFollowingEvents]);
  }, [filters]);

  // IonSegment
  let msg;
  if (segment === "joined") {
    msg = (
      <IonList className="eventsList">
        {filteredSearch.map((event, index) => (
          <EventsPreview key={"event_" + index} event={event} />
        ))}
      </IonList>
    );
  } else if (segment === "yours") {
    msg = (
      <IonList className="eventsList">
        {yourEvents.map((event, index) => (
          <EventsPreview key={"event_" + index} event={event} />
        ))}
      </IonList>
    );
  } else if (segment === "following") {
    msg = (
      <IonList className="eventsList">
        {filteredSearch.map((event, index) => (
          <EventsPreview key={"event_" + index} event={event} />
        ))}
      </IonList>
    );
  }

  return (
    <>
    <div className="filters-panel">
      <IonButton onClick={() => setFilterPanel(true)} style={{display: (filterPanel ? 'none' : 'block')}}>Más filtros</IonButton>
      <IonButton onClick={() => setFilterPanel(false)} style={{display: (filterPanel ? 'block' : 'none')}}>Ocultar filtros</IonButton>
      <IonSearchbar
        placeholder={t("home.events.search.placeholder")}
        value={filters.search}
        onIonChange={(e) =>
          setFilter((prevFilters) => ({
            ...prevFilters,
            search: e.detail.value,
          }))
        }
      />
    </div>
      
      <div style={{height: (filterPanel ? '350px' : '0px')}} className="filters-container">
        <IonItem className="filter-item">
          <IonRadioGroup
            value={filters.valuation}
            onIonChange={(e) =>
              setFilter((prevFilters) => ({
                ...prevFilters,
                valuation: e.detail.value,
              }))
            }
          >
            <IonLabel className="header-label">Valoracion de Usuario</IonLabel>
            <IonItem>
              <IonLabel>
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />o mas
              </IonLabel>
              <IonRadio slot="start" color="success" value="1"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />o mas
              </IonLabel>
              <IonRadio slot="start" color="success" value="2"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />o mas
              </IonLabel>
              <IonRadio slot="start" color="success" value="3"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={starOutline} />o mas
              </IonLabel>
              <IonRadio slot="start" color="success" value="4"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />o mas
              </IonLabel>
              <IonRadio slot="start" color="success" value="5"></IonRadio>
            </IonItem>
          </IonRadioGroup>
        </IonItem>
        {/* <IonItem className="filter-item">
              <IonLabel>Por fecha</IonLabel>
            <IonDatetime
              displayFormat="MM/DD/YY"
              placeholder="Select Date"
              value={filters.date}
              onIonChange={(e) =>
              setFilter((prevFilters) => ({
                ...prevFilters,
                date: e.detail.value,
              }))
            }
            ></IonDatetime>
          </IonItem> */}
      </div>
      {state.user ? (
        <IonSegment
          value={segment}
          onIonChange={(e) => {
            setSegment(e.detail.value);
            dispatch({ type: "SET_SEGMENT", value: e.detail.value });
          }}
        >
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
      ) : (
        <></>
      )}

      {msg}
    </>
  );
};

export default EventList;
