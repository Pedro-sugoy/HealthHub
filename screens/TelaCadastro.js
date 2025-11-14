import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function TelaCadastro() {
  const [emailCorporativo, setEmailCorporativo] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('ADMIN'); // valor padrão

  const handleCadastrar = async () => {
    if (!emailCorporativo || !nome || !senha) {
      Alert.alert('⚠️ Atenção', 'Preencha todos os campos.');
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
          tipoUsuario: tipoUsuario.trim(), // <-- CORRETO PARA A API
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.status === 201) {
        Alert.alert('✅ Sucesso', 'Usuário cadastrado com sucesso!');
        setEmailCorporativo('');
        setNome('');
        setSenha('');
        setTipoUsuario('ADMIN');
      } else {
        const msgErro =
          data?.detail ||
          data?.title ||
          JSON.stringify(data) ||
          'Erro desconhecido';

        Alert.alert('❌ Erro no cadastro', msgErro);
      }
    } catch (error) {
      Alert.alert('⚠️ Erro de conexão', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email corporativo"
        keyboardType="email-address"
        autoCapitalize="none"
        value={emailCorporativo}
        onChangeText={setEmailCorporativo}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.label}>Tipo de usuário:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={tipoUsuario}
          onValueChange={(valor) => setTipoUsuario(valor)}
          style={styles.picker}
        >
          <Picker.Item label="Administrador" value="ADMIN" />
          <Picker.Item label="Usuário comum" value="USER" />
        </Picker>
      </View>

      <Button title="Cadastrar" onPress={handleCadastrar} />
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
