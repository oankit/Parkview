import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation}) => {
    const parkingLots = [
        { id: '1', name: 'Lot A' },
        { id: '2', name: 'Lot B' },
        { id: '3', name: 'Lot C' },
        // Add more parking lots as needed
    ];

    return (
        <View style={styles.container}>
        <Text style={styles.header}>UBCO ParkView</Text>
        <FlatList
          data={parkingLots}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: '#002144',
        color: '#fff',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default HomeScreen;