import { StyleSheet } from "react-native";
import { $COLORS } from "src/theme/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 24,
    marginTop: 20,
  },
  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
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
