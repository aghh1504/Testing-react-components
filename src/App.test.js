import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

describe('Component: App', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <App />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should match its snapshot with items', () => {
    const items = ['Learn react', 'rest', 'go out'];
    const tree = renderer.create(
      <App items={items} />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should add an item', () => {
    const items = ['Learn react', 'rest', 'go out'];
    const component = renderer.create(
      <App items={items} />
     );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
     // find the form and the input
    const form = tree.children.filter(child => child.type === 'form')[0];
    const input = form.children.filter(child => child.type === 'input')[0];
     // set the input value
    input.props.onChange({
      target: {
        value: 'Some random text'
      }
    });
    form.props.onSubmit({ preventDefault: () => {} });

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  //  it('should match its snapshot with items', () => {
  //   const component = mount(<App items={[]}></App>);
  //   const mockedEvent = { target: { value: 'Changed input' }}
  //   component.find('input').at(0).simulate('change', mockedEvent);
  //   component.update()
  //   expect(toJson(component)).toMatchSnapshot();
  //   expect(component.state().term).toEqual(mockedEvent.target.value)
  //  })
  //
  //  it('should add an item based on the value in the state', () => {
  // 	const component = mount(<App items={[]} />);
  //   const preventDefault = jest.fn();
  //   component.setState({
  //     value: 'Test item'
  //   })
  //   component.find('form').simulate('submit', { preventDefault });
  // 	expect(toJson(component)).toMatchSnapshot();
  //   expect(preventDefault).toBeCalled();
  // })
});
