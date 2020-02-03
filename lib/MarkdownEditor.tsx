import React, { Component, Fragment } from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

import { Marked, Token } from 'marked-ts';



interface ITag {
    content: string;
    stylesheet: any;
}

interface IState {
    text: string;
    tokens: Token[];
}
export default class MarkdownEditor extends Component {

    public state: IState;

    constructor(props) {
        super(props);
        this.state = { text: "", tokens: [] };
    }

    parseMarkdown(text: string) {

        console.log(Marked.debug(text))

        const { tokens } = Marked.debug(text);

        console.log('-------------------------')

        // console.log(tokens);
        // // TODO

        // const tags: ITag[] = text.split(' ').map(word => ({
        //     content: word,
        //     stylesheet: { color: this.getRandomColor() }
        // } as ITag));

        this.setState({ text, tokens });
    }

    renderToken(token: Token) {
        switch (token.type) {
            case 'paragraph':
                return (
                    <Fragment>
                        <Text>{token.text} { `\n` } </Text>
                    </Fragment>
                );
            default:
                return (<Text>{token.text}</Text>);
        }
    }


    // private getRandomColor(): string {

    //     const colors = ['red', 'blue', 'green', 'yellow'];
    //     return colors[Math.floor(Math.random() * colors.length)];
    // }

    render() {
        return (
            <TextInput
                multiline={true}
                style={styles.editor}
                onChangeText={text => this.parseMarkdown(text)}
            >
                {this.state.tokens.map((token, index) => (
                    <Fragment key={index}>
                        { this.renderToken(token) }
                    </Fragment>
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
        // paddingTop: 50,
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});