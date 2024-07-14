import { StyleSheet } from "react-native";
import { Variant } from ".";

export const createVariantStyle = (variant: Variant) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      color: variant === "primary" ? "#4ea8de" : "#8284fa",
      fontSize: 14,
      fontWeight: "bold",
    },
    quantityBox: {
      paddingHorizontal: 8,
      backgroundColor: "#333333",
      borderRadius: 50,
      marginLeft: 8,
    },
    quantityText: {
      color: "#d9d9d9",
      fontSize: 14,
      fontWeight: "bold",
    },
  });
};
