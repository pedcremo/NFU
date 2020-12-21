import React from 'react';
import epgData from '../data/epg.json';
import {
  IonSlides,
  IonSlide,
  IonRow,  
  IonLabel,  
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent

} from '@ionic/react';
import './Epg.css';
import EpgRow from './EpgRow.js';

function prepareAndConquer(aPrograms){
  let daysGroups = new Map();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let newPrograms = aPrograms.map((pItem) => {
    let d=new Date(0);
    d.setUTCSeconds(pItem.spa.start);                          
      
    if (!daysGroups.has(weekday[d.getDay()])){
      daysGroups.set(weekday[d.getDay()],[]);
    }
    return (
      {...pItem,
        textDate:d.toLocaleString("es-ES",{}),
        dayOfweek:weekday[d.getDay()]
      } 
    )
  });

  // iterate over keys (vegetables)
  for (let dow of daysGroups.keys()) {
    daysGroups.set(dow,newPrograms.filter(i => i.dayOfweek == dow))      
  }
  debugger
  return daysGroups;
}

export default class Epg extends React.Component {

    constructor(props){
      super(props);      
      this.state = { 
        events: prepareAndConquer(Object.values(epgData.events).reverse()),
        name:epgData.name,
        title:epgData.title,
      };    
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
      //Ja vorem
    }
    handleClick(start,inc){
      alert("start:"+start+ " End:"+(start+inc));    
    }

    /*convertUTCtoDate(utcEpoch){
      //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' ,time:'numeric'};
      let d=new Date(0);
      d.setUTCSeconds(utcEpoch);                          
      return d.toLocaleString("es-ES",{});  
    }*/

    render() {
      console.log("render");
      const slideOpts = {
        slidesPerView: 'auto', 
        zoom: false, 
        grabCursor: true,       
        virtual: true, 
      };      
      return (
        <>
       
          <IonLabel className="my-label">{this.state.name} Title {this.state.title}</IonLabel> 
          
          {
          [...this.state.events.keys()].map((keyByDay) =>            
            (<EpgRow dayOfWeek={keyByDay} events={this.state.events.get(keyByDay)} />)
          )
          }  
        </>
       
      );
    }
}