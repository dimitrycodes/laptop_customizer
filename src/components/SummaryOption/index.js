import React, { Component } from 'react';

import { USCurrencyFormat } from '../../utils';

class SummaryOption extends Component {
  render() {
    const { feature, name, cost } = this.props;
    return (
      <>
        <div className='summary__option__label'>{feature} </div>
        <div className='summary__option__value'>{name}</div>
        <div className='summary__option__cost'>
          {USCurrencyFormat.format(cost)}
        </div>
      </>
    );
  }
}

export default SummaryOption;
