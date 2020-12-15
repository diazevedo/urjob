import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'urJob',
      storage: AsyncStorage,
      whitelist: ['favourite'],
    },
    reducers,
  );

  return persistedReducer;
};
