import Carousel from "react-native-snap-carousel";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import { images as img } from "./Images";

const images = [
    img.fh5,
    img.uc4,
    img.fh5,
    img.uc4
];

// const images = [
//   {
//     title: img.gtaPS5,
//     text: "Text 1",
//   },
//   {
//     title: "Item 2",
//     text: "Text 2",
//   },
//   {
//     title: "Item 3",
//     text: "Text 3",
//   },
//   {
//     title: "Item 4",
//     text: "Text 4",
//   },
//   {
//     title: "Item 5",
//     text: "Text 5",
//   },
// ];
let _carousel: any;

// export const SnapCarousel = ()=> {

//     const _renderItem = ({item, index}: any) => {
//         return (
//             <View style={styles.slide}>
//                 <Text style={styles.title}>{ item.title }</Text>
//             </View>
//         );
//     }

//         return (
//             <Carousel
//                 style={{backgroundColor: 'red'}}
//               ref={(c) => { _carousel = c; }}
//               data={images}
//               renderItem={(props)=>{return _renderItem(props)}}
//               sliderWidth={Dimensions.get('window').width}
//               itemWidth={Dimensions.get('window').width}
//             />
//         );
// }

const styles = StyleSheet.create({
  slide: { flex: 1 },
  title: { flex: 1 },
});

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      //activeIndex:0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ],
    };
  }

  _renderItem(image: any) {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Image
          style={{
            backgroundColor: "red",
            //width: Dimensions.get("window").width,
          }}
          source={image}
          resizeMode={"contain"}
        />

        {/* <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text> */}
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "rebeccapurple", paddingTop: 50 }}
      >
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            layout={"default"}
            //ref={ref => this.carousel = ref}
            data={images}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}
