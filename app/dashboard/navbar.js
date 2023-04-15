import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const navs = [
  {
    title: 'Patients',
    link: 'dashboard/patients',
    iconName: 'people-outline',
  },
  {
    title: 'RDV',
    link: 'dashboard/depenses',
    iconName: 'calendar-outline',
  },
  {
    title: 'Salle',
    link: 'dashboard/salle',
    iconName: 'home-outline',
  },
  {
    title: 'Plus',
    link: 'dashboard/',
    iconName: 'grid-outline',
  },
];

export default function NavBar() {
  return (
    <LinearGradient
      colors={['#007BFF', '#3A7BD5']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.navbarContainer}
    >
      {navs.map((nav, index) => (
        <Link key={index} href={nav.link} asChild>
          <Pressable>
            {({ hovered, pressed }) => (
              <View style={styles.navItem}>
                <View style={styles.navIcon}>
                  <Icon name={nav.iconName} size={30} color="white" />
                </View>
                <Text style={styles.navText}>{nav.title}</Text>
              </View>
            )}
          </Pressable>
        </Link>
      ))}
      </LinearGradient>
    );
  }

  const styles = StyleSheet.create({
    navbarContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 8, // for Android
      shadowColor: '#000', // for iOS
      shadowOffset: { width: 0, height: -3 }, // for iOS
      shadowOpacity: 0.1, // for iOS
      shadowRadius: 3, // for iOS
    },
    navItem: {
      alignItems: 'center',
    },
    navIcon: {
      width: 60,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5,
    },
    navText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '500',
    },
  });