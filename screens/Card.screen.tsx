import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  PixelRatio,
} from "react-native";

import { MediaCard } from "../components/MediaCard";
//import  {UploadImage}  from "../components/UploadImage";
// import  {ImagePickerComponent}  from "../components/ImagePickerComponent";
import { ItemCardHorizontalScrollView } from "../components/ItemCardHorizontalScrollView";
import { getSIZE, SIZE } from "../static/SIZE";
import { ItemCardSmall } from "../components/ItemCardSmall";
const data = [
  {
    id: "1",
    width: 200,
    height: 250,
    footer:
      "fkljsdklfjdkflgjfgkldgjdklgjdfgkldfjgkldjgdklgjdklgjdgkljdgkjdfgkljdgldjgljdgljdflklfljsfkljaervjdkldfjgjgdpovjdgjergjdljdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/BF5.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "2",
    width: 200,
    height: 250,
    footer: "fkljsdkldklgjdklgaerdgjergjdljdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/FIFA20.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "3",
    width: 200,
    height: 250,
    footer: "fkljsdklfjrvjdkldfjgjgdpovjdgjergjdljdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/FROZA.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "4",
    width: 200,
    height: 250,
    footer: "fkljsdklfjjdgkjdjaervjdkldfjgjgdpdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/HORIZON_ZERO_DAWN.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "5",
    width: 200,
    height: 250,
    footer: "fkljsdklfjkldfjgjgdpovjdgjergjdljdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/SPIDERMAN.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "6",
    width: 200,
    height: 250,
    footer: "fkljsdjaervjdkldfjgjgdpovjdgjergjdljdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/UNCHARTERED.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
];

export const CardScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <Text>{`Device Width ${Dimensions.get("window").width}`}</Text>
      <Text>{`Device Height=${Dimensions.get("window").height}`}</Text>
      <Text>{`getFontScale()=${PixelRatio.getFontScale()}`}</Text>
      <Text>{`DiSPLAY scale=${PixelRatio.get()}`}</Text>
      <Text>{`Actual Width scale=${PixelRatio.roundToNearestPixel(Dimensions.get("window").width)*Dimensions.get("window").scale}`}</Text>
      <Text>{`Layout=${PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').width)}`}</Text> */}
      
      <ItemCardHorizontalScrollView
        headerTitle={"Header T1"}
        data={[...data]}
      />
      {/* <UploadImage/> */}
      {/* <ImagePickerComponent/> */}
      {/* <MediaCard
        title={"Battlefield V"}
        imageStyle={{ width: 120, height: 180 }}
        price={50000}
        icon={{
          uri: "https://picsum.photos/200/300",
          image: require("../assets/images/igdb/UNCHARTERED.jpg"),
        }}
        source={{ image: require("../assets/images/igdb/BF5.jpg") }}
      /> */}
      {/* <UploadImage/>  */}
      {/* <ItemCardSmall 
                width={250}
                height={350}
                imageTitle='Battle Field 5'
                imageTitleContainerStyle={{backgroundColor: 'red',}}
                price={10}
                priceTextStyle={{backgroundColor: 'red', textAlign: 'center'}}
                source={{uri: 'https://picsum.photos/200/300', image: require("../assets/images/igdb/BF5.jpg")}}  
            /> */}
      {/* {console.log(getSIZE(SIZE.l5))} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    opacity: 0.8,
    color: "white",
    shadowRadius: 2,
    shadowOpacity: 0.8,
    overflow: "hidden",
    elevation: 2,
  },
  touchable: {
    flex: 1,
    backgroundColor: "grey",
    width: "auto",
    height: 200,
    margin: 15,
    //marginVertical: 15
    borderRadius: 10,
    paddingBottom: "7%",
    //marginRight: 30,
    overflow: "hidden",
  },
  //image region container
  header: {
    // margin: 10,
    //borderRadius: 10,
    //padding: 10,
  },

  titleView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: "5%",
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontWeight: "bold",
    fontSize: 30,
    //shadowOpacity: 0.5,
    //shadowColor: 'grey',
    opacity: 0.8,
    color: "white",
    shadowRadius: 2,
    shadowOpacity: 0.8,
  },
  footerView: {
    //flex:1,
    height: "10%",
    backgroundColor: "grey",
    alignItems: "center",
  },
  footer: {
    color: "white",
  },
});
