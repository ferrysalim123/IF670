import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import React from "react";
import "./Menu.css";
import { homeOutline, homeSharp, discOutline, discSharp, helpCircleOutline, helpCircleSharp , settingsOutline, settingsSharp} from "ionicons/icons";


export const Menu = () => {
  return (
    <IonMenu side="start" contentId="main">
      {/* <IonContent> */}
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem
              button
              href={"/home"}
              routerDirection="none"
              lines="none"
            >
              <IonIcon
                ios={homeOutline}
                md={homeSharp}
                className="menuIcon"
              />
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem
              button
              routerLink={"/Tips"}
              routerDirection="none"
              lines="none"
            >
                <IonIcon
                ios={discOutline}
                md={discSharp}
                className="menuIcon"
              />
              <IonLabel>Tips & Trick</IonLabel>
            </IonItem>
            <IonItem
              button
              routerLink={"/Help"}
              routerDirection="none"
              lines="none"
            >
                <IonIcon
                ios={helpCircleOutline}
                md={helpCircleSharp}
                className="menuIcon"
              />
              <IonLabel>Help & Support</IonLabel>
            </IonItem>
            <IonItem
              button
              routerLink={"/Setting"}
              routerDirection="none"
              lines="none"
            >
                <IonIcon
                ios={settingsOutline}
                md={settingsSharp}
                className="menuIcon"
              />
              <IonLabel>Settings</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
        <img src="assets/Gambar/kepiting.jpg" className="kepiting"></img>
      {/* </IonContent> */}
      
    </IonMenu>
  );
};
