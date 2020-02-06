import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { Italic, Strike, Code } from './InlineElements';

interface IProps {
    content: string;
}


const tags = {
    '*': 'italic',
    '_': 'italic',
    '`': 'code',
    '~': 'strike',
}

const charsTag = ['*', '_', '`', '~'];

function buildElement(key: number, tag: string, content: string): JSX.Element {

    switch (tags[tag]) {
        case 'strike':
            return <Strike key={key} content={content} />;
        case 'code':
            return <Code key={key} content={content} />;
        case 'italic':
            return <Italic key={key} content={content} />;
        default:
            break;
    }


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

        } else if (charsTag.includes(char)) {
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
                elements.push(buildElement(i, openingTag, tagContent));
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

