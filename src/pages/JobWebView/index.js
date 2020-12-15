import React from 'react';
import { WebView } from 'react-native-webview';

const JobWebView = ({ uri, route }) => {
  return (
    <WebView
      source={{ uri: route.params.uri }}
      startInLoadingState={true}
      style={{ flex: 1 }}
    />
  );
};

export default JobWebView;
