import { StyleSheet, View, Text } from "react-native";
import Icon from "@svgr-iconkit/weather-icons";
import Weather from "../models/Weather";
import { format } from "date-fns";
import getWeatherIcon from "../utils/getWeatherIcon";

export default function DailyWeatherList({
  weeklyWeather,
  isNight,
}: {
  weeklyWeather: Weather[];
  isNight: boolean;
}) {
  return (
    <View style={styles.dailyWeatherList}>
      {weeklyWeather.slice(1).map((dailyWeather: Weather) => (
        <DailyWeather
          key={dailyWeather.date}
          dailyWeather={dailyWeather}
          isNight={isNight}
        />
      ))}
    </View>
  );
}

function DailyWeather({
  dailyWeather,
  isNight,
}: {
  dailyWeather: Weather;
  isNight: boolean;
}) {
  return (
    <View style={isNight ? styles.dailyWeatherNight : styles.dailyWeather}>
      <Text style={isNight ? [styles.date, styles.textNight] : styles.date}>
        {format(new Date(dailyWeather.date), "EEEE")}
      </Text>
      {getWeatherIcon(
        isNight ? styles.weatherIconNight : styles.weatherIcon,
        isNight,
        dailyWeather.weatherCode
      )}
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
  dailyWeatherList: {
    marginHorizontal: 20,
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

  dailyWeatherNight: {
    backgroundColor: "#7c97c7",
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
    width: 35,
    height: 35,
  },

  weatherIconNight: {
    marginLeft: -58,
    color: "#fefefe",
    width: 35,
    height: 35,
  },

  temperature: {
    width: 40,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },

  textNight: {
    color: "#fefefe",
  },
});
