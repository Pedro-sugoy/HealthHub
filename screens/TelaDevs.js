import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function TelaDevs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/pedro.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Pedro Manzo Yokoo</Text>
        <Text style={styles.rm}>RM: 556115</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../assets/fernando.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Fernando Fernandes Prado</Text>
        <Text style={styles.rm}>RM: 557982</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../assets/guilherme.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Guilherme Camamie Laiber de Jesus</Text>
        <Text style={styles.rm}>RM: 554894</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1e3c72',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    gap: 30, 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    width: '85%',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#1976d2',
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 6,
    textAlign: 'center',
  },
  rm: {
    fontSize: 16,
    color: '#555',
  },
});
