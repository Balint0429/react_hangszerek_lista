import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';

export default function HangszerekScreen() {
  const host = "http://localhost:8000/";
  const endpoint = "hangszerek";
  const url = host + endpoint;

  const [hangszerek, setHangszerek] = useState([]);

  useEffect(() => {
    getHangszerek();
  }, []); 

  function getHangszerek() {
    fetch(url)
    .then(response => response.json())
    .then(result => {      
      console.log(result);
      setHangszerek(result);
    })
    .catch(error => console.error('Error fetching data:', error));
  }

  return (
    <View style={styles.container}>  
      <FlatList
        data={hangszerek}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>Name: {item.Név}</Text>
            <Text>Type: {item.Típus}</Text>
            <Text>Brand: {item.Márka}</Text>
            <Text>Year: {item.Év}</Text>
            <Text>------------------------------------</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    borderWidth: 1,
    borderColor: 'blue', 
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
