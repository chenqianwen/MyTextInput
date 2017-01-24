/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TextInput
} from 'react-native';

export default class MyTextInput extends Component {
  render() {
    return (
      <Search/>
    );
  }
}

class Search extends Component{
  render(){
    return (
        <View style={[styles.flex,styles.flexDirection]}>
          <View style={[styles.flex,styles.searchInput,styles.topStatus]}>
            <TextInput placeholder='于静' placeholderTextColor='gainsboro' underlineColorAndroid="white" ></TextInput>
          </View >
            <View style={[styles.searchBtn,styles.topStatus]}>
                <Text style={styles.searchText}>搜索</Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
    flexDirection:{
        flexDirection:'row'
    },
    topStatus:{
        marginTop:25,
    },
    searchInput:{
       marginLeft:40,
        height:40,
        borderWidth:1,
        borderRadius:5,
        borderColor:'red'
    },
    searchBtn:{
      borderWidth:1,
        height:40,
        backgroundColor:'aqua',
        width:60,
        marginRight:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginLeft:-8
    },
    searchText:{
       fontSize:15,
        fontWeight:'bold',
    }
});

AppRegistry.registerComponent('MyTextInput', () => MyTextInput);
