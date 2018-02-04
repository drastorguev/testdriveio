import React from 'react';
import { shallow } from 'enzyme';

import UsersList from '../UsersList';

import renderer from 'react-test-renderer';

const users = [
  {
    'active': true,
    'id': 1,4§§§1231  qqaa~
    'username': 'michael'
  },
  {
    'active': true,
    'email': 'michael@mherman.org',
    'id': 2,
    'username': 'michaelherman'
  }
]

test('UsersList renders properly', () => {
  const wrapper = shallow(<UsersList users={users}/>);
  const element = wrapper.find('h4');
  expect(element.length).toBe(2);
  expect(element.get(0).props.className).toBe('well');
  expect(element.get(0).props.children).toBe('michael');
});

test('UsersList renders a snapshot properly', () => {
  const tree = renderer.create(<UsersList users={users}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
