import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/navbar.css';
import * as actions from '../actions';
import $ from "jquery";


class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="navbar-area">

                <p className="navbar-title">
                    NumberStorm
                </p>

                <div className="navbar-buttons" >
                    <p id="solver" onClick ={() => this.props.navigate('solver')}>
                        Solver
                    </p>

                    <p onClick={() => this.props.navigate('game')}>
                        Compete!
                    </p>

                    <p onClick={()=> this.props.navigate('list')}>
                        List of Problems
                    </p>

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
