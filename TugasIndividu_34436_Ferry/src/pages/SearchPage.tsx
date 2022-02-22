import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./SearchPage.css";

import { NavButtons } from "../components/NavButton";
import { searchOutline, searchSharp } from "ionicons/icons";
import Home from "./Home";

const SearchPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSearchbar slot="start" />
          <IonButtons slot="end" color="light">
            <IonBackButton
              defaultHref="home"
              text="cancel"
              icon=""
              color="medium"
            />
          </IonButtons>
        </IonToolbar>
        <IonSegment value="all" className="segment">
          <IonSegmentButton value="all">
            <IonLabel>All</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Joule App">
            <IonLabel>Joule App</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="ChefSteps.com">
            <IonLabel>ChefSteps.com</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent fullscreen className="content">
        <div className="theContent">
          <IonLabel className="labelVisual" color="medium">
            Visual Donesess Guide
          </IonLabel>
          <IonCard className="searchCard">
            <IonRow className="searchRow">
              <IonCol className="searchCol">
                <img className="imgGuide" src="assets/Gambar/chicken1.jpeg" />
              </IonCol>
              <IonCol size="9">
                  <IonRow>
                      <IonCol >
                          <h5 color="dark">Ultimate Chicken Breast</h5>
                          <IonLabel>Visual Donesess Guide</IonLabel>
                      </IonCol>
                  </IonRow> 
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard className="searchCard">
            <IonRow className="searchRow">
              <IonCol className="searchCol">
                <img className="imgGuide" src="assets/Gambar/chicken2.jpg" />
              </IonCol>
              <IonCol size="9">
                  <IonRow>
                      <IonCol >
                          <h5 color="dark">Basic Chicken Breast</h5>
                          <IonLabel>Visual Donesess Guide</IonLabel>
                      </IonCol>
                  </IonRow> 
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard className="searchCard">
            <IonRow className="searchRow">
              <IonCol className="searchCol">
                <img className="imgGuide" src="assets/Gambar/chicken3.jpg" />
              </IonCol>
              <IonCol size="9">
                  <IonRow>
                      <IonCol >
                          <h5 color="dark">Ultimate Chicken Breast</h5>
                          <IonLabel>Visual Donesess Guide</IonLabel>
                      </IonCol>
                  </IonRow> 
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard className="searchCard">
            <IonRow className="searchRow">
              <IonCol className="searchCol">
                <img className="imgGuide" src="assets/Gambar/chicken4.jpg" />
              </IonCol>
              <IonCol size="9">
                  <IonRow>
                      <IonCol >
                          <h5 color="dark">Foolproof Chicken Breast</h5>
                          <IonLabel>Visual Donesess Guide</IonLabel>
                      </IonCol>
                  </IonRow> 
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard className="searchCard">
            <IonRow className="searchRow">
              <IonCol className="searchCol">
                <img className="imgGuide" src="assets/Gambar/chicken5.jpg" />
              </IonCol>
              <IonCol size="9">
                  <IonRow>
                      <IonCol >
                          <h5 color="dark">Juicy Grilled Chicken Leg</h5>
                          <IonLabel>Visual Donesess Guide</IonLabel>
                      </IonCol>
                  </IonRow> 
              </IonCol>
            </IonRow>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SearchPage;
