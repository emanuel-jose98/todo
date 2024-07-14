import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../../assets/svg/Logo.svg";
import Plus from "../../../assets/svg/plus.svg";
import { QuantityText } from "../../components/QuantityText";
import { EmptyList } from "../../components/EmptyList";
import { TaskCard } from "../../components/TaskCard";

export type ListTask = {
  id: number;
  text: string;
  isDone: boolean;
};

export function Home() {
  const [tasksList, setTasksList] = useState<ListTask[]>([]);
  const [inputValue, setInputValue] = useState("");

  function getQuantity(doneTasks?: boolean) {
    if (doneTasks) {
      return tasksList.filter((task) => task.isDone).length;
    }

    return tasksList.filter((task) => !task.isDone).length;
  }

  function handleSetTaskIsDone(taskId: number, isDone: boolean) {
    const updateTasks = tasksList;
    const taskIdx = updateTasks.findIndex((task) => task.id === taskId);

    if (taskIdx >= 0) {
      const updateTask = { ...updateTasks[taskIdx], isDone: isDone };
      updateTasks.splice(taskIdx, 1, updateTask);
    }

    setTasksList([...updateTasks]);
  }

  function handleRemoveTask(taskId: number) {
    Alert.alert("Atenção!", "Deseja excluir a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasksList((prevState) =>
            prevState.filter((task) => task.id !== taskId)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleAddNewTask() {
    const newTask: ListTask = {
      id: tasksList.length + 1,
      text: inputValue,
      isDone: false,
    };

    setTasksList((prevState) => [...prevState, newTask]);
    setInputValue("");
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
            value={inputValue}
            onChangeText={setInputValue}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
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

        <FlatList
          data={tasksList}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              handleIsDone={handleSetTaskIsDone}
              handleRemoveTask={handleRemoveTask}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  );
}
