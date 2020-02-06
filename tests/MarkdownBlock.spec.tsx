import React from 'react';
import renderer from 'react-test-renderer';
import MarkdownBlock from '../lib/MarkdownBlock';


describe('MarkdownBlock', () => {

    test('not parse no markdown test', () => {
        const editor = renderer.create(<MarkdownBlock content="toto" />).toJSON();
        expect(editor.children).toHaveLength(1);
    });

    test('parse inline markdown test', () => {
        const md = `Hello *boi* !`;
        const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
        expect(editor).toHaveLength(3);
        // console.log(editor)
        // expect(editor).toMatchSnapshot();

        expect(editor[0].type).toBe('Text');
        expect(editor[0].children[0]).toBe('Hello ');

        expect(editor[1].type).toBe('Text');
        expect(editor[1].children[0]).toBe('*boi*');

        expect(editor[2].type).toBe('Text');
        expect(editor[2].children[0]).toBe(' !');
    });
});

