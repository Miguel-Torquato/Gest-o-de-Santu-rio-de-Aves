import { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [busca, setBusca] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#2F5D50" />

      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Santuário de Aves</Text>
        <Text style={styles.headerSubtitulo}>Bem-vindo(a) de volta!</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollConteudo}
      >
        <Text style={styles.label}>Buscar ave:</Text>
        <TextInput
          placeholder="Ex: Tucano, Arara..."
          style={styles.input}
          value={busca}
          onChangeText={setBusca}
        />

        <Text style={styles.secaoTitulo}>Aves em destaque</Text>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72gwmWKwjxGZ30FVyvW56smoNI4QH0pujLA&s.png',
            }}
            style={styles.cardImagem}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardNome}>Tucano-toco</Text>
            <Text style={styles.cardDescricao}>
              Encontrado nas matas do santuário, conhecido pelo bico colorido.
            </Text>
            <Pressable
              style={styles.cardBotao}
              onPress={() => alert('Detalhes do Tucano-toco')}
            >
              <Text style={styles.cardBotaoTexto}>Ver mais</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZNK18c5Os4rLwT3t4y-i_lOMVgtBAkMq2giXfiH0JA&s=10',
            }}
            style={styles.cardImagem}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardNome}>Arara-azul</Text>
            <Text style={styles.cardDescricao}>
              Uma das aves mais raras do santuário, símbolo de preservação.
            </Text>
            <Pressable
              style={styles.cardBotao}
              onPress={() => alert('Detalhes da Arara-azul')}
            >
              <Text style={styles.cardBotaoTexto}>Ver mais</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72gwmWKwjxGZ30FVyvW56smoNI4QH0pujLA&s.png',
            }}
            style={styles.cardImagem}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardNome}>Beija-flor</Text>
            <Text style={styles.cardDescricao}>
              Pequena e ágil, visita as flores do jardim todos os dias.
            </Text>
            <Pressable
              style={styles.cardBotao}
              onPress={() => alert('Detalhes do Beija-flor')}
            >
              <Text style={styles.cardBotaoTexto}>Ver mais</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>v1.0 - Miguel Lima</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: '#2F5D50',
    paddingVertical: 20,
    alignItems: 'center',
  },

  headerTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },

  headerSubtitulo: {
    fontSize: 14,
    color: '#BFDBFE',
    marginTop: 4,
  },

  scroll: {
    flex: 1,
  },

  scrollConteudo: {
    padding: 20,
    paddingBottom: 40,
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
  },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },

  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F5D50',
    marginBottom: 12,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F4',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },

  cardImagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },

  cardInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  cardNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F5D50',
    marginBottom: 4,
  },

  cardDescricao: {
    fontSize: 13,
    color: '#555',
    marginBottom: 8,
  },

  cardBotao: {
    alignSelf: 'flex-start',
    backgroundColor: '#2F5D50',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },

  cardBotaoTexto: {
    color: 'white',
    fontSize: 13,
  },

  rodape: {
    paddingVertical: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  rodapeTexto: {
    fontSize: 12,
    color: '#888',
  },
});