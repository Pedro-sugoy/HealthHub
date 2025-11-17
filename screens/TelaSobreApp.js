import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../src/context/ThemeContext';
import commit from '../src/commit/commit.json';

export default function TelaSobreApp() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>

      <Text style={[styles.title, { color: colors.text }]}>
        Sobre o App
      </Text>

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

      <View style={[styles.commitBox, { borderColor: colors.text }]}>
        <Text style={[styles.commitTitle, { color: colors.text }]}>
          Commit de Referência:
        </Text>

        <Text style={[styles.commitHash, { color: colors.text }]}>
          {commit.hash}
        </Text>

        <Text style={[styles.commitInfo, { color: colors.text }]}>
          Esta é a versão publicada no Firebase App Distribution.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
  },
  footer: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  commitBox: {
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    width: '100%',
  },
  commitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  commitHash: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  commitInfo: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.8,
  },
});
