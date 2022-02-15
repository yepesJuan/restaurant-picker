import React, { createContext, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Home from "./components/Home";
import RandomResturant from "./components/RandomRestaurant";
import DetailsScreen from "./components/DetailsScreen"

const Stack = createNativeStackNavigator();
export const RestaurantContext = createContext();

export default function App() {
  const [restaurants, setRestaurants] = useState();
  const [selectedRest, setSelectedRest] = useState();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RestaurantContext.Provider value={{ restaurants, setRestaurants, selectedRest, setSelectedRest }}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Random" component={RandomResturant} options={{ title: 'Random Restaurant' }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Restaurant Details' }}/>
          </Stack.Navigator>
        </RestaurantContext.Provider>
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
