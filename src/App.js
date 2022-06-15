import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Search from './components/Search';
import TableCoin from './components/TableCoin';

function App() {
  // eslint-disable-next-line
  const [coins, setCoins] = useState([])

  const getData = async () => {
    const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
    const response = await fetch(apiURL).then((res) => res.json())
    setCoins(response)
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="App">
      <Header />
      <main>
        <Search/>
        <TableCoin coins={coins}/>
      </main>
    </div>
  );
}

export default App;
