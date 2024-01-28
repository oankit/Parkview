import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ParkingLotMap from './ParkingLotMap/ParkingLotMap';


const DetailsScreen = ({ navigation, route }) => {
    const { item } = route.params;

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
            {/* Parking lot map will be rendered here */}
            <ParkingLotMap parkingLotData={item.parkingLotData} />
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
