import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { Italic, Strike, Code, Strong, H1 } from './InlineElements';
import md, { Node, Text as TextNode } from 'markdown-ast'


interface IProps {
    content: string;
}

function getElements(node: Node, index: number): JSX.Element {

    switch (node.type) {
        case "bold":
            var text = node.block.map((n: TextNode) => n.text).join(' ')
            var content = `${node.style}${text}${node.style}`;
            return <Strong content={content} key={index} />;
        case "italic":
            // console.log(node.block)
            var text = node.block.map((n: TextNode) => n.text).join(' ')
            var content = `${node.style}${text}${node.style}`;
            return <Italic content={content} key={index} />;
        case "codeSpan":
            var content = `\`${node.code}\``;
            return <Italic content={content} key={index} />;
        case "strike":
            var text = node.block.map((n: TextNode) => n.text).join(' ')
            var content = `${node.style}${text}${node.style}`;
            return <Strike content={content} key={index} />;
        case "text":
            return <Text key={index}>{node.text}</Text>;
        case "title":
            var text = node.block.map((n: TextNode) => n.text).join(' ');
            var prefix = "#".repeat(node.rank);
            var content = `${prefix} ${text}`;
            return <H1 content={content} key={index} />;
        default:
            // console.error('could not handle')
            break;
    }
}

function parseContent(content: string): JSX.Element[] {
    const elements = [];
    const ast = md(content);
    ast.forEach((n, i) => elements.push(getElements(n, i)));
    return elements;
}


export default ({ content }: IProps) => {
    const elements = parseContent(content);

    return (
        <Fragment>{elements.map(element => (element))}</Fragment>
    );
};

