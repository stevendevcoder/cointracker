import React from 'react'
import '../styles/TableCoin.scss';

function TableCoin({coins}) {
  return (
    <table>
      <thead>
        <tr>  
          <td>Icon</td>
          <td>Name</td>
          <td>Symbol</td>
          <td>Price</td>
          <td>Change%</td>
          <td>Market Cap</td>
        </tr>
      </thead>
      <tbody>
        {coins.map(coin => (
          <tr>
            <td>
              <img width="35px" height="35px" src={coin.image} alt="" />
            </td>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>${coin.current_price}</td>
            <td className={coin.price_change_percentage_24h >= 0 ? 'positivo': 'negativo'}>{Math.round(coin.price_change_percentage_24h)}%</td>
            <td>${coin.market_cap}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableCoin