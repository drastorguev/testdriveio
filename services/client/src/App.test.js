import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

beforeAll(() => {
  global.localStorage = {
    getItem: () => 'someToken'
  };
});
test('App will call componentWillMount when mounted', () => {
  const onWillMount = jest.fn();
  App.prototype.componentWillMount = onWillMount;
  const wrapper = mount(<Router><App/></Router>);
  expect(onWillMount).toHaveBeenCalledTimes(1)
});
