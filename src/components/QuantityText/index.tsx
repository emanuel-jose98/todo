import { View, Text } from "react-native";
import { createVariantStyle } from "./styles";

export type Variant = "primary" | "darker";

type Props = {
  text: string;
  quantity: number;
  variant?: Variant;
};

export function QuantityText({ quantity, text, variant }: Props) {
  const styles = createVariantStyle(variant ? variant : "primary");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.quantityBox}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
    </View>
  );
}
