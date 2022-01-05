import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import { TextInputC } from "../components/TextInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonC } from "../components/Button";
import { ItemCardHorizontalScrollView } from "../components/ItemCardHorizontalScrollView";
import { FONTSIZE } from "../static/FontSize";
import { BannerCarousel } from "../components/BannerCarousel";
import { images as img } from "../components/Images";
import { colors } from "../components/Color";

const images = [img.fh5, img.uc4, img.fh5, img.uc4];
const data = [
  {
    id: "1",
    width: 110, //200,
    height: 170, //250,
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
    width: 110, //200,
    height: 170, //250,
    footer: "fkljsdkldklgjdklgaerdgjergjdljdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/FIFA20.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "3",
    width: 110, //200,
    height: 170, //250,
    footer: "fkljsdklfjrvjdkldfjgjgdpovjdgjergjdljdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/FROZA.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "4",
    width: 110, //200,
    height: 170, //250,
    footer: "fkljsdklfjjdgkjdjaervjdkldfjgjgdpdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/HORIZON_ZERO_DAWN.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "5",
    width: 110, //200,
    height: 170, //250,
    footer: "fkljsdklfjkldfjgjgdpovjdgjergjdljdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/SPIDERMAN.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "6",
    width: 110, //200,
    height: 170, //250,
    footer: "fkljsdjaervjdkldfjgjgdpovjdgjergjdljdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/UNCHARTERED.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
];

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.rootContainer}>
    {/* Map-search */}
        <TextInputC
          textInputContainerStyle={{ height: 30, borderRadius: 5, borderColor: colors.FOREST_GREEN}}
          textInputStyle={{
            marginVertical: 0,
            marginRight: 0,
            //margin: 0,
            padding: 0,
            color: colors.FOREST_GREEN,
          }}
          icon={
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={16}
              color={colors.FOREST_GREEN}
            />
          }
        ></TextInputC>
     
      <View style={styles.searchContainer}>
        {/* <Button title={<Ionicons name="location-outline" size={24} color="black" />} /> */}
        {/* <ButtonC
          title={
            <MaterialCommunityIcons name="magnify" size={32} color="black" />
          }
          //textContainerStyle={{ backgroundColor: "red" }}
          textStyle={{
            backgroundColor: "white",
            alignSelf: "flex-end",
            //flex: 1,
            width: Dimensions.get('window').width*.75,
            padding: 10,
          }}
        ></ButtonC> */}
        <View
          style={
            { width: '100%', flex: 1 }
            //styles.searchTextInput
          }
        >
          {/* Search on page */}
          <TextInputC
            textInputContainerStyle={{borderRadius: 5, borderColor: colors.DIM_GRAY, height: 40}}
            textInputStyle={{
              flex:1,
              marginVertical: 0,
              marginRight: 0,
              fontSize: 18,
              color: colors.FOREST_GREEN,
            }}
            icon={
              <MaterialCommunityIcons name="magnify" size={24} color={colors.DIM_GRAY} />
            }
          ></TextInputC>
        </View>

        {/* Filter Icon  */}
        <ButtonC
        textContainerStyle={{ }}
          title={
            <MaterialCommunityIcons
              name="filter-outline"
              size={30}
              color={colors.FOREST_GREEN}
            />
          }
          //textContainerStyle={{ backgroundColor: "red" }}
          //titleShown={false}
          textStyle={{
            backgroundColor: "white",
            alignSelf: "flex-end",
            //padding: 10,
          }}
        ></ButtonC>
      </View>

      <BannerCarousel 
        imageHeight={168}
        style={{borderRadius: 5, margin: 10}}
        images={images} />

      <View
        style={{
          padding: 5,
          //alignSelf: "center",
        }}
      >
        <Text style={{ ...styles.headerText, }}>
          Popular Playstation 5 Games
        </Text>
      </View>
      <ScrollView>
        <ItemCardHorizontalScrollView
          headerShown={false}
          styles={{ flex: 1, }}
          headerTitle={"Header T1"}
          data={[...data]}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    //  flex: 1
  },
  searchContainer: {
    // flex: 1,
    //backgroundColor: "red",
    //width: Dimensions.get('window').width,

    flexDirection: "row",
    //alignSelf: 'stretch'
  },
  headerText: {
    fontSize: FONTSIZE.XLG,
  },
  searchTextInput: {
    //flex: 1,
    //width: Dimensions.get("window").width/2,
  },
});
