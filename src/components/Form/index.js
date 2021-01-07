import React, { Component } from 'react';

import Options from '../Options';
import FEATURES from '../../mock-data'

class Form extends Component {
  render() {
    const {  selected, onChange } = this.props;
    return (
      <form className='main__form'>
        <h2>Customize your laptop</h2>
        <Options features={FEATURES} onChange={onChange} selected={selected} />
      </form>
    );
  }
}

export default Form;
