import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ItemCardSmall } from "./ItemCardSmall";
import { FONTSIZE } from "../static/FontSize";

type cardProps = {
  // {
  //   id: string
  //   width: number
  //   height: number
  //   footer: string
  //   footerStyles: object | any
  //   source: object | any
  // },
  data: Array<any>
  headerTitle?: string | undefined,
  styles?: any | undefined,
};

const renderItemsHandler = (props: any, flatListStyles: any) => {
  return (
    <View style={styles.card}>
      <ItemCardSmall {...props.item} />
    </View>
  );
};

type cardHeaderProps = {
    headerTitleStyle?: object | undefined,
    headerTitle: string | undefined,
    headerRightButtonText?: object | undefined,
}
const Header = (headerProps: cardHeaderProps)=>{
    return (
        <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-between',
            }}>
            <View style={{
               padding: 5,
               alignSelf: 'center',
            }}>
                 <Text style={{...styles.headerText, ...headerProps.headerTitleStyle}}>{headerProps.headerTitle}</Text>
            </View>
            <TouchableOpacity>
            <View style={{
                padding: 5,
                alignSelf: 'center'
            }}>
                <Text style={{...styles.headerRight, ...headerProps.headerRightButtonText}}>View All</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export function ItemCardHorizontalScrollView(props: cardProps) {
  let flatListStyles = props.styles || "";
  const [headerTitleState, setHeaderTitleState] = useState('Header Title')
  useEffect(() => {
    props.headerTitle && setHeaderTitleState(props.headerTitle)
    // return () => {
      
    // }
  }, [props.headerTitle])
  return (
    <View style={styles.root}>
      <Header headerTitle={headerTitleState}/>
      <FlatList
        style={{ flex: 1, ...flatListStyles }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.data}
        renderItem={(props) => {
          return renderItemsHandler(props, flatListStyles);
        }}
        keyExtractor={(item) => item.id}
        //numColumns={2}
        //extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "lightgrey",
    //margin: 5
    padding: 10,
    //borderRadius: 75
  },
  headerText: {
    fontSize: FONTSIZE.SM
  },
  headerRight: {
    textDecorationLine: 'underline',
    fontSize: FONTSIZE.SM,
    color: 'green'
    },
  
  card: {
    //width: 300,
    //height: 400,
    //borderRadius: 10,
    //margin: 5,
    //borderBottomEndRadius: 10,
    //overflow: "hidden",
    //flex: 1,
  },
});
