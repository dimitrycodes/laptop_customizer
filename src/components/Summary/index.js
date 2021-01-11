import React, { Component } from 'react';

import SummaryFeatures from '../SummaryFeatures';
import SummaryTotal from '../SummaryTotal';

class Summary extends Component {
  render() {
    const { selected } = this.props;

    return (
      <section className='main__summary'>
        <h2>Your cart</h2>
        <SummaryFeatures features={selected} />
        <SummaryTotal selected={selected} />
      </section>
    );
  }
}

export default Summary;
