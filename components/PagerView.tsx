import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ImageResizeMode } from 'react-native';
import PagerView from 'react-native-pager-view';

type PagerViewProps = {
    initialPage?: number,
    image: {
        source?: any,
        uri?: any
    },
    resizeMode?: ImageResizeMode | undefined
}
// incomplete code add loop to render array of image objects

export const Pager = (props: PagerViewProps) => {
    console.log(typeof(props.initialPage));
  return (
    <View style={{ height:  Dimensions.get('window').height*.25  }}>
      <PagerView style={styles.viewPager} initialPage={props.initialPage || 0}>
        <View style={styles.page} key={props.initialPage? (props.initialPage + 1) as unknown as string : undefined}>
          <Image  
            style={{backgroundColor: 'red', width: Dimensions.get('window').width}}
            source={ props.image.source || {uri: props.image.uri} } 
            resizeMode={props.resizeMode? props.resizeMode : 'contain'}
          />
          {/* <Text>Swipe ➡️</Text> */}
        </View>
        <View style={styles.page} key={'2'}>
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    //alignItems: 'center',
  },
});
