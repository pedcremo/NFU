import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonToast
} from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';
import Header from '../components/header/HeaderComponent';
import comments from '../data/comments.json';
import { useTranslation } from "react-i18next";
import CommentList from '../components/Comment/CommentList'
import { AppContext } from '../State';


const Comments: React.FC = () => {
    const [message, setMessage] = useState<React.ReactText | undefined>('');
    const [showToastComment, setShowToastComment] = useState(false);
    const { state } = useContext(AppContext);


    const retrieveComments = () => {
        localStorage.setItem('comments', JSON.stringify(comments.comments));
        return comments.comments;
    }

    let localComments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : retrieveComments();

    let { id } = useParams();

    const { t } = useTranslation();

    const [, setShowUserMenuEvent] = useState(null);
    let component;

    let com = [];

    Object.entries(localComments).map((j) => {
        if (j[0] === id) com.push(j[1]);
    })

    console.log(com);


    if (com.length <= 0) component = <p>Empty</p>
    else component = <CommentList comments={com[0]} gameID = {id}/>

    const addComment = () => {
        setShowToastComment(true);

        localComments[id].push({
            id: Math.floor(Math.random() * 1010),
            title: state.user.name,
            author: state.user.name,
            body: message,
            date: new Date().toLocaleString()
        })

        localStorage.setItem('comments', JSON.stringify(localComments))
    }// end_addComment

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <Header page={t("pages.comments")} />
                    <IonButtons slot="end">
                        <IonButton fill="clear" onClick={e => { e.persist(); setShowUserMenuEvent(e) }}>
                            <IonIcon icon={ellipsisVertical} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <form method="post" action="">
                    <IonList>
                        <IonItem>
                            <IonInput placeholder={t('Comments.type')} type="text" required value={message} onInput={e => setMessage(e.currentTarget.value)} />
                        </IonItem>
                        <IonButton expand="block" type="button" onClick={addComment}>{t('Comments.send_comment')}</IonButton>
                    </IonList>
                </form>
                {component}
                <IonToast
                    isOpen={showToastComment}
                    onDidDismiss={() => setShowToastComment(false)}
                    message="Comment added"
                    duration={500}
                    color = "success"
                    position = "top"
                />
            </IonContent>
        </IonPage>
    );
};

export default Comments;
