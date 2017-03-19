import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from './List';


it('should render a todo item ', () => {
  const tree = toJson(shallow(<List items={[]} />));
  expect(tree).toMatchSnapshot();
});
