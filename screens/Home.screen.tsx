import React from "react";
import { StyleSheet, View, Text, Button, Dimensions, ScrollView } from "react-native";
import { TextInputC } from "../components/TextInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonC } from "../components/Button";
import { ItemCardHorizontalScrollView } from "../components/ItemCardHorizontalScrollView";

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

export const HomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={{}}>
        <TextInputC
          icon={
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={24}
              color="black"
            />
          }
        ></TextInputC>
      </View>
      <View style={
          styles.searchContainer}>
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
            {width: Dimensions.get('window').width*.8}
            //styles.searchTextInput
          }>   
         <TextInputC
          icon={<MaterialCommunityIcons name="magnify" size={24} color="black" />}
        ></TextInputC>
        </View>
        <ButtonC
          title={
            <MaterialCommunityIcons
              name="filter-outline"
              size={32}
              color="black"
            />
          }
          //textContainerStyle={{ backgroundColor: "red" }}
          //titleShown={false}
          textStyle={{
            backgroundColor: "white",
            alignSelf: "flex-end",
            padding: 10,
          }}
        ></ButtonC>
      </View>
      {/* <ItemCardSmall width={data[0].width} height={data[0].height} source={data[0].source} />
      <ItemCardSmall width={data[0].width} height={data[0].height} source={data[0].source} /> */}
      <ScrollView>
        <ItemCardHorizontalScrollView
            headerShown={false}
            styles={{flex: 1}}
            headerTitle={"Header T1"}
            data={[...data]}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    //  flex: 1
    },
  searchContainer: {
    // flex: 1,
    backgroundColor: "red",
    //width: Dimensions.get('window').width,

    flexDirection: "row",
    //alignSelf: 'stretch'
  },

  searchTextInput: {
    //flex: 1,
    //width: Dimensions.get("window").width/2,
  },
});
