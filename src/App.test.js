import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import {shallow, mount} from 'enzyme'

 describe('Component: App', () => {

   it('should render the App', () => {
     const tree = renderer.create(
       <App items={[]}></App>
     ).toJSON()
     expect(tree).toMatchSnapshot()
   })

   it('input will update the state', () => {
    const component = mount(<App items={[]}></App>);
    const mockedEvent = { target: { value: 'Changed input' }}
    component.find('input').at(0).simulate('change', mockedEvent);
    component.update()
    expect(toJson(component)).toMatchSnapshot();
    expect(component.state().term).toEqual(mockedEvent.target.value)
   })
   it('should add an item based on the value in the state', () => {
	const component = shallow(<App items={[]} />);
  const preventDefault = jest.fn();
  component.setState({
    value: 'Test item'
  })
  component.find('form').simulate('submit', { preventDefault });
	expect(toJson(component)).toMatchSnapshot();
  expect(preventDefault).toBeCalled();
  })
})
