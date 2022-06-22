import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import Colors from './constants/Colors';
const ColorTheme = Colors['Theme'];

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={ColorTheme.Cinza} barStyle="light-content" translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}