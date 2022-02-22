import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";
import Splash from "./components/splash/Splash";
import { Menu } from "./components/Menu";
import SearchPage from "./pages/SearchPage";

setupIonicReact();

const App: React.FC = () => {
  const [doneSplash, setDoneSplash] = useState(false);
  var onceSplash = false;

  useEffect(() => {
    if (onceSplash == false) {
      setDoneSplash(true);
      setTimeout(() => {
        setDoneSplash(false);
      }, 3000);
    }
	onceSplash = true;
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <Menu />
        {doneSplash ? <Splash /> : null}
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Redirect exact from="/" to="/home" />
          <Route path="/search" component={SearchPage} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
