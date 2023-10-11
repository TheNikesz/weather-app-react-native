import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function CitySearch({
  isNight,
  handlePress,
}: {
  isNight: boolean;
  handlePress: (cityInput: string) => void;
}) {
  const [citySearch, setCitySearch] = useState<string>("");

  return (
    <View style={styles.citySearch}>
      <TextInput
        value={citySearch}
        onChangeText={(text) => setCitySearch(text)}
        label={"Enter a city name"}
        textColor={isNight ? "#fefefe" : "#020202"}
        theme={{
          colors: {
            primary: isNight ? "#fefefe" : "#020202",
            background: isNight ? "#6b8cc6" : "#ffffff",
            onSurfaceVariant: isNight ? "#fefefe" : "#020202",
          },
        }}
        selectionColor={isNight ? "#fefefe" : "#020202"}
        cursorColor={isNight ? "#fefefe" : "#020202"}
        outlineStyle={styles.textField}
        mode="outlined"
        contentStyle={{ fontFamily: "Montserrat-Regular" }}
      />
      <Button
        style={isNight ? styles.buttonNight : styles.button}
        mode="contained"
        onPress={() => handlePress(citySearch)}
      >
        <Icon
          style={isNight ? styles.buttonIconNight : styles.buttonIcon}
          name="search"
          size={24}
        />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  citySearch: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },

  textField: {
    alignItems: "stretch",
    width: 250,
    fontSize: 16,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: "#ededed",
  },

  textFieldNight: {
    alignItems: "stretch",
    width: 250,
    fontSize: 16,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: "#a3b4d1",
  },

  button: {
    height: 50,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#ededed",
    borderColor: "#ededed",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonNight: {
    height: 50,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#a3b4d1",
    borderColor: "#a3b4d1",
    justifyContent: "space-evenly",
  },

  buttonIcon: {
    color: "#020202",
  },

  buttonIconNight: {
    color: "#fefefe",
  },
});
