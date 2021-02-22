import React, { useState, useContext } from 'react';
import './CommentList.css'
import {
    IonButton,
    IonIcon,
    IonToast,
    IonLabel

} from '@ionic/react';
import { AppContext } from '../../State';

import { trash } from 'ionicons/icons';

type CommentProps = {
    comments: any[],
    gameID: number
}

const NFUCommentList: React.FC<CommentProps> = (props) => {
    const [showToastDelete, setShowToastDelete] = useState(false);
    const { state,dispatch } = useContext(AppContext);

    console.log("COMMENTS LIST");
    console.log(props);
    const imgStyle = {
        width: '100px'
    }

    let comments = props.comments;

    const deleteComment = async (e) => {
        setShowToastDelete(true);
        let state_copy = state.events;
        const event = Object.keys(state_copy).map(key => state_copy[key]).find((event) => event.id == props.gameID); 
        try{
            const comments = Object.keys(event.comments).map(key => event.comments[key]).filter((comment) => comment !== e)
            event.comments = comments
            dispatch({ type: "SET_EVENTS", value: state_copy });
        }catch{
            console.log("FAIL DELETE COMMENT");
        }
    }

    const check_author = (comment) =>{
        if(comment.author.email == state.user.email){
            return false
        }else{
            return true
        }
      }

    return (
        <>
            {
                comments.sort((a, b) => a.date < b.date ? 1 : -1).map((j, k) => {
                    return (<div id={j.id} key={k} className="comment row main">
                    <div className="comment-avatar" id="main-avatar">
                        <img src={j.author.image} alt="" />
                    </div>
                
                    <div className="comment-text column">
                      <div className="info row center">
                        <div id="info-username">{j.author.username}</div>
                        <div>{j.date}</div>
                        <IonButton  hidden={check_author(j)} className="delete_comment" fill="clear" type="button" onClick={() => {deleteComment(j)}} id="deleteButton"><IonIcon icon={trash} /></IonButton>

                      </div>
                
                      <div className="message">
                        {j.body}
                      </div>
                    </div>
                  </div>)
                })
            }
            <IonLabel className="no_comments_label" hidden={comments.length !== 0}>
                No comments
            </IonLabel>
            <IonToast
                isOpen={showToastDelete}
                onDidDismiss={() => setShowToastDelete(false)}
                message="Comment deleted"
                duration={2000}
                color = "danger"
                position = "bottom"
            />
        </>
    );
};

export default NFUCommentList;
