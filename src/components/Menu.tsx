import React from 'react';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle } from '@ionic/react';
import { useLocation, useHistory } from 'react-router-dom';
import { earthOutline, earthSharp, briefcaseOutline, briefcaseSharp, newspaperOutline, newspaperSharp, footballOutline, footballSharp, exitOutline, exitSharp } from 'ionicons/icons';
import './Menu.css';
import { getAuth, signOut } from 'firebase/auth'; // Import the necessary functions from Firebase Authentication

interface AppPage {
  title: string;
  url?: string; // Make the URL property optional
  iosIcon: string;
  mdIcon: string;
}

const appPages: AppPage[] = [
  {
    title: 'News',
    url: '/folder/News',
    iosIcon: newspaperOutline,
    mdIcon: newspaperSharp
  },
  {
    title: 'Sport',
    url: '/folder/Sport',
    iosIcon: footballOutline,
    mdIcon: footballSharp
  },
  {
    title: 'Business',
    url: '/folder/Business',
    iosIcon: briefcaseOutline,
    mdIcon: briefcaseSharp
  },
  {
    title: 'Culture',
    url: '/folder/Culture',
    iosIcon: earthOutline,
    mdIcon: earthSharp
  },
  {
    title: 'Log out',
    iosIcon: exitOutline,
    mdIcon: exitSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      const auth = getAuth(); // Get the Firebase Auth instance
      await signOut(auth); // Sign out the user
      history.push('/login'); // Redirect to the login page after logout
      window.location.reload();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === appPage.url ? 'selected' : ''}
                routerDirection="none"
                lines="none"
                detail={false}
                onClick={() => {
                  if (appPage.url) {
                    history.push(appPage.url); // Navigate to the specified URL
                  } else {
                    handleLogout(); // Call the handleLogout function for logout button
                  }
                }}
              >
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
