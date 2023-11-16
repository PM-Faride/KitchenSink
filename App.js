import React from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import Routes from './Screens/Routes';
// import LinearGradient from 'react-native-linear-gradient';

const theme = extendTheme({
  components: {
    Text: {
      fontSize: 'lg',
    },
    Pressable: {
      cursor: 'pointer',
    },
    Button: {
      cursor: 'pointer',
    },
    Box: {
      variant: {
        componentDemo: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
  },
  colors: {
    lightBg: 'coolGray.50',
    darkBg: 'blueGray.900',
  },
});
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').LinearGradient,
  },
  initialColorMode: 'dark',
};
const App = function () {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <Routes />
    </NativeBaseProvider>
  );
};
export default App;
