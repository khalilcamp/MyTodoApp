import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import Task from './Task';

interface Task {
  id: number;
  title: string;
  category: string;
  completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onTaskCompleted: (taskId: number, category: string) => void;
    onDeleteTask: (taskId: number) => void;
    onReactivateTask?: (taskId: number) => void; // Tornar opcional
  }

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskCompleted, onDeleteTask, onReactivateTask }) => {
    const renderTask = (category: string) => (
        <>
          <Text style={styles.categoryTitle}>{category}</Text>
          <FlatList
            data={tasks.filter(task => task.category === category && !task.completed)}
            renderItem={({ item }) => (
              <Task 
                task={item} 
                onComplete={() => onTaskCompleted(item.id, category)} // Passando o taskId e category corretamente
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      );

  const renderCompletedTasks = () => (
    <FlatList
      data={tasks.filter(task => task.completed)}
      renderItem={({ item }) => (
        <View style={styles.completedTask}>
          <Text>{item.title}</Text>
          <Button title="Deletar" onPress={() => onDeleteTask(item.id)} />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );

  return (
    <View style={styles.container}>
      {renderTask('Importante')}
      {renderTask('Prioridade')}
      {renderTask('Opcional')}
      <Text style={styles.categoryTitle}>Completadas</Text>
      {renderCompletedTasks()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  completedTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
  },
});

export default TaskList;
