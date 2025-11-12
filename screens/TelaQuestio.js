import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function TelaQuestio() {
  const [respostas, setRespostas] = useState({
    estresse: 0,
    sono: 0,
    ansiedade: 0,
    sobrecarga: 0,
    motivacao: 0,
  });

  const [resultado, setResultado] = useState('');

  const handleResposta = (campo, valor) => {
    setRespostas({ ...respostas, [campo]: valor });
  };

  const calcularRecomendacao = () => {
    const valores = Object.values(respostas);
    if (valores.includes(0)) {
      setResultado('⚠️ Por favor, responda todas as perguntas antes de enviar.');
      return;
    }

    const mediaEstresse = (respostas.estresse + respostas.ansiedade + respostas.sobrecarga) / 3;
    const sono = respostas.sono;
    const motivacao = respostas.motivacao;

    let recomendacao = '';

    if (mediaEstresse <= 2 && sono >= 4 && motivacao >= 4) {
      recomendacao =
        '😊 Excelente! Você demonstra equilíbrio mental e motivação no trabalho. Continue reservando tempo para o descanso e o lazer.';
    } else if (mediaEstresse <= 3.5 && sono >= 3 && motivacao >= 3) {
      recomendacao =
        '😌 Seu estado mental está estável, mas pode melhorar. Tente fazer pausas curtas, dormir bem e praticar atividades que tragam prazer.';
    } else {
      recomendacao =
        '⚠️ Atenção: sinais de estresse, ansiedade ou desmotivação detectados. Cuide-se, reduza sobrecarga e, se possível, converse com um profissional.';
    }

    // Recomendações específicas
    let detalhe = '';
    if (respostas.estresse >= 4) {
      detalhe += '\n🧘 Dica: Experimente exercícios de respiração ou alongamento entre tarefas.';
    }
    if (respostas.sono <= 2) {
      detalhe += '\n😴 Dica: Crie uma rotina noturna tranquila e evite telas antes de dormir.';
    }
    if (respostas.ansiedade >= 4) {
      detalhe += '\n💭 Dica: Pratique meditação ou escreva seus pensamentos para aliviar a ansiedade.';
    }
    if (respostas.sobrecarga >= 4) {
      detalhe += '\n💼 Dica: Divida tarefas e converse sobre sua carga de trabalho com colegas ou líderes.';
    }
    if (respostas.motivacao <= 2) {
      detalhe += '\n🔥 Dica: Busque pequenos objetivos diários e celebre cada conquista.';
    }

    setResultado(`${recomendacao}${detalhe}`);
  };

  const perguntas = [
    { campo: 'estresse', texto: 'Nível de estresse atual' },
    { campo: 'sono', texto: 'Qualidade do sono nos últimos dias' },
    { campo: 'ansiedade', texto: 'Nível de ansiedade diária' },
    { campo: 'sobrecarga', texto: 'Sensação de sobrecarga no trabalho' },
    { campo: 'motivacao', texto: 'Motivação e satisfação no trabalho' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🧠 Questionário de Saúde Mental no Trabalho</Text>
      <Text style={styles.subtitulo}>
        Avalie de 1 a 5, onde 1 é "muito baixo" e 5 é "muito alto".
      </Text>

      {perguntas.map((p) => (
        <View key={p.campo} style={styles.perguntaContainer}>
          <Text style={styles.pergunta}>{p.texto}</Text>
          <View style={styles.opcoes}>
            {[1, 2, 3, 4, 5].map((n) => (
              <TouchableOpacity
                key={n}
                style={[
                  styles.botaoOpcao,
                  respostas[p.campo] === n && styles.botaoSelecionado,
                ]}
                onPress={() => handleResposta(p.campo, n)}
              >
                <Text
                  style={[
                    styles.textoOpcao,
                    respostas[p.campo] === n && styles.textoSelecionado,
                  ]}
                >
                  {n}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.botaoEnviar} onPress={calcularRecomendacao}>
        <Text style={styles.textoEnviar}>Enviar</Text>
      </TouchableOpacity>

      {resultado !== '' && (
        <View style={styles.resultadoBox}>
          <Text style={styles.resultadoTexto}>{resultado}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E3F2FD',
    padding: 25,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1565c0',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  perguntaContainer: {
    marginBottom: 20,
    width: '100%',
  },
  pergunta: {
    fontSize: 18,
    color: '#0d47a1',
    marginBottom: 10,
  },
  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  botaoOpcao: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#bbdefb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoSelecionado: {
    backgroundColor: '#1976d2',
  },
  textoOpcao: {
    fontSize: 18,
    color: '#0d47a1',
    fontWeight: 'bold',
  },
  textoSelecionado: {
    color: '#fff',
  },
  botaoEnviar: {
    marginTop: 25,
    backgroundColor: '#1565c0',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  textoEnviar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultadoBox: {
    marginTop: 30,
    backgroundColor: '#BBDEFB',
    padding: 15,
    borderRadius: 10,
  },
  resultadoTexto: {
    fontSize: 16,
    color: '#0d47a1',
    textAlign: 'center',
    fontWeight: '500',
  },
});
