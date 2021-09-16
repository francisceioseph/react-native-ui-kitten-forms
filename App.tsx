import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {useColorScheme} from 'react-native';
import FormExample from './src/components/FormExample';

const App = () => {
  const appTheme = useColorScheme() === 'dark' ? eva.dark : eva.light;
  return (
    <ApplicationProvider {...eva} theme={appTheme}>
      <FormExample />
    </ApplicationProvider>
  );
};

export default App;
