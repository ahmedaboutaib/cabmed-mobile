import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';

const navs = [
  {
    title: 'Patients',
    link: 'dashboard/patients',
    iconName: 'people-outline',
  },
  {
    title: 'Salle',
    link: 'dashboard/salle',
    iconName: 'home-outline',
  },
  {
    title: 'RDV',
    link: 'dashboard/rdv',
    iconName: 'calendar-outline',
  },
  {
    title: 'Dépenses',
    link: 'dashboard/depenses',
    iconName: 'cart-outline',
  },
];

const LinkItem = ({ title, iconName,link, onPress }) => (
  <Link href={link} style={styles.linkItem} asChild>
    <Pressable>

            {({ hovered, pressed }) => (
    <View style={styles.innerContainer}>
    <Icon name={iconName} size={40} color="#007BFF" />
    <Text style={styles.linkText}>{title}</Text>
    </View>
)}
</Pressable>
  </Link>
);

export default function GridLinks() {
  const handleLinkPress = (link) => {
    console.log('Navigating to:', link);
  };

  return (
    <View style={styles.container}>
      {navs.map((nav, index) => (
        <LinkItem
          key={index}
          title={nav.title}
          link={nav.link}
          iconName={nav.iconName}
          onPress={() => handleLinkPress(nav.link)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  linkItem: {
    width: '45%',
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  linkText: {
    marginTop: 8,
    fontSize: 16,
    color: '#007BFF',
  },
  innerContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
