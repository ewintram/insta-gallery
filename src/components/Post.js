import React from 'react';
import Avatar from './Avatar.js';
import DeleteBtn from './DeleteBtn.js';
import Description from './Description.js';
import Likes from './Likes.js';
import Photo from './Photo.js';
import User from './User.js';
import { Col, Grid, Row } from 'react-bootstrap';

class Post extends React.Component {
  onClickDelete = () => {
    this.props.removePost(parseInt(this.props.index));
  };

  render() {
    return (
      <li>
        <Grid className="post">
          <Row className="user">
            <Col xs={2} md={2} className="user-icon">
              <Avatar post={this.props.post}/>
            </Col>
            <Col xs={8} md={8} className="username">
              <User post={this.props.post}/>
            </Col>
            <Col xs={2} md={2} className="delete-icon">
              <DeleteBtn onClickDelete={this.onClickDelete}/>
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
              <Likes post={this.props.post}/>
            </Col>
          </Row>
        </Grid>
      </li>
    )
  }
}
export default Post;
