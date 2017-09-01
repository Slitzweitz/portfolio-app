vimport React, { Component } from 'react';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      // define state
      open: false,
      title: 'HeaderParse API',
      mainSkill: 'Express',
      secondarySkill: 'Heroku'
    };
  }

  render() {
    return (
      <div className="showcase">
        <Grid>
          <Row>
            <Col lg={4} md={6} mdOffset={3}>
              <Panel header={this.state.title} bsStyle="success">
              </Panel>
              <Label bsStyle="success">
                {this.state.mainSkill}
              </Label>&nbsp;
              <Label bsStyle="success">
                {this.state.secondarySkill}
              </Label>&nbsp;
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
