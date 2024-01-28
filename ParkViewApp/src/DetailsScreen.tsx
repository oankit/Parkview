import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TimeChart from '../TimeChart.js';  // Import the TimeChart component
import Group from './Group.tsx';  // Import the Group component

const DetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  // Example data (replace with your actual data structure)
  const carData = [
    { time: '8:00 AM', carCount: 5 },
    { time: '9:00 AM', carCount: 8 },
    { time: '10:00 AM', carCount: 12 },
    // ... add more data
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.header}>UBCO ParkView</Text>
        <View style={styles.placeholder} />
      </View>
      <Text style={styles.itemDetails}>Details for {item.name}</Text>

      {/* Render the TimeChart component with the carData */}
      <TimeChart data={carData} />

      {/* Render the Group component */}
      <Group />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures space is distributed evenly
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#002144',
  },
  header: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  placeholder: {
    width: 60, // Adjust this width to match the width of the back button
    padding: 10,
  },
  itemDetails: {
    padding: 10,
    fontSize: 18,
  },
});

export default DetailsScreen;