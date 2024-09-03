// Visa1.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define your stack param list
type RootStackParamList = {
  Visa1: undefined; // No params for Visa1
  Visa2: undefined; // No params for Visa2
  Profile: undefined; // Added Profile screen
};

// Define navigation prop type for Visa1
type Visa1NavigationProp = StackNavigationProp<RootStackParamList, 'Visa1'>;

const Visa1: React.FC = () => {
  const navigation = useNavigation<Visa1NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Image
          source={require('@/assets/images/Visaapproved.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.profileButton}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Welcome to Visa1 Page</Text>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Text>Card 1</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
        </View>
      </View>

      <Button
        title="Next Page"
        onPress={() => navigation.navigate('Visa2')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
  },
  profileButton: {
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  card: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default Visa1;
