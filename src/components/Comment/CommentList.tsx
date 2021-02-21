import React, {  useState } from 'react';
import './CommentList.css'
import {
    IonButton,
    IonIcon,
    IonCard,
    IonCardSubtitle,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonToast,
    IonList,
    IonItem,
    IonInput

} from '@ionic/react';
import { trash } from 'ionicons/icons';

type CommentProps = {
    comments: any[],
    gameID: number
}

const CommentList: React.FC<CommentProps> = (props) => {
    const [showToastDelete, setShowToastDelete] = useState(false);
    console.log("COMMENTS LIST");
    console.log(props);
    const imgStyle = {
        width: '100px'
    }

    let comments = props.comments;

    const deleteComment = (id) => {
        setShowToastDelete(true);
        let commentsLocal = JSON.parse(localStorage.getItem('comments'));
        let index = 0;
        commentsLocal[props.gameID].map((j, k) => {
            if (j.id === id) index = k; 
        })

        if (index > -1) {
            commentsLocal[props.gameID].splice(index, 1);
            localStorage.setItem('comments', JSON.stringify(commentsLocal));
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
                        <IonButton className="delete_comment" fill="clear" type="button" onClick={() => {deleteComment(j.id)}} id="deleteButton"><IonIcon icon={trash} /></IonButton>

                      </div>
                
                      <div className="message">
                        {j.body}
                      </div>
                    </div>
                  </div>)
                    // return (<IonCard id={j.id} key={k} className="comment">
                    //     <IonCardHeader>
                    //         <IonCardSubtitle>{j.date}</IonCardSubtitle>
                    //         <IonCardTitle>
                    //             <div>
                    //                 <img style={imgStyle} src={j.author.image} alt="" />
                    //                 <span className="username">{j.author.username}</span>
                    //             </div>
                    //         </IonCardTitle>
                    //     </IonCardHeader>
                    //     <IonCardContent>
                    //         {j.body}
                    //     </IonCardContent>
                    //     <div></div>
                    //     <IonButton fill="clear" type="button" onClick={() => {deleteComment(j.id)}} id="deleteButton"><IonIcon icon={trash} /></IonButton>
                    //     <IonToast
                    //         isOpen={showToastDelete}
                    //         onDidDismiss={() => setShowToastDelete(false)}
                    //         message="Comment deleted"
                    //         duration={500}
                    //         color="success"
                    //         position="top"
                    //     />
                    // </IonCard>)
                })
            }
        </>
    );
};

export default CommentList;
