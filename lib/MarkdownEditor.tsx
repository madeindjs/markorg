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

interface ISectionData {
    level: number;
    onChange: () => void
}

export default () => {
    const [sections, setSections] = useState<ISectionData[]>([]);

    const addSection = () => {
        setSections([...sections, {
            level: 1,
            onChange: () => {}
        }]);
    }

    // const lines = content.split('\n');

    // const sections = [];

    // for (let i; i> )

    return (
        <View style={styles.editor}>
            {sections.map((e, i) => <Section key={i} />)}
            <Button title="add section" onPress={() => addSection()} />
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