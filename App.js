import React, {useState} from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf'),
  })
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <Home />
  );
}

