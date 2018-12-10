import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import BottomTabNavigatorConfig from '../config/BottomTabNavigatorConfig';
import Home from './Home';
import Match from './Match';
import Message from './Message';
import Profile from '../components/Profile';
import Preference from '../components/Preference';
import Search from './Search';
import SelectPage from '../components/SelectPage';
import Settings from './Settings';

const HomeStack = createStackNavigator({ Home });
const SearchStack = createStackNavigator({ Search });
const MatchStack = createStackNavigator({ Match });
const MessageStack = createStackNavigator({ Message });
const SettingsStack = createStackNavigator({
  Settings,
  Profile,
  Preference,
  SelectPage,
},
{
  initialRouteName: 'Settings',
});

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
  SettingsStack, SearchStack, MatchStack, MessageStack, HomeStack,
});

export default createAppContainer(TabNavigator, BottomTabNavigatorConfig);
