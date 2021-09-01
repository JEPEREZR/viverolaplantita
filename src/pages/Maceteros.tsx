import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Maceteros.css';

const Macetas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Maceteros</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Maceteros</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Maceteros page" />
      </IonContent>
    </IonPage>
  );
};

export default Macetas;
