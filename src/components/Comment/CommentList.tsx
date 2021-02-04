import React, { useContext, useState } from 'react';
import { AppContext } from '../../State';

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
                                <img style={imgStyle} src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" />
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
