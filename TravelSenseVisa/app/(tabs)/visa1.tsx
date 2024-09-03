// Visa1.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Visa1: React.FC = () => {
  const navigation = useNavigation();

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

      <Text style={styles.text}>
        Welcome to Visa1 Page
      </Text>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Text>Card 1</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
        </View>
      </View>

      <Button
        title="Get Approval"
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
      alignItems: 'center', // Added for proper alignment
    },
    backButton: {
      // Define your styles for backButton here
      padding: 10,
    },
    profileButton: {
      // Define your styles for profileButton here
      padding: 10,
    },
    text: {
      // Define your styles for text here
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    cards: {
      // Define your styles for cards container here
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    card: {
      // Define your styles for individual cards here
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
    Profile:{

    }
  });

  export default Visa1
  
