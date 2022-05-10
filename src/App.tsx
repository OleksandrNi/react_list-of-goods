import React from 'react';
import './App.css';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const numbers: number[] = Array.from(Array(10).keys());

type State = {
  goods: string[];
  goodLength: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    goodLength: '1',
  };

  reversedGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortedGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  resetGoods = () => {
    this.setState({
      goods: [...goodsFromServer],
      goodLength: '1',
    });
  };

  sortByLengthGoods = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  changeLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGoods = goodsFromServer.filter(
      good => good.length >= Number(event.target.value),
    );

    this.setState({
      goodLength: event.target.value,
      goods: newGoods,
    });
  };

  render() {
    const { goods, goodLength } = this.state;

    return (
      <div className="App">
        <h1 className="products-title">
          Goods
        </h1>
        <ul>
          {goods.map((good) => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.reversedGoods}>Reverse</button>
        <button type="button" onClick={this.sortedGoods}>Sorted by Name</button>
        <button type="button" onClick={this.resetGoods}>Reset</button>
        <button type="button" onClick={this.sortByLengthGoods}>
          Sorted by Length
        </button>
        <label>
          Choose good length:
          <select value={goodLength} onChange={this.changeLength}>
            {numbers.map(elem => (
              <option key={elem} value={elem + 1}>{elem + 1}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default App;
