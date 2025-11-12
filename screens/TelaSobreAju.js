import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function TelaSobreAju() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🧠 Sobre a Saúde no Ambiente de Trabalho</Text>

      <Text style={styles.paragraph}>
        De acordo com o portal oficial do governo (<Text style={styles.link}>gov.br</Text>), o equilíbrio entre trabalho e vida pessoal é essencial para a saúde mental. 
        A enfermeira Juliana Lemos Rabelo, do Hospital das Clínicas da UFMG, destaca:
      </Text>

      <Text style={styles.quote}>
        “O equilíbrio entre trabalho e vida pessoal é um conceito que se refere à capacidade de conciliar as demandas profissionais com as atividades pessoais e de lazer. 
        É um aspecto fundamental da saúde mental, por contribuir para o bem-estar físico, emocional e social.”
      </Text>

      <Text style={styles.paragraph}>
        Já segundo o portal <Text style={styles.link}>G1</Text>, o Brasil vive uma crise de saúde mental com impacto direto na vida dos trabalhadores e nas empresas.
      </Text>

      <Text style={styles.highlight}>
        💬 Em 2024, foram quase meio milhão de afastamentos por motivos psicológicos — o maior número em pelo menos dez anos.
      </Text>

      <Image
        source={require('../assets/graficosG1.avif')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.footer}>
        Cuidar da saúde mental é investir em qualidade de vida, produtividade e relações de trabalho mais humanas. 🌿
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E8F0FE',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 15,
    lineHeight: 24,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1565C0',
    backgroundColor: '#BBDEFB',
    padding: 12,
    borderRadius: 10,
    lineHeight: 24,
    marginBottom: 15,
  },
  highlight: {
    fontSize: 16,
    fontWeight: '600',
    color: '#C62828',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },
  link: {
    color: '#1976D2',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 16,
    color: '#0D47A1',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
    fontWeight: '600',
  },
});
