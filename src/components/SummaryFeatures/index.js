import React, { Component } from 'react';

import SummaryOption from '../SummaryOption';

class SummaryFeatures extends Component {
  render() {
    const { features } = this.props;

    const summary = Object.keys(features);

    return summary.map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = features[feature];

      return (
        <div className='summary__option' key={featureHash}>
          <SummaryOption
            feature={feature}
            name={selectedOption.name}
            cost={selectedOption.cost}
          />
        </div>
      );
    });
  }
}

export default SummaryFeatures;
