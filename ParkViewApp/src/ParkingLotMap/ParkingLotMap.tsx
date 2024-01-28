import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import database from '@react-native-firebase/database'; // Import the Firebase database module
import carImage from './car.png';
import parkingSpacesData from './ParkingSpaces.json';

const { width: screenWidth } = Dimensions.get('window');

const ParkingLotMap = () => {
  const [occupiedSpaces, setOccupiedSpaces] = useState(new Map());

  useEffect(() => {
    const reference = database().ref('/occupied_spaces');

    // Listen for changes in the /occupied_spaces path
    const onDataChange = reference.on('value', snapshot => {
      const dataFromDatabase = snapshot.val();
      const newOccupiedSpaces = new Map();

      parkingSpacesData.forEach((_, index) => {
        newOccupiedSpaces.set(index, dataFromDatabase && dataFromDatabase[index]);
      });

      setOccupiedSpaces(newOccupiedSpaces);
    });

    // Unsubscribe from the listener when the component is unmounted
    return () => reference.off('value', onDataChange);
  }, []);

  const maxWidth = Math.max(...parkingSpacesData.map(s => s.position[0] + s.width));
  const maxHeight = Math.max(...parkingSpacesData.map(s => s.position[1] + s.height));
  const scaleX = screenWidth / maxWidth;
  const scaleY = scaleX;
  const spaceGap = 0;

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

const renderParkingLines = (parkingSpacesData, scaleX, scaleY, spaceGap) => {
  return parkingSpacesData.map((space, index) => (
    <View
      key={`line-${index}`}
      style={{
        position: 'absolute',
        left: (space.position[0] + space.width) * scaleX - spaceGap,
        top: space.position[1] * scaleY,
        width: spaceGap,
        height: space.height * scaleY,
        backgroundColor: 'yellow',
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
    borderRadius: 4,
  },
  car: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
});

export default ParkingLotMap;
