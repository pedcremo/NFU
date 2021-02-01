import React, { useContext, useState } from 'react';
import { AppContext } from '../State';
import { useHistory, useParams } from 'react-router-dom';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonCard,
    IonCardSubtitle,
    IonCardContent

} from '@ionic/react';
import './Home.css';
import { ellipsisVertical} from 'ionicons/icons';

import comments from '../data/comments.json';


const Comments: React.FC = () => {
    const [ message, setMessage ] = useState<React.ReactText | undefined>('');
    let { id }  = useParams();

    const imgStyle = {
        width: '50px'
    }


    const history = useHistory();
    const { state, dispatch } = useContext(AppContext);
    const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);
    let com = [];

    Object.entries(comments.comments).map((j, k) => {
        if (j[0] == id) com.push(j[1]);
    })

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle>Comments</IonTitle>
                    <IonButtons slot="end">
                        <IonButton fill="clear" onClick={e => { e.persist(); setShowUserMenuEvent(e) }}>
                            <IonIcon icon={ellipsisVertical} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
            <form  method="post" action="">
            <IonList>
            <IonItem>
                <IonInput placeholder = "Type your message" type="text" required value={message} onInput={e => setMessage(e.currentTarget.value)} />
            </IonItem>
            
            <IonButton expand="block" type="submit">{'Comment'}</IonButton>
            </IonList>
        </form>
        {
            com[0].map((j, k) => {
                return (<IonCard id = {j.id}>
                    <IonCardSubtitle>Date: {j.date}</IonCardSubtitle>
                    <IonCardSubtitle>Author: {j.author}
                    <img style = {imgStyle} src ="https://lh3.googleusercontent.com/proxy/XOyvYFyCDX8Ybfy7AoRBx7v79xg2VSlxnMJLCAtk7Z_rQSIeIgwm1Ko6VRJ_G5jwzU7tX6GStjQihv8bQew0Lyx9hUbgDGb-O3YQ2wkxds7nXp6QcIPKIW4lF9M1x6dVGZIJZ2SEz3M0PjzruzsiveTmOwfDVWEN"/>
                    </IonCardSubtitle>
                    <IonCardContent>
                        {j.body}
                    </IonCardContent>
                </IonCard>)
            })
        }
            </IonContent>
        </IonPage>
    );
};

export default Comments;
