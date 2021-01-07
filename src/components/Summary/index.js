import React, { Component } from 'react';
import { USCurrencyFormat } from '../../utils';
import SummaryFeatures from '../SummaryFeatures';

class Summary extends Component {
  render() {
    const { selected } = this.props;

    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );

    return (
      <section className='main__summary'>
        <h2>Your cart</h2>
        <SummaryFeatures features={selected} />
        <div className='summary__total'>
          <div className='summary__total__label'>Total</div>
          <div className='summary__total__value'>
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

export default Summary;
