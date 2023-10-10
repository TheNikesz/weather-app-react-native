import { StyleSheet, Text, View } from "react-native";
import CityAndDate from "./components/CityAndDate";
import { useFonts } from "expo-font";
import MainWeather from "./components/MainWeather";
import DailyWeatherList from "./components/DailyWeatherList";
import { PaperProvider } from "react-native-paper";
import NightWeatherSwitch from "./components/NightWeatherSwitch";
import { useEffect, useState } from "react";
import Weather from "./models/Weather";

export default function App() {
  const [isNight, setIsNight] = useState<boolean>(false);

  const [city, setCity] = useState<string>("Warsaw");

  const [status, setStatus] = useState<string>("loading");
  const [weatherForecast, setWeatherForecast] = useState<Weather[]>([]);

  useEffect(() => {
    setStatus("loading");
    try {
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      )
        .then((response) => response.json())
        .then((geocodingData) => {
          try {
            fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${geocodingData.results[0].latitude}&longitude=${geocodingData.results[0].longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
            )
              .then((response) => response.json())
              .then((weatherData) => {
                const weather: Weather[] = [];

                for (let i = 0; i < 7; i++) {
                  weather[i] = new Weather(
                    geocodingData.results[0].name,
                    weatherData.daily.time[i],
                    weatherData.daily.weathercode[i],
                    weatherData.daily.temperature_2m_min[i],
                    weatherData.daily.temperature_2m_max[i]
                  );
                }

                setWeatherForecast(weather);
                setStatus("success");
              });
          } catch (error) {
            setStatus("error");
          }
        });
    } catch (error) {
      setStatus("error");
    }
  }, [city]);

  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  function handleChange(): void {
    setIsNight((prevIsNight: boolean) => !prevIsNight);
  }

  if (status === "success") {
    return (
      <PaperProvider
        settings={{
          rippleEffectEnabled: false,
        }}
      >
        <View style={isNight ? [styles.app, styles.appNight] : styles.app}>
          <CityAndDate
            city={weatherForecast[0].city}
            date={weatherForecast[0].date}
            isNight={isNight}
          />
          <MainWeather dailyWeather={weatherForecast[0]} isNight={isNight} />
          <NightWeatherSwitch isNight={isNight} handleChange={handleChange} />
          <DailyWeatherList weeklyWeather={weatherForecast} isNight={isNight}/>
        </View>
      </PaperProvider>
    );
  } else if (status === "loading") {
    return (
      <PaperProvider
        settings={{
          rippleEffectEnabled: false,
        }}
      >
        <View style={isNight ? [styles.app, styles.appNight] : styles.app}>
          <Text>Loading...</Text>
        </View>
      </PaperProvider>
    );
  } else if (status === "error") {
    return (
      <PaperProvider
        settings={{
          rippleEffectEnabled: false,
        }}
      >
        <View style={isNight ? [styles.app, styles.appNight] : styles.app}>
          <Text>Error...</Text>
        </View>
      </PaperProvider>
    );
  }
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
