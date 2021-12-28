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

/* 
  handler to get/ return Y-axis and 
  X-axis DIP from indside ScrollView component while scrolling in action.
*/
export function onScrollHandlerFunc({
  nativeEvent,
}: NativeSyntheticEvent<NativeScrollEvent>) {
  try {
    // scrolled y-axios -- Vertical Scrolling
    let contentOffset_Y = nativeEvent.contentOffset.y,
    // scrolled X-axios -- Horizontal Scrolling
      contentOffset_X = nativeEvent.contentOffset.x;

    return {
      contentOffset_X,
      contentOffset_Y,
    };
  } catch (error) {
    return {
      error,
    };
  }
}
/*
  get componet height, width and offset values (x => widthOffset, y => heightOffset).
  Offset (x,y) will contain all extra css (e.g paddingTop marginTop, etc) added to the 
  component + any other css propties of components b/w target component and ScrollView
  must be added manually to the offset (x,y) so the sum value is equal to the 
  scrollView ptr value where the target component completely scrolls out of the screen 
  view i.e content scrolling on Y-axis/X-axis is >= component height from top of the 
  screen. 
*/ 
export function getComponentLayoutFunc(props: LayoutChangeEvent) {
  try {
    let { x, y, width, height } = props.nativeEvent.layout;
    // offset width of component (additional width caused by appling css in this component only)
    if (!x) x = 0;
    // offset height of component (additional height caused by appling css in this component only)
    if (!y) y = 0;
    // width of component 
    if (!width) width = 0;
    // height of component
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
