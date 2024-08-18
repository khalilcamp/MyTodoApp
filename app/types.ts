// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  SelectCreature: undefined;
  Home: { creatureType: string };
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
export type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;
export type SelectCreatureScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectCreature'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;
export type SelectCreatureScreenRouteProp = RouteProp<RootStackParamList, 'SelectCreature'>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
