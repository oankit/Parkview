<<<<<<< HEAD
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    const parkingLots = [
        { id: '1', name: 'Lot A', total: 20, available: 10, },
=======
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';

const HomeScreen = ({ navigation }) => {
    // sample realtime code demo:
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const reference = database().ref('/lots/lot-h/name');

        // Listen for changes in the /lots/lot-h/name path
        const onDataChange = reference.on('value', snapshot => {
            console.log('Updated data: ', snapshot.val());
            setData(snapshot.val());
        });

        // Unsubscribe from the listener when the component is unmounted
        return () => reference.off('value', onDataChange);
    }, []);

    const parkingLots = [
        { id: '1', name: 'Lot A', total: 20, available: 10 },
>>>>>>> origin/main
        { id: '2', name: 'Lot B', total: 10, available: 5 },
        { id: '3', name: 'Lot C', total: 15, available: 0 },
        // Add more parking lots as needed
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>UBCO ParkView</Text>
            <FlatList
                data={parkingLots}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemAvailableSpaces}>
                                Available Spaces: {item.available}/{item.total}
                            </Text>
<<<<<<< HEAD
=======
                            <Text>Sample Data: {JSON.stringify(data)}</Text>
>>>>>>> origin/main
                        </View>
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
    itemContainer: {
        // Style for the container of each item
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
    },
    itemName: {
        // Style for the parking lot name
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemAvailableSpaces: {
        // Style for the available spaces text
        fontSize: 14,
        color: 'green', // Example text color
    },
});

export default HomeScreen;