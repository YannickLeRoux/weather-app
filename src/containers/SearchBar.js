import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    state = { term: ''}

    onInputChange(event) {
        this.setState({ term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group my-5">
              <input
              placeholder="Get a 5 days forcast in your favorite city..."
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange.bind(this)}/>
              <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
              </span>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);