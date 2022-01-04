import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { ButtonC } from "../components/Button";
export const ProductScreen = (props: any) => {
  return (
    <View style={styles.root}>
      <Text>Product Screen</Text>
      <DetailsCard />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: 'space-between'
  },
  CardContainer: {
      borderWidth: 1,
      borderColor: 'white',
      height: Dimensions.get('window').height * .4,
      //inside - same axis
      justifyContent: 'space-between',
      //inside - cross axis 
      //alignItems: 'center',
      //alignContent: 'center',
      //alignSelf: 'flex-start',
      //flex: 4,
  },
});

const DetailsCard = () => {
  return (
    //   <View style={{flexDirection: 'row' }}>
    <View style={styles.CardContainer}>
       <View> 
      <Text>Title</Text>
      <Text>Details Paragraph</Text>
      </View>
      <ButtonC title={"Add To My Cart"}></ButtonC>
    </View>
    // </View>
  );
};
