// Packages imports
import { StyleSheet, Text, View } from "react-native";

// Local imports
import CircularProgress from "./CircularProgress";

// exporting the default component
export default function App() {
  // render
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginBottom: 30, alignItems: "center" }}>
        <Text style={styles.heading}>Default View</Text>
        <CircularProgress progress={40} />
      </View>

      <View style={{ flex: 1, marginBottom: 30, alignItems: "center" }}>
        <Text style={styles.heading}>Change Colors</Text>
        <CircularProgress progress={60} outerCircleColor="brown" progressCircleColor="orange" />
      </View>

      <View style={{ flex: 1, marginBottom: 30, alignItems: "center" }}>
        <Text style={styles.heading}>Show/Remove Label</Text>
        <CircularProgress progress={40} showLabel={false} />
      </View>

      <View style={{ flex: 1, marginBottom: 30, alignItems: "center" }}>
        <Text style={styles.heading}>Increase Width of Stroke</Text>
        <CircularProgress progress={40} strokeWidth={20} />
      </View>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  heading: {
    color: "white",
    marginBottom: 20,
    fontSize: 15,
  },
});
