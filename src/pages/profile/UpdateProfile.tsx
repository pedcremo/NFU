import React, { useContext, useState } from 'react';
import { AppContext } from '../../State';
import { Redirect } from 'react-router-dom';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  IonList,
  IonAvatar,
  IonSelect,
  IonSelectOption,
  IonDatetime
} from '@ionic/react';

import './UpdateProfile.css';


const UpdateProfile = () => {

  const { state } = useContext(AppContext);

  const [name, setName] = useState<React.ReactText | undefined>('');
  const [username, setUsername] = useState<React.ReactText | undefined>('');
  const [website, setWebsite] = useState<React.ReactText | undefined>('');
  const [bio, setBio] = useState<React.ReactText | undefined>('');

  const [ , setEmail] = useState<React.ReactText | undefined>('');
  const [number, setNumber] = useState<React.ReactText | undefined>('');
  const [gender, setGender] = useState<React.ReactText | undefined>('');
  const [birthday, setBirthday] = useState<string>('');


  if (!state.user) {
    return <Redirect to="/" />
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Edit profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <section className="update_profile">
          <div className="profile_photo">
            <IonAvatar className="profile_avatar">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="" />
            </IonAvatar>
            <IonLabel className="change_profile_photo">Change Profile Photo</IonLabel>
          </div>

          <IonList>
            <IonItem>
              <IonLabel position={'fixed'}>Name</IonLabel>
              <IonInput type="text" required value={name} onInput={e => setName(e.currentTarget.value)} />
            </IonItem>
            <IonItem>
              <IonLabel position={'fixed'}>Username</IonLabel>
              <IonInput type="text" required value={username} onInput={e => setUsername(e.currentTarget.value)} />
            </IonItem>
            <IonItem>
              <IonLabel position={'fixed'}>Website</IonLabel>
              <IonInput type="text" value={website} onInput={e => setWebsite(e.currentTarget.value)} />
            </IonItem>
            <IonItem>
              <IonLabel position={'fixed'}>Bio</IonLabel>
              <IonInput type="text" required value={bio} onInput={e => setBio(e.currentTarget.value)} />
            </IonItem>

            <div className="personal_information">
              <div className="personal_info">
                <h2>Personal Information</h2>
                <IonLabel>Provide your personal information, even if the account is used for a business, a pet or something else. This won't be part of your public profile.</IonLabel>
              </div>

              <IonItem>
                <IonLabel position={'fixed'}>Email</IonLabel>
                <IonInput type="text" required value={state.user} onInput={e => setEmail(e.currentTarget.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position={'fixed'}>Phone number</IonLabel>
                <IonInput type="text" value={number} onInput={e => setNumber(e.currentTarget.value)} />
              </IonItem>
              <IonItem>
                <IonLabel>Gender</IonLabel>
                <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
                  <IonSelectOption value="Prefer not to say">Prefer not to say</IonSelectOption>
                  <IonSelectOption value="Female">Female</IonSelectOption>
                  <IonSelectOption value="Male">Male</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel>Birthday</IonLabel>
                <IonDatetime displayFormat="MM DD YY" placeholder="Select Date" value={birthday} onIonChange={e => setBirthday(e.detail.value!)}></IonDatetime>
              </IonItem>
            </div>

            <IonButton expand="block" type="submit">Edit Profile</IonButton>
          </IonList>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default UpdateProfile;