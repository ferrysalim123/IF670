import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Home.css";
import { NavButtons } from "../components/NavButton";
import {
  searchOutline,
  searchSharp,
  qrCodeOutline,
  qrCodeSharp,
  copyOutline,
  copySharp
} from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <NavButtons />
          </IonButtons>
          <IonRow>
            <IonCol className="SearchCol">
              <IonButton color='light' fill="clear">
                        <IonBackButton
                            defaultHref='/search'
                            color='medium'
                            text='Search'
                            icon=''
                        ></IonBackButton>
                        <IonIcon ios={searchOutline} md={searchSharp} color="medium"/>
                    </IonButton>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="content">
        <IonHeader collapse="condense"></IonHeader>
        <IonCard className="cardGede">
          <IonImg className="imageGede" src="assets/Gambar/getJoule.jpg" />
        <div className="card-title">
            <div>Get your Joule. </div>
            <div>Be happy.</div>
            <h4 className="end">Explore</h4>
          </div>
        </IonCard>
        
        <IonRow>
          <IonCol>
            <p>
              <span>Search by Type</span>
            </p>
          </IonCol>
        </IonRow>
        <IonRow className="rowAtas">
          <IonCol className="col1">
            <IonCard className="cardAtas">
              <IonImg src="assets/Gambar/pic1.jpg" />
            </IonCard>
          </IonCol>
          <IonCol className="col2">
            <IonCard className="cardAtas">
              <IonImg src="assets/Gambar/pic2.jpg" />
            </IonCard>
          </IonCol>
          <IonCol className="col3">
            <IonCard className="cardAtas">
              <IonImg src="assets/Gambar/pic3.jpg" />
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow className="rowTengah">
          <IonCol className="col1">
            <IonCard className="cardTengah">
              <IonImg src="assets/Gambar/pic4.jpg" />
            </IonCard>
          </IonCol>
          <IonCol className="col2">
            <IonCard className="cardTengah">
              <IonImg src="assets/Gambar/pic5.jpg" />
            </IonCard>
          </IonCol>
          <IonCol className="col3">
            <IonCard className="cardTengah">
              <IonImg src="assets/Gambar/pic6.jpg" />
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow className="rowBawah">
          <IonCol className="col1">
            <IonCard className="cardBawah">
              <IonImg src="assets/Gambar/pic7.jpg" />
            </IonCard>
          </IonCol>
          <IonCol className="col2">
            <IonCard className="cardBawah">
              <IonImg src="assets/Gambar/pic8.jpg" />
            </IonCard>
          </IonCol>
          <IonCol className="col3">
            <IonCard className="cardBawah">
              <IonImg src="assets/Gambar/pic9.jpg" />
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <p>
              <span>Cooking Guide</span>
            </p>
          </IonCol>
        </IonRow>
        <IonCard>
          <IonRow className="rowTest">
            <IonCol className="colTest">
              <img className="imgGuide" src="assets/Gambar/makanan.jpg" />
            </IonCol>
            <IonCol>
              <h4>Get Started : Basic Guide</h4>
              <IonIcon  className ="iconCopy" ios={copyOutline} md={copySharp}/>
            </IonCol>
          </IonRow>
        </IonCard>
        <IonCard>
          <IonRow className="rowTest">
            <IonCol className="colTest">
              <img className="imgGuide" src="assets/Gambar/makanan2.jpg" />
            </IonCol>
            <IonCol>
              <h4>Quick & Easy</h4>
              <IonIcon  className ="iconCopy" ios={copyOutline} md={copySharp}/>
            </IonCol>
          </IonRow>
        </IonCard>
        <IonCard>
          <IonRow className="rowTest">
            <IonCol className="colTest">
              <img className="imgGuide" src="assets/Gambar/makanan3.jpeg" />
            </IonCol>
            <IonCol>
              <h4>Cooked in a Jar - No Bag Required!</h4>
              <IonIcon  className ="iconCopy" ios={copyOutline} md={copySharp}/>
            </IonCol>
          </IonRow>
        </IonCard>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="light">
            <IonIcon ios={qrCodeOutline} md={qrCodeSharp} color="dark" />
          </IonFabButton>
        </IonFab>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton color="light" className="fabCenter">
            <IonLabel className="orange">Search for Joule</IonLabel>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
