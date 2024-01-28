import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

// Load your parking spaces data and car image
import parkingSpacesData from './ParkingSpaces.json';
import carImage from './car.png'; // Ensure this image is in your project directory

const { width: screenWidth } = Dimensions.get('window');

const ParkingLotMap = () => {
  const [occupiedSpaces, setOccupiedSpaces] = useState(new Map());

  useEffect(() => {
    const newOccupiedSpaces = new Map();
    parkingSpacesData.forEach((_, index) => {
      newOccupiedSpaces.set(index, Math.random() < 0.5); // Random occupancy for demo purposes
    });
    setOccupiedSpaces(newOccupiedSpaces);
  }, []);

  // Calculate the scale based on max width and height found in your parking spaces
  const maxWidth = Math.max(...parkingSpacesData.map(s => s.position[0] + s.width));
  const maxHeight = Math.max(...parkingSpacesData.map(s => s.position[1] + s.height));
  const scaleX = screenWidth / maxWidth;
  const scaleY = scaleX; // Keeping aspect ratio consistent
  const spaceGap = 2; // Gap between spaces for parking lines

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={{ width: maxWidth * scaleX, height: maxHeight * scaleY }}>
        {parkingSpacesData.map((space, index) => {
          const isOccupied = occupiedSpaces.get(index);

          const left = space.position[0] * scaleX;
          const top = space.position[1] * scaleY;
          const width = space.width * scaleX - spaceGap;
          const height = space.height * scaleY - spaceGap;

          const spaceStyle = {
            left,
            top,
            width,
            height,
            backgroundColor: isOccupied ? '#FF4C4C' : '#4CAF50',
          };

          return (
            <View key={`space-${index}`} style={[styles.space, spaceStyle]}>
              {isOccupied && (
                <Image source={carImage} style={styles.car} resizeMode="contain" />
              )}
            </View>
          );
        })}
        {renderParkingLines(parkingSpacesData, scaleX, scaleY, spaceGap)}
      </View>
    </ScrollView>
  );
};

// Render parking lines based on space positioning
const renderParkingLines = (parkingSpacesData, scaleX, scaleY, spaceGap) => {
  // Your logic for rendering parking lines between spaces
  // This could be as simple as rendering a thin View with a background color representing the line
  return parkingSpacesData.map((space, index) => (
    <View
      key={`line-${index}`}
      style={{
        position: 'absolute',
        left: (space.position[0] + space.width) * scaleX - spaceGap,
        top: space.position[1] * scaleY,
        width: spaceGap,
        height: space.height * scaleY,
        backgroundColor: 'yellow', // Color for the parking line
      }}
    />
  ));
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  space: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4, // Rounded corners for parking spaces
  },
  car: {
    width: '100%',
    height: '100%',
  },
});

export default ParkingLotMap;
