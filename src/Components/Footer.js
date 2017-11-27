import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <Row className="footer">
        <Col md={6} mdOffset={3}>
          <h2>
            Made with love by Colin Barlow
          </h2>
        </Col>
      </Row>
    )
  }
}
