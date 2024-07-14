import { StyleSheet } from "react-native";

export const createVariantStyle = (isChecked: boolean) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      backgroundColor: "#262626",
      marginBottom: 8,
      padding: 12,
      borderRadius: 8,
    },
    text: {
      maxWidth: 250,
      color: isChecked ? "#808080" : "#f2f2f2",
      textDecorationLine: isChecked ? "line-through" : "none",
    },
  });
};
