import React from 'react';
import renderer from 'react-test-renderer';
import MarkdownBlock from '../lib/MarkdownBlock';


test('renders correctly', () => {
    const tree = renderer.create(<MarkdownBlock content="toto" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
