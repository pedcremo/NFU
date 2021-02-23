import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../State";
import EventsPreview from "./EventsPreview";
import event_model from "./Event.model.js";
import {
  IonList,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  // IonCheckbox,
  IonIcon,
  IonRadioGroup,
  IonInput,
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
    time: null, 
    available_players: "",
    max_players: "",
    busy_players: "",
  });

  const { state, dispatch } = useContext(AppContext);

  // Function to filter events, receives events and applies state filters.
  function filterEvents(events) {
    let eventsFiltred = [...events];
    console.log(eventsFiltred)
    // We filter by valuation.
    eventsFiltred = eventsFiltred.filter(
      (event) => event.author.rate > filters.valuation
    );

    // We filter by search.
    eventsFiltred = eventsFiltred.filter((event) =>
      event.title.toLowerCase().includes(filters.search.toLowerCase())
    );

    // We filter by available players.
    eventsFiltred = eventsFiltred.filter((event) => {
      if (
        event.maxplayers - event.p.length ===
        parseInt(filters.available_players)
      )
        return event;
      else if (filters.available_players === "") return event;
    });

    // We filter by max players.
    eventsFiltred = eventsFiltred.filter((event) => {
      if (event.maxplayers === parseInt(filters.max_players)) return event;
      else if (filters.max_players === "") return event;
    });

    // We filter by busy players.
    eventsFiltred = eventsFiltred.filter((event) => {
      if (event.p.length === parseInt(filters.busy_players)) return event;
      else if (filters.busy_players === "") return event;
    });

    // We filter by date.
    eventsFiltred = eventsFiltred.filter((event) => {
      let eventDate = new Date(event.time);
      let filterDate = new Date(filters.date);
      if (
        eventDate.getDay() +
          "/" +
          eventDate.getMonth() +
          "/" +
          eventDate.getFullYear() ===
        filterDate.getDay() +
          "/" +
          filterDate.getMonth() +
          "/" +
          filterDate.getFullYear()
      )
        return event;
      else if (filters.date == null) return event;
    });

    // We filter by time.
    eventsFiltred = eventsFiltred.filter((event) => {
      let eventDate = new Date(event.time);
      let filterDate = new Date(filters.time);
      if (eventDate.getHours() === filterDate.getHours()) return event;
      else if (filters.time == null) return event;
    });

    return eventsFiltred;
  }

  useEffect(() => {
    // Select option from global state
    setSegment(state.segment);

    switch (state.segment) {
      case "recent":
        // Recent events
        const tempSearchResult = filterEvents(Object.values(state.events));
        setFilteredSearch([...tempSearchResult]);
        break;
    
      case "yours":
        // User events
        const tempYourEvents = filterEvents(
          Object.values(state.events).filter((event: typeof event_model) => state.events_joined.indexOf(event.id) > -1)
        );
        setFilteredSearch([...tempYourEvents]);
        break;

      case "favorited":
        // Favorited events
        const tempFavoriteEvents = filterEvents(
          Object.values(state.events).filter((event: typeof event_model) => state.likes.includes(event.id))
        );
        setFilteredSearch([...tempFavoriteEvents]);
        break;
    }
    console.log(state.events_joined);
  }, [filters, state]);

  return (
    <>
      <div className="filters-panel">
        <IonButton
          onClick={() => setFilterPanel(true)}
          style={{ display: filterPanel ? "none" : "block" }}
        >
          {t("home.events.filters.button.open")}
        </IonButton>
        <IonButton
          onClick={() => setFilterPanel(false)}
          style={{ display: filterPanel ? "block" : "none" }}
        >
          {t("home.events.filters.button.hide")}
        </IonButton>
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

      <div
        style={{ height: filterPanel ? "350px" : "0px" }}
        className="filters-container"
      >
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
            <IonLabel className="header-label">
              {t("home.events.filters.stars")}
            </IonLabel>
            <IonItem>
              <IonLabel>
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                {t("home.events.filters.more")}
              </IonLabel>
              <IonRadio slot="start" color="success" value="1"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                {t("home.events.filters.more")}
              </IonLabel>
              <IonRadio slot="start" color="success" value="2"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                {t("home.events.filters.more")}
              </IonLabel>
              <IonRadio slot="start" color="success" value="3"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={starOutline} />
                {t("home.events.filters.more")}
              </IonLabel>
              <IonRadio slot="start" color="success" value="4"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                <IonIcon color="warning" slot="start" icon={star} />
                {t("home.events.filters.more")}
              </IonLabel>
              <IonRadio slot="start" color="success" value="5"></IonRadio>
            </IonItem>
          </IonRadioGroup>
        </IonItem>
        <div className="filter-item">
          <IonItem className="filter-subitem">
            <IonLabel>{t("home.events.filters.available_players")}</IonLabel>
            <IonInput
              value={filters.available_players}
              placeholder={t("home.events.filters.number")}
              onIonChange={(e) =>
                setFilter((prevFilters) => ({
                  ...prevFilters,
                  available_players: e.detail.value,
                }))
              }
            ></IonInput>
          </IonItem>

          <IonItem className="filter-subitem">
            <IonLabel>{t("home.events.filters.max_players")}</IonLabel>
            <IonInput
              value={filters.max_players}
              placeholder={t("home.events.filters.number")}
              onIonChange={(e) =>
                setFilter((prevFilters) => ({
                  ...prevFilters,
                  max_players: e.detail.value,
                }))
              }
            ></IonInput>
          </IonItem>

          <IonItem className="filter-subitem">
            <IonLabel>{t("home.events.filters.busy_players")}</IonLabel>
            <IonInput
              value={filters.busy_players}
              placeholder={t("home.events.filters.number")}
              onIonChange={(e) =>
                setFilter((prevFilters) => ({
                  ...prevFilters,
                  busy_players: e.detail.value,
                }))
              }
            ></IonInput>
          </IonItem>
        </div>

        <div className="filter-item">
          <IonItem className="filter-subitem">
            <IonLabel>{t("home.events.filters.date")}</IonLabel>
            <IonDatetime
              displayFormat="YY-MM-DD"
              placeholder={t("home.events.filters.date_select")}
              value={filters.date}
              onIonChange={(e) =>
                setFilter((prevFilters) => ({
                  ...prevFilters,
                  date: e.detail.value,
                }))
              }
            ></IonDatetime>
          </IonItem>

          <IonItem className="filter-subitem">
            <IonLabel>{t("home.events.filters.time")}</IonLabel>
            <IonDatetime
              displayFormat="HH"
              placeholder={t("home.events.filters.time_select")}
              value={filters.time}
              onIonChange={(e) =>
                setFilter((prevFilters) => ({
                  ...prevFilters,
                  time: e.detail.value,
                }))
              }
            ></IonDatetime>
          </IonItem>
        </div>
      </div>
      {state.user ? (
        <IonSegment
          value={segment}
          onIonChange={(e) => {
            setSegment(e.detail.value);
            dispatch({ type: "SET_SEGMENT", value: e.detail.value });
          }}
        >
          <IonSegmentButton value="recent">
            <IonLabel>{t("home.segments.recent")}</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value="yours">
            <IonLabel>{t("home.segments.yours")}</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value="favorited">
            <IonLabel>{t("home.segments.favorited")}</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      ) : (
        <></>
      )}

      <IonList className="eventsList">
        {filteredSearch.map((event, index) => (
          <EventsPreview key={"event_" + index} event={event} />
        ))}
      </IonList>
    </>
  );
};

export default EventList;
