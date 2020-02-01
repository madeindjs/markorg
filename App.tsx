import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MarkdownEditor from './lib/MarkdownEditor';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Markorg</Text>
            <MarkdownEditor />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
