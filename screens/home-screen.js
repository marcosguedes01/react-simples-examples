import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { menuMain } from "../data/menu-main";

export class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
        <FlatList
          data={menuMain}
          renderItem={({item}) => 
            <Text onPress={() => navigate(item.screenName, {name: item.screenName})} 
                  style={styles.item}>{item.key}</Text>}
        />
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 0
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });