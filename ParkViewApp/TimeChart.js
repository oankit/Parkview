// TimeChart.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const TimeChart = ({ data }) => {
  return (
    <View style={styles.chartContainer}>
      <LineChart
        data={{
          labels: data.map(entry => entry.time),
          datasets: [
            {
              data: data.map(entry => entry.carCount),
            },
          ],
        }}
        width={300}
        height={200}
        yAxisLabel="Cars"
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#eee',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={styles.chartStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: '#fff',
    padding: 16,
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default TimeChart;
