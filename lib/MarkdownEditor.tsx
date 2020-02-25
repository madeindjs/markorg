import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Section from './Section';

// function parseMarkdown(text: string, callback): Node[] {
//     console.log('---------------------------------------')
//     const ast = md(text);
//     console.log(ast);
//     callback(text);
//     return ast;
// }

export default () => {
    const [nbSection, setNbSection] = useState(1);
    // const lines = content.split('\n');

    // const sections = [];

    // for (let i; i> )

    return (
        <View style={styles.editor}>
            {Array(nbSection).fill(undefined).map((e, i) => <Section key={i} />)}
            <Button title="add section" onPress={() => setNbSection(nbSection + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    editor: {
        height: '100%',
        // backgroundColor: 'lightgray',
        padding: 5,
        // flex: 1,
        // flexDirection: 'column',
    },
});