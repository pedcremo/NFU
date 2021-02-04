
// import React from 'react';
// import events from '../../data/data.json';
// import './event.css';
// import Event from './Event.js';

// export default class EventList extends React.Component {

//     constructor(props){
//       super(props);      
//       this.state = { 
//         events: events.events,
//       };
//     }

  
//     render() {
//       console.log("render");
//       console.log(this.state.events)
//       const events_array = Object.values(this.state.events);
//       return (
//         <>
//           <div>MENU</div>
//           <div className="events">
//           {
//               events_array.map((event,index,arr) =>
//                   (<Event className="event" key={index} item={event} ></Event>)            
//                   // (<EpgRow key={index} dayOfWeek={keyByDay} events={this.state.events.get(keyByDay)} />)
//               )
//             }  
//           </div>
//         </>
       
//       );
//     }
// }

import React from 'react';
import events from '../../data/data.json';
import EventsPreview from './EventsPreview.js';

import {
  IonList,
  IonLabel

} from '@ionic/react';
import './eventList.css';

export default class EventList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: Object.values(events.events),
    };
  }

  componentDidMount() {
    //Ja vorem
  }

  render() {
    console.log(this.state.events);
    return (
      <>
      {/* <hr/> */}
        {/* <div className="titleLabelCanvas">
          <IonLabel className="titleLabel">Centers</IonLabel>
        </div> */}
        <IonList className="eventsList">
          {this.state.events.map((events, index) => (
            console.log(events),
            <EventsPreview key={"event_" + index} event={events} />
          ))}

        </IonList>
      </>
    );
  }
}