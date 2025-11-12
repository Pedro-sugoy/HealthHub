import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../src/context/ThemeContext';

export default function TelaSobreAju() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>{t('sobreSaudeTitulo')}</Text>

      <Text style={[styles.paragraph, { color: colors.text }]}>
        {t('sobreSaudeTexto1')} <Text style={[styles.link, { color: colors.button }]}>{'gov.br'}</Text>, {t('sobreSaudeTexto2')}
      </Text>

      <Text style={[styles.quote, { backgroundColor: colors.inputBackground, color: colors.text }]}>
        {t('sobreSaudeCitacao')}
      </Text>

      <Text style={[styles.paragraph, { color: colors.text }]}>
        {t('sobreSaudeTexto3')} <Text style={[styles.link, { color: colors.button }]}>{'G1'}</Text>, {t('sobreSaudeTexto4')}
      </Text>

      <Text style={[styles.highlight, { color: colors.button }]}>{t('sobreSaudeDado2024')}</Text>

      <Image
        source={require('../assets/graficosG1.avif')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={[styles.footer, { color: colors.text }]}>{t('sobreSaudeConclusao')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 15,
    lineHeight: 24,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    padding: 12,
    borderRadius: 10,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  highlight: {
    fontSize: 16,
    fontWeight: '600',
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
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
    fontWeight: '600',
  },
});
