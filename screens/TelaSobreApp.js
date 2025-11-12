import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../src/context/ThemeContext';

export default function TelaSobreApp() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>{t('Bem-vindo!')}</Text>
      
      <Text style={[styles.paragraph, { color: colors.text }]}>
        {t('descricaoApp')}
      </Text>

      <Text style={[styles.paragraph, { color: colors.text }]}>
        {t('importanciaSaudeMental')}
      </Text>

      <Text style={[styles.paragraph, { color: colors.text }]}>
        {t('cuidarDaMente')}
      </Text>

      <Text style={[styles.paragraph, { color: colors.text }]}>
        {t('dicaSaude')}
      </Text>

      <Text style={[styles.footer, { color: colors.text }]}>
        {t('footerSobre')}
      </Text>

      <Text style={[styles.footer, { color: colors.text }]}>
        {t('footerQuestionario')}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 10,
  },
  footer: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
});
