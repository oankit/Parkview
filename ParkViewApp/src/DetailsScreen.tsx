import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TimeChart from '../TimeChart.js';  // Import the TimeChart component
import Map from './Map.tsx';  // Import the Map component

const DetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  // Example data (replace with your actual data structure)
  const carData = [
    { time: '9:00', carCount: 8 },
    { time: '10:00', carCount: 12 },
    { time: '12:00', carCount: 8 },
    { time: '15:00', carCount: 8 },
    { time: '18:00', carCount: 3 },

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

            {/* Render the Map component */}
            <Map />

      {/* Render the TimeChart component with the carData */}
      <View style={styles.centeredContainer}>
      <TimeChart data={carData} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
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

  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;