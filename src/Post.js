import React, { Component } from 'react';
import Avatar from './Avatar.js';
import Likes from './Likes.js';
import Description from './Description.js';
import Photo from './Photo.js';
import User from './User.js';
import { Col, Grid, Media, Row } from 'react-bootstrap';

class Post extends React.Component {
  render() {
    return (
      <li>
        <Grid className="post">
          <Row className="user">
            <Col xs={2} md={2} className="user-icon">
              <Avatar post={this.props.post}/>
            </Col>
            <Col xs={10} md={10} className="username">
              <User post={this.props.post}/>
            </Col>
          </Row>
          <Row className="photo">
            <Col xs={12} md={12}>
              <Photo post={this.props.post}/>
            </Col>
          </Row>
          <Row className="description">
            <Col xs={12} md={12}>
              <Description post={this.props.post}/>
            </Col>
          </Row>
          <Row className="likes">
            <Col xs={12} md={12}>
              <Likes label={'Like'}/>
            </Col>
          </Row>
        </Grid>
      </li>
    )
  }
}
export default Post;
