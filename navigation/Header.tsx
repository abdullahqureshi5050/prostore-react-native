import React from 'react';
import { View, StyleSheet, Text, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../components/Color';
import { FONTSIZE } from '../static/FontSize';

type headerProps = {
    headerRight?: any
    headerLeft?: any
    title?: string
}

export const Header = (props: any) => {
    const { headerRight, headerLeft, title } = props;
    return (
      <View
        style={{
          paddingHorizontal: 10,
          height: 40,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.FOREST_GREEN,
          //backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              justifyContent: "center",
            }}
          >
            {headerLeft}
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              justifyContent: "center",
              //backgroundColor: 'purple',
              display: "flex",
              width: "84%",
            }}
          >
            <Text
              numberOfLines={2}
              style={{
                color: colors.FOREST_GREEN,
                fontSize: FONTSIZE?.SM,
              }}
            >
              {title ? title : ""}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            //backgroundColor: 'pink',
            //alignSelf:'center',
          }}
        >
          {headerRight}
        </View>
      </View>
    );
  }