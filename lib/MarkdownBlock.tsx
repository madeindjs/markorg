import React, { Fragment } from 'react';
import { Text } from 'react-native';
import Italic from './markdownElements/Italic';

interface IProps {
    content: string;
}

function parseContent(content: string): JSX.Element[] {
    let openingTag: string = null;
    let previousTagIndex: number = null;
    const elements = [];

    for (let i = 0; i < content.length; i++) {
        const char = content.charAt(i);

        if (i + 1 === content.length) {
            // end of content. insert text
            const tagContent = content.slice(previousTagIndex, i + 1);
            elements.push(<Text key={i}>{tagContent}</Text>);

        } else if (['*', '_'].includes(char)) {
            // get a tag

            if (openingTag === null) {
                // console.log(`Get opening tag @${i}`)
                // opening tag

                if (i !== 0) {
                    // avoid for first line
                    const tagContent = content.slice(previousTagIndex, i);
                    elements.push(<Text key={i}>{tagContent}</Text>);
                }
                previousTagIndex = i;
                openingTag = char;

            } else if (openingTag === char) {
                // closing tag
                i++;
                const tagContent = content.slice(previousTagIndex, i);
                // console.log(`Get closing tag @${i} = ${tagContent}`)
                elements.push(<Italic key={i} content={tagContent} />);
                previousTagIndex = i;
                openingTag = null;

            } else {
                console.error('not matching closing tag')
            }
        }
    }

    return elements;
}

export default ({ content }: IProps) => {
    const elements = parseContent(content);

    // console.log(`Parse markdown block "${content}"`);
    return (
        <Fragment>{elements.map(element => (element))}</Fragment>
    );
};

