import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/navbar.css';
import * as actions from '../actions';
import $ from 'jquery';
import Location from './location';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('navbar props', this.props);

    return (
      <div className="navbar-area">
        <div className="navbar-buttons-left">
          <Location
            navigation={this.props.state.navigation}
            name={'SOLVER'}
            navigate={this.props.navigate}
          />

          <Location
            navigation={this.props.state.navigation}
            name={'COMPETE'}
            navigate={this.props.navigate}
          />
        </div>
        <div className="navbar-title">NUMBERSTORM</div>

        <div className="navbar-buttons-right">
          <Location
            navigation={this.props.state.navigation}
            name={'LIST'}
            navigate={this.props.navigate}
          />

          <p>ABOUT</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, actions)(Navbar);
