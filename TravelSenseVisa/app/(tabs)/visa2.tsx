// Visa2.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Visa2: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Visa2 Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Visa2;
