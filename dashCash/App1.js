import React, {Component} from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';


// SCREENS
import HomeScreen from './views/HomeScreen';
import CameraScreen from './views/CameraScreen';
// import { CameraScreen, HomeScreen } from './views';

class App1 extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <AppContainer />
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Camera: {
    screen: CameraScreen
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default App1;