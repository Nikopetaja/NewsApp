import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonText, IonMenuButton } from '@ionic/react';

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://feeds.bbci.co.uk/news/world/rss.xml'; // Replace with your actual API endpoint
        const response = await fetch(proxyUrl + targetUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const xmlText = await response.text();
        const xmlDoc = new DOMParser().parseFromString(xmlText, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');
        const newsData = Array.from(items).map((item: Element) => {
          return {
            title: item.querySelector('title')?.textContent || '',
            description: item.querySelector('description')?.textContent || '',
          };
        });
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" /> {/* Include the IonMenuButton here */}
          <IonTitle>News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {news.map((article, index) => (
            <IonItem key={index}>
              <IonLabel>
                <IonText>
                  <h2>{article.title}</h2>
                </IonText>
                <p>{article.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NewsPage;
