import React from 'react';
import { Text, View } from 'react-native';

export class Greeting extends React.Component {
    render() {
        return (
        <View style={{alignItems: 'center'}}>
            <Text>Hello {this.props.name}!</Text>
        </View>
        );
    }
}