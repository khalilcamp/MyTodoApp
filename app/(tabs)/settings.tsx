import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Configurações</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    fontFamily: 'OpenSans_600SemiBold',
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
