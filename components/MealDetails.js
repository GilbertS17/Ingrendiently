import { StyleSheet, View, Text } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  color,
}) {
  return (
    <View style={styles.info}>
      <Text style={[styles.infos, { color: color }]}>{duration}m </Text>
      <Text style={[styles.infos, { color: color }]}>
        {complexity.toUpperCase()}{" "}
      </Text>
      <Text style={[styles.infos, { color: color }]}>
        {affordability.toUpperCase()}{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    paddingVertical: 20,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  infos: {
    paddingHorizontal: 10,
  },
});
