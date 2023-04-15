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
import { useRouter } from "expo-router";

import axios from 'axios';
  const AjouterPatient = () => {
    const [patient, setPatient] = useState({
      nom: '',
      prenom: '',
      adresse: '',
      tel: '',
      email: '',
    });
  const router = useRouter();
  
    const handleChange = (field, value) => {
      setPatient({ ...patient, [field]: value });
    };
  
    const handleSubmit = async () => {
      try {
        await axios.post(Constants.expoConfig.extra.api + 'patients', patient);
        // Navigate back or to another route as needed
     router.back();
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
            value={patient.nom}
            onChangeText={(text) => handleChange('nom', text)}
            placeholder="Entrez le nom"
          />
  
          <Text style={styles.label}>Prénom:</Text>
          <TextInput
            style={styles.input}
            value={patient.prenom}
            onChangeText={(text) => handleChange('prenom', text)}
            placeholder="Entrez le prénom"
          />
  
          <Text style={styles.label}>Adresse:</Text>
          <TextInput
            style={styles.input}
            value={patient.adresse}
            onChangeText={(text) => handleChange('adresse', text)}
            placeholder="Entrez l'adresse"
          />
  
          <Text style={styles.label}>Téléphone:</Text>
          <TextInput
            style={styles.input}
            value={patient.tel}
            onChangeText={(text) => handleChange('tel', text)}
            placeholder="Entrez le numéro de téléphone"
          />
  
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={patient.email}
            onChangeText={(text) => handleChange('email', text)}
            placeholder="Entrez l'email"
          />
  
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Ajouter patient</Text>
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
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center',
    },
  });
  
  export default AjouterPatient;
  