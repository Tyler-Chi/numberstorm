import React from 'react';
import '../stylesheets/mainarea.css';
import Solver from './solver';
import List from './list';
import Game from './game';
import { connect } from 'react-redux';


class Mainarea extends React.Component {

    constructor(props){
        super(props);
        this.router = this.router.bind(this);
    }

    router(){
        switch (this.props.state.navigation){
            case 'SOLVER':
                return ( <Solver />);            
            case 'LIST':
                return ( < List /> );
            case 'COMPETE':
                return ( < Game /> );
            default:
                return ( <Solver /> );
        }
    }

    render(){
        return (
            <div className = 'main-area'>
                {this.router()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
};


export default connect(mapStateToProps)(Mainarea);