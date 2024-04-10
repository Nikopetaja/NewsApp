import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonText, IonMenuButton } from '@ionic/react';

const BusinessPage: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchBusinessNews = async () => {
        try {
          const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
          const targetUrl = 'https://feeds.bbci.co.uk/news/business/rss.xml';
          const response = await fetch(proxyUrl + targetUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const xmlText = await response.text();
          const xmlDoc = new DOMParser().parseFromString(xmlText, 'text/xml');
          const items = xmlDoc.querySelectorAll('item');
          const businessNewsData = Array.from(items).map((item: Element) => {
            return {
              title: item.querySelector('title')?.textContent || '',
              description: item.querySelector('description')?.textContent || '',
            };
          });
          setArticles(businessNewsData);
        } catch (error) {
          console.error('Error fetching business news:', error);
        }
      };
      

    fetchBusinessNews();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Business</IonTitle>
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

export default BusinessPage;
