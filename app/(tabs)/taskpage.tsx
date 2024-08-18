// src/pages/TaskPage.tsx

import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskList from '@/components/TaskList';
import TaskInput from '@/components/TaskInput';
import styled from 'styled-components/native';

interface Task {
  id: number;
  title: string;
  category: string;
  completed: boolean;
}

const TaskPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [level, setLevel] = useState(1);
  const [xp, setXP] = useState(0);
  const [xpNeeded, setXPNeeded] = useState(100);

  const addTaskHandler = (taskTitle: string, category: string) => {
    setTasks(currentTasks => [
      ...currentTasks,
      { id: Math.random(), title: taskTitle, category, completed: false }
    ]);
    setIsAddMode(false);
  };

  const completeTaskHandler = (taskId: number, category: string) => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );

    let xpGain = 0;
    if (category === 'Importante') {
      xpGain = 20;
    } else if (category === 'Prioridade') {
      xpGain = 200;
    } else if (category === 'Opcional') {
      xpGain = 10;
    }

    gainXP(xpGain);
  };

  const gainXP = (amount: number) => {
    setXP(prevXP => {
      const newXP = prevXP + amount;
      if (newXP >= xpNeeded) {
        const extraXP = newXP - xpNeeded;
        setLevel(prevLevel => prevLevel + 1);
        setXPNeeded(prevXPNeeded => Math.floor(prevXPNeeded * 1.2));
        return extraXP;
      }
      return newXP;
    });
  };

  const deleteTaskHandler = (taskId: number) => {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== taskId));
  };

  const reactivateTasks = () => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.completed ? { ...task, completed: false } : task
      )
    );
  };

  useEffect(() => {
    const timer = setTimeout(reactivateTasks, 24 * 60 * 60 * 1000); // 24 horas, eu acho?
    return () => clearTimeout(timer);
  }, [tasks]);

  return (
    <View style={styles.screen}>
      <TaskButton onPress={() => setIsAddMode(true)}>
        <ButtonText>Adicionar Nova Tarefa</ButtonText>
      </TaskButton>
      <TaskInput visible={isAddMode} onAddTask={addTaskHandler} onClose={() => setIsAddMode(false)} />
      <TaskList
        tasks={tasks}
        onTaskCompleted={completeTaskHandler}
        onDeleteTask={deleteTaskHandler}
        onReactivateTask={reactivateTasks}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#dbdbdb',
    justifyContent: 'flex-start',
  },
});

const TaskButton = styled.TouchableOpacity`
  font-family: 'OpenSans_600SemiBold';
  font-weight: 700;
  background-color: #533838;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  font-family: 'OpenSans_600SemiBold';
  font-size: 16px;
  color: white;
`;

export default TaskPage;
