import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App Component', () => {
    
    const wrapper = shallow(<App />);
    
    it('Should render without errors', () => {
        expect(wrapper.find(`[data-test="AppComponent"]`)).toHaveLength(1);
    })

})