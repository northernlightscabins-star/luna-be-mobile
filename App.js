import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Moon from './src/components/Moon';
import getMoonth from './src/utils/getMoonthByDate';

export default function App() {
  const today = new Date();
  const moonth = getMoonth(today);
  return (
    <View style={styles.container}>
      <Moon illumination={0.17} />
      <Text style={styles.title}>Day 1 of {moonth.day}</Text>
      <Text style={styles.title}>{moonth.name}</Text>
      <Text style={styles.poetry}>Rest when the moon rests.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#eee', fontSize: 24, marginVertical: 8 },
  poetry: { color: '#bbb', fontSize: 16, marginTop: 20 }
});
