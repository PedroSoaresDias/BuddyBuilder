import React, { Suspense } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserData } from '../hooks/useUserData';
import { useGerenciarTreino } from '../hooks/useGerenciarTreino';

function GerenciarTreinos({ navigation }) {
  const { user, token, userId } = useUserData();
  const handleDelete = useGerenciarTreino(token, userId);

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Usuário não encontrado.</Text>
      </View>
    )
  }

  return (
    <Suspense fallback={(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000FF" />
      </View>)}
    >
      <SafeAreaView key={user?.id} style={{ backgroundColor: '#182649', flex: 1, paddingVertical: 50, /* justifyContent: 'space-between' */ }}>
        <View style={styles.header}>
          <Text style={{ color: '#F0F0F0', fontSize: 40, fontWeight: '600', paddingBottom: 20, alignSelf: 'flex-start' }}>Gerenciar</Text>
          <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
            onPress={() => navigation.navigate('Configuracao')}>
            <Image
              source={require('../images/menu.png')}
              style={styles.iconMenu}
            />
          </TouchableOpacity>
        </View>
        {user?.treinos && user.treinos.map((treino) => (
          <View key={treino?.id} style={styles.containerTreino}>
            <View style={styles.containerNome}>
              <Text style={{ fontSize: 24 }}>{treino?.nome_treino}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDelete(treino.id)}>
              <Image
                source={require('../images/lixo.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        ))}
      </SafeAreaView >
    </Suspense>
  )
}

export default GerenciarTreinos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#182649',
  },
  header: {
    backgroundColor: '#182649',
    justifyContent: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  bttnMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 20,
  },
  containerTreino: {
    backgroundColor: '#D9D9D9',
    padding: 5,
    margin: 10,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerNome: {
    fontSize: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: 300,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginHorizontal: 10,
  },
});