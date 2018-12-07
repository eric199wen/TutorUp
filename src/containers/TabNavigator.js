import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Message from './Message';
import Match from './Match';
import Search from './Search';
import Settings from './Settings';

const TabNavigator = createBottomTabNavigator({
  Home, Search, Match, Message, Settings,
});

export default createAppContainer(TabNavigator);
