import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export default function MenuHamburguer({ visible, onClose }) {
  const navigation = useNavigation();
  const { t } = useTranslation(); // hook do i18n

  const navegar = (tela) => {
    onClose();
    navigation.navigate(tela);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.menu}>
          <Text style={styles.menuTitle}>{t('Menu')}</Text>

          <TouchableOpacity onPress={() => navegar('Home')} style={styles.menuItem}>
            <Text style={styles.menuText}>🏠 {t('Home')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('Devs')} style={styles.menuItem}>
            <Text style={styles.menuText}>👨‍💻 {t('Desenvolvedores')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('SobreAju')} style={styles.menuItem}>
            <Text style={styles.menuText}>💬 {t('SaudeMental')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('Questionario')} style={styles.menuItem}>
            <Text style={styles.menuText}>📝 {t('Questionario')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('Config')} style={styles.menuItem}>
            <Text style={styles.menuText}>⚙️ {t('Configuracao')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegar('Logout')} style={styles.menuItem}>
            <Text style={styles.menuText}>🔴 {t('Logout')}</Text>
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
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menu: {
    width: '70%',
    height: '100%',
    backgroundColor: '#fff',
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
