import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskList from '@/components/TaskList';
import Creature from '@/components/Creature';
import ProgressBar from '@/components/ProgressBar';

const App = () => {
  const [level, setLevel] = useState(0);

  const handleTaskCompleted = () => {
    setLevel(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha To-Do List Evolutiva</Text>
      <TaskList onTaskCompleted={handleTaskCompleted} />
      <Creature level={level} />
      <ProgressBar level={level} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default App;
