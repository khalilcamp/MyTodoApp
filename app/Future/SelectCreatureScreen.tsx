import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// Defina o tipo de navegação esperado
type RootStackParamList = {
  SelectCreature: undefined;
  Home: { creatureType: string };
};

// Defina as props para o componente SelectCreatureScreen
type SelectCreatureScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectCreature'>;
type SelectCreatureScreenRouteProp = RouteProp<RootStackParamList, 'SelectCreature'>;

type Props = {
  navigation: SelectCreatureScreenNavigationProp;
  route: SelectCreatureScreenRouteProp;
};

const SelectCreatureScreen: React.FC<Props> = ({ navigation }) => {
  const selectCreature = (creatureType: string) => { // Especifica o tipo de 'creatureType' como 'string'
    // Salva o tipo de criatura escolhida (ex: gastly, haunter, gengar)
    navigation.navigate('Home', { creatureType });
  };

  return (
    <View style={styles.container}>
      <Button title="Choose Gastly" onPress={() => selectCreature('gastly')} />
      <Button title="Choose Haunter" onPress={() => selectCreature('haunter')} />
      <Button title="Choose Gengar" onPress={() => selectCreature('gengar')} />
      <View style={styles.creatureContainer}>
        <Image source={require('../../assets/gastly.png')} style={styles.creatureImage} />
        <Image source={require('../../assets/haunter.png')} style={styles.creatureImage} />
        <Image source={require('../../assets/gengar.png')} style={styles.creatureImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  creatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  creatureImage: {
    width: 100,
    height: 100,
  },
});

export default SelectCreatureScreen;
