import React, { Component } from 'react';

import { USCurrencyFormat } from '../../utils';

class SummaryFeatures extends Component {
  render() {
    const { features } = this.props;

    const summary = Object.keys(features);

    return summary.map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = features[feature];

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
  }
}

export default SummaryFeatures;
