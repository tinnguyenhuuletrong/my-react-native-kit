/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import BlankContainer from './containers/BlankContainer';

export interface Props { }
export default class App extends Component<Props> {
  render() {
    return <BlankContainer />;
  }
}