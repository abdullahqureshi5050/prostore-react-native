import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  Dimensions,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { Nav } from "../navigation/Nav";
import { KeyboardAvoidingC } from "../components/AvoidKeyboardView";

// const find_dimesions =(layout: any)=>{
//   const {x, y, width, height} = layout;
//   console.warn(x);
//   console.warn(y);
//   console.warn(width);
//   console.warn(height);
// }
export const TempScreen = () => {

  const [fullWidthState, setFullWidthState] = useState(0);

  const [comp1WidthState, setComp1WidthState] = useState(0);

  const [comp2WidthState, setComp2WidthState] = useState(0);

  return (
  //   <View style={styles.root}
  //   onLayout={(e)=>{
  //     const {x, y, width, height}= e.nativeEvent.layout
  //     Alert.alert('Alert', `width= ${width} height=${height}`)
  // }}
  //   //onLayout={(event) => { find_dimesions(event.nativeEvent.layout) }}
  //   >
  //     {/* <TouchableOpacity activeOpacity={0.9} onPress={()=>{
  //       }} >
  //           <View>
  //               <Text>Box 1</Text>
  //           </View>
  //       </TouchableOpacity> */}
  //     <Text>{`Device Width ${Dimensions.get("window").width}`}</Text>
  //     <Text>{`Device Height=${Dimensions.get("window").height}`}</Text>
  //     <Text>{`getFontScale()=${PixelRatio.getFontScale()}`}</Text>
  //     <Text>{`Dimensions.get("window").scale=${Dimensions.get("window").scale}`}</Text>
  //     <Text>{`DiSPLAY scale PixelRatio.get()=${PixelRatio.get()}`}</Text>
  //     <Text>{`Actual Width scale=${PixelRatio.roundToNearestPixel(Dimensions.get("window").width)*Dimensions.get("window").scale}`}</Text>
  //     <Text>{`Layout=${PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').width)}`}</Text>
      
  //     {/* <Text style={styles.size11}>Size 11</Text>
  //     <Text style={styles.size14}>Size 14</Text>
  //     <Text style={styles.size20}>Size 20</Text>
  //     <Text style={styles.size32}>Size 32</Text>
  //     <Text style={styles.size40}>Size 40</Text> */}
  //     <Text 
  //       onLayout={(e)=>{
  //         const {x, y, width, height}= e.nativeEvent.layout
  //         Alert.alert('Alert', `width= ${width} height=${height}`)
  //     }}
  //      style={styles.size72}>Size 72</Text>
  //   </View>
  <View>
    <View
      onLayout={(e) => {
        const { x, y, width, height } = e.nativeEvent.layout;
        setFullWidthState(width);
      }}
      style={{ flexDirection: "row" }}
    >
      <View style={{ alignItems: "baseline" }}>
        <Text
          onLayout={(e) => {
            const { x, y, width, height } = e.nativeEvent.layout;
            setComp1WidthState(width);
          }}
          style={{ fontSize: 72, borderWidth: 1, backgroundColor: "red" }}
        >
          Size 72
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          onLayout={(e) => {
            const { x, y, width, height } = e.nativeEvent.layout;
            setComp2WidthState(width);
          }}
          style={{ fontSize: 36, borderWidth: 1, backgroundColor: "blue" }}
        >
          Size 36
        </Text>
      </View>
    </View>
    <View style={{flexDirection: 'column'}}>
    <Button title='width' onPress={()=>{Alert.alert('Width', ` entire= ${fullWidthState} component 1= ${comp1WidthState} component 2= ${comp2WidthState}`) }}/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    //justifyContent: 'space-around',
    //alignContent: 'center',
    //flex: 1,
    margin: 10,
    borderWidth: 1,
  },
  size11: {
    fontSize: 11,
  },
  size14: {
    fontSize: 14,
  },
  size20: {
    fontSize: 20,
  },
  size32: {
    fontSize: 32,
  },
  size40: {
    fontSize: 40,
  },
  size72: {
    fontSize: 72,
  },
});
