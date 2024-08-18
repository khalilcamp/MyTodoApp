import React from 'react';
import { View } from 'react-native';

interface ProgressBarProps {
  level: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ level }) => {
  const progress = (level / 10) * 100;

  return (
    <View style={{ width: '100%', backgroundColor: '#ccc', height: 20 }}>
      <View style={{ width: `${progress}%`, backgroundColor: 'green', height: '100%' }} />
    </View>
  );
};

export default ProgressBar;
