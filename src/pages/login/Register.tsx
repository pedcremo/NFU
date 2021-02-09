import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../../State';
import { Redirect, useHistory } from 'react-router-dom';
import {
    IonContent,
    IonInput,
    IonPage,
    IonLoading,
    IonImg,
    IonLabel,
    IonButton

} from '@ionic/react';

import './Register.css';
import AppTitle from '../../components/shared/AppTitle'
import DeporteImg from '../../assets/img/deporte_img.png'

const Register: React.FC = () => {
    const history = useHistory();
    const { state, dispatch } = useContext(AppContext);
    const [email, setEmail] = useState<React.ReactText | undefined>('');
    const [password, setPassword] = useState<React.ReactText | undefined>('');
    const [, setFormErrors] = useState(null);
    const [showLoading, setShowLoading] = useState(false);

    const formRef = useRef(null);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            setShowLoading(true);
            setTimeout(() => dispatch({ type: 'SET_USER', value: email }), 5000);
        } catch (e) {
            console.error(e);
            setShowLoading(false);
            setFormErrors(e);
        }
    }

    if (state.user) return <Redirect to="/app/home" />

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonLoading isOpen={showLoading} message={'Logging in'} onDidDismiss={() => setShowLoading(false)} />
                <div className="loginPageContent">
                    <AppTitle />
                    <IonImg src={DeporteImg} alt="Deporte IMG" className="loginImg" />
                    <IonLabel className="prhaseLogin">Find tournaments and matches for the sport that you prefer</IonLabel>
                    <form onSubmit={handleSubmit} method="post" name="login_form" ref={formRef} action="" className="register-form">
                        <IonInput type="email" value={email} className="inputFieldRegister" required onInput={e => setEmail(e.currentTarget.value)} placeholder="Email.." />
                        <IonInput type="password" value={password} className="inputFieldRegister" required onInput={e => setPassword(e.currentTarget.value)} placeholder="Password.." />
                        <IonInput type="password" value={password} className="inputFieldRegister" required onInput={e => setPassword(e.currentTarget.value)} placeholder="Repeat Password.." />
                        <IonButton className="btn-submit-register" type="submit" id="btnRegister">Create Account</IonButton>
                        <div className="login-row">
                            <IonLabel className="registerOption register-link-option" onClick={() => history.push('recover')}> I've forgot my password</IonLabel>
                            <IonLabel className="registerOption register-link-option" onClick={() => history.push('login')}>I already have an account</IonLabel>
                        </div>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Register;
