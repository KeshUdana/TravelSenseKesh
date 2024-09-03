import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';

const Visa1: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="../" asChild>
          <Pressable style={styles.backButton}>
            <Text>Back</Text>
          </Pressable>
        </Link>
        
        <Link href="/profile" asChild>
          <Pressable style={styles.profileButton}>
            <Text>Profile</Text>
          </Pressable>
        </Link>
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

      <Link href="/visa2" asChild>
        <Pressable style={styles.nextButton}>
          <Text>Next Page</Text>
        </Pressable>
      </Link>
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
  nextButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Visa1;
