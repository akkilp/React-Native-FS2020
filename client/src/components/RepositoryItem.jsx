import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../utils/theme';
import StatItem from './StatItem';
import Text from './Text';

const styles = StyleSheet.create({

    itemContainer:{
        display:'flex',
        backgroundColor: theme.colors.secondary,
    },

    logo: {
        flexGrow: 0,
        padding: 20,
        width: 50,
        height: 50,
        backgroundColor: 'yellow',
        margin: theme.paddings.containerPadding,
    },
    lowerContainer: {
        padding: theme.paddings.containerPadding,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    language:{
        backgroundColor: theme.colors.effect,
        padding: theme.paddings.itemPadding,
        borderRadius: 5,
    },
    infoItem: {
        flexGrow: 0,
        margin: 10
    
    },
    infoContainer:{
        display: 'flex',
        alignItems: 'flex-start',
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingTop: theme.paddings.containerPadding
    },
    upperContainer:{
        display:'flex',
        flexDirection: 'row'
    }
});

const RepositoryItem = ({data}) => {
  const {
        fullName, 
        description, 
        language, 
        stargazersCount: stars, 
        forksCount: forks, 
        reviewCount: reviews, 
        ratingAverage: rating,
        ownerAvatarUrl: url,
        } = data;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.upperContainer}>
        <Image
            style={styles.logo}
            source={{                                                                                                                                                                                                                                                                                                                                                                                                                                        
                uri: url,
            }}
            />
        <View style={styles.infoContainer}>
            <Text theme={styles.infoItem} fontWeight='bold' fontSize='subheading'>{fullName}</Text>
            <Text theme={styles.infoItem} color='textSecondary'>{description}</Text>
            <Text color='textSecondary' theme={styles.infoItem} style={styles.language}>{language}</Text>
        </View>
      </View>

      <View style={styles.lowerContainer}>
        <StatItem count={stars} label='Stars'/>
        <StatItem count={forks} label='Forks'/>
        <StatItem count={reviews} label='Reviews'/>
        <StatItem count={rating} label='Rating' />
      </View>
    </View>
  );
};

export default RepositoryItem;