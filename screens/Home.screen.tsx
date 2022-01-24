import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInputC } from "../components/TextInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonC } from "../components/Button";
import { ItemCardHorizontalScrollView } from "../components/ItemCardHorizontalScrollView";
import { FONTSIZE } from "../static/FontSize";
import { BannerCarousel } from "../components/BannerCarousel";
import { images as img } from "../components/Images";
import { colors } from "../components/Color";
import { ShadowC } from "../components/Shadow";
import { MediaCard } from "../components/MediaCard";
import { ItemCardSmall } from "../components/ItemCardSmall";
import { ItemCardMediaHorizontalScrollView } from "../components/ItemCardMediaHorizontalScrollView";
import { Header } from "../navigation/Header";
import { StackActions } from "@react-navigation/native";

const images = [img.fh5, img.uc4, img.fh5, img.uc4];
const data = [
  {
    id: "1",
    width: 108, //200,
    height: 144, //250,
    imageTitle: "Battle Field V",
    footer: "fkljsdklfjdkflgjfgkldldfjgjgdpovjdgjergjdljdfl",

    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      //height: '10%'
    },

    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: "center",
      fontSize: FONTSIZE?.[11],
      flex: 1,
      height: 36,
    },

    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/BF5.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "2",
    width: 108, //200,
    height: 144, //250
    imageTitle: "FIFA20",
    footer: "fkljsdkldklgjdklgaerdgjergjdljdfl",
    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: 36,
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: "center",
      fontSize: FONTSIZE?.[11],
      height: 36,
    },
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/FIFA20.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "3",
    width: 108, //200,
    height: 144, //250
    imageTitle: "FROZA HORIZON 4",
    footer: "fkljsdklfjrvjdkldfjgjgdpovjdgjergjdljdfl",
    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: 36,
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: "center",
      fontSize: FONTSIZE?.[11],
      flex: 1,
      height: 180,
    },
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/FROZA.jpg"),
      uri: "https://picsum.photos/200/300",
    },
  },
  {
    id: "4",
    width: 108, //200,
    height: 144, //250
    imageTitle: "HORIZON ZERO DAWN",
    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: 36,
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: "center",
      fontSize: FONTSIZE?.[11],
      flex: 1,
      height: 36,
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
    width: 108, //200,
    height: 144, //250
    imageTitle: "SPIDERMAN",
    footer: "fkljsdklfjkldfjgjgdpovjdgjergjdljdfl",
    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: 36,
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: "center",
      fontSize: FONTSIZE?.[11],
      flex: 1,
      height: "100%",
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
    width: 108, //200,
    height: 144, //250
    imageTitle: `UNCHARTED DRAKE'S FORTUNE`,
    footer: "fkljsdjaervjdkldfjgjgdpovjdgjergjdljdfl",
    imageTitleContainerStyle: {
      justifyContent: "center",
      alignItems: "center",
      height: 36,
    },
    imageTitleTextStyle: {
      textAlign: "center",
      // android-only-prop
      textAlignVertical: "center",
      fontSize: FONTSIZE?.[11],
      flex: 1,
      height: "100%",
    },
    footerStyles: { justifyContent: "center", alignItems: "center" },
    source: {
      image: require("../assets/images/igdb/UNCHARTERED.jpg"),
      uri: "https://picsum.photos/200/300",
    },
    imageTitleNumberOfLines: 2,
  },
];

