import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';

import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import theme from '../theme';
import AppBar from './AppBar';


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: 500,
    backgroundColor: theme.colors.body
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={RepositoryList} />
        <Redirect to="/"/>
      </Switch> 
    </View>
  );
};

export default Main;