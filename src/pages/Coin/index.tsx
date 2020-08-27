import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'
import { formatPrice } from '../../util/coinFormat';

import dataApi from '../../services/dataApi';

import { Container, Header, InfoList } from './styles';

interface CoinData {
  high: string;
  low: string;
  last: string;
  date: number;
}

const Coin: React.FC = () => {

  const [coinData, setCoinData] = useState<CoinData>({} as CoinData);

  useEffect(() => {
    async function loadData() {
      const response = await dataApi.get(`/eth/ticker`);

      const coinDataFormatted:CoinData = {
        high: formatPrice(response.data.ticker.high),
        low: formatPrice(response.data.ticker.low),
        last: formatPrice(response.data.ticker.last),
        date: response.data.ticker.date,
      };
      setCoinData(coinDataFormatted);
    }
    loadData();
  }, []);
  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <h1>Ethereum</h1>
      </Header>
        <InfoList>
          <li>Maior preço: {coinData.high}</li>
          <li>Menor preço: {coinData.low}</li>
          <li>Preço atual: {coinData.last}</li>
        </InfoList>
    </Container>
  );
}

export default Coin;
