import { StyleSheet } from "react-native";
import { $COLORS } from "src/theme/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D2D2D",
    padding: 16,
    height: 220,
    borderRadius: 24,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 20,
  },
  divider: {
    marginVertical: 10,
    borderBottomWidth: 1,
    color: "#ffff",
  },
});
