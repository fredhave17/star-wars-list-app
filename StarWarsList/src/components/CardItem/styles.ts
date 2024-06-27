import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerExpanded: {
    backgroundColor: "#2D2D2D",
    padding: 12,
    borderRadius: 24,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  containerNormal: {
    backgroundColor: "#2D2D2D",
    padding: 16,
    borderRadius: 24,

    elevation: 5,
    marginBottom: 20,
  },
  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 20,
  },
  containerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginHorizontal: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
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
