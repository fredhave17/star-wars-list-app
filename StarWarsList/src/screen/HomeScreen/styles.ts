import { StyleSheet, TextStyle } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#1B1B1B",
    flex: 1,
  },
  container: {
    backgroundColor: "#1B1B1B",
    paddingHorizontal: 24,
  },
  favoriteContainer: {
    marginVertical: 24,
    backgroundColor: "#1B1B1B",
    maxHeight: 180,
    paddingHorizontal: 24,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  emptyStateText: {
    fontSize: 18,
    color: "#AAA",
  },
  listsTitle: {
    marginBottom: 10,
  },
});
