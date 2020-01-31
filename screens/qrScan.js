import React from 'react';
import {View, Text, StyleSheet,Button,Alert} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
// import {FontAwesome} from "@expo/vector-icons";

export default class camera extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hasCameraPermission : null,
            lastScannedUrl : null,
            scanned: false
        }
    }
    
    static navigationOption = {
        title: "Camera-camera"
    }
    async componentDidMount(){
        const {status} = await Permissions.askAsync(Permissions.CAMERA);                //Whenever asking for permission, all should be in caps
        this.setState({
            hasCameraPermission: status==="granted"
        })
    }


    handleBarCodeScanned = ({type,data}) => {
        this.setState({
          scanned: true
        });
        Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };

   
    render(){
        const{hasCameraPermission} = this.state;

        if(hasCameraPermission===null){
           return  <View></View>
        }
        else if(hasCameraPermission===false){
            return <View><Text>No access to camera!!!</Text></View>
        }
        else{
            return(
                <View style={styles.container}>
                    <BarCodeScanner
                    onBarCodeScanned={
                        this.state.scanned? undefined : this.handleBarCodeScanned
                    }
                    style = {styles.cameraView}
                    />
                    {
                        this.state.scanned && (<Button 
                            title={"Scan again"}
                            onPress={()=>this.setState({
                                scanned:false
                            })}></Button>)
                    }
                </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cameraView : {
      flex: 1,
  
    },
  });