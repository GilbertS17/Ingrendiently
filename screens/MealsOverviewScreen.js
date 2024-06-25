import { View, Text, StyleSheet } from "react-native";

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  return (
    <View style={styles.constainer}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});
