import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

export default function TelaLogin({ navigation }) {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert(t("Erro"), t("Preencha todos os campos"));
      return;
    }

    try {
      const response = await fetch(
        `https://health-hub-ef44.onrender.com/api/usuarios/email/${email}`
      );

      if (response.status === 404) {
        Alert.alert(t("Erro"), t("Usuário não encontrado"));
        return;
      }

      if (!response.ok) {
        Alert.alert(t("Erro"), t("Falha ao buscar usuário"));
        return;
      }

      const user = await response.json();

      Alert.alert(t("Sucesso"), `${t("Bem-vindo")}, ${user.nome}!`);

      await AsyncStorage.setItem("emailLogado", email);
      await AsyncStorage.setItem("usuarioLogado", JSON.stringify(user));

      navigation.replace("Home", { user });

    } catch (error) {
      Alert.alert(t("Erro"), t("Falha na conexão com o servidor"));
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Login")}</Text>

      <TextInput
        style={styles.input}
        placeholder={t("Digite seu e-mail")}
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder={t("Digite sua senha")}
        placeholderTextColor="#777"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{t("Entrar")}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.linkText}>{t("Não tem conta? Criar conta")}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2D6CDF",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    marginTop: 15,
    color: "#2D6CDF",
    textAlign: "center",
  },
});
