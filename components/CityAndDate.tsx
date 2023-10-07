import { StyleSheet, View, Text } from "react-native";

export default function CityAndDate() {
  return (
    <View style={styles.cityAndDate}>
      <Text style={styles.city}>Lublin</Text>
      <Text style={styles.date}>Thu 28/09/23</Text>
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
});
