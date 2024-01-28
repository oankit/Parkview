import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [parkingLots, setParkingLots] = useState([
        // Initialize with default values. These will be updated in useEffect.
        { id: '1', name: 'Lot A', total: 0, available: 0 },
        { id: '2', name: 'Gym Short term', total: 23, available: 0 },
        { id: '3', name: 'Lot B', total: 15, available: 20 },
        { id: '4', name: 'Lot E', total: 8, available: 30 },
        { id: '5', name: 'Lot F', total: 12, available: 32 },
        { id: '6', name: 'UNC Short-Term', total: 6, available: 41},
       { id: '7', name: 'Lot G', total: 30, available: 72 },
    { id: '8', name: 'Lot I', total: 42, available: 112 },
    { id: '9', name: 'Lot K', total: 10, available: 26 },
    { id: '10', name: 'Lot S', total: 2, available: 25 },

    ]);

    useEffect(() => {
        const occupiedRef = database().ref('/occupied_spaces');

        const onOccupiedChange = occupiedRef.on('value', snapshot => {
            const spaces = snapshot.val();
            const totalSpaces = Object.keys(spaces).length;
            const availableSpaces = Object.values(spaces).filter(isAvailable => !isAvailable).length;

            setParkingLots(lots => lots.map(lot => {
                if (lot.name === 'Lot A') {
                    return { ...lot, total: totalSpaces, available: availableSpaces };
                }
                return lot;
            }));
        });

        return () => occupiedRef.off('value', onOccupiedChange);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>UBCO ParkView</Text>
            <FlatList
                data={parkingLots}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { lot: item })}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemAvailableSpaces}>
                                Available Spaces: {item.available}/{item.total}
                            </Text>
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
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemAvailableSpaces: {
        fontSize: 14,
        color: 'green',
    },
});

export default HomeScreen;
