import React from 'react';
import { StyleSheet, View,Button, Image } from 'react-native';

export default class Home extends React.Component {


    static navigationOption = {
        title: "Treasure Hunt!"
    }
    render(){

  return (
    <View style={styles.container}>
      <Image
      resizeMode="center"
      style = {styles.imageHolder}
      source={require("../assets/icons10.png")}
      />

      <Button
      title="LET'S EXPLORE!!!"
      style = {styles.button}
      onPress = {()=>{
          this,this.props.navigation.navigate("Camera")
      }}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHolder:{
    alignSelf:"center",
    height:500,
    margin: 20
  },
  button: {
    margin: 20
  }
});