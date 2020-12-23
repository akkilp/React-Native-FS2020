import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

import { Link } from "react-router-native";


import Text from './Text';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  NavHeader: {
      padding: theme.paddings.headerPadding,
      flexGrow: 1
  },
  NavItems: {
      flexGrow: 0,
  }
});

const TouchableText = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => console.log}
    >
      <Text>Sign In</Text>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {

  return (
    <View style={styles.container}>
        <View style={styles.NavHeader}>
            <Text 
            color='textSecondary' 
            fontWeight="bold" 
            fontSize="subheading"
            >
                Reposotories
            </Text>  
        </View>
        <View style={styles.NavItems}>
          <Link to="/signin" component={TouchableText}/>
        </View>
    </View>
  );
};

export default AppBar;