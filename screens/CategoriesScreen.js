import { FlatList, StyleSheet, Platform, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

export default function CategoriesScreen() {
  const numColumns = 2;
  const key = `flatlist-${numColumns}`;

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={numColumns}
        key={key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: Platform.OS === "android" ? 40 : 0, // for android notch
  },
});
