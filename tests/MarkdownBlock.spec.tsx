import React from 'react';
import renderer from 'react-test-renderer';
import MarkdownBlock from '../lib/MarkdownBlock';


describe('MarkdownBlock', () => {

    test('not parse no markdown test', () => {
        const editor = renderer.create(<MarkdownBlock content="toto" />).toJSON();
        expect(editor.children).toHaveLength(1);
    });

    describe('italic', () => {
        test('parse inline markdown test', () => {
            const md = `Hello *boi* !`;
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor).toHaveLength(3);
            // console.log(editor)
            // expect(editor).toMatchSnapshot();

            expect(editor[0].type).toBe('Text');
            expect(editor[0].children[0]).toBe('Hello ');
            expect(editor[0].props.style).toBeUndefined();

            expect(editor[1].type).toBe('Text');
            expect(editor[1].children[0]).toBe('*boi*');
            expect(editor[1].props.style).not.toBeUndefined();

            expect(editor[2].type).toBe('Text');
            expect(editor[2].children[0]).toBe(' !');
        });

        test('parse multiples inline markdown test', () => {
            const md = `*Hello* *boi* !`;
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor).toHaveLength(4);

            expect(editor[0].type).toBe('Text');
            expect(editor[0].children[0]).toBe('*Hello*');
            expect(editor[0].props.style).not.toBeUndefined();

            expect(editor[1].type).toBe('Text');
            expect(editor[1].children[0]).toBe(' ');
            expect(editor[1].props.style).toBeUndefined();

            expect(editor[2].type).toBe('Text');
            expect(editor[2].children[0]).toBe('*boi*');
            expect(editor[2].props.style).not.toBeUndefined();

            expect(editor[3].type).toBe('Text');
            expect(editor[3].children[0]).toBe(' !');
            expect(editor[3].props.style).toBeUndefined();
        });
        test('parse multiples inline markdown test', () => {
            const md = `*Hello* *boi* !`;
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor).toHaveLength(4);

            expect(editor[0].type).toBe('Text');
            expect(editor[0].children[0]).toBe('*Hello*');
            expect(editor[0].props.style).not.toBeUndefined();

            expect(editor[1].type).toBe('Text');
            expect(editor[1].children[0]).toBe(' ');
            expect(editor[1].props.style).toBeUndefined();

            expect(editor[2].type).toBe('Text');
            expect(editor[2].children[0]).toBe('*boi*');
            expect(editor[2].props.style).not.toBeUndefined();

            expect(editor[3].type).toBe('Text');
            expect(editor[3].children[0]).toBe(' !');
            expect(editor[3].props.style).toBeUndefined();
        });
    });

    describe('title', () => {
        test('parse inline H1', () => {
            const md = '# Hello !';
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            // console.log(editor)
            // expect(editor).toMatchSnapshot();

            expect(editor.type).toBe('Text');
            expect(editor.children[0]).toBe('# Hello !');
            expect(editor.props.style).not.toBeUndefined();
        });
    });

    describe('code', () => {
        test('parse inline markdown test', () => {
            const md = 'Hello `boi` !';
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor).toHaveLength(3);
            // console.log(editor)
            // expect(editor).toMatchSnapshot();

            expect(editor[0].type).toBe('Text');
            expect(editor[0].children[0]).toBe('Hello ');
            expect(editor[0].props.style).toBeUndefined();

            expect(editor[1].type).toBe('Text');
            expect(editor[1].children[0]).toBe('`boi`');
            expect(editor[1].props.style).not.toBeUndefined();

            expect(editor[2].type).toBe('Text');
            expect(editor[2].children[0]).toBe(' !');
        });
    });

    describe.skip('strike', () => {
        test('parse inline markdown test', () => {
            const md = 'Hello ~boi~ !';
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor).toHaveLength(3);
            // console.log(editor)
            // expect(editor).toMatchSnapshot();

            expect(editor[0].type).toBe('Text');
            expect(editor[0].children[0]).toBe('Hello ');
            expect(editor[0].props.style).toBeUndefined();

            expect(editor[1].type).toBe('Text');
            expect(editor[1].children[0]).toBe('~boi~');
            expect(editor[1].props.style).not.toBeUndefined();

            expect(editor[2].type).toBe('Text');
            expect(editor[2].children[0]).toBe(' !');
        });
    });

    describe('strong', () => {
        test('parse inline markdown test', () => {
            const md = `Hello **boi** !`;
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor).toHaveLength(3);
            // console.log(editor)
            // expect(editor).toMatchSnapshot();

            expect(editor[0].type).toBe('Text');
            expect(editor[0].children[0]).toBe('Hello ');
            expect(editor[0].props.style).toBeUndefined();

            expect(editor[1].type).toBe('Text');
            expect(editor[1].children[0]).toBe('**boi**');
            expect(editor[1].props.style).not.toBeUndefined();

            expect(editor[2].type).toBe('Text');
            expect(editor[2].children[0]).toBe(' !');
        });

        test('parse multiples inline markdown test', () => {
            const md = `**Hello** *boi* !`;
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor).toHaveLength(4);

            expect(editor[0].type).toBe('Text');
            expect(editor[0].children[0]).toBe('**Hello**');
            expect(editor[0].props.style).not.toBeUndefined();

            expect(editor[1].type).toBe('Text');
            expect(editor[1].children[0]).toBe(' ');
            expect(editor[1].props.style).toBeUndefined();

            expect(editor[2].type).toBe('Text');
            expect(editor[2].children[0]).toBe('*boi*');
            expect(editor[2].props.style).not.toBeUndefined();

            expect(editor[3].type).toBe('Text');
            expect(editor[3].children[0]).toBe(' !');
            expect(editor[3].props.style).toBeUndefined();
        });
    });

});

