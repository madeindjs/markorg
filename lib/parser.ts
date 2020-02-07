const mtp = require('markdown-tree-parser');


export enum MarkdownParserBlockName {
    paragraph = 'paragraph',
    heading = 'heading',
    blockquote = 'blockquote',
    code = 'code',
    list = 'list',
}

export enum MarkdownParserInlineName {
    em = 'em',
    italic = 'italic',
}

export enum MarkdownParserType {
    block = 'block',
    inline = 'inline',
}

export interface IMarkdownParserNode {
    name: MarkdownParserBlockName;
    type: MarkdownParserType;
    level: number;
    values: {
        name: MarkdownParserInlineName;
        type: MarkdownParserType;
        value: string;
    }[]
}



export default function parser(text: string): IMarkdownParserNode[] {
    return mtp(text).ast;
    // return tree.dump();
}
