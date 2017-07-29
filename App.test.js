import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';
import { StyleSheet, Text, View } from 'react-native';
import { shallow } from 'enzyme';


describe('App.js', () => {

  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('Renders 3 Text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Text).length).toBe(3);
  });

})
