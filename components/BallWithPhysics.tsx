// BallWithPhysics.tsx
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface BallWithPhysicsProps {
  onRelease: (x: number, y: number) => void;
}

const BallWithPhysics: React.FC<BallWithPhysicsProps> = ({ onRelease }) => {
  const ballX = useSharedValue(screenWidth / 2 - 25);
  const ballY = useSharedValue(screenHeight - 200);

  const panGesture = useAnimatedGestureHandler({
    onStart: (_, context: any) => {
      context.startX = ballX.value;
      context.startY = ballY.value;
    },
    onActive: (event, context: any) => {
      ballX.value = context.startX + event.translationX;
      ballY.value = context.startY + event.translationY;
    },
    onEnd: () => {
      onRelease(ballX.value, ballY.value);
    },
  });

  const animatedBallStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: ballX.value }, { translateY: ballY.value }],
  }));

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[styles.ball, animatedBallStyle]}>
        <FontAwesome name="soccer-ball-o" size={50} color="white" />
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  ball: {
    position: 'absolute',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BallWithPhysics;
