import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Check from "../../../assets/svg/Check.svg";

type Props = {
  isChecked: boolean;
  handleCheck: () => void;
};

export function RoundedCheckBox({ isChecked, handleCheck }: Props) {
  return (
    <TouchableOpacity onPress={handleCheck}>
      {isChecked ? (
        <View style={styles.checkedContainer}>
          <Check />
        </View>
      ) : (
        <View style={styles.notCheckedContainer} />
      )}
    </TouchableOpacity>
  );
}
