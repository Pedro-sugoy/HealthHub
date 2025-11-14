import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../src/services/i18n';
import { useTheme } from '../src/context/ThemeContext';
import ThemeToggleButton from '../src/components/ThemeToggleButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaConfig({ navigation }) {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();

  const [idioma, setIdioma] = useState(i18n.language || 'pt');
  const [usuario, setUsuario] = useState(null);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');

  useEffect(() => {
    carregarUsuario();
  }, []);

  const carregarUsuario = async () => {
    const dados = await AsyncStorage.getItem("usuarioLogado");
    if (dados) {
      const usuarioData = JSON.parse(dados);
      setUsuario(usuarioData);
      setNome(usuarioData.nome);
      setEmail(usuarioData.emailCorporativo);
      setTipoUsuario(usuarioData.tipoUsuario); 
    }
  };

  const alternarIdioma = () => {
    const novoIdioma = idioma === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(novoIdioma);
    setIdioma(novoIdioma);
  };

  const atualizarUsuario = async () => {
    if (!nome || !email) {
      Alert.alert(t("Erro"), t("Nome e e-mail são obrigatórios."));
      return;
    }

    const dadosAtualizados = {
      nome: nome,
      emailCorporativo: email,
      senha: senha || undefined, 
      tipoUsuario: tipoUsuario, 
    };

    try {
      const response = await fetch(
        `https://health-hub-ef44.onrender.com/api/usuarios/${usuario.id}`,
        {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dadosAtualizados),
        }
      );

      if (response.status === 204) {
        Alert.alert(t("Sucesso"), t("Usuário atualizado com sucesso!"));
        carregarUsuario();
      } else {
        Alert.alert(t("Erro"), t("Falha ao atualizar usuário."));
      }
    } catch (error) {
      Alert.alert(t("Erro"), t("Falha de conexão."));
    }
  };

  const deletarUsuario = async () => {
    if (!usuario) return;

    Alert.alert(
      t("Confirmar"),
      t("Deseja realmente deletar este usuário?"),
      [
        { text: t("Cancelar"), style: "cancel" },
        {
          text: t("Deletar"),
          style: "destructive",
          onPress: async () => {
            try {
              const response = await fetch(
                `https://health-hub-ef44.onrender.com/api/usuarios/${usuario.id}`,
                { method: "DELETE" }
              );

              if (response.status === 204) {
                Alert.alert(t("Sucesso"), t("Usuário deletado!"));
                await AsyncStorage.removeItem("usuarioLogado");
                await AsyncStorage.removeItem("emailLogado");
                navigation.replace("Login");
              } else if (response.status === 404) {
                Alert.alert(t("Erro"), t("Usuário não encontrado."));
              } else {
                Alert.alert(t("Erro"), t("Falha ao deletar usuário."));
              }
            } catch (error) {
              Alert.alert(t("Erro"), t("Falha de conexão."));
            }
          }
        }
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      <Text style={[styles.titulo, { color: colors.text }]}>
        ⚙️ {t("Configurações")}
      </Text>

      {usuario && (
        <View style={[styles.box, { backgroundColor: colors.inputBackground }]}>

          <TextInput
            style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text }]}
            placeholder={t("Nome")}
            placeholderTextColor={colors.placeholder}
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text }]}
            placeholder={t("E-mail corporativo")}
            placeholderTextColor={colors.placeholder}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.text }]}
            placeholder={t("Senha (deixe em branco para não alterar)")}
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            onPress={atualizarUsuario}
            style={[styles.botao, { backgroundColor: "#4CAF50" }]}
          >
            <Text style={styles.textoBotao}>💾 {t("Atualizar")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={deletarUsuario}
            style={[styles.botao, { backgroundColor: "#FF4C4C" }]}
          >
            <Text style={styles.textoBotao}>🗑️ {t("Deletar usuário")}</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={[styles.box, { backgroundColor: colors.inputBackground }]}>
        <Text style={[styles.texto, { color: colors.text }]}>
          {t("Idioma atual")}: {idioma === 'pt' ? 'Português 🇧🇷' : 'English 🇺🇸'}
        </Text>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: colors.button }]}
          onPress={alternarIdioma}
        >
          <Text style={[styles.textoBotao, { color: colors.buttonText }]}>
            {idioma === 'pt' ? t("Switch to English") : t("Mudar para Português")}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.box, { backgroundColor: colors.inputBackground }]}>
        <Text style={[styles.texto, { color: colors.text }]}>
          {t("Tema atual")}: {theme === 'light' ? t("Tema claro") : t("Tema escuro")}
        </Text>
        <ThemeToggleButton />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    gap: 30 
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: "center" 
  },
  box: { 
    padding: 20, 
    borderRadius: 12, 
    alignItems: 'center' 
  },
  texto: { 
    fontSize: 18, 
    marginBottom: 10 
  },
  botao: { 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 10, 
    marginTop: 12 
  },
  textoBotao: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  input: { 
    width: '100%', 
    padding: 12, 
    borderRadius: 10, 
    marginTop: 12, 
    fontSize: 16 
  }
});
