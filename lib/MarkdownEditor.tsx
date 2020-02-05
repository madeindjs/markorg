import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MarkdownBlock from './MarkdownBlock';


interface IState {
    lines: string[];
}
export default class MarkdownEditor extends Component {

    public state: IState;

    constructor(props) {
        super(props);
        this.state = { lines: [] };
    }

    splitLines(text: string) {
        this.setState({
            lines: text.split('\n');
        });
    }

    render() {
        return (
            <TextInput
                multiline={true}
                style={styles.editor}
                onChangeText={text => this.splitLines(text)}
            >
                {this.state.lines.map((line, index) => (
                    <MarkdownBlock key={index} content={line} />
                ))}
            </TextInput>
        );
    }
}


const styles = StyleSheet.create({
    editor: {
        height: 200,
        borderColor: 'gray',
        borderWidth: 1,
    },
});