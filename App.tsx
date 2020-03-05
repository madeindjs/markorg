import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Editor from './lib/Editor';

export default function App() {
    return (
        <View style={styles.container}>
            <Editor />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
