import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import Button from '../Button';

describe("Button", function(){
  let mountedButton;

  beforeEach(()=>{
    mountedButton = shallow(<Button />);
  });

  it('renders without crashing', () => {
    let mountedButton = shallow(<Button />);
  });

  it('renders without crashing jest', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('renders a button', () => {
    const buttons = mountedButton.find('button');
    expect(buttons.length).toBe(1);
  });  

  it('call a function passed to it when click', () => {
    const mockCallBack = jest.fn();
    const mountedButtonWithCallBack = shallow(<Button handleClick={mockCallBack} />);
    mountedButtonWithCallBack.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

});

describe("When a location is passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: "Location1"
    };

    mountedButton = shallow(<Button {...props} />);
  });

  it('display the location', () => {
    const locName = mountedButton.find('.location-button');
    expect(locName.text()).toEqual('Location1');
  });

});

describe("When a location is passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: undefined
    };

    mountedButton = shallow(<Button {...props} />);
  });

  it('display the location', () => {
    const locName = mountedButton.find('.location-button');
    expect(locName.text()).toEqual('All Locations');
  });

});