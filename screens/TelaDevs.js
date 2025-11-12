import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../src/context/ThemeContext'; 

export default function TelaDevs() {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>{t('DESENVOLVEDORES')}</Text>

      <View style={[styles.card, { backgroundColor: theme === 'light' ? '#fff' : '#222' }]}>
        <Image
          source={require('../assets/pedro.jpg')}
          style={styles.image}
        />
        <Text style={[styles.name, { color: colors.text }]}>{t('PedroManzo')}</Text>
        <Text style={[styles.rm, { color: colors.text }]}>{t('RM_Pedro')}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme === 'light' ? '#fff' : '#222' }]}>
        <Image
          source={require('../assets/fernando.jpg')}
          style={styles.image}
        />
        <Text style={[styles.name, { color: colors.text }]}>{t('FernandoPrado')}</Text>
        <Text style={[styles.rm, { color: colors.text }]}>{t('RM_Fernando')}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme === 'light' ? '#fff' : '#222' }]}>
        <Image
          source={require('../assets/guilherme.jpg')}
          style={styles.image}
        />
        <Text style={[styles.name, { color: colors.text }]}>{t('GuilhermeLaiber')}</Text>
        <Text style={[styles.rm, { color: colors.text }]}>{t('RM_Guilherme')}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    gap: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
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
    marginBottom: 6,
    textAlign: 'center',
  },
  rm: {
    fontSize: 16,
  },
});
