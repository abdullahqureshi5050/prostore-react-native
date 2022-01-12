import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { ItemCardSmall } from "./ItemCardSmall";
import { FONTSIZE } from "../static/FontSize";
import { ShadowC } from "./Shadow";

type cardProps = {
  data: {
    id: number | string | any,
    width?: number | string,
    height?: number | string,
    // footer is deprecated, use headerTitle instead
    footer?: string,
    // footerStyles is deprecated, use imageTitleContainerStyle instead
    footerStyles?: object | any,
    imageTitleContainerStyle?: ViewStyle | any,
    source: {image?: any, uri?: string },
    imageTitle?: any,
    imageTitleNumberOfLines?: number | undefined,
  }[],
  //data: Array<any>
  headerTitle?: string | undefined,
  headerShown?: boolean,
  styles?: ViewStyle,
};

const renderItemsHandler = (props: any, flatListStyles: any) => {
  return (
    <View style={styles.card}>
      <ItemCardSmall {...props.item } />
    </View>
  );
};

type cardHeaderProps = {
    headerTitleStyle?: object | undefined,
    headerTitle: string | undefined,
    headerRightButtonText?: object | undefined,
    headerShown?: boolean,
    headerContainerStyle? : any
}
const Header = (headerProps: cardHeaderProps)=>{
  let showHeader= {};
 if (headerProps.headerShown){
 showHeader = {
    width: 0,
    height: 0
  }
 }
    return (
      <ShadowC>
        <View style={{...styles.headerContainterStyle, ...showHeader}}>
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
        </ShadowC>
    )
}

export function ItemCardHorizontalScrollView(props: cardProps) {
  let flatListStyles = props.styles;
  const [headerTitleState, setHeaderTitleState] = useState('Header Title')
  const [headerShownState, setHeaderShownState] = useState(true);
  useEffect(() => {
    props.headerTitle && setHeaderTitleState(props.headerTitle);
    props.headerShown==false? setHeaderShownState(props.headerShown): setHeaderShownState(true);
    return () => {
      
    }
  }, [props.headerTitle, props.headerShown])
  return (
    <View style={styles.root}>
      {headerShownState && <Header headerTitle={headerTitleState} /> }
      <FlatList
        style={{ flex: 1, ...flatListStyles }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.data}
        renderItem={(props) => {
          return renderItemsHandler(props, flatListStyles);
        }}
        keyExtractor={({id}) => id}
        //numColumns={2}
        //extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //backgroundColor: "lightgrey",
    //margin: 5
    //padding: 10,
    //borderRadius: 75
  },

  headerText: {
    fontSize: FONTSIZE?.SM
  },
  headerRight: {
    textDecorationLine: 'underline',
    fontSize: FONTSIZE?.SM,
    color: 'green'
    },

    headerContainterStyle: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
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
