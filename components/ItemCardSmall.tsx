import React, {useCallback, useState} from "react";
import { 
    StyleSheet,
    View,
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    ViewStyle
 } from "react-native";
import { FONTSIZE } from "../static/FontSize";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "./Color";
import { ShadowC } from "./Shadow";
 type cardProps = {
   headerVisible?: boolean,
   imageTitleNumberOfLines?: number | undefined, 
   cardStyles?: any,
   imageTitleContainerStyle?: ViewStyle,
   imageTitleTextStyle?: any,
   priceTextStyle?: any,
   priceContainerStyle?: any,
   width: number | undefined,
   height: number | undefined,
   source: {
      image?: object | string | undefined
      uri?: string | undefined
   },
   imageTitle?: string | undefined,
   price?: number | string | undefined,
   headerLeftImageSource?: {
      image?: object | string | undefined
      uri?: string | undefined
   },
 }

 type cardHeaderProps = {
   headerLeftImageSource?: {
      image?: object | string | undefined
      uri?: string | undefined
   },
   //headerTitleStyle?: object | undefined,
   headerRightButtonText?: object | undefined,
   size?: number | undefined,
   headerLeftImageWidth?: number | string | undefined,
   headerLeftImageHeight?: number | string | undefined,
   headerLeftImageStyle?: object | undefined,
   headerLeftContainerStyleProps?: object | undefined,
}

const Header = (headerProps: cardHeaderProps)=>{
   type ICON = "heart-outline" | "heart";
   const [favoriteIconState, setFavoriteIconState] = useState('heart-outline')
   return (
       <View style={{
           flexDirection: 'row', 
           justifyContent: 'space-between',
           }}>
           <View 
               style={{
                  flex: 1,
                  alignSelf: 'center',
                  ...headerProps.headerLeftContainerStyleProps,
           }}
           > 
               <Image 
                  style={{
                     height: headerProps.headerLeftImageHeight || 23,
                     width: headerProps.headerLeftImageWidth || '100%',
                     ...headerProps.headerLeftImageStyle
                   }}
                  
                  //height={35}
                  source= { headerProps.headerLeftImageSource?.image as ImageSourcePropType || { uri: headerProps.headerLeftImageSource?.uri}} 
                  />
           </View> 
           <TouchableOpacity
            style={{
               flex: 1
           }}
           >
           <View style={{
               padding: 5,
               alignSelf: 'flex-end',
               //flex: 1
           }}>
              <Ionicons name={favoriteIconState as ICON} onPress={()=>{favoriteIconState=='heart-outline' ? setFavoriteIconState('heart'): setFavoriteIconState('heart-outline') }} size={headerProps.size || 23} color="green" />
           </View>
           </TouchableOpacity>
       </View>
   )
}
 
 export const ItemCardSmall = (props: cardProps)=>{
  // const imageTitleNumberOfLines  = props.imageTitleNumberOfLines;
  //console.log(imageTitleNumberOfLines) 
   // const onTextLayoutHandler = useCallback(e => {
   //   if(e.nativeEvent.lines.length<(imageTitleNumberOfLines? imageTitleNumberOfLines : 1) && e.nativeEvent.lines.length>=1 ){
   //      console.log(`${imageTitleNumberOfLines},'sad'`)
   //   }
   // }, []);
   
     return (
        <View style={{...styles.root, 
        ...{
          // padding: 10,
           //width: props.width, 
           //height: props.height
         }
        }}>
        
           <View style={{ width: props.width}} >
            {/* optional Header */}
            {props.headerVisible==true && <Header headerLeftImageSource={props.headerLeftImageSource} /> }
           <Image
               style={{
                  width: props.width,
                  height: props.height,
                  ...props.cardStyles
               }}
               resizeMode={'contain'}
               source={ props.source.image as ImageSourcePropType || { uri: props.source.uri}}
           />
           {/* optional footer */}
           <View style={{width: props.width, ...props.imageTitleContainerStyle}}>
               { props.imageTitle && <Text numberOfLines={props.imageTitleNumberOfLines || 2} style={{...props.imageTitleTextStyle}}>{props.imageTitle}</Text> }
           </View>
            <View style={{width: props.width, ...props.priceContainerStyle}}>
               {props.price && <Text numberOfLines={1} style={{...props.priceTextStyle}}>{props.price}</Text> }
            </View>
           </View>
        </View>
     )
 }

 const styles = StyleSheet.create({
    root: {
     backgroundColor: colors.WHITE,
      //border inside image  
      //padding: 10,
      borderRadius: 5,
      elevation: 5,
      margin: 5,
      overflow: 'hidden',
      //flex: 1,
    },

    headerText: {
      fontSize: FONTSIZE?.SM
    },

    headerRight: {
      textDecorationLine: 'underline',
      fontSize: FONTSIZE?.SM,
      color: 'green'
      },
      
 })