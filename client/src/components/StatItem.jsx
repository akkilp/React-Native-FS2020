import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../utils/theme';
import Text from './Text';

const styles = StyleSheet.create({
    count: {
        
    },
    label: {
        padding: theme.paddings.itemPadding,
        color: theme.colors.textSecondary
    }
});

const StatItem = (props) => {
    let {count, label} = props;

    const parseCount = () => {
        if (count > 1000) {
            let thousands = count.toString().slice(0,-3);
            let hundreds = count.toString().slice(-3,-2);
            return hundreds==="0" 
                ? thousands + 'k' 
                : thousands+'.'+hundreds+'k';
        }
        return count.toString();
    };

    count = parseCount();

  return (
    <View style={styles.container}>
        <Text fontWeight='bold' align='center' style={styles.count}>{count}</Text>
        <Text align='center' color='textSecondary'>{label}</Text>
    </View>
  );
};

export default StatItem;