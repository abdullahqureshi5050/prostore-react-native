import React from 'react';
// updated version 
import Carousel from 'react-native-banner-carousel-updated';
import { StyleSheet, Image, View, Dimensions, StyleProp, ViewStyle } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

type BannerCarouselProps = {
    images: any[]
    imageHeight?: any,
    imageWidth?: any,
    style?: StyleProp<ViewStyle>
}

//export default class App extends React.Component  {
export const BannerCarousel = (props: BannerCarouselProps)=> {
    //func -- map each image from array
    function renderPage(image: any, index: any) {
        return (
            <View key={index}>
                <Image resizeMode={'cover'} style={{ width: props.imageWidth || Dimensions.get('window').width , height: props.imageHeight || Dimensions.get('window').height*.25,
         }} source={image } />
            </View>
        );
    }

    // render() {
        return (
            <View style={{...styles.container, ...props.style as ViewStyle }}>
                <Carousel
                    // showsPageIndicator={false}
                    activePageIndicatorStyle={{backgroundColor: 'white' }}
                    pageIndicatorStyle={{backgroundColor: 'green'}}
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {props.images.map((image: any, index: any) => renderPage(image, index))}
                </Carousel>
            </View>
        );
    // }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        borderRadius: 10,
        //margin: 5,
        overflow: 'hidden'
    },
});