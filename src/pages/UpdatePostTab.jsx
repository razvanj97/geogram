import UpdatePostForm from '../components/UpdatePostForm';
import { IonContent, IonPage } from '@ionic/react';
import { useParams } from 'react-router-dom';

const UpdatePostTab = () => {
  const { id } = useParams();

  return (
    <IonPage>
      <IonContent fullscreen>
        <UpdatePostForm id={id}></UpdatePostForm>
      </IonContent>
    </IonPage>
  );
};

export default UpdatePostTab;
