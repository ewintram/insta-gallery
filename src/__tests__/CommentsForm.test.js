import React from 'react';
import CommentsForm from '../components/CommentsForm';
import { shallow } from 'enzyme';

var prop
var wrapper

beforeEach(() => {
  wrapper = shallow(<CommentsForm addComment={prop}/>);
});

it('renders the comments form', () => {
  const form = wrapper.find('form')
  expect(form.html()).toEqual("<form class=\"commentsForm\"><div class=\"form-group\"><label for=\"formBasicText\" class=\"control-label\">Username</label><input type=\"text\" placeholder=\"Please leave your username\" id=\"formBasicText\" class=\"form-control\"/><label for=\"formBasicText\" class=\"control-label\">Comment</label><textarea placeholder=\"Please leave your comment\" id=\"formBasicText\" class=\"form-control\"></textarea></div><button type=\"submit\" class=\"submitComment btn btn-default\">Submit</button></form>");
});
