import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NevjegyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Névjegy</Text>
      <Text style={styles.text}>Név: Laczkó Bálint</Text>
      <Text style={styles.text}>Csoport: React Native</Text>
      <Text style={styles.text}>Aktuális dátum: 2024.04.03</Text>
    </View>
  );
};



export default NevjegyScreen;
