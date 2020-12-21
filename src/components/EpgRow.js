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
        
        <IonRow>
        <IonLabel className="my-label">{props.dayOfWeek}</IonLabel> 
        <IonSlides  options={slideOpts}>
        {props.events.map((eventEPG,index) => (
         <IonSlide key={index} 
          onClick={ 
            () => handleClick(eventEPG.spa.start,eventEPG.spa.duration) 
            } 
        >
          <IonCard key={'col_'+index}>
          <IonCardHeader>
            <IonCardSubtitle>{eventEPG.textTime}</IonCardSubtitle>
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