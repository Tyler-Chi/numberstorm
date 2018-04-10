import React from 'react';
import { connect } from 'react-redux';
import '../stylesheets/navbar.css';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props);
        // console.log(this.props.state.location === {});
    }



    render() {

        return (
            <div className="navbar-area">

                <p className="navbar-title">
                    TITLE
                </p>

                <div className="navbar-buttons" >
                    <p >
                        Solver
                    </p>

                    <p >
                        New Problem
                    </p>

                    <p  >
                        List of Problems
                    </p>

                    <p>
                        General Strategies
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



export default connect(mapStateToProps)(Navbar);
