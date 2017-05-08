import React, { Component } from 'react';
import CalcTitle from '../components/calc_title';
import Inputs from '../components/inputs';
import Result from '../components/result';

export default class App extends Component {
  render() {
    return (
      <div>
        <CalcTitle />
        <Inputs />
        <Result />
      </div>
    );
  }
}
