import 'react-native-gesture-handler';
import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from '~/routes/';

import '~/config/ReactotronConfig';

import { store, persistor } from './store';

const styles = {
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#272727',
};

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SafeAreaView style={styles}>
        <MainStack />
      </SafeAreaView>
    </PersistGate>
  </Provider>
);

export default App;
