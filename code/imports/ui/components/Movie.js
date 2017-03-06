import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import SplitTest from '../../modules/split-test.js';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.handleWatchMovieClick = this.handleWatchMovieClick.bind(this);
        this.buttonSplitTest = new SplitTest('watch-movie-button', ['a', 'b']);
        this.buttonSplitTest.track();
    }
    
    handleWatchMovieClick(event) {
        analytics.track('Watch movie button clicked', {movie: this.props.movie.title});
    }
    
    
    render() {
        return (
          <Row>
              <Col xs={12} sm={6}>
                  <h1>{this.props.movie.title}</h1>
                  <p>{this.props.movie.detailedPlot}</p>
                  <Button bsStyle={this.buttonSplitTest.testOption == 'a' ? 'primary' : 'danger' }
                          onClick={this.handleWatchMovieClick}>Watch movie</Button>
              </Col>
          </Row>
        );
    }
}


Movie.propTypes = {
    movie: React.PropTypes.object,
};

export default Movie;