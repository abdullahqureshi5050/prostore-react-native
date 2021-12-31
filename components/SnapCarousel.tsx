import Carousel from "react-native-snap-carousel";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageSourcePropType,
} from "react-native";
import { images as img } from "./Images";

const images = [img.fh5, img.uc4, img.fh5, img.uc4];

function _renderItemFunc(props: any) {
  return (
    <View
      style={{
        backgroundColor: "floralwhite",
        borderRadius: 5,
        height: 250,
        padding: 50,
        overflow: "hidden",
        marginLeft: 25,
        marginRight: 25,
      }}
    >
      <Image
        style={{
          height: 250,
          position: "absolute",
          width: 250,
        }}
        source={props}
        //resizeMode={"contain"}
      />
    </View>
  );
}

export const SnapCarousel = (props: any) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "rebeccapurple", paddingTop: 50 }}
    >
      <View style={{ alignItems: 'center' }}>
      <Carousel
        style={{}}
          layout={"default"}
          //ref={ref => this.carousel = ref}
          data={images}
          sliderWidth={300}
          itemWidth={300}
          renderItem={({ item }) => {
            return _renderItemFunc(item);
          }}
          onSnapToItem={(index) => index}
        />
      </View>
    </SafeAreaView>
  );
};
