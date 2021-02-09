import React, { useContext, useState } from 'react';
import { AppContext } from '../../State';
import './CommentList.css'
import {
    IonButton,
    IonIcon,
    IonCard,
    IonCardSubtitle,
    IonCardContent,
    IonCardHeader,
    IonCardTitle

} from '@ionic/react';
import { trash } from 'ionicons/icons';

type CommentProps = {
    comments: any[],
}

const CommentList: React.FC<CommentProps> = (props) => {
    const [message, setMessage] = useState<React.ReactText | undefined>('');
    const { state, dispatch } = useContext(AppContext);


    console.log(state);
    const imgStyle = {
        width: '50px'
    }

    const deleteComment = () => {
        console.log('hola');
    }

    const comments = props.comments;
    return (
        <>
            {
                comments.map((j, k) => {
                    return (<IonCard id={j.id}>
                        <IonCardHeader>
                            <IonCardSubtitle>{j.date}</IonCardSubtitle>
                            <IonCardTitle>
                                <div>
                                    <img style={imgStyle} src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" />
                                    <span className = "username">{j.author}</span>
                                </div>
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {j.body}
                        </IonCardContent>
                        <div></div>
                        <IonButton fill="clear" type="button" onClick = {deleteComment}><IonIcon icon={trash} /></IonButton>
                    </IonCard>)
                })
            }
        </>
    );
};

export default CommentList;
