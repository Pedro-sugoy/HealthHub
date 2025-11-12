import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next'; // Import i18n

export default function TelaSobreAju() {
  const { t } = useTranslation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{t('sobreSaudeTitulo')}</Text>

      <Text style={styles.paragraph}>
        {t('sobreSaudeTexto1')} <Text style={styles.link}>gov.br</Text>, {t('sobreSaudeTexto2')}
      </Text>

      <Text style={styles.quote}>
        {t('sobreSaudeCitacao')}
      </Text>

      <Text style={styles.paragraph}>
        {t('sobreSaudeTexto3')} <Text style={styles.link}>G1</Text>, {t('sobreSaudeTexto4')}
      </Text>

      <Text style={styles.highlight}>
        {t('sobreSaudeDado2024')}
      </Text>

      <Image
        source={require('../assets/graficosG1.avif')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.footer}>
        {t('sobreSaudeConclusao')}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E8F0FE',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 15,
    lineHeight: 24,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1565C0',
    backgroundColor: '#BBDEFB',
    padding: 12,
    borderRadius: 10,
    lineHeight: 24,
    marginBottom: 15,
  },
  highlight: {
    fontSize: 16,
    fontWeight: '600',
    color: '#C62828',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },
  link: {
    color: '#1976D2',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 16,
    color: '#0D47A1',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
    fontWeight: '600',
  },
});
