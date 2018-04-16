import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/navbar.css';
import * as actions from '../actions';
import $ from "jquery";
import Location from './location';


class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        console.log('navbar props',this.props);

        return (
            <div className="navbar-area">

                <p className="navbar-title">
                    NumberStorm
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
}


const mapStateToProps = (state) => {
    return {
        state
    };
};



export default connect(mapStateToProps,actions)(Navbar);
