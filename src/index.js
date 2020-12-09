import 'react-native-gesture-handler';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from '~/routes/';

import '~/config/ReactotronConfig';

const styles = {
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#272727',
};

const App = () => (
  <SafeAreaView style={styles}>
    <MainStack />
  </SafeAreaView>
);

export default App;
