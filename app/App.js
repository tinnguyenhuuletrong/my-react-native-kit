/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginContainer from './containers/LoginContainer';
import BlankContainer from './containers/BlankContainer';

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginContainer
    },
    Home: {
      screen: BlankContainer,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export interface Props { }
export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}