import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
  logo: {
    marginTop: 48,
    marginBottom: 71,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    backgroundColor: "#1a1a1a",
    height: "100%",
    paddingHorizontal: 24,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: -24,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#fff",
    borderRadius: 6,
    height: 54,
    fontSize: 16,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: "#1e6f9f",
    height: 52,
    width: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
  },
  quantitiesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
  },
});
