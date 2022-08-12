// import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Head from '../components/Head';

it('Renders correctly', () => {
  const tree = renderer.create(<Head />).toJSON();
  expect(tree).toMatchSnapshot();
});
