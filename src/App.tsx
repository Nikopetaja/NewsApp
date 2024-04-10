import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import NewsPage from './pages/NewsPage';
import SportPage from './pages/SportPage';
import BusinessPage from './pages/BusinessPage';
import CulturePage from './pages/CulturePage';
import Login from './pages/Login'; // Import the Login component
import Signup from './pages/Signup'; // Import the Signup component

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main" when="false">
          <Menu />
          <IonRouterOutlet id="main">
            {/* Route for the login page */}
            <Route path="/login" exact={true}>
              <Login />
            </Route>
            {/* Route for the signup page */}
            <Route path="/signup" exact={true}>
              <Signup />
            </Route>
            {/* Default redirect route */}
            <Route path="/" exact={true}>
              <Redirect to="/login" />
            </Route>
            <Route path="/folder/News" exact={true}>
              <NewsPage />
            </Route>
            <Route path="/folder/Sport" exact={true}>
              <SportPage />
            </Route>
            <Route path="/folder/Business" exact={true}>
              <BusinessPage />
            </Route>
            <Route path="/folder/Culture" exact={true}>
              <CulturePage />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
