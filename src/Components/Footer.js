import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <Row className="footer">
        <Col md={6} mdOffset={3}>
          <h3>
            Made with &#9829; by Colin Barlow
          </h3>
        </Col>
      </Row>
    )
  }
}
