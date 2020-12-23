import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView } from "react-native";
import Constants from 'expo-constants';

import { Link} from "react-router-native";
import theme from '../theme';

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
    }
  });


const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <View style={styles.NavHeader}>
                    <Link to="/" component={TouchableWithoutFeedback}>
                        <Text>Reposotories</Text>
                    </Link>
                </View>
                <View style={styles.navItemContainer}>
                    <Link to="/signin" component={TouchableWithoutFeedback}>
                        <Text style={styles.navItem}>SignIn</Text>
                    </Link>
                </View> 
            </ScrollView>
        </View>
    );
  };

export default AppBar;