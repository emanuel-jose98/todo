import { Text, View } from "react-native";
import { styles } from "./styles";
import Clipboard from "../../../assets/svg/Clipboard.svg";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Clipboard />

      <Text style={styles.boldText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
