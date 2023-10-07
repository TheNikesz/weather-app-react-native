import { StyleSheet, Text, View } from "react-native";
import CityAndDate from "./components/CityAndDate";
import { useFonts } from "expo-font";
import MainWeather from "./components/MainWeather";
import DailyWeatherList from "./components/DailyWeatherList";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View style={[styles.app, styles.appNight]}>
    <View style={styles.app}>
      <CityAndDate />
      <MainWeather />
      <DailyWeatherList />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  appNight: {
    backgroundColor: "#6b8cc6",
  },
});
