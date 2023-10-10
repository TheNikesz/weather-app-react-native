import { StyleSheet, View, Text } from "react-native";
import { format } from "date-fns";

export default function CityAndDate({
  city,
  date,
  isNight,
}: {
  city: string;
  date: string;
  isNight: boolean;
}) {
  return (
    <View style={styles.cityAndDate}>
      <Text style={isNight ? [styles.city, styles.textNight] : styles.city}>
        {city}
      </Text>
      <Text style={isNight ? [styles.date, styles.textNight] : styles.date}>
        {format(new Date(date), "EEE dd/MM/yy")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cityAndDate: {
    alignItems: "center",
    justifyContent: "center",
  },

  city: {
    fontFamily: "Montserrat-Medium",
    fontSize: 48,
  },

  date: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },

  textNight: {
    color: "#fefefe",
  },
});
