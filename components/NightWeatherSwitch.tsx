import { StyleSheet, View, Text } from "react-native";
import Icon from "@svgr-iconkit/weather-icons";
import { Switch } from "react-native-paper";

export default function NightWeatherSwitch({
  isNight,
  handleChange,
}: {
  isNight: boolean;
  handleChange: () => void;
}) {
  return (
    <View style={styles.nightWeatherSwitch}>
      <Icon style={isNight ? styles.iconNight : styles.icon} name="day-sunny" />
      <Switch
        trackColor={{ false: "#9f9f9f", true: "#b4c5e2" }}
        thumbColor={isNight ? "#fefefe" : "#020202"}
        value={isNight}
        onValueChange={handleChange}
      />
      <Icon
        style={isNight ? styles.iconNight : styles.icon}
        name="night-clear"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nightWeatherSwitch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    color: "#020202",
    width: 45,
    height: 45,
  },

  iconNight: {
    color: "#fefefe",
    width: 45,
    height: 45,
  },
});
