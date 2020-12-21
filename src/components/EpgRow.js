import React from 'react';

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

const EpgRow = (props) =>{
    const slideOpts = {
        slidesPerView: 'auto', 
        zoom: false, 
        grabCursor: true,       
        virtual: true, 
      }; 

     function handleClick(start,inc){
        alert("start:"+start+ " End:"+(start+inc));    
      }

    return (
        <>
        <IonLabel className="my-label">{props.dayOfweek}</IonLabel> 
        <IonRow>
        
        <IonSlides  options={slideOpts}>
        {props.events.map((eventEPG,index) => (
         <IonSlide key={index} 
          onClick={ 
            () => handleClick(eventEPG.spa.start,eventEPG.spa.duration) 
            } 
        >
          <IonCard key={'col_'+index}>
          <IonCardHeader>
            <IonCardSubtitle>{eventEPG.dayOfweek + ' ' + eventEPG.textDate}</IonCardSubtitle>
            <IonCardTitle>{eventEPG.spa.name}</IonCardTitle>
          </IonCardHeader>

          {/*<IonCardContent>
            {eventEPG.spa.ext && eventEPG.spa.ext.text}
          </IonCardContent> */}
        </IonCard>
          </IonSlide> 
        ))}
      </IonSlides>
      </IonRow>
          </>
    )
}

export default EpgRow;