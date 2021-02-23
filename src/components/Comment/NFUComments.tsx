import React, { useState, useContext } from 'react';
import './CommentList.css'
import {
    IonButton,
    IonToast,
    IonItem,
    IonInput

} from '@ionic/react';
import NFUCommentList from './NFUCommentList'
import { AppContext } from '../../State';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";


type CommentProps = {
    comments: any[],
    gameID: number
}

const NFUComments: React.FC<CommentProps> = (props) => {
    const [message, setMessage] = useState<React.ReactText | undefined>('');
    const { state,dispatch } = useContext(AppContext);
    const [showToastComment, setShowToastComment] = useState(false);
    const history = useHistory();
    const LOGIN_PATH = "/login";
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
                    <IonInput placeholder={t('Comments.type')} type="text" required value={message} onInput={e => {
                        if (!state.user) {
                            history.push(LOGIN_PATH)
                        } else {
                            setMessage(e.currentTarget.value)
                        }
                    }} />
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
