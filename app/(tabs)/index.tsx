import React, { useState } from 'react';
import { View, StyleSheet, Image, GestureResponderEvent } from 'react-native';
import Creature from '@/components/Creature';
import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
  const [targetPosition, setTargetPosition] = useState<{ x: number; y: number } | undefined>(undefined);

  const handlePressIn = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;
    setTargetPosition({ x: pageX - 75, y: pageY - 75 }); // Posiciona o centro da criatura no cursor
  };

  return (
    <View style={styles.screen}>
      <View style={styles.backgroundContainer}>
        <Image source={require('../../assets/fundo.png')} style={styles.background} />
      </View>
      <Creature level={1} targetPosition={targetPosition} />
      <BallButton onPressIn={handlePressIn}>
        <FontAwesome name="soccer-ball-o" size={32} color={'white'} />
      </BallButton>
      <HatButton onPressIn={handlePressIn}>
        <Ionicons name="shirt" size={32} color={'white'} />
      </HatButton>
      <TaskButton onPressIn={handlePressIn}>
        <Ionicons name="list" size={32} color={'white'} />
      </TaskButton>
      <FoodIcon onPressIn={handlePressIn}>
        <Ionicons name="fast-food" size={32} color={'white'} />
      </FoodIcon>
      <SettingsButton onPressIn={handlePressIn}>
        <FontAwesome name="cog" size={36} color={'white'} />
      </SettingsButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

const BallButton = styled.TouchableOpacity`
  background-color: #470b61;
  border: 2px;
  border-radius: 18px;
  padding: 10px;
  position: absolute;
  right: 15px;
  top: 30px;
`;

const HatButton = styled.TouchableOpacity`
  background-color: #470b61;
  border: 2px;
  border-radius: 18px;
  padding: 10px;
  position: absolute;
  right: 15px;
  top: 125px;
`;

const SettingsButton = styled.TouchableOpacity`
  background-color: #470b61;
  border: 2px;
  border-radius: 18px;
  padding: 10px;
  position: absolute;
  right: 15px;
  top: 420px;
`;

const TaskButton = styled.TouchableOpacity`
  background-color: #470b61;
  border: 2px;
  border-radius: 18px;
  padding: 10px;
  position: absolute;
  right: 15px;
  top: 220px;
`;

const FoodIcon = styled.TouchableOpacity`
  background-color: #470b61;
  border: 2px;
  border-radius: 18px;
  padding: 10px;
  position: absolute;
  right: 15px;
  top: 320px;
`;

export default HomeScreen;
