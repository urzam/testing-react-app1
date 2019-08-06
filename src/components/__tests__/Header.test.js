import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';


describe("Header", function(){
  let mountedHeader;

  beforeEach(()=>{
    mountedHeader = shallow(<Header />);
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders a button', () => {
    const logoImg = mountedHeader.find('img[src="images/logo.jpg"]');
    expect(logoImg.length).toBe(1);
  });  

});