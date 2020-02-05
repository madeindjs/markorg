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
                this.elements.push(<Text>{tagContent}</Text>);

            } else if (['*', '_'].includes(char)) {
                // get a tag

                if (openingTag === null) {
                    // opening tag
                    const tagContent = content.slice(previousTagIndex, i + 1);
                    this.elements.push(<Text>{tagContent}</Text>);
                    previousTagIndex = i;

                } else if (openingTag === char) {
                    // closing tag
                    const tagContent = content.slice(previousTagIndex, i + 1);
                    this.elements.push(<Italic content={tagContent}></Italic>);
                    previousTagIndex = i;

                } else {
                    console.error('not matching closing tag')
                }
            }

        }
    }

    render() {
        return (
            <Fragment>{this.elements.map(element => (element))}</Fragment>
        );
    }
}
