import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator} from 'react-native';
import theme from '../utils/theme';
import RepositoryItem from './RepositoryItem';

import useRepositories from '../hooks/useRepositories'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
  },
  separator: {
    height: theme.gaps.itemGap
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%'
  }
});


const ItemSeparator = () => <View style={styles.separator} />;
const renderItem = ({ item }) => <RepositoryItem data={item}/>;


const RepositoryList = () => {
  const {repositories, loading} = useRepositories();

  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  if (loading) return <View style={styles.loading}><ActivityIndicator size='large'/></View>
  
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      style={styles.container}
      />
  );
};

export default RepositoryList;