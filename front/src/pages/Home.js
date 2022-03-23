import React, { useEffect, useState } from 'react';
// import '../assets/css/home.css';
// import logo from '../assets/img/clicdoctor-logo01.png';
// import api from '../services/api';
// import { formatMoney } from '../helpers/utils';

function Home() {
  const [subscriptions, setSubscriptions] = useState([]);

  async function getCovenants(idSubscription) {
    try {
      const response = await api.get(
        `/subscriptions/covenants/${idSubscription}`,
      );
      return response.data;
    } catch (error) {
      //
    }
    return false;
  }

  async function getSubscriptions() {
    try {
      const response = await api.get('/subscriptions');
      const subscription = [];
      await Promise.all(
        response.data.map(async item => {
          const covenant = await getCovenants(item.id);

          const array = item.details.split(';');

          subscription.push({
            description: item.description,
            details: array,
            id: item.id,
            price: item.price,
            title: item.title,
            additional: item.additional,
            covenant,
          });
        }),
      );
      setSubscriptions(subscription);
    } catch (error) {
      //
    }
  }

  useEffect(() => {
    getSubscriptions();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}

export default Home;
