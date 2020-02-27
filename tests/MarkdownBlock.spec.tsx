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
            expect(editor.children).toHaveLength(3);
            // console.log(editor)
            // expect(editor).toMatchSnapshot();

            const part1 = editor.children[0];
            expect(part1.type).toBe('Text');
            expect(part1.children[0]).toBe('Hello ');
            expect(part1.props.style).toBeUndefined();

            const part2 = editor.children[1];
            expect(part2.type).toBe('Text');
            expect(part2.children[0]).toBe('*boi*');
            expect(part2.props.style).not.toBeUndefined();

            const part3 = editor.children[2];
            expect(part3.type).toBe('Text');
            expect(part3.children[0]).toBe(' !');
        });

        test('parse multiples inline markdown test', () => {
            const md = `*Hello* *boi* !`;
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor.children).toHaveLength(4);

            const part1 = editor.children[0];
            expect(part1.type).toBe('Text');
            expect(part1.children[0]).toBe('*Hello*');
            expect(part1.props.style).not.toBeUndefined();

            const part2 = editor.children[1];
            expect(part2.type).toBe('Text');
            expect(part2.children[0]).toBe(' ');
            expect(part2.props.style).toBeUndefined();

            const part3 = editor.children[2];
            expect(part3.type).toBe('Text');
            expect(part3.children[0]).toBe('*boi*');
            expect(part3.props.style).not.toBeUndefined();

            const part4 = editor.children[3];
            expect(part4.type).toBe('Text');
            expect(part4.children[0]).toBe(' !');
            expect(part4.props.style).toBeUndefined();
        });
        test('parse multiples inline markdown test', () => {
            const md = `*Hello* *boi* !`;
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor.children).toHaveLength(4);

            const part1 = editor.children[0];
            expect(part1.type).toBe('Text');
            expect(part1.children[0]).toBe('*Hello*');
            expect(part1.props.style).not.toBeUndefined();

            const part2 = editor.children[1];
            expect(part2.type).toBe('Text');
            expect(part2.children[0]).toBe(' ');
            expect(part2.props.style).toBeUndefined();

            const part3 = editor.children[2];
            expect(part3.type).toBe('Text');
            expect(part3.children[0]).toBe('*boi*');
            expect(part3.props.style).not.toBeUndefined();

            const part4 = editor.children[3];
            expect(part4.type).toBe('Text');
            expect(part4.children[0]).toBe(' !');
            expect(part4.props.style).toBeUndefined();
        });
    });

    describe('title', () => {
        test('parse inline H1', () => {
            const md = '# Hello !';
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();

            expect(editor.children[0].type).toBe('Text');
            expect(editor.children[0].children[0]).toBe('# Hello !');
        });
    });

    describe('code', () => {
        test('parse inline markdown test', () => {
            const md = 'Hello `boi` !';
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor.children).toHaveLength(3);

            const part1 = editor.children[0];
            expect(part1.type).toBe('Text');
            expect(part1.children[0]).toBe('Hello ');
            expect(part1.props.style).toBeUndefined();

            const part2 = editor.children[1];
            expect(part2.type).toBe('Text');
            expect(part2.children[0]).toBe('`boi`');
            expect(part2.props.style).not.toBeUndefined();

            const part3 = editor.children[2];
            expect(part3.type).toBe('Text');
            expect(part3.children[0]).toBe(' !');
        });
    });

    describe('strong', () => {
        test('parse inline markdown test', () => {
            const md = `Hello **boi** !`;
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor.children).toHaveLength(3);

            const part1 = editor.children[0];
            expect(part1.type).toBe('Text');
            expect(part1.children[0]).toBe('Hello ');
            expect(part1.props.style).toBeUndefined();

            const part2 = editor.children[1];
            expect(part2.type).toBe('Text');
            expect(part2.children[0]).toBe('**boi**');
            expect(part2.props.style).not.toBeUndefined();

            const part3 = editor.children[2];
            expect(part3.type).toBe('Text');
            expect(part3.children[0]).toBe(' !');
        });

        test('parse multiples inline markdown test', () => {
            const md = `**Hello** *boi* !`;
            const editor = renderer.create(<MarkdownBlock content={md} />).toJSON();
            expect(editor.children).toHaveLength(4);

            const part1 = editor.children[0];
            expect(part1.type).toBe('Text');
            expect(part1.children[0]).toBe('**Hello**');
            expect(part1.props.style).not.toBeUndefined();

            const part2 = editor.children[1];
            expect(part2.type).toBe('Text');
            expect(part2.children[0]).toBe(' ');
            expect(part2.props.style).toBeUndefined();

            const part3 = editor.children[2];
            expect(part3.type).toBe('Text');
            expect(part3.children[0]).toBe('*boi*');
            expect(part3.props.style).not.toBeUndefined();

            const part4 = editor.children[3];
            expect(part4.type).toBe('Text');
            expect(part4.children[0]).toBe(' !');
            expect(part4.props.style).toBeUndefined();
        });
    });

});

