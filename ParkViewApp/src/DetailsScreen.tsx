import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ParkingLotMap from './ParkingLotMap/ParkingLotMap';
import TimeChart from './TimeChart.js';

const DetailsScreen = ({ navigation, route }) => {
    const { lot: item } = route.params;
    const carData = [
        { time: '9:00', carCount: 12 },
        { time: '10:00', carCount: 30 },
        { time: '12:00', carCount: 25 },
        { time: '15:00', carCount: 20 },
        { time: '18:00', carCount: 10 },

    ];
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Lot Details</Text>
                <View style={styles.placeholder} />
            </View>
           
            {/* <Text style={styles.itemDetails}>Details for {item.name}</Text> */}
            {/* Parking lot map will be rendered here */}
            
            <ParkingLotMap parkingLotData={item.parkingLotData} />
            {/* Render the TimeChart component with the carData */}
            <View style={styles.titleContainer}>
            <Text style={styles.TitleMap}>Map</Text>
            </View>
            
            <View style={styles.centeredContainer}>
                <TimeChart data={carData} />
                <Text style={styles.Title}>Popular Times</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 16,
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

    Title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    TitleMap: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});


export default DetailsScreen;