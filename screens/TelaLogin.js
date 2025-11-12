import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../src/context/ThemeContext';

export default function TelaLogin() {
  const { colors } = useTheme(); 

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>Tela Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
