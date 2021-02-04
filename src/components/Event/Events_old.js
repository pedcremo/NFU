import React from 'react';
import events from '../../data/data.json';
import './event.css';
import Event from './Event_old.js';

export default class EventList extends React.Component {

    constructor(props){
      super(props);      
      this.state = { 
        events: events.events,
      };
    }

  
    render() {
      console.log("render");
      console.log(this.state.events)
      const events_array = Object.values(this.state.events);
      return (
        <>
          <div>MENU</div>
          <div className="events">
          {
              events_array.map((event,index,arr) =>
                  (<Event className="event" key={index} item={event} ></Event>)            
                  // (<EpgRow key={index} dayOfWeek={keyByDay} events={this.state.events.get(keyByDay)} />)
              )
            }  
          </div>
        </>
       
      );
    }
}