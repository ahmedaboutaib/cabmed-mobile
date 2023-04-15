import { Slot } from "expo-router";
import React from "react";
import {View, Text , StyleSheet} from 'react-native';
import { StatusBar } from "expo-status-bar";
import NavBar from "./navbar";

import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <View style={styles.dashboardContainer}>

        <Slot/>
        <NavBar/>
        <StatusBar 
        // backgroundColor=""
        translucent={false}
        hidden={false}
        barStyle="light-content"
        />
    </View>
    );
}

const styles = StyleSheet.create({
    dashboardContainer:{
        flex:1,
    }
})