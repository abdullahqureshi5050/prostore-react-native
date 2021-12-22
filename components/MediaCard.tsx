import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageSourcePropType,
  Platform,
} from "react-native";

type mediaCardProps = {
  cardStyle?: object | any;
  imageContainerStyle?: object | any;
  imageStyle?: object | any;
  titleContainerStyle?: object | any;
  titleStyle?: object | any;
  priceTextStyle?: object | any;
  iconContainerStyle?: object | any;
  iconStyle?: object | any;
  title: string | undefined;
  price: number | undefined;
  source: {
    image?: object | string | ImageSourcePropType | undefined;
    uri?: string | undefined;
  };
  icon: {
    image?: string | ImageSourcePropType | undefined;
    uri?: string | undefined;
  };
};

export const MediaCard = (props: mediaCardProps) => {
  const windowDimention = Dimensions.get("window");
  //Now calculate ratio as
  const RATIO_FACTOR = 3;
  const ACTUAL_IMAGE_WIDTH = 528;
  const ACTUAL_IMAGE_HEIGHT = 703;
  const ratio = windowDimention.width / ACTUAL_IMAGE_WIDTH;
  const mediaImageHeight = (ACTUAL_IMAGE_HEIGHT * ratio) / RATIO_FACTOR;

  const [titleState, setTitleState] = useState("TITLE");
  const [priceState, setPriceState] = useState(0);

  useEffect(() => {
    props.title && setTitleState(props.title);
  }, [props.title]);

  useEffect(() => {
    props.price && setPriceState(props.price);
  }, [props.price]);

  return (
    <View style={styles.root}>
      <View
        style={{
          width: windowDimention.width / RATIO_FACTOR,
          height: mediaImageHeight,
          shadowRadius: 3,
          shadowOpacity: 1,
          margin: 5,
          //shadowColor: 'black',
          shadowOffset: ({width: 1, height: undefined}),
        
          ...props.imageContainerStyle,
        }}
      >
        <Image
          source={
            (props.source?.image as ImageSourcePropType) || {
              uri: props.source?.uri,
            }
          }
          //resizeMode={'contain'}
          style={{ ...styles.imageStyle, ...props.imageStyle }}
          width={windowDimention.width / RATIO_FACTOR}
          height={mediaImageHeight}
        />
      </View>
      <View style={{ ...styles.titleContainer, ...props.titleContainerStyle }}>
        <Text style={{ ...styles.titleText, ...props.titleStyle }}>
          {titleState}
        </Text>
        <Text style={{ ...styles.priceText, ...props.priceTextStyle }}>
          RS {props.price}/-
        </Text>
        <View style={{ ...styles.iconContainer, ...props.iconContainerStyle }}>
          <Image
            source={
              (props.icon?.image as ImageSourcePropType) || {
                uri: props.icon?.uri,
              }
            }
            style={{ width: 50, height: 50, ...props.iconStyle }}
            //resizeMode={'contain'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "green",
    borderWidth: 2,
    //overflow: "hidden",
  },

  imageStyle: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },

  titleText: {
    fontSize: 20,
    flex: 4,
  },

  titleContainer: {
    flex: 1,
  },
  priceText: {
    flex: 2,
    fontSize: 20,
  },
  iconContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 5,
  },
});
