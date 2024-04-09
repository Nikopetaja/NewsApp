// Menu.tsx
import React from 'react';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { earthOutline, earthSharp, briefcaseOutline, briefcaseSharp, newspaperOutline, newspaperSharp, footballOutline, footballSharp, exitOutline, exitSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  title: string;
  url: string;
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
    url: '/login',
    iosIcon: exitOutline,
    mdIcon: exitSharp
  },
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
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
