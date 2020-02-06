import React, { Component, Fragment } from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';
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
        console.log(text.split('\n'))
        this.setState({
            lines: text.split('\n')
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
                    <Fragment key={index}>

                    <MarkdownBlock content={line} />
                    {index + 1 !== this.state.lines.length &&
                        <Text>{"\n"}</Text>
                    }
                    </Fragment>

                ))}
            </TextInput>
        );
    }
}


const styles = StyleSheet.create({
    editor: {
        height: '100%',
        // backgroundColor: 'lightgray',
        padding: 5
    },
});