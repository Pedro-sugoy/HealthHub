import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MenuHamburguer from '../src/components/MenuHamburguer';
import { useTranslation } from 'react-i18next';

export default function TelaHome() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { t } = useTranslation(); // Hook do i18n

  return (
    <View style={styles.container}>
      {/* Botão do menu */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuVisible(true)}
      >
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      {/* Conteúdo principal */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{t('Bem-vindo!')}</Text>

        <Text style={styles.subtitle}>{t('descricaoApp')}</Text>

        <Text style={styles.paragraph}>{t('importanciaSaudeMental')}</Text>

        <Text style={styles.paragraph}>{t('cuidarDaMente')}</Text>

        <Text style={styles.paragraph}>{t('dicaSaude')}</Text>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>{t('footerSobre')}</Text>
          <Text style={styles.footerText}>{t('footerQuestionario')}</Text>
        </View>
      </ScrollView>

      {/* Menu lateral */}
      <MenuHamburguer visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
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
    color: '#1976d2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565c0',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
    lineHeight: 24,
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#BBDEFB',
    padding: 15,
    borderRadius: 12,
    width: '100%',
  },
  footerText: {
    fontSize: 15,
    color: '#0d47a1',
    textAlign: 'center',
    marginBottom: 5,
  },
});
