import React from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true }
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:100, paddingLeft: 50}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={{fontSize: 22}}>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}