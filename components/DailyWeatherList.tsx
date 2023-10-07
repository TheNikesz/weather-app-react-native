import { StyleSheet, View, Text } from "react-native";
import Icon from "@svgr-iconkit/weather-icons";

export default function DailyWeatherList() {
  return (
    <View style={styles.dailyWeatherList}>
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
    </View>
  );
}

function DailyWeather() {
  return (
    <View style={styles.dailyWeather}>
      <Text style={styles.date}>Thursday</Text>
      <Icon style={styles.weatherIcon} name="day-sunny" />
      <Text style={styles.temperature}>25°C</Text>
    </View>
  );
}

const styles = StyleSheet.create({

    dailyWeatherList: {
        marginHorizontal: 20
    },

  dailyWeather: {
    backgroundColor: "#f6f6f6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 5,
  },

  date: {
    fontFamily: "Montserrat-Regular",
    width: 100,
    fontSize: 16,
  },

  weatherIcon: {
    marginLeft: -58,
    color: "#020202",
    width: 40,
    height: 40,
  },

  temperature: {
    width: 40,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
});
