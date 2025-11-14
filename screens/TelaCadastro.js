import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';

export default function TelaCadastro() {
  const { t } = useTranslation();

  const [emailCorporativo, setEmailCorporativo] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('ADMIN');

  const handleCadastrar = async () => {
    if (!emailCorporativo || !nome || !senha) {
      Alert.alert(t("⚠️ Atenção"), t("Preencha todos os campos."));
      return;
    }

    try {
      const response = await fetch('https://health-hub-ef44.onrender.com/api/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          emailCorporativo: emailCorporativo.trim(),
          nome: nome.trim(),
          senha: senha.trim(),
          tipoUsuario: tipoUsuario.trim(), 
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.status === 201) {
        Alert.alert(t("✅ Sucesso"), t("Usuário cadastrado com sucesso!"));
        setEmailCorporativo('');
        setNome('');
        setSenha('');
        setTipoUsuario('ADMIN');
      } else {
        const msgErro =
          data?.detail ||
          data?.title ||
          JSON.stringify(data) ||
          'Erro';
        Alert.alert(t("❌ Erro no cadastro"), msgErro);
      }
    } catch (error) {
      Alert.alert(t("⚠️ Erro de conexão"), error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={t("Email corporativo")}
        keyboardType="email-address"
        autoCapitalize="none"
        value={emailCorporativo}
        onChangeText={setEmailCorporativo}
      />

      <TextInput
        style={styles.input}
        placeholder={t("Nome completo")}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder={t("Senha")}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.label}>{t("Tipo de usuário")}:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={tipoUsuario}
          onValueChange={setTipoUsuario}
          style={styles.picker}
        >
          <Picker.Item label={t("Administrador")} value="ADMIN" />
          <Picker.Item label={t("Usuário comum")} value="USER" />
        </Picker>
      </View>

      <Button title={t("Cadastrar")} onPress={handleCadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  label: {
    marginTop: 10,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  picker: {
    height: 50,
  },
});
