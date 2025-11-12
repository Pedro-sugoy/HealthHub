import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function TelaQuestio() {
  const { t } = useTranslation();

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
      setResultado(t('avisoRespondaTudo'));
      return;
    }

    const mediaEstresse = (respostas.estresse + respostas.ansiedade + respostas.sobrecarga) / 3;
    const sono = respostas.sono;
    const motivacao = respostas.motivacao;

    let recomendacao = '';

    if (mediaEstresse <= 2 && sono >= 4 && motivacao >= 4) {
      recomendacao = t('resultadoExcelente');
    } else if (mediaEstresse <= 3.5 && sono >= 3 && motivacao >= 3) {
      recomendacao = t('resultadoMedio');
    } else {
      recomendacao = t('resultadoRuim');
    }

    // Recomendações específicas
    let detalhe = '';
    if (respostas.estresse >= 4) detalhe += `\n${t('dicaEstresse')}`;
    if (respostas.sono <= 2) detalhe += `\n${t('dicaSono')}`;
    if (respostas.ansiedade >= 4) detalhe += `\n${t('dicaAnsiedade')}`;
    if (respostas.sobrecarga >= 4) detalhe += `\n${t('dicaSobrecarga')}`;
    if (respostas.motivacao <= 2) detalhe += `\n${t('dicaMotivacao')}`;

    setResultado(`${recomendacao}${detalhe}`);
  };

  const perguntas = [
    { campo: 'estresse', texto: t('perguntaEstresse') },
    { campo: 'sono', texto: t('perguntaSono') },
    { campo: 'ansiedade', texto: t('perguntaAnsiedade') },
    { campo: 'sobrecarga', texto: t('perguntaSobrecarga') },
    { campo: 'motivacao', texto: t('perguntaMotivacao') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>{t('tituloQuestionario')}</Text>
      <Text style={styles.subtitulo}>{t('instrucaoQuestionario')}</Text>

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
        <Text style={styles.textoEnviar}>{t('botaoEnviar')}</Text>
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
