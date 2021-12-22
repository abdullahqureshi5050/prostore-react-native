import React from 'react';
import { 
    FlatList,
    StyleSheet,
    View,
    TouchableOpacity,
    ImageBackground,
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
                <View style={{flex: 1}}> 
                {props.item.header && <HeaderTextComponent {...props}/>}
                    <ImageBackground 
                        source={props.item.backgroundImage || props.item.api} 
                        style={{ flex: 1}}
                        //resizeMode = {"contain"}
                        >
                    <View 
                    style={{ 
                        //backgroundColor:'red',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flex: 1,
                        }}
                    >
                    </View>
                    </ImageBackground>
                </View>
                {props.item.footer && <FooterTextComponent {...props}/>}

            </TouchableOpacity>
        </View>
    )
}

 export const FlatListC = function(props: any){
     let flatListStyles = props.styles || ""
     return (
        <FlatList
            style={{flex:1}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={props.data}
            renderItem={(props)=>{return renderItemsHandler(props, flatListStyles )}}
            keyExtractor={(item) => item.id}
            //numColumns={2}
            //extraData={selectedId}
        />
     )
 }

 const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        margin: 5,
        overflow: 'hidden',
        flex: 1,
    },
 })