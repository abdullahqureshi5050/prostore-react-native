import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigation } from "./HomeBottomStackNav";

export const Nav = ()=>{
  return (
    <NavigationContainer>
      <HomeStackNavigation />
    </NavigationContainer>
  );
}
