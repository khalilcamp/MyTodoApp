import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface TaskInputProps {
  onAddTask: (title: string, category: string) => void;
  visible: boolean;
  onClose: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask, visible, onClose }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [category, setCategory] = useState('Importante');

  const handleAddTask = () => {
    if (taskTitle.trim().length > 0) {
      onAddTask(taskTitle, category);
      setTaskTitle('');
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite a tarefa"
          style={styles.input}
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Importante" value="Importante" />
          <Picker.Item label="Prioridade" value="Prioridade" />
          <Picker.Item label="Opcional" value="Opcional" />
        </Picker>
        <Button title="Adicionar Tarefa" onPress={handleAddTask} />
        <Button title="Cancelar" color="red" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    textDecorationColor: "#FAFAFA",
    height: 50,
    width: '80%',
    marginBottom: 20,
  },
});

export default TaskInput;
