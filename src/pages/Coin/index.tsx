import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { formatPrice } from '../../util/coinFormat';

import dataApi from '../../services/dataApi';

import { Container, Header, InfoList } from './styles';

interface CoinData {
  high: string;
  low: string;
  last: string;
  date: number;
}
interface Param {
  coin: string;
  coinName: string;
}

const Coin: React.FC = () => {
  const [coinData, setCoinData] = useState<CoinData>({} as CoinData);

  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);

  const param = useParams<Param>();

  useEffect(() => {
    (async () => {
      const response = await dataApi.get(`/${param.coin}/ticker`);

      const coinDataFormatted: CoinData = {
        high: formatPrice(response.data.ticker.high),
        low: formatPrice(response.data.ticker.low),
        last: formatPrice(response.data.ticker.last),
        date: response.data.ticker.date,
      };
      setCoinData(coinDataFormatted);
    })();
  }, [param]);

  useEffect(() => {
    (async () => {
      const { data } = await dataApi.get(
        `https://www.mercadobitcoin.net/api/${param.coin}/orderbook/`,
      );
      setBids(data?.bids);
      setAsks(data?.asks);
    })();
  }, [param, bids, asks]);

  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <h1>{param.coinName}</h1>
      </Header>
      <InfoList>
        <li>Maior preço: {coinData.high}</li>
        <li>Menor preço: {coinData.low}</li>
        <li>Preço atual: {coinData.last}</li>
      </InfoList>
      compras:
      <div
        style={{
          margin: 15,
          border: '1px solid #000',
          position: 'relative',
          width: '95%',
          height: '125px',
        }}
      >
        {bids.slice(0, 5).map((value: string) => (
          <React.Fragment key={value[0]}>
            <p
              style={{ float: 'left', width: '50%' }}
            >{`Preço: ${value[0]}`}</p>
            <p
              style={{ float: 'right', width: '50%' }}
            >{`Quantidade: ${value[1]}`}</p>
          </React.Fragment>
        ))}
      </div>
      vendas:
      <div
        style={{
          margin: 15,
          border: '1px solid #000',
          position: 'relative',
          width: '95%',
          height: '125px',
        }}
      >
        {asks.slice(0, 5).map((value: string) => (
          <React.Fragment key={value[0]}>
            <p
              style={{ float: 'left', width: '50%' }}
            >{`Preço: ${value[0]}`}</p>
            <p
              style={{ float: 'left', width: '50%' }}
            >{`Quantidade: ${value[1]}`}</p>
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
};

export default Coin;
