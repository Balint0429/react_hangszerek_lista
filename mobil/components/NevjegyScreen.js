import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NevjegyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Névjegy</Text>
      <Text style={styles.text}>Név: Laczkó Bálint</Text>
      <Text style={styles.text}>Csoport: II/2/N</Text>
      <Text style={styles.text}>Aktuális dátum: 2024.04.03</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default NevjegyScreen;
