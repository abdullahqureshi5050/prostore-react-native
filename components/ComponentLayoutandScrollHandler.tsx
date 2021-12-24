import React from "react";
import {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
} from "react-native";

// type LayoutCProps = {
//     event: any
// }

type LayoutCProps = {
  event: LayoutChangeEvent;
  contentOffset: NativeScrollEvent;
};

export function onScrollHandlerFunc({
  nativeEvent,
}: NativeSyntheticEvent<NativeScrollEvent>) {
  try {
    // scrolled y-axios
    let contentOffset_Y = nativeEvent.contentOffset.y,
      contentOffset_X = nativeEvent.contentOffset.x;

    return {
      contentOffset_X,
      contentOffset_Y,
    };
  } catch (error) {
    return ({
      error
    })
  }
}

export function getComponentLayoutFunc(props: LayoutChangeEvent) {
  try {
    //let contentOffset_Y = props.nativeEvent.contentOffset.y;
    let { x, y, width, height } = props.nativeEvent.layout;
    if (!x) x = 0;
    if (!y) y = 0;
    if (!width) width = 0;
    if (!height) height = 0;
    return {
      // width of component excluding applied CSS styling
      componentWidth: width,
      // Height of component excluding applied CSS styling
      componentHeight: height,
      // width of component + applied CSS styling on component
      component_Width_With_CSS_Style_Offset: width + x,
      // height of component + applied CSS styling on component
      component_Height_With_CSS_Style_Offset: height + x,
    };
  } catch (err) {
    return {
      error: err,
    };
  }
}

const styles = StyleSheet.create({
  root: {},
});
