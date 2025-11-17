import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext'; 

export default function MenuHamburguer({ visible, onClose }) {
  const navigation = useNavigation();
  const { t } = useTranslation(); 
  const { colors } = useTheme(); 

  const navegar = (tela) => {
    onClose();
    navigation.navigate(tela);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={[styles.overlay, { backgroundColor: 'rgba(0,0,0,0.4)' }]}>
        <View style={[styles.menu, { backgroundColor: colors.background }]}>
          <Text style={[styles.menuTitle, { color: colors.text }]}>{t('Menu')}</Text>

          <TouchableOpacity onPress={() => navegar('Home')} style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>🏠 {t('Home')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('Devs')} style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>👨‍💻 {t('Desenvolvedores')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('SobreAju')} style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>💬 {t('SaudeMental')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('Questionario')} style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>📝 {t('Questionario')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('Config')} style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>⚙️ {t('Configuracao')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('SobreApp')} style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>ℹ️ {t('SobreApp')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('Logout')} style={styles.menuItem}>
            <Text style={[styles.menuText, { color: colors.text }]}>🔴 {t('Logout')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={styles.menuItem}>
            <Text style={[styles.menuText, { color: 'red' }]}>❌ {t('Fechar')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menu: {
    width: '70%',
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
  },
});
