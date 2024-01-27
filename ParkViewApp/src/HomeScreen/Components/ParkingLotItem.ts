import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ParkingLotItemProps {
  name: string;
  availableSpaces: number;
  onPress: Function; // Simplified type for onPress
}

const ParkingLotItem = ({ name, availableSpaces, onPress }: ParkingLotItemProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.itemContainer}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemSpaces}>Available Spaces: {availableSpaces}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
  },
  itemSpaces: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ParkingLotItem;
