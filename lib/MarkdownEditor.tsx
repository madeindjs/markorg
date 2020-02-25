import React from 'react';
import { StyleSheet, View } from 'react-native';
import Section from './Section';

// function parseMarkdown(text: string, callback): Node[] {
//     console.log('---------------------------------------')
//     const ast = md(text);
//     console.log(ast);
//     callback(text);
//     return ast;
// }

export default () => {
    // const [content, setContent] = useState("");
    // const lines = content.split('\n');

    return (
        <View style={styles.editor}>
            <Section />
        </View>
    );
}

const styles = StyleSheet.create({
    editor: {
        height: '100%',
        // backgroundColor: 'lightgray',
        padding: 5
    },
});