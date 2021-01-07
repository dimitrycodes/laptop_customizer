import React, { Component } from 'react';

import { USCurrencyFormat } from './utils';
import Summary from './components/Summary';
import Form from './components/Form';

import './App.css';
import Header from './components/Header';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700,
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200,
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <div className='summary__option' key={featureHash}>
          <div className='summary__option__label'>{feature} </div>
          <div className='summary__option__value'>{selectedOption.name}</div>
          <div className='summary__option__cost'>
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className='App'>
        <Header />
        <main>
          <Form
            selected={this.state.selected}
            onChange={this.updateFeature}
          />
          <Summary summary={summary} total={total} />
        </main>
      </div>
    );
  }
}

export default App;
