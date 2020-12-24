import React from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
  },
  separator: {
    height: theme.gaps.itemGap
  },
});


const ItemSeparator = () => <View style={styles.separator} />;
const renderItem = ({ item }) => <RepositoryItem data={item}/>;


const RepositoryList = () => {
  const [repositories, setRepositories] = React.useState();

  const fetchRepositories = async () => {
    try{

      const url = 'http://192.168.43.6:5000/api/repositories'
      const response = await fetch(url);
      const json = await response.json();
      
      console.log(json);
      
      setRepositories(json);
    } catch(e){
      console.log('vituiks meni', e)
    }
  };

  React.useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];


    
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