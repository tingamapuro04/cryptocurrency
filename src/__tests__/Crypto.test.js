import React from 'react';
import renderer from 'react-test-renderer';
import Crypto from '../components/Crypto';

it('it renders perfectly', () => {
  const tree = renderer.create(<Crypto />).toJSON();
  expect(tree).toMatchSnapshot();
});
