import React from "react";
import { StyleSheet, View, ScrollView, Pressable,TouchableWithoutFeedback } from "react-native";
import Text from './Text'
import Constants from 'expo-constants';

import { Link} from "react-router-native";
import theme from '../utils/theme';

import { useApolloClient } from '@apollo/client';
import useIsAuthorized from '../hooks/useIsAuthorized'
import useLogOut from '../hooks/useLogOut'

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: theme.colors.primary,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    NavHeader: {
        padding: theme.paddings.headerPadding,
        flexGrow: 1
    },
    navItem: {
        flexGrow: 0,
        padding: theme.paddings.itemPadding,
        borderRadius: 5,
        backgroundColor: theme.colors.effect
    },
    navItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: "center",
        paddingRight: 20,
    },
    
  });


const AppBar = () => {
    const [logOut] = useLogOut();
    const {isAuthorized} = useIsAuthorized();
    const client = useApolloClient();
    
    const handleLogOut = () => {
        logOut()
        client.resetStore()
    }
    const SignIn = () => {
        return(
            <Link to="/signin" component={TouchableWithoutFeedback}>
                <Text color="textSecondary" style={styles.navItem}>Sign In</Text>
            </Link>
        )
    } 
 
    const SignOut = () => {
        
        return(
            <TouchableWithoutFeedback onPress={handleLogOut}>
                <Text color="textSecondary" style={styles.navItem}>
                    Sign out
                </Text>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView   
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'space-between'
            }} 
            horizontal>
                <View style={styles.NavHeader}>
                    <Link to="/" component={TouchableWithoutFeedback}>
                        <Text color="textSecondary">Repositories</Text>
                    </Link>                
                </View>
                <View style={styles.navItemContainer}>
                    {isAuthorized ? <SignOut/> : <SignIn/>}
                </View> 
            </ScrollView>
        </View>
    );
  };

export default AppBar;