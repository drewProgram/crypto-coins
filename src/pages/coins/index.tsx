import React, { useState, useEffect } from 'react';
import { formatPrice } from '../../util/coinFormat';
import dataApi from '../../services/dataApi';

import { Container, CoinInfo, InfoList } from './styles';

interface CoinData {
  ticker: string;
  high: string;
  low: string;
  last: string;
}

const Coin: React.FC = () => {

  const [coinData, setCoinData] = useState<CoinData>({} as CoinData);

  useEffect(() => {
    async function loadData() {
      const response = await dataApi.get(`/eth/ticker`);

      const coinDataFormatted:CoinData = {
        ...response.data.ticker,
        highFormatted: formatPrice(response.data.ticker.high),
        lowFormatted: formatPrice(response.data.ticker.low),
        lastFormatted: formatPrice(response.data.ticker.last),
      };
      setCoinData(coinDataFormatted);
    }
    loadData();
  }, []);
  return (
    <Container>
      <h2>Ethereum</h2>
      <CoinInfo>
        <p>Exibir:</p>
        <select>
          <option>Dados</option>
          <option>Investimento</option>
        </select>

        <InfoList>
          <li>Maior preço: {coinData.high}</li>
          <li>Menor preço: {coinData.low}</li>
          <li>Preço atual: {coinData.last}</li>
        </InfoList>
      </CoinInfo>
    </Container>
  );
}

export default Coin;
