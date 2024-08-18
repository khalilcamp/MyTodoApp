import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from '@/app/(tabs)';
import SettingsScreen from '@/app/(tabs)/settings';

const CustomTabNavigator = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {renderScreen()}
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab('Home')}>
          <Text style={activeTab === 'Home' ? styles.activeTabText : styles.inactiveTabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab('Settings')}>
          <Text style={activeTab === 'Settings' ? styles.activeTabText : styles.inactiveTabText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: 'gray',
  },
});

export default CustomTabNavigator;