export const HomeScreen = (props: any) => {
  const [itemSearchFocusedState, setItemSearchFocusedState] = useState(false);

  useEffect(() => {
    return () => {};
  }, [itemSearchFocusedState]);

  return (
    <View>
      {itemSearchFocusedState ? (
        <Header
          {...props}
          title={"Search"}
          headerLeft={
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={20}
              color={colors.FOREST_GREEN}
              onPress={() => {
                try {
                  Keyboard.dismiss();
                  setItemSearchFocusedState(false);
                } catch (error: any) {
                  Alert.alert("Alert!", error);
                }
              }}
            />
          }
          //headerRight={{} }
        />
      ) : (
        <Header
          {...props}
          title={"Arfa Tower, Lahore."}
          headerLeft={
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={20}
              color={colors.FOREST_GREEN}
              // onPress={() => {
              //   try {
              //     props.navigation.navigate({
              //       //name = "component" in stack navaigation, not screen prop "name" property.
              //       name: "Map Search",
              //     });
              //   } catch (error: any) {
              //     Alert.alert("Alert!", error);
              //   }
              // }}
            />
          }
          headerRight={
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={colors.FOREST_GREEN}
              onPress={() => {
                try {
                  props.navigation.navigate({
                    //name = "component" in stack navaigation, not screen prop "name" property.
                    name: "NotificationScreen",
                  });
                } catch (error: any) {
                  Alert.alert("Alert!", error);
                }
              }}
            />
          }
        />
      )}
      <View style={styles.rootContainer}>
        {/* Map-search-button */}
        {/* <ButtonC
        onPress={() => {
          try {
            props.navigation.navigate({
              //name = "component" in stack navaigation, not screen prop "name" property.
              name: "Map Search",
            });
          } catch (error: any) {
            Alert.alert("Alert!", error);
          }
        }}
        textContainerStyle={{
          marginTop: 10,
          height: 30,
          borderRadius: 5,
          borderColor: colors.FOREST_GREEN,
          // backgroundColor: 'green',
          alignItems: "flex-start",
          shadowColor: colors.FOREST_GREEN,
          borderWidth: 1,
          //borderRadius: 1,
          // elevation: 5,
        }}
        title={
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={17}
            color={colors.FOREST_GREEN}
          />
        }
        //textContainerStyle={{ backgroundColor: "red" }}
        //titleShown={false}
        textStyle={{
          marginLeft: 5,
          // padding: 0,
          // justifyContent: 'center' , alignContent: 'center',
          // textAlign: 'center', alignItems: 'center',
          //backgroundColor: 'red',
          // alignSelf: "flex-end",
          //padding: 10,
        }}
      ></ButtonC> */}

        {/* <TextInputC
        textInputContainerStyle={{
          marginTop: 10,
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
          fontSize: FONTSIZE?.SM
        }}
        icon={
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={17}
            color={colors.FOREST_GREEN}
          />
        }
      ></TextInputC> */}

        <TouchableWithoutFeedback>
          <View style={styles.searchContainer}>
            <View
              style={
                { width: "100%", flex: 1 }
                //styles.searchTextInput
              }
              //onPress={Keyboard.dismiss}
              //accessible={false}
            >
              {/* Search on page */}
              <TextInputC
                onFocus={() => setItemSearchFocusedState(true)}
                //onBlur={() => setItemSearchFocusedState(false)}
                textInputContainerStyle={{
                  borderRadius: 5,
                  borderColor: colors.DIM_GRAY,
                  backgroundColor: colors.DIM_GRAY,
                  height: 40,
                  marginRight: 0,
                  flex: 1,
                }}
                textInputStyle={{
                  flex: 1,
                  marginVertical: 0,
                  marginRight: 0,
                  fontSize: FONTSIZE?.SM,
                  color: colors.DARK_GRAY,
                }}
                placeholder="Search Items to Buy"
                icon={
                  <MaterialCommunityIcons
                    name="magnify"
                    size={24}
                    color={colors.DARK_GRAY}
                  />
                }
              ></TextInputC>
            </View>

            {/* Filter Icon  */}

            {/* <ShadowC> */}
            <ButtonC
              textContainerStyle={{
                marginLeft: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                borderColor: colors.FOREST_GREEN,
                shadowColor: colors.FOREST_GREEN,
                borderWidth: 1,
                //borderRadius: 1,
                elevation: 5,
              }}
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
                margin: 0,
                // padding: 0,
                // justifyContent: 'center' , alignContent: 'center',
                // textAlign: 'center', alignItems: 'center',
                backgroundColor: colors.WHITE,
                // alignSelf: "flex-end",
                //padding: 10,
              }}
            ></ButtonC>
            {/* </ShadowC> */}
          </View>
        </TouchableWithoutFeedback>

        {!itemSearchFocusedState && (
          <ScrollView
            style={{
              // marginBottom will set scroll bottom offset beyond max range to scroll futher.
              marginBottom: 200,
              //paddingTop: 10,
            }}
          >
            <BannerCarousel
              imageHeight={168}
              style={{ borderRadius: 5 }}
              images={images}
            />

            <View
              style={{
                marginTop: 10,
                //padding: 5,
                //alignSelf: "center",
              }}
            >
              <Text style={{ ...styles.headerText }}>
                Popular Playstation 5 Games
              </Text>
            </View>
            <ItemCardHorizontalScrollView
              headerShown={false}
              // imageTitleNumberOfLines={3}
              styles={{ flex: 1 }}
              headerTitle={"Header T1"}
              data={[...data]}
            />

            <View
              style={{
                marginTop: 10,
                //padding: 5,
                //alignSelf: "center",
              }}
            >
              <Text style={{ ...styles.headerText }}>
                Games Selling Near Now
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <ItemCardMediaHorizontalScrollView
                imageSource={{ image: img.igdb.spidermanMarvel }}
                title=" Media Card"
                subTitle1="Arfa Tower"
                subTitle2="10 Minutes Ago"
                subTitleIcon1={
                  <MaterialCommunityIcons
                    name="map-marker-outline"
                    size={16}
                    color={colors.BLACK}
                  />
                }
                subTitleIcon2={
                  <MaterialCommunityIcons
                    name="clock-time-three-outline"
                    size={16}
                    color={colors.BLACK}
                  />
                }
                //imageHeight={104}
                //imageWidth={78}
                iconSource={{ image: img.icon.ps4 }}
                //iconHeight={12}
                //iconWidth={52}
              />
            </View>

            <View
              style={{
                marginTop: 10,
                //padding: 5,
                //alignSelf: "center",
              }}
            >
              <Text style={{ ...styles.headerText }}>Games You Like</Text>
            </View>

            <View style={{ marginTop: 10, marginBottom: 20 }}>
              <ItemCardMediaHorizontalScrollView
                imageSource={{ image: img.igdb.guardiansOfTheGalaxyMarvel }}
                title="guardians of the Galaxy"
                subTitle1="From 5000 Rs"
                subTitle2="45 Listenings"
                subTitleIcon1={
                  <MaterialCommunityIcons
                    name="cash"
                    size={16}
                    color={colors.BLACK}
                  />
                }
                subTitleIcon2={
                  <MaterialCommunityIcons
                    name="card-text-outline"
                    size={16}
                    color={colors.BLACK}
                  />
                }
                //imageHeight={104}
                //imageWidth={78}
                iconSource={{ image: img.icon.ps4 }}
                //iconHeight={12}
                //iconWidth={52}
              />
            </View>

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
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 10,
    //  flex: 1
  },
  searchContainer: {
    marginVertical: 10,
    // flex: 1,
    //backgroundColor: "red",
    //width: Dimensions.get('window').width,

    flexDirection: "row",
    //alignSelf: 'stretch'
  },
  headerText: {
    fontSize: FONTSIZE?.MD,
    // marginHorizontal: 10,
  },
  searchTextInput: {
    //flex: 1,
    //width: Dimensions.get("window").width/2,
  },
});
