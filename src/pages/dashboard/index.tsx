import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, ListItem } from './styles';

export default function Main() {
  const [coin, setCoin] = useState([
    {
      name: 'Ethereum',
      code: 'ETH',
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg',
    },
    {
      name: 'Bitcoin',
      code: 'BTC',
      icon: 'https://image.flaticon.com/icons/png/512/25/25180.png',
    },
    {
      name: 'Ripple',
      code: 'XRP',
      icon:
        'https://cdn4.iconfinder.com/data/icons/cryptocurrency-vanilla-coins/90/Coin-XRP-Vanilla-512.png',
    },
  ]);

  return (
    <Container>
      <h1>Moedas</h1>
      <ul>
        {coin.map(c => (
          <ListItem key={c.code}>
            <Link to={`/coin/${c.name}`}>
              <img src={c.icon} alt={c.name} />
              {c.name}
            </Link>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
}
