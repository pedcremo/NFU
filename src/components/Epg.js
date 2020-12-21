import React from 'react';
import epgData from '../data/epg.json';
import {
  IonSlides,
  IonSlide,
  IonContent,
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
      daysGroups.set(weekday[d.getDay()] + ' ' + d.toLocaleDateString("es-ES",{}),[]);
    }
    return (
      {...pItem,
        textDate:d.toLocaleDateString("es-ES",{}),
        textTime:d.getHours()+":"+d.getMinutes()+":"+d.getSeconds(),
        dayOfweek:weekday[d.getDay()] + ' ' + d.toLocaleDateString("es-ES",{})
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
    }

  
    render() {
      console.log("render");
      
      return (
        <>
       
          <IonLabel className="my-label">{this.state.name} Title {this.state.title}</IonLabel> 
          
          {
          [...this.state.events.keys()].map((keyByDay,index) =>            
            (<EpgRow key={index} dayOfWeek={keyByDay} events={this.state.events.get(keyByDay)} />)
          )
          }  
        </>
       
      );
    }
}