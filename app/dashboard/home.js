import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import { Link } from 'expo-router';


export default function Home(){
    return (
        <View>
            <Text>this is the home page</Text>
            <View>
                <Link href="/">go to welcome</Link>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    home:{
        color:"white",
        backgroundColor:"blue",
        padding:"2rem",
    }
})