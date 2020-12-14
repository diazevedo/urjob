import React from 'react';
import { WebView } from 'react-native-webview';

// import { Container } from './styles';

const JobWebView = ({ uri, route }) => {
  console.tron.log(route.params);
  return (
    <WebView
      source={{ uri: route.params.uri }}
      startInLoadingState={true}
      style={{ flex: 1 }}
    />
  );
};

export default JobWebView;
