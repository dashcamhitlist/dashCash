
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';


class HomeScreen extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
          <Text>
            Welcome to Your DashCam 
          </Text>

          <TouchableOpacity
            style={styles.recordingButtons}
            onPress={() => {this.props.navigation.navigate('Camera')}}
          >
            <Text style={styles.submitButtonText}>
              Start DashCam
            </Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  recordingButtons: {
    backgroundColor: 'lightgray',
    borderColor: 'lightblue',
    borderWidth: 1,
    padding: 10,
    margin: 15,
    width: 200,
    height: 40,
  },
});

export default HomeScreen;