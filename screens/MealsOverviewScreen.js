import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen() {
  return (
    <View style={styles.constainer}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});
