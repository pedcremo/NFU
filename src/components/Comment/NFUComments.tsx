import React, { useState, useContext } from 'react';
import './CommentList.css'
import {
    IonButton,
    IonToast,
    IonItem,
    IonInput

} from '@ionic/react';
import { useHistory } from "react-router-dom";

import NFUCommentList from './NFUCommentList'
import { AppContext } from '../../State';
import { useTranslation } from "react-i18next";


type CommentProps = {
    comments: any[],
    gameID: number
}

const NFUComments: React.FC<CommentProps> = (props) => {
    const history = useHistory();
    const [message, setMessage] = useState<React.ReactText | undefined>('');
    const { state,dispatch } = useContext(AppContext);
    const [showToastComment, setShowToastComment] = useState(false);
    const { t } = useTranslation();
    const event = Object.keys(state.events).map(key => state.events[key]).find((event) => event.id == props.gameID); 
    const addComment = async (e) => {
        setShowToastComment(true);
        e.preventDefault();
        try {  
          event.comments.push({
            id: Math.floor(Math.random() * 1010),
            title: state.user.username,
            author: state.user,
            body: message,
            date: new Date().toLocaleString()
          })

          setTimeout(() => {
            dispatch({ type: "SET_EVENTS", value: state.events });
          }, 500);
        } catch (e) {
          console.log("fail");
        }
    }

    return (
        <>
            <form method="post" onSubmit={addComment} className="form_add_comment">
                <IonItem className="form_add_comment--input">
                    <IonInput placeholder={t('Comments.type')} type="text" required value={message} onInput={e => { state.user? setMessage(e.currentTarget.value): history.push('/login')}} />
                </IonItem>
                <IonButton expand="block" type="submit" className="form_add_comment--button">{t('Comments.send_comment')}</IonButton>
            </form>
            <NFUCommentList comments={props.comments} gameID = {props.gameID}/>
            <IonToast
                isOpen={showToastComment}
                onDidDismiss={() => setShowToastComment(false)}
                message="Comment added"
                duration={2000}
                color = "success"
                position = "bottom"
            />
        </>
    );
};

export default NFUComments;
