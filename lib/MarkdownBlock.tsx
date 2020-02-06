import React, { Component, Fragment } from 'react';
import { Text } from 'react-native';
import Italic from './markdownElements/Italic';

interface IState { }
interface IProps {
    content: string;
}


export default class MarkdownBlock extends Component {

    public state: IState;
    public props: IProps;
    public elements: JSX.Element[] = []

    constructor(props) {
        super(props);
        this.state = {};
        this.parseElements();
    }

    parseElements() {
        let openingTag: string = null;
        let previousTagIndex: number = null;
        const { content } = this.props;

        for (let i = 0; i < content.length; i++) {


            const char = content.charAt(i);

            if (i + 1 === content.length) {
                // end of content. insert text
                const tagContent = content.slice(previousTagIndex, i + 1);
                this.elements.push(<Text key={i}>{tagContent}</Text>);

            } else if (['*', '_'].includes(char)) {
                // get a tag

                if (openingTag === null) {
                    // console.log(`Get opening tag @${i}`)
                    // opening tag
                    const tagContent = content.slice(previousTagIndex, i);
                    this.elements.push(<Text key={i}>{tagContent}</Text>);
                    previousTagIndex = i;
                    openingTag = char;

                } else if (openingTag === char) {
                    // console.log(`Get opening tag @${i}`)
                    // closing tag
                    i++;
                    const tagContent = content.slice(previousTagIndex, i);
                    this.elements.push(<Italic key={i} content={tagContent} />);
                    previousTagIndex = i;

                } else {
                    console.error('not matching closing tag')
                }
            }

        }
    }

    render() {
        console.log(`Parse markdown block "${this.props.content}"`);
        return (
            <Fragment>{this.elements.map(element => (element))}</Fragment>
        );
    }
}
