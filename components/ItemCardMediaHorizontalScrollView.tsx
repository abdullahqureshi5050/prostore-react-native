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

type mediaCardProps = {
  //imageStyle?: StyleProp<ImageStyle> | undefined;
  style?: ViewStyle | undefined;
  imageHeight?: number | string;
  imageWidth?: number | string;
  imageSource: {
    image?: ImageSourcePropType;
    uri?: any;
  };
  iconSource?: {
    image?: ImageSourcePropType;
    uri?: any;
  };
  iconHeight?: number | string;
  iconWidth?: number | string;
  title: string;
  subTitle1?: string;
  subTitle2?: string;
  subTitleIcon1?: any;
  subTitleIcon2?: any;
};

export const ItemCardMediaHorizontalScrollView = (props: mediaCardProps) => {
  return (
    <View
      style={{
        //flex:1,
        width: 200,
        height: 104,
        flexDirection: "row",
        alignSelf: "baseline",
        justifyContent: "space-between",
        //borderWidth: 1,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: colors.WHITE,
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          //resizeMode='contain'
          style={{
            width: props.imageWidth ? props.imageWidth : 78,
            height: props.imageHeight ? props.imageHeight : 104,
          }}
          source={
            (props.imageSource?.image as ImageSourcePropType) || {
              uri: props.imageSource?.uri,
            }
          }
        />
        <View
          style={{
            marginTop: 5,
            marginHorizontal: 8,
            marginBottom: 4,
          }}
        >
          <View
            style={
              {
                //backgroundColor: 'purple',
              }
            }
          >
            <Image
              resizeMode="contain"
              style={{
                height: props.iconHeight ? props.iconHeight : 12,
                width: props.iconWidth ? props.iconWidth : 52,
                alignItems: "flex-start",
                alignSelf: "baseline",
                alignContent: "flex-start",
              }}
              source={
                (props.iconSource?.image as ImageSourcePropType) || {
                  uri: props.iconSource?.uri,
                }
              }
            ></Image>
          </View>
          <View style={{ marginTop: 8, height: 30, width: 109 }}>
            <Text
              numberOfLines={2}
              style={{
                fontSize: FONTSIZE?.[11],
                fontWeight: "bold",
                flex: 1,
                textAlignVertical: 'center',
              }}
            >
              { props.title }
            </Text>
          </View>
          <View style={{ marginLeft: 2 }}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
             {props.subTitleIcon1}
              <Text style={{ fontSize: FONTSIZE?.[11], marginLeft: 5 }}>
                {props.subTitle1}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              {props.subTitleIcon2}
              <Text style={{ fontSize: FONTSIZE?.[11], marginLeft: 5 }}>
                {props.subTitle2}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
