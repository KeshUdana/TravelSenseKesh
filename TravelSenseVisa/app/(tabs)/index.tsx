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
        <Image
          source={require('@/assets/images/vsapp.png')}
          style={styles.image}
        />
        <Link href="/profile" asChild>
          <Pressable style={styles.profileButton}>
            <Text>Profile</Text>
          </Pressable>
        </Link>
      </View>

      <Text style={styles.text}>Get Approval For your Visa</Text>
      <Text style={styles.text1}>Ready to explore Srilanka?</Text>
      <Text style={styles.text2}>Ensure you have your tourist visa sorted.</Text>



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
          <Text>Get Approval</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0, // Remove padding to ensure the header bar covers the top
    backgroundColor: '#fff',
    alignItems: 'center', // Center content horizontally

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Ensure header has a background color
    padding: 10,
    width: '100%',
    height: '25%',
    position: 'static',
    zIndex: 1, // Ensure header stays above the image
  },
  image: {
    width: '120%',
    height: '100%', // Adjust the height as needed
    aspectRatio: 1,
    resizeMode: 'cover',
    position: 'absolute',
    
  },
  content: {
    marginTop: '30%', // Push content below the image
    padding: 20,
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
    justifyContent: 'center',
    textAlign: 'center',

  
  },
  text1:{
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  text2:{
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 20,
    justifyContent: 'center',
    textAlign: 'center',
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
