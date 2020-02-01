import React, { Component } from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';



interface ITag {
    content: string;
    stylesheet: any;
}

interface IState {
    text: string;
    tags: ITag[];
}
export default class MarkdownEditor extends Component {

    public state: IState;

    constructor(props) {
        super(props);
        this.state = { text: "", tags: [] };
    }

    parseMarkdown(text: string) {
        // TODO

        const tags: ITag[] = text.split(' ').map(word => ({
            content: word,
            stylesheet: { color: this.getRandomColor() }
        } as ITag));

        this.setState({ text, tags });
    }

    private getRandomColor(): string {

        const colors = ['red', 'blue', 'green', 'yellow'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    render() {
        return (
            <TextInput
                multiline={true}
                style={styles.editor}
                onChangeText={text => this.parseMarkdown(text)}
            >
                {this.state.tags.map((tag, index) => (

                    <Text key={index} style={tag.stylesheet}>

                        <Text>{tag.content}</Text>
                        <Text> </Text>
                    </Text>
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