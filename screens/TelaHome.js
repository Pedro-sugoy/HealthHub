import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MenuHamburguer from '../src/components/MenuHamburguer';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../src/context/ThemeContext'; 

export default function TelaHome() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { t } = useTranslation();
  const { colors } = useTheme(); 

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuVisible(true)}
      >
        <Text style={[styles.menuIcon, { color: colors.text }]}>☰</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.title, { color: colors.text }]}>{t('Bem-vindo!')}</Text>

        <Text style={[styles.subtitle, { color: colors.text }]}>{t('descricaoApp')}</Text>

        <Text style={[styles.paragraph, { color: colors.text }]}>{t('importanciaSaudeMental')}</Text>

        <Text style={[styles.paragraph, { color: colors.text }]}>{t('cuidarDaMente')}</Text>

        <Text style={[styles.paragraph, { color: colors.text }]}>{t('dicaSaude')}</Text>

        <View style={[styles.footer, { backgroundColor: colors.inputBackground, borderColor: colors.inputBorder, borderWidth: 1 }]}>
          <Text style={[styles.footerText, { color: colors.text }]}>{t('footerSobre')}</Text>
          <Text style={[styles.footerText, { color: colors.text }]}>{t('footerQuestionario')}</Text>
        </View>
      </ScrollView>

      <MenuHamburguer visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  menuIcon: {
    fontSize: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 25,
    textAlign: 'center',
    lineHeight: 24,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    width: '100%',
  },
  footerText: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },
});
