import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Modal from "./pages/templates/Modal";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Vinod..!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
