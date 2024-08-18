import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withSequence, runOnJS, withRepeat } from 'react-native-reanimated';
import { Audio } from 'expo-av';

interface CreatureProps {
  level: number;
}

const Creature: React.FC<CreatureProps> = ({ level }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const scaleX = useSharedValue(1);

  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(require('../assets/gastly.mp3'));
      soundRef.current = sound;
    };

    loadSound();

    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const handlePress = async () => {
    if (soundRef.current) {
      await soundRef.current.replayAsync();
    }

    // Fazer a animação de "boing"
    scale.value = withSequence(
      withTiming(1.2, { duration: 150, easing: Easing.out(Easing.ease) }),
      withTiming(1, { duration: 150, easing: Easing.out(Easing.ease) })
    );
  };

  const selectRandomAnimation = () => {
    const maxX = screenWidth / 2 - 75; // Considera metade da largura menos a largura do sprite
    const maxY = screenHeight / 6 - 75; // Considera metade da altura menos a altura do sprite

    // Gera posições aleatórias dentro dos limites
    const randomX = Math.random() * (maxX * 2) - maxX;
    const randomY = Math.random() * (maxY * 2) - maxY;

    translateX.value = withTiming(randomX, { duration: 3000, easing: Easing.inOut(Easing.ease) });
    translateY.value = withTiming(randomY, { duration: 3000, easing: Easing.inOut(Easing.ease) }, () => {
      runOnJS(selectRandomAnimation)();
    });
  };

  useEffect(() => {
    // Animação de levitação contínua. Isso foi um saco de "arrumar".
    translateY.value = withRepeat(
      withTiming(-10, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );

    // Inicia a animação, básico.
    selectRandomAnimation();
  }, [screenWidth, screenHeight]);

  const animatedStyle = useAnimatedStyle(() => {
    const direction = translateX.value > 0 ? -1 : 1;
    return {
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale: scale.value },
        { scaleX: direction },
      ],
    };
  });

  const getCreatureStage = () => {
    if (level < 6) return require('../assets/gastly.png');
    if (level < 15) return require('../assets/haunter.png');
    return require('../assets/gengar.png');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image source={require('../assets/fundo.png')} style={styles.background} />
      </View>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={animatedStyle}>
          <Image source={getCreatureStage()} style={{ width: 150, height: 150 }} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundContainer: {
    borderRadius: 18,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 4 }, 
    shadowOpacity: 1, 
    shadowRadius: 5, 
    elevation: 10,
  },
  background: {
    borderRadius: 18,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Creature;
