import React from 'react';
import { 
    FlatList,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    Dimensions
 } from "react-native";

 const HeaderTextComponent = (props: any)=>{
     //console.log('footerprops',props.item.footer)
     return (
        <View style={{backgroundColor: 'green'}}>
        <Text 
            style={{
                color: 'black', 
                backgroundColor: 'white',
                width: '100%',
                textAlign: 'center',
                paddingVertical: 5   
            }}
            numberOfLines={2}
            >
                {props.item.header}
            </Text>
        </View>
     )
 }

 const FooterTextComponent = (props: any)=>{
    //console.log('footerprops',props.item.footer)
    return (
       <View style={{backgroundColor: 'green'}}>
       <Text 
           style={{
               color: 'black', 
               backgroundColor: 'white',
               width: '100%',
               textAlign: 'center',
               paddingVertical: 5   
           }}
           numberOfLines={2}
           >
               {props.item.footer}
           </Text>
       </View>
    )
}

 const renderItemsHandler = (props: any, flatListStyles: any)=>{
    return (
        <View style={{...styles.card, ...flatListStyles}}>
            <TouchableOpacity 
                style={{flex: 1}}
            >
                <View style={{
                    flex: 1, 
                    paddingHorizontal: 10, 
                    paddingTop: 10,
                    backgroundColor: 'white'

                    }}> 
                {props.item.header && <HeaderTextComponent {...props}/>}
                    <Image 
                        source={props.item.backgroundImage || props.item.api} 
                        style={{ flex: 1}}
                        resizeMode = {"contain"}
                        />
                </View>
                {props.item.footer && <FooterTextComponent {...props}/>}

            </TouchableOpacity>
        </View>
    )
}

 export const FlatListC3D = function(props: any){
     let flatListStyles = props.styles || ""
     return (
        <FlatList
            style={{
                flex:1,
                overflow: 'hidden',
                borderRadius: 10,
                shadowColor: 'grey',
                //Range 0-1
                shadowOpacity: 1,
                //shadowLength
                shadowRadius: 7,
                shadowOffset: {width: 0, height: 2}, 
                elevation: 15,
            }}
            showsHorizontalScrollIndicator={false}
            //horizontal={true}
            data={props.data}
            renderItem={(props)=>{return renderItemsHandler(props, flatListStyles )}}
            keyExtractor={(item) => item.id}
            numColumns={2}
            //extraData={selectedId}
        />
     )
 }

 const styles = StyleSheet.create({
    card: {
        //backgroundColor: 'red',
        //height: Dimensions.get('screen').height/4,
       // width: '100%',
        //padding: 5,
        borderRadius: 5,
        margin: 5,
        overflow: 'hidden',
        flex: 1,
        //width: '40%',
    },
 })