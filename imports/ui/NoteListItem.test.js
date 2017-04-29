/*jshint esversion: 6 */
import React from 'react';
import expect from 'expect';
import {Meteor} from 'meteor/meteor';
import {mount} from 'enzyme';

import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
  describe('NoteListItem', function () {
    it('should render title and timestamp', function () {
      const title = 'My title here';
      const updatedAt = 1493483366657;
      const wrapper = mount(<NoteListItem note={{title, updatedAt}}/>);
      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('4/29/17');
    });
    it('should set deafault title if no title set', function () {
      const title = '';
      const updatedAt = 1493483366657;
      const wrapper = mount(<NoteListItem note={{title}}/>);
      expect(wrapper.find('h5').text()).toBe('Untitled Note');
    });
  });
}
