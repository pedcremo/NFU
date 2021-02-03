import React, { useContext, useState } from 'react';
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
import { ellipsisVertical } from 'ionicons/icons';

type CommentProps = {
    comments: any[],
  }

const CommentList: React.FC<CommentProps> = (props) => {
    const [message, setMessage] = useState<React.ReactText | undefined>('');

    const imgStyle = {
        width: '50px'
    }

    const comments = props.comments;
    return (
        <>
            {
                comments.map((j, k) => {
                    return (<IonCard id={j.id}>
                        <IonCardSubtitle>Date: {j.date}</IonCardSubtitle>
                        <IonCardSubtitle>
                            <div>
                                <img style={imgStyle} src="https://lh3.googleusercontent.com/proxy/XOyvYFyCDX8Ybfy7AoRBx7v79xg2VSlxnMJLCAtk7Z_rQSIeIgwm1Ko6VRJ_G5jwzU7tX6GStjQihv8bQew0Lyx9hUbgDGb-O3YQ2wkxds7nXp6QcIPKIW4lF9M1x6dVGZIJZ2SEz3M0PjzruzsiveTmOwfDVWEN" />
                                <span>{j.author}</span>
                            </div>
                        </IonCardSubtitle>
                        <IonCardContent>
                            {j.body}
                        </IonCardContent>
                    </IonCard>)
                })
            }
        </>
    );
};

export default CommentList;
