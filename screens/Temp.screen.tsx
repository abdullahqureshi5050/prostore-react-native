import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Pager } from "../components/PagerView";
import { BannerCarousel }  from "../components/BannerCarousel";
import { images as img } from "../components/Images";
import  SnapCarousel  from "../components/SnapCarousel";
const images = [
    img.fh5,
    img.uc4,
    img.fh5,
    img.uc4
];
 
export const TempScreen = () => {
  
  return (
    <View style={{ flex: 1 }}>
      <SnapCarousel/>
      <BannerCarousel style={{margin: 5}} images={images}/>
      {/* <Pager image={{source: images.fh5}} resizeMode='contain' initialPage={0} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    //flex: 1,
  },
  page: {
    //justifyContent: 'center',
    //alignItems: 'center',
  },
});
