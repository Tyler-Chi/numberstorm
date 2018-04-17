import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/navbar.css';
import * as actions from '../actions';
import $ from 'jquery';
import Location from './location';

class Navbar extends React.Component {
<<<<<<< HEAD
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
=======

    constructor(props) {
        super(props);
    }


    render() {

        console.log('navbar props',this.props);

        return (
            <div className="navbar-area">

                <p className="navbar-title">
                    NumberStorm!
                </p>

                <div className="navbar-buttons" >
                   

                    <Location navigation={this.props.state.navigation} name={"Solver"} navigate={this.props.navigate}/>
                 
                    <Location navigation={this.props.state.navigation} name={"Compete"} navigate={this.props.navigate} />

                    <Location navigation={this.props.state.navigation} name={"List"} navigate={this.props.navigate} />


                    <p>
                        Solution Algorithm
                    </p>
                </div>


            </div>
        );
    }
>>>>>>> f7d5d36de68d5c1cf0e790473394b0e2d47102c2
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, actions)(Navbar);
