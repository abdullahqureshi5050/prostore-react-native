import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import { HomeScreen } from "../../screens/Home.screen";
import { SignUpScreen } from "../../screens/Signup.screen";
import { NotificationScreen } from "../../screens/Notification.screen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={"Notifications"}>
      {/* <Stack.Screen name="BottomStackNav" component={BottomStackNav} options={({ navigation }) => ({ headerRight: ()=> BottomStackScreenOptions.headerRight(navigation) })} /> */}
      {/* options={({ route }) => ({ title: route.params.foodCategoryTitle ? route.params.foodCategoryID: 'Meal Category', headerBackTitle: 'Back', ...options.header})} */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={({ navigation }) => (BottomStackScreenOptions) } />
      <Stack.Screen name="SignUpStackNav" component={SignUpScreen} options={({ navigation }) => (MapsScreenOptions)} />
      <Stack.Screen name="Notifications" component={NotificationScreen} options={({ navigation }) => (MapsScreenOptions)} />
    </Stack.Navigator>
  );
};

const BottomStackScreenOptions = {
  //headerLargeTitle: 'S',
  //headerLargeTitle: true,
  //headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
  //headerTitle: 'SIVISIC',
  headerShown: false,
  //headerStyle: {
    //height: 10,
    //backgroundColor: 'red'
  //},

  // headerStyle: {
  //   height: 30, // Specify the height of your custom header
  // },
  headerBackTitleVisible: false,
    headerRight: (navigation: any)=> <Ionicons name='notifications-outline' size={25} onPress={()=>{return navigation.navigate('SignUpStackNav') }} />
}

const MapsScreenOptions = {
  headerTitle: '',
  headerShown: false,
  headerBackTitleVisible: false,
  headerRight: (navigation: any)=> <Ionicons name='notifications' size={25} onPress={  ()=>{ 
      console.log('pressed Noti')
      /* return navigation.navigate('BottomStackNav')*/ }} />
}