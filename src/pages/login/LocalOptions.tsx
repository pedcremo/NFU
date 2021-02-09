import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../../State";
import { useHistory } from "react-router-dom";
import { IonLabel, IonInput, IonLoading, IonButton } from '@ionic/react';
import './LocalOptions.css';

const LocalOptions: React.FC<{ action: Function }> = ({ action }) => {
    const history = useHistory()
    const { dispatch } = useContext(AppContext);
    const [email, setEmail] = useState<React.ReactText | undefined>("");
    const [password, setPassword] = useState<React.ReactText | undefined>("");
    const [, setFormErrors] = useState(null);
    const [showLoading, setShowLoading] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setShowLoading(true);
            setTimeout(() => dispatch({ type: "SET_USER", value: email }), 5000);
        } catch (e) {
            console.error(e);
            setShowLoading(false);
            setFormErrors(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} method="post" name="login_form" ref={formRef} className="loginOptionsContainer_form">
            <IonLoading isOpen={showLoading} message={"Logging in"} onDidDismiss={() => setShowLoading(false)} />
            <IonInput type="email" required value={email} className="loginOption loginOption--input inputFieldLogin" onInput={(e) => setEmail(e.currentTarget.value)} placeholder="Email.." />
            <IonInput type="password" value={password} className="loginOption loginOption--input inputFieldLogin" required onInput={(e) => setPassword(e.currentTarget.value)} placeholder="Password.." />
            <IonButton className="loginOption loginOption--submit" type="submit" id="btnLogin" > Log In </IonButton>
            <div className="login-row">
                <IonLabel className="loginOption loginOption--local loginOption--create" onClick={() => history.push("recover")} >I've forgot my password</IonLabel>
                <IonLabel className="loginOption loginOption--local loginOption--create" id="createBtnLink" onClick={() => history.push("register")} >Create an account</IonLabel>
            </div>
            <IonLabel className="loginOption loginOption--local" onClick={() => action('Social')} > Continue with Google or Facebook</IonLabel>
        </form>
    )
}
export default LocalOptions;