import React from 'react';
import { person, compass, alarm,star } from 'ionicons/icons';
import {  
    IonCard,
    IonIcon,
} from '@ionic/react';
import './author.css'

const Author = (props) =>{

    const author = props.item;
    return (
        <>
          <div className="authorinfo-left">
            <img src={author.image}/>
          </div>
          <div className="authorinfo-right">
              <span className="authorinfo-right-username">{author.username}</span>
              <span className="authorinfo-right-bio">{author.bio}</span>
              <span className="authorinfo-right-rate"><span className="authorinfo-right-rate-icon"><IonIcon icon={star}/></span> {author.rate}/10</span>
          </div>
        </>
    )
}

export default Author;