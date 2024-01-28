import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const placeList = ({ placeName, index, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listItems}>
        <Text style={{ textAlign: "center" }}>
          {index + 1}. {placeName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    margin: 5,
  },
});

export default placeList;
