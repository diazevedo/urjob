import 'react-native-gesture-handler';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from '~/routes/';

import '~/config/ReactotronConfig';

const styles = {
  safeArea: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f3f5f9',
  },
};

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <MainStack />
  </SafeAreaView>
);

export default App;
