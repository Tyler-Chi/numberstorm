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
            case 'solver':
                return ( <Solver />);            
            case 'list':
                return ( < List /> );
            case 'game':
                return ( < Game /> );
            default:
                return (  <Game />  );
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