import React from 'react';
import { star } from 'ionicons/icons';
import {  
    IonIcon,
} from '@ionic/react';
import './author.css'

const Author = (props) =>{

    const author = props.item;
    return (
        <>
          <div className="authorinfo-left">
            <img src={author.image} alt="" />
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