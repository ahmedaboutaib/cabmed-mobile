import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

const ModifyPatient = ({ route, navigation }) => {
  const { patient } = route.params;
  const [nom, setNom] = useState(patient.nom);
  const [prenom, setPrenom] = useState(patient.prenom);

  const handleSubmit = async () => {
    try {
      await axios.put(Constants.expoConfig.extra.api + 'patients/' + patient.id, {
        nom,
        prenom,
      });
      navigation.goBack();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nom:</Text>
        <TextInput
          style={styles.input}
          value={nom}
          onChangeText={setNom}
          placeholder="Entrez le nom"
        />
        <Text style={styles.label}>Prénom:</Text>
        <TextInput
          style={styles.input}
          value={prenom}
          onChangeText={setPrenom}
          placeholder="Entrez le prénom"
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Modifier patient</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize

    :18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default ModifyPatient;