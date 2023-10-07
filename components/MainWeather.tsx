import { StyleSheet, View, Text } from "react-native";
import Icon from "@svgr-iconkit/weather-icons";

export default function MainWeather() {
  return (
    <View style={styles.mainWeather}>
      <View style={styles.weather}>
        <Icon style={styles.weatherIcon} name="day-sunny" />
        <Text style={styles.weatherLabel}>Clear sky</Text>
      </View>
      <View style={styles.verticalSeparator} />
      <Text style={styles.temperature}>25°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWeather: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  weather: {
    alignItems: "center",
    justifyContent: "center",
  },

  weatherIcon: {
    color: "#020202",
    width: 100,
    height: 100,
  },

  verticalSeparator: {
    backgroundColor: "#ededed",
    width: 3,
    height: 180,
  },

  weatherLabel: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },

  temperature: {
    fontFamily: "Montserrat-Medium",
    fontSize: 44,
  },
});
