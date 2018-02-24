/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import LoadingIndicator from './components/LoadingIndicator';
import LoginContainer from './containers/LoginContainer';
import BlankContainer from './containers/BlankContainer';
import HomeContainer from './containers/HomeContainer';
import SettingContainer from './containers/SettingContainer';

const Tabs = TabNavigator({
  Home: { screen: HomeContainer },
  Settings: { screen: SettingContainer },
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#4286f4',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom'
  });

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginContainer
    },
    Home: Tabs,
  },
  {
    initialRouteName: 'Login',
  }
);

export interface Props {
  isLoading: Boolean
}
class App extends React.Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    return <View style={{ flex: 1 }}>
      <RootStack />
      {this.props.isLoading && <LoadingIndicator />}
    </View>
  }
}

const mapStateToProps = state => ({
  isLoading: state.appStateReducer.isLoading
});
export default connect(mapStateToProps)(App);
