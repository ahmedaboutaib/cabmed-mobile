import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import PatientsLogo from '../icons/user.svg';
import SalleLogo from '../icons/users.svg';
import PlusLogo from '../icons/apps.svg';
import RDVLogo from '../icons/calendar.svg';

const navs = [
  {
    title: 'Patients',
    link: 'dashboard/patients',
    img: <PatientsLogo width={30} height={30} fill={"white"} />,
  },
  {
    title: 'RDV',
    link: 'dashboard/depenses',
    img: <RDVLogo width={30} height={30} fill={"white"} />,
  },
  {
    title: 'Salle',
    link: 'dashboard/salle',
    img: <SalleLogo width={30} height={30} fill={"white"} />,
  },
  {
    title: 'plus',
    link: 'dashboard/services',
    img: <PlusLogo width={30} height={30} fill={"white"} />,
  },
];

export default function NavBar() {
  return (
    <View style={styles.navbarContainer}>
      {navs.map((nav, index) => (
        <Link key={index} href={nav.link} asChild>
          <Pressable>
            {({ hovered, pressed }) => (
              <View style={styles.navItem}>
                <View style={styles.navIcon}>{nav.img}</View>
                <Text style={styles.navText}>{nav.title}</Text>
              </View>
            )}
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText:{
    color:"white",
  }
});
