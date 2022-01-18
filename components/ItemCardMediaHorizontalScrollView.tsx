import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
} from "react-native";
import { FONTSIZE } from "../static/FontSize";
import { colors } from "./Color";

export interface ImageProps {
  //imageStyle?: StyleProp<ImageStyle> | undefined;
  style?: ViewStyle | undefined;
  imageHeight: number;
  imageWidth: number;
  source: {
    image?: ImageSourcePropType;
    uri?: any;
  };
}

export const ItemCardMediaHorizontalScrollView = (props: ImageProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            width: props.imageWidth,
            height: props.imageHeight,
          }}
          source={
            (props.source?.image as ImageSourcePropType) || {
              uri: props.source?.uri,
            }
          }
        />
        <View>
          <Text style={{ fontSize: FONTSIZE?.[11], fontWeight: "bold" }}>
            Media Card Comming soon..
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={16}
              color={colors.BLACK}
            />
            <Text style={{ fontSize: FONTSIZE?.[11] }}>Location</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <MaterialCommunityIcons
              name="clock-time-three-outline"
              size={16}
              color={colors.BLACK}
            />
            <Text style={{ fontSize: FONTSIZE?.[11] }}>time stamp</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
