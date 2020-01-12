import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.product.url}} />
);

Product.navigationOptions = ({navigation}) => {
  const navigationTitle = navigation.state.params.product.title;

  console.log(navigationTitle);

  return {
    title: navigationTitle,
  };
};

export default Product;
