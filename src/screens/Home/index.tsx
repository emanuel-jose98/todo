import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Logo from "../../../assets/svg/Logo.svg";
import Plus from "../../../assets/svg/plus.svg";
import { QuantityText } from "../../components/QuantityText";

type Task = {
  text: string;
  isDone: boolean;
};

export function Home() {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  function getQuantity(doneTaks?: boolean) {
    if (doneTaks) {
      return tasksList.filter((task) => task.isDone).length;
    }

    return tasksList.filter((task) => !task.isDone).length;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
          />
          <TouchableOpacity style={styles.button}>
            <Plus />
          </TouchableOpacity>
        </View>

        <View style={styles.quantitiesContainer}>
          <QuantityText text="Criadas" quantity={getQuantity()} />
          <QuantityText
            text="Concluídas"
            quantity={getQuantity(true)}
            variant="darker"
          />
        </View>
      </View>
    </View>
  );
}
