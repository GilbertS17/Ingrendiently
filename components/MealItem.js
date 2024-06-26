import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Image,
} from "react-native";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        // onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.info}>
            <Text>{duration}m </Text>
            <Text>{complexity.toUpperCase()} </Text>
            <Text>{affordability.toUpperCase()} </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    // height: 280,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: { flex: 1 },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    // padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    height: 200,
    width: "100%",
  },
  info: {
    paddingVertical: 10,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
