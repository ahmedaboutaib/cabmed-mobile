import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import Constants from 'expo-constants';
import {Link, useRouter} from 'expo-router'

const Item = ({ patient, navigation }) => { 

  const router = useRouter();

  return(
  <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{`${patient.nom} ${patient.prenom}`}</Text>
<Link href={{ pathname: './patients/details-patient/', params: patient }} asChild >
      <Pressable>
        {({ hovered, pressed }) => (
      <MaterialIcons name="remove-red-eye" size={24} color="black" />
        )}
      </Pressable>
    </Link>
    <TouchableOpacity onPress={() => navigation.navigate('PatientDetails', { patient })}>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ModifyPatient', { patient })}>
      <MaterialIcons name="edit" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => removePatient(patient)}>
      <MaterialIcons name="delete" size={24} color="black" />
    </TouchableOpacity>
  </View>);
};

const Header = ({ searchQuery, setSearchQuery, navigation }) => (
  <View style={styles.header}>
<Link href="./patients/ajouter-patient" asChild >
      <Pressable>
        {({ hovered, pressed }) => (
      <MaterialIcons name="add" size={24} color="black" />
        )}
      </Pressable>
    </Link>
    <TextInput
      style={styles.searchInput}
      placeholder="Search"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  </View>
);

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get(Constants.expoConfig.extra.api + 'patients');
      setPatients(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderPatient = ({ item }) => <Item patient={item} navigation={navigation} />;

  const renderLoading = () => <ActivityIndicator size="large" color="#0000ff" />;

  const filteredPatients = patients.filter(
    (patient) =>
      patient.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.prenom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} navigation={navigation} />
      {isLoading ? (
        renderLoading()
      ) : (
        <FlatList
          data={filteredPatients}
          renderItem={renderPatient}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  searchInput: {
    flex: 1,
    marginLeft: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginLeft: 16,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Home;