import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Plantas.css';

const Plantas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Plantas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Vivero la Plantita</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Vivero la Plantita page" />
      </IonContent>
    </IonPage>
  );
};

export default Plantas;
