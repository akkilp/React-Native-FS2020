import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';

import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: 500,
    backgroundColor: theme.colors.body
  },
});

const TouchableText = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => console.log('juuh')}
    >
      <Text>Sign In</Text>
    </TouchableWithoutFeedback>
  );
};

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar/>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signin" component={RepositoryList} />
          <Redirect to="/"/>
        </Switch>
        <Link to='/signin' component={TouchableText}/>

    </View>
  );
};

export default Main;