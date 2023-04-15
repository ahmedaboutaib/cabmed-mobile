import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Pressable,
} from 'react-native';
import { Link } from 'expo-router';

export default function Welcome(){
    return (
        <View>
            <Text>this is the patient (home)</Text>
            
            </View>
    );
}


const styles = StyleSheet.create({
            home:{
            color:"white",
            backgroundColor:"blue",
            height:40,
        }
    })