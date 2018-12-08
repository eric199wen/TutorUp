import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './Home';
import Message from './Message';
import Match from './Match';
import Search from './Search';
import Settings from './Settings';
import BottomTabNavigatorConfig from '../config/BottomTabNavigatorConfig';

const HomeStack = createStackNavigator({ Home });
const SearchStack = createStackNavigator({ Search });
const MatchStack = createStackNavigator({ Match });
const MessageStack = createStackNavigator({ Message });
const SettingsStack = createStackNavigator({ Settings });

HomeStack.navigationOptions = {
  tabBarLabel: 'Home!',
};

SearchStack.navigationOptions = {
  tabBarLabel: 'Search!',
};

MatchStack.navigationOptions = {
  tabBarLabel: 'Match!',
};

MessageStack.navigationOptions = {
  tabBarLabel: 'Message!',
};

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings!',
};

const TabNavigator = createBottomTabNavigator({
  HomeStack, SearchStack, MatchStack, MessageStack, SettingsStack,
});

export default createAppContainer(TabNavigator, BottomTabNavigatorConfig);
