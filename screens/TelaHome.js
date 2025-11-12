import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MenuHamburguer from '../src/components/MenuHamburguer';

export default function TelaHome() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuVisible(true)}
      >
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>🌿 Bem-vindo!</Text>

        <Text style={styles.subtitle}>
          Nosso aplicativo foi criado para promover a conscientização sobre o bem-estar e a saúde mental no ambiente de trabalho.
        </Text>

        <Text style={styles.paragraph}>
          A saúde mental é um pilar essencial para o bom desempenho profissional. Em um mundo cada vez mais acelerado, com prazos curtos e alta cobrança, é comum que trabalhadores enfrentem estresse, ansiedade e até esgotamento emocional (burnout).
        </Text>

        <Text style={styles.paragraph}>
          Cuidar da mente é tão importante quanto cuidar do corpo. Empresas que investem em programas de apoio psicológico, pausas saudáveis e ambientes colaborativos têm equipes mais produtivas, criativas e felizes.
        </Text>

        <Text style={styles.paragraph}>
          💡 Dica: Reserve um tempo para respirar, desconectar-se de vez em quando e compartilhar seus desafios com colegas de confiança.
        </Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            👉 Para saber mais sobre o nosso app, acesse a tela <Text style={styles.highlight}>“Sobre o app”</Text>.
          </Text>
          <Text style={styles.footerText}>
            🧠 E para participar do nosso <Text style={styles.highlight}>questionário</Text>, acesse a aba correspondente.
          </Text>
        </View>
      </ScrollView>

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
  highlight: {
    fontWeight: 'bold',
    color: '#1976d2',
  },
});
