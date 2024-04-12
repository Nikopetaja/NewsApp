import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonText, IonMenuButton } from '@ionic/react';

const SportPage: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
  const fetchSportNews = async () => {
    try {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = 'https://feeds.bbci.co.uk/sport/rss.xml';
      const response = await fetch(proxyUrl + targetUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const xmlText = await response.text();
      const xmlDoc = new DOMParser().parseFromString(xmlText, 'text/xml');
      const items = xmlDoc.querySelectorAll('item');
      const sportNewsData = Array.from(items).map((item: Element) => {
        return {
          title: item.querySelector('title')?.textContent || '',
          description: item.querySelector('description')?.textContent || '',
          thumbnail: item.getElementsByTagNameNS('*', 'thumbnail')[0]?.getAttribute('url') || '', // Extract thumbnail URL
        };
      });
      setArticles(sportNewsData);
    } catch (error) {
      console.error('Error fetching sport news:', error);
    }
  };
  

    fetchSportNews();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Sport</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
            <IonList>
                {articles.map((article, index) => (
                    <React.Fragment key={index}>
                      <IonItem>
                      <img src={article.thumbnail} alt="Thumbnail" style={{ width: '100%' }}/>
                      </IonItem>
                      <IonItem>
                        <IonLabel>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </IonLabel>
                    </IonItem>
                    </React.Fragment>
                ))}
            </IonList>
        </IonContent>
    </IonPage>
  );
};

export default SportPage;
