import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./StackNavigation";

export const Nav = ()=>{
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
