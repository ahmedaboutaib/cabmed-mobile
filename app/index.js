import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable
}from 'react-native';

import {Link } from 'expo-router';

export default function Welcome(){

    return(

        <View style={styles.welcomeContainer}>
        <View style={styles.welcomeContent}>
            <Text>welcom</Text>
            <Link style={styles.dashboardBtn} href="/dashboard" asChild >
                <Pressable>
                    {({ hovered, pressed }) => (
                    <Text>Dashboard</Text>
                    )}
                </Pressable>
            </Link>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeContainer:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
    },
    welcomeContent:{
        borderWidth:2,
        borderColor:"black",
        borderStyle:"dashed",
        height:90,
        flex:0.5,
        alignItems:'center',
        justifyContent:'space-around'
    },
    dashboardBtn:{
        backgroundColor:'red',
        padding:6
    }

})