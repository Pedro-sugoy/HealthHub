import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../src/services/i18n'; 

export default function TelaConfig() {
  const { t } = useTranslation();
  const [idioma, setIdioma] = useState(i18n.language || 'pt');

  const alternarIdioma = () => {
    const novoIdioma = idioma === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(novoIdioma);
    setIdioma(novoIdioma);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{t('Configurações')}</Text>

      <View style={styles.boxIdioma}>
        <Text style={styles.texto}>{t('Idioma atual')}: {idioma === 'pt' ? 'Português 🇧🇷' : 'English 🇺🇸'}</Text>

        <TouchableOpacity style={styles.botao} onPress={alternarIdioma}>
          <Text style={styles.textoBotao}>
            {idioma === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 30,
  },
  boxIdioma: {
    backgroundColor: '#BBDEFB',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '90%',
  },
  texto: {
    fontSize: 18,
    color: '#0D47A1',
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#1565C0',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
