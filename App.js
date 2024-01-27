import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [places, setPlaces] = useState([]);
  const placeList = places.map((item, index) => {
    return (
      <Text key={index}>
        {index + 1}. {item}
      </Text>
    );
  });
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <StatusBar style="auto" />
        <View>
          <TextInput
            style={{
              width: 200,
              borderBottomWidth: 1,
              borderColor: "blue",
              padding: 5,
            }}
            placeholder="add a place"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
        </View>

        <Button
          title="add"
          onPress={() => {
            if (inputValue !== "") {
              setPlaces([...places, inputValue]);
            }
          }}
        />
      </View>
      <View>{placeList}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  inputView: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
