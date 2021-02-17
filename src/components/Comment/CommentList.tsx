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
    IonCardTitle,
    IonToast

} from '@ionic/react';
import { trash } from 'ionicons/icons';
import { JsxEmit } from 'typescript';

type CommentProps = {
    comments: any[],
    gameID: number
}

const CommentList: React.FC<CommentProps> = (props) => {
    const { state } = useContext(AppContext);
    const [showToastDelete, setShowToastDelete] = useState(false);

    const imgStyle = {
        width: '50px'
    }

    let comments = props.comments;

    const deleteComment = (id) => {
        setShowToastDelete(true);
        let commentsLocal = JSON.parse(localStorage.getItem('comments'));
        let index = 0;
        commentsLocal[props.gameID].map((j, k) => {
            if (j.id == id) index = k; 
        })

        if (index > -1) {
            commentsLocal[props.gameID].splice(index, 1);
            localStorage.setItem('comments', JSON.stringify(commentsLocal));
        }
    }

    return (
        <>
            {
                comments.map((j, k) => {
                    return (<IonCard id={j.id}>
                        <IonCardHeader>
                            <IonCardSubtitle>{j.date}</IonCardSubtitle>
                            <IonCardTitle>
                                <div>
                                    <img style={imgStyle} src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" />
                                    <span className="username">{j.author}</span>
                                </div>
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {j.body}
                        </IonCardContent>
                        <div></div>
                        <IonButton fill="clear" type="button" onClick={() => {deleteComment(j.id)}} id="deleteButton"><IonIcon icon={trash} /></IonButton>
                        <IonToast
                            isOpen={showToastDelete}
                            onDidDismiss={() => setShowToastDelete(false)}
                            message="Comment deleted"
                            duration={500}
                            color="success"
                            position="top"
                        />
                    </IonCard>)
                })
            }
        </>
    );
};

export default CommentList;
