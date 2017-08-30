vimport React, { Component } from 'react';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      // define state
    };
  }

  render() {
    return (
      <div className="showcase">
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2} md={6} mdOffset={3}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
