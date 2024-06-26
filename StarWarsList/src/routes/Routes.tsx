import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "src/screen/HomeScreen/HomeScreen";
import { DetailScreen } from "src/screen/DetailScreen/DetailScreen";

const Stack = createNativeStackNavigator();

export type RouteStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {
    peopleId: number;
  };
};

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
      >
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='DetailsScreen' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
