import { StyleSheet, View, Text } from "react-native";
import Weather from "../models/Weather";
import getWeatherIcon from "../utils/getWeatherIcon";
import getWeatherLabel from "../utils/getWeatherLabel";

export default function MainWeather({
  dailyWeather,
  isNight,
}: {
  dailyWeather: Weather;
  isNight: boolean;
}) {
  return (
    <View style={styles.mainWeather}>
      <View style={styles.weather}>
        {getWeatherIcon(
          isNight ? styles.weatherIconNight : styles.weatherIcon,
          isNight,
          dailyWeather.weatherCode
        )}
        <Text
          style={
            isNight
              ? [styles.weatherLabel, styles.textNight]
              : styles.weatherLabel
          }
        >
          {getWeatherLabel(dailyWeather.weatherCode)}
        </Text>
      </View>
      <View
        style={
          isNight ? styles.verticalSeparatorNight : styles.verticalSeparator
        }
      />
      <Text
        style={
          isNight ? [styles.temperature, styles.textNight] : styles.temperature
        }
      >
        {isNight
          ? dailyWeather.minTemperature.toFixed()
          : dailyWeather.maxTemperature.toFixed()}
        °C
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWeather: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 36,
    marginBottom: 10,
  },

  weather: {
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },

  weatherIcon: {
    color: "#020202",
    width: 100,
    height: 100,
  },

  weatherIconNight: {
    color: "#fefefe",
    width: 100,
    height: 100,
  },

  verticalSeparator: {
    backgroundColor: "#ededed",
    width: 3,
    height: 135,
  },

  verticalSeparatorNight: {
    backgroundColor: "#a3b4d1",
    width: 3,
    height: 135,
  },

  weatherLabel: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },

  temperature: {
    width: 120,
    fontFamily: "Montserrat-Medium",
    fontSize: 44,
  },

  textNight: {
    color: "#fefefe",
  },
});
