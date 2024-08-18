import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface TaskProps {
    task: {
      id: number;
      title: string;
      category: string;
      completed: boolean;
    };
    onComplete: (taskId: number) => void;
  }

const Task: React.FC<TaskProps> = ({ task, onComplete }) => {
  return (
    <View style={[styles.taskContainer, task.completed && styles.completedTask]}>
      <Text style={styles.taskText}>{task.title}</Text>
      <Text style={styles.categoryText}>{task.category}</Text>
      {!task.completed && (
        <Button title="Complete" onPress={() => onComplete(task.id)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
  categoryText: {
    fontSize: 12,
    color: 'gray',
  },
  completedTask: {
    backgroundColor: '#d3d3d3',
  },
});

export default Task;
