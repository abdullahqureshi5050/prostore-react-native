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
    width: 90, //200,
    height: 120, //250,
    imageTitle: "Battle Field V",
    footer: "fkljsdklfjdkflgjfgkldldfjgjgdpovjdgjergjdljdfl",

    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: '20%'
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: 'center',
      fontSize: FONTSIZE[11],
      flex:1,
      height: '100%'
    },
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/BF5.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "2",
    width: 90, //200,
    height: 120, //250,
    imageTitle: "FIFA20",
    footer: "fkljsdkldklgjdklgaerdgjergjdljdfl",
    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: '20%'
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: 'center',
      fontSize: FONTSIZE[11],
      height: '100%'
    },
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/FIFA20.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "3",
    width: 90, //200,
    height: 120, //250,
    imageTitle: "FROZA HORIZON 4",
    footer: "fkljsdklfjrvjdkldfjgjgdpovjdgjergjdljdfl",
    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: '20%'
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: 'center',
      fontSize: FONTSIZE[11],
      flex:1,
      height: '100%'
    },
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/FROZA.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "4",
    width: 90, //200,
    height: 120, //250,
    imageTitle: "HORIZON ZERO DAWN",
    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: '20%'
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: 'center',
      fontSize: FONTSIZE[11],
      flex:1,
      height: '100%'
    },
    footer: "fkljsdklfjjdgkjdjaervjdkldfjgjgdpdfl",
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/HORIZON_ZERO_DAWN.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "5",
    width: 90, //200,
    height: 120, //250,
    imageTitle: "SPIDERMAN",
    footer: "fkljsdklfjkldfjgjgdpovjdgjergjdljdfl",
    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: '20%'
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: 'center',
      fontSize: FONTSIZE[11],
      flex:1,
      height: '100%'
    },
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/SPIDERMAN.jpg"),
      uri: "https://picsum.photos/200/300",
    },
    imageTitleNumberOfLines: 2,
  },
  {
    id: "6",
    width: 90, //200,
    height: 120, //250,
    imageTitle: `UNCHARTED DRAKE'S FORTUNE`,
    footer: "fkljsdjaervjdkldfjgjgdpovjdgjergjdljdfl",
    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: '20%'
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: 'center',
      fontSize: FONTSIZE[11],
      flex:1,
      height: '100%'
    },
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/UNCHARTERED.jpg"),
      uri: "https://picsum.photos/200/300",
    },
    imageTitleNumberOfLines: 2,
  },

  // {
  //   id: "7",
  //   width: 90, //200,
  //   height: 120, //250,
  //   imageTitle: `MORE`,
  //   footer: "fkljsdjaervjdkldfjgjgdpovjdgjergjdljdfl",
  //   imageTitleContainerStyle: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //     height: '20%'
  //   },
  //   // imageTitleTextStyle: {
  //   //   textAlign: "center",
  //   //   // android-only-prop
  //   //   textAlignVertical: 'center',
  //   //   fontSize: FONTSIZE[11],
  //   //   flex:1,
  //   //   height: '100%'
  //   // },
  //   footerStyles: { justifyContent: "center", alignItems: "center" },
  //   source: {
  //     image: require("../assets/images/More.png"),
  //     //uri: "https://picsum.photos/200/300",
  //   },
  //   //imageTitleNumberOfLines: 2,
  // },
];

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.rootContainer}>

      {/* Map-search */}
      <TextInputC
        textInputContainerStyle={{
          height: 30,
          borderRadius: 5,
          borderColor: colors.FOREST_GREEN,
        }}
        textInputStyle={{
          marginVertical: 0,
          marginRight: 0,
          //margin: 0,
          padding: 0,
          color: colors.FOREST_GREEN,
          fontSize: FONTSIZE.SM
        }}
        icon={
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={17}
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
            { width: "100%", flex: 1 }
            //styles.searchTextInput
          }
        >
          {/* Search on page */}
          <TextInputC
            textInputContainerStyle={{
              borderRadius: 5,
              borderColor: colors.DIM_GRAY,
              height: 40,
            }}
            textInputStyle={{
              flex: 1,
              marginVertical: 0,
              marginRight: 0,
              fontSize: FONTSIZE.SM,
              color: colors.DARK_GRAY,
            }}
            placeholder="Search Items to Buy"
            icon={
              <MaterialCommunityIcons
                name="magnify"
                size={24}
                color={colors.DIM_GRAY}
              />
            }
          ></TextInputC>
        </View>

        {/* Filter Icon  */}
        <ButtonC
          textContainerStyle={{}}
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
        style={{ borderRadius: 5, margin: 10 }}
        images={images}
      />

      <View
        style={{
          padding: 5,
          //alignSelf: "center",
        }}
      >
        <Text style={{ ...styles.headerText }}>
          Popular Playstation 5 Games
        </Text>
      </View>
      <ScrollView>
        <ItemCardHorizontalScrollView
          headerShown={false}
          // imageTitleNumberOfLines={3}
          styles={{ flex: 1 }}
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
    fontSize: FONTSIZE.MD,
  },
  searchTextInput: {
    //flex: 1,
    //width: Dimensions.get("window").width/2,
  },
});
