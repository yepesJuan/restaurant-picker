import React, { useEffect, useContext } from "react";
import { ScrollView, View, Text } from "react-native";
import { Fab, QuestionIcon } from "native-base";
import { RestaurantContext } from "../App";
import styles from "../styles";
import RestaurantCard from "./RestaurantCard";

export default function Home({ navigation }) {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  useEffect(async () => {
    try {
      const res = await fetch(
        `https://bocacode-intranet-api.web.app/restaurants`
      );
      const data = await res.json();
      setRestaurants(data);
    } catch (err) {
      alert(err);
    }
  }, []);
  return (
    <View style={styles.container}>
      {!restaurants ? (
        <Text>"Loading..."</Text>
      ) : (
        <ScrollView>
          {restaurants.map((rest) => (
            <RestaurantCard key={rest.id} rest={rest} />
          ))}
        </ScrollView>
      )}
      <Fab
        colorScheme="blue"
        onPress={() => navigation.navigate("Random")}
        icon={<QuestionIcon />}
      />
    </View>
  );
}
