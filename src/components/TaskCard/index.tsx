import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListTask } from "../../screens/Home";
import { createVariantStyle } from "./styles";
import { RoundedCheckBox } from "../RoundedCheckBox";
import Trash from "../../../assets/svg/trash.svg";

type Props = {
  task: ListTask;
  handleIsDone: (taskId: number, isDone: boolean) => void;
  handleRemoveTask: (taskId: number) => void;
};

export function TaskCard({ task, handleIsDone, handleRemoveTask }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const styles = createVariantStyle(isChecked);
  return (
    <View style={styles.container}>
      <RoundedCheckBox
        isChecked={isChecked}
        handleCheck={() => {
          setIsChecked(!isChecked);
          handleIsDone(task.id, !isChecked);
        }}
      />
      <Text style={styles.text}>{task.text}</Text>

      <TouchableOpacity onPress={() => handleRemoveTask(task.id)}>
        <Trash />
      </TouchableOpacity>
    </View>
  );
}
