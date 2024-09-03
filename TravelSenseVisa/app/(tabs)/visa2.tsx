import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

const Visa2: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState('male');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [passportExpiryDate, setPassportExpiryDate] = useState(new Date());
  const [arrivingDate, setArrivingDate] = useState(new Date());
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // State to manage DatePicker visibility
  const [showDateOfBirthPicker, setShowDateOfBirthPicker] = useState(false);
  const [showPassportExpiryDatePicker, setShowPassportExpiryDatePicker] = useState(false);
  const [showArrivingDatePicker, setShowArrivingDatePicker] = useState(false);

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handlePdfPick = async () => {
    // Placeholder for PDF picker logic, Expo doesn't natively support PDF picking.
    // You may need to use a library like expo-document-picker for this.
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Personal Details</Text>
      <TextInput placeholder="Full Name" style={styles.input} />

      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity onPress={() => setShowDateOfBirthPicker(true)} style={styles.datePickerButton}>
        <Text>Select Date of Birth</Text>
      </TouchableOpacity>
      {showDateOfBirthPicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDateOfBirthPicker(false); // Hide picker
            const currentDate = selectedDate || dateOfBirth;
            setDateOfBirth(currentDate);
          }}
        />
      )}

      <Text style={styles.label}>Gender</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity onPress={() => setSelectedGender('male')} style={[styles.toggleButton, selectedGender === 'male' && styles.selectedButton]}>
          <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedGender('female')} style={[styles.toggleButton, selectedGender === 'female' && styles.selectedButton]}>
          <Text>Female</Text>
        </TouchableOpacity>
      </View>

      <TextInput placeholder="Nationality" style={styles.input} />
      <TextInput placeholder="Passport Number" style={styles.input} />

      <Text style={styles.label}>Passport Expiry Date</Text>
      <TouchableOpacity onPress={() => setShowPassportExpiryDatePicker(true)} style={styles.datePickerButton}>
        <Text>Select Passport Expiry Date</Text>
      </TouchableOpacity>
      {showPassportExpiryDatePicker && (
        <DateTimePicker
          value={passportExpiryDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPassportExpiryDatePicker(false); // Hide picker
            const currentDate = selectedDate || passportExpiryDate;
            setPassportExpiryDate(currentDate);
          }}
        />
      )}

      <Text style={styles.headerText}>Travel Information</Text>
      <TextInput placeholder="Purpose of Visit" style={styles.input} />

      <Text style={styles.label}>Arriving Date</Text>
      <TouchableOpacity onPress={() => setShowArrivingDatePicker(true)} style={styles.datePickerButton}>
        <Text>Select Arriving Date</Text>
      </TouchableOpacity>
      {showArrivingDatePicker && (
        <DateTimePicker
          value={arrivingDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowArrivingDatePicker(false); // Hide picker
            const currentDate = selectedDate || arrivingDate;
            setArrivingDate(currentDate);
          }}
        />
      )}

      <TextInput placeholder="Duration of Stay" style={styles.input} />

      <Text style={styles.label}>Have you visited Sri Lanka before?</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setHasVisitedBefore(true)} style={[styles.radioButton, hasVisitedBefore && styles.selectedRadio]}>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setHasVisitedBefore(false)} style={[styles.radioButton, !hasVisitedBefore && styles.selectedRadio]}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>

      {hasVisitedBefore && <TextInput placeholder="If yes, when?" style={styles.input} />}

      <Text style={styles.headerText}>Supporting Documents</Text>
      <TouchableOpacity onPress={handleImagePick} style={styles.uploadButton}>
        <Text>Upload JPG/PNG</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
      )}

      <TouchableOpacity onPress={handlePdfPick} style={styles.uploadButton}>
        <Text>Upload PDF (Scanned Passport)</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Emergency Contact Information</Text>
      <TextInput placeholder="Contact Name" style={styles.input} />
      <TextInput placeholder="Contact Number" style={styles.input} />

      <Link href="/visa3" asChild>
        <TouchableOpacity style={styles.submitButton}>
          <Text>Next</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#d0d0d0',
  },
  radioContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  radioButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedRadio: {
    backgroundColor: '#d0d0d0',
  },
  datePickerButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  uploadButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 5,
  },
  submitButton: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Visa2;
