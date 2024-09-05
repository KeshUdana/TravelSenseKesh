import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';

const Visa1: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}
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
      <Text style={styles.text2}>
        Ensure you have your tourist visa sorted.
        Here’s all the essential info to guide you through the whole process:
      </Text>

      <Text style={styles.text2}>
        Issued to bonafide tourists for:
        <Text style={styles.text3}>• Sightseeing</Text>
        <Text style={styles.text3}>• Holidaying</Text>
        <Text style={styles.text3}>• Visiting friends/relatives</Text>
        <Text style={styles.text3}>• Medical treatments</Text>
        <Text style={styles.text3}>• Sports & Cultural activities</Text>
      </Text>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Text>Card 1</Text>
          <Text style={styles.text4}>Allowed</Text>
          <Text style={styles.text5}>Sightseeing</Text>
          <Text style={styles.text5}>Medical treatments</Text>
          <Text style={styles.text5}>Cultural Activities</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
          <Text style={styles.text4}>Not Allowed</Text>
          <Text style={styles.text5}>Business & Trade</Text>
          <Text style={styles.text5}>Meeting/Conferences</Text>
          <Text style={styles.text5}>Employment/Non paid</Text>
          <Text style={styles.text5}>Long term staying</Text>
        </View>
      </View>

      <Link href="/visa2" asChild>
        <Pressable style={styles.nextButton}>
          <Text>Get Approval</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0, 
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 20, // Ensure there's space for scrolling
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
    padding: 10,
    width: '100%',
    height: 150, // Adjust height as needed
    zIndex: 1, 
  },
  image: {
    width: '50%',
    height: '100%', 
    resizeMode: 'cover',
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
    textAlign: 'center',
  },
  text1: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 20,
    textAlign: 'center',
  },
  text2: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
    textAlign: 'center',
  },
  text3: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
    textAlign: 'center',
  },
  text4: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
    textAlign: 'center',
  },
  text5: {
    fontSize: 10,
    fontWeight: '200',
    marginVertical: 10,
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
