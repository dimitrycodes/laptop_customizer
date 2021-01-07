import React, { Component } from 'react';

import OptionItem from '../OptionItem';

class Options extends Component {
  render() {
    const { features, selected, onChange } = this.props;

    return Object.keys(features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;

      return (
        <fieldset className='feature' key={featureHash}>
          <legend className='feature__name'>
            <h3>{feature}</h3>
          </legend>
          <OptionItem
            options={features[feature]}
            onChange={onChange}
            selected={selected}
            feature={feature}
          />
        </fieldset>
      );
    });
  }
}

export default Options;
