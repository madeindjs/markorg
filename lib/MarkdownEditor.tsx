import React, { Component, Fragment, useState } from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';
import MarkdownBlock from './MarkdownBlock';
import md, { Node, Text as TextNode } from 'markdown-ast'
import Section from './Section';

function parseMarkdown(text: string, callback): Node[] {
    console.log('---------------------------------------')
    const ast = md(text);
    console.log(ast);
    callback(text);
    return ast;
}

export default () => {
    const [content, setContent] = useState("");
    const lines = content.split('\n');

    return (
        <TextInput
            multiline={true}
            style={styles.editor}
            onChangeText={text => parseMarkdown(text, setContent)}
        >
            <Section />
            {lines.map((line, index) => (
                <Fragment key={index}>
                    <MarkdownBlock content={line} />
                    {index + 1 !== lines.length &&
                        <Text>{"\n"}</Text>
                    }
                </Fragment>
            ))}
        </TextInput>
    );
}

const styles = StyleSheet.create({
    editor: {
        height: '100%',
        // backgroundColor: 'lightgray',
        padding: 5
    },
});