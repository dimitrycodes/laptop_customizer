import React from 'react';
import { USCurrencyFormat } from '../../utils';

const Summary = (props) => {
  const { summary, total } = props;

  return (
    <section className='main__summary'>
      <h2>Your cart</h2>
      {summary}
      <div className='summary__total'>
        <div className='summary__total__label'>Total</div>
        <div className='summary__total__value'>
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    </section>
  );
};

export default Summary;
