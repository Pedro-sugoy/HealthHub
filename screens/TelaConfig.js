import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../src/services/i18n';
import { useTheme } from '../src/context/ThemeContext';
import ThemeToggleButton from '../src/components/ThemeToggleButton';

export default function TelaConfig() {
  const { t } = useTranslation();
  const { colors, theme } = useTheme(); // pega cores e tema atual
  const [idioma, setIdioma] = useState(i18n.language || 'pt');

  const alternarIdioma = () => {
    const novoIdioma = idioma === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(novoIdioma);
    setIdioma(novoIdioma);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.titulo, { color: colors.text }]}>
        ⚙️ {t('Configuracao')}
      </Text>

      {/* Seção de idioma */}
      <View style={[styles.box, { backgroundColor: colors.inputBackground, borderColor: colors.inputBorder }]}>
        <Text style={[styles.texto, { color: colors.text }]}>
          {t('Idioma atual')}: {idioma === 'pt' ? 'Português 🇧🇷' : 'English 🇺🇸'}
        </Text>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: colors.button }]}
          onPress={alternarIdioma}
        >
          <Text style={[styles.textoBotao, { color: colors.buttonText }]}>
            {idioma === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Seção de tema */}
      <View style={[styles.box, { backgroundColor: colors.inputBackground, borderColor: colors.inputBorder }]}>
        <Text style={[styles.texto, { color: colors.text }]}>
          {t('Tema atual')}: {theme === 'light' ? '☀️ Claro' : '🌑 Escuro'}
        </Text>
        <ThemeToggleButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  texto: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
