/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/redux";
import IncrementView from "./src/view/increment";

const Loading = () => (
  <Text>Redux Persist is In Process to Persisted All State</Text>
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <IncrementView />
        </PersistGate>
      </Provider>
    );
  }
}
