import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useSearchParams } from 'expo-router';

const PatientDetails = () => {
  const  patient  = useSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.label}>Nom:</Text>
        <Text style={styles.text}>{patient.nom}</Text>
        <Text style={styles.label}>Prénom:</Text>
        <Text style={styles.text}>{patient.prenom}</Text>
        <Text style={styles.label}>Adresse:</Text>
        <Text style={styles.text}>{patient.adresse}</Text>
        <Text style={styles.label}>tel:</Text>
        <Text style={styles.text}>{patient.tel}</Text>
        <Text style={styles.label}>email:</Text>
        <Text style={styles.text}>{patient.email}</Text>
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
  details: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default PatientDetails;
