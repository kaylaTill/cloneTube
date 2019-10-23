import React from 'react';
import App from '../App.js';
import NavBar from '../components/Nav/NavBar';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import VideoDetail from '../components/VideoDetail/VideoDetail';
import VideoList from '../components/VideoList/VideoList';
Enzyme.configure({ adapter: new Adapter() });



describe('App', function () {

    
    it('should be a stateful class component', function () {
        expect(React.Component.isPrototypeOf(App)).toBe.true;
    });
    
    
    it('should render a single NavBar component', function () {
        const wrapper = mount(<App />);
        var nav = NavBar;
        // expect(wrapper.find(nav)).toExist();
        expect(wrapper.find(nav)).toMatchSnapshot()
    });
    
    it('should render a single VideoDetail component', function () {
        const wrapper = mount(<App />);
        var videoDetail = VideoDetail;
        expect(wrapper.find(videoDetail)).toMatchSnapshot()
    });
    
    
    it('should render a single VideoList component', function () {
        const wrapper = mount(<App />);
        var list = VideoList;
        expect(wrapper.find(list)).toMatchSnapshot()
    });
});