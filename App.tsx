import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MarkdownEditor from './lib/MarkdownEditor';

export default function App() {
    return (
        <View style={styles.container}>
            <MarkdownEditor />
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
