import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonText, IonMenuButton } from '@ionic/react';

const CulturePage: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchCultureNews = async () => {
        try {
          const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
          const targetUrl = 'https://www.bbc.com/culture/feed.rss';
          const response = await fetch(proxyUrl + targetUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const xmlText = await response.text();
          const xmlDoc = new DOMParser().parseFromString(xmlText, 'text/xml');
          const items = xmlDoc.querySelectorAll('item');
          const cultureNewsData = Array.from(items).map((item: Element) => {
            return {
              title: item.querySelector('title')?.textContent || '',
              description: item.querySelector('description')?.textContent || '',
            };
          });
          setArticles(cultureNewsData);
        } catch (error) {
          console.error('Error fetching culture news:', error);
        }
      };
      

    fetchCultureNews();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Culture</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
            <IonList>
                {articles.map((article, index) => (
                    <IonItem key={index}>
                        <IonLabel>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </IonLabel>
                    </IonItem>
                ))}
            </IonList>
        </IonContent>
    </IonPage>
  );
};

export default CulturePage;
