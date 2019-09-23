import React, {Component} from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


 class HomeScreen extends Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title='Go to profile' onPress={() => this.props.navigation.navigate('Profile')}/>
    </View>
  );
}
}
class ProfileScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>Profile screen</Text>
   <Button  
        title="Go to Profile... again"  
        onPress={() => this.props.navigation.push('Profile')}  
        />  
                
  <Button  
 title="Go to Home"  
  onPress={() => this.props.navigation.navigate('Home')}  
    />  
<Button  
title="Go back"  
 onPress={() => this.props.navigation.goBack()}  
  />  
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(  
  {  
      Home: HomeScreen,  
      Profile: ProfileScreen  
  },  
  {  
      initialRouteName: "Home"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
  render() {  
      return <AppContainer />;  
  }  
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
