import React from 'react';
import '../stylesheets/mainarea.css';
import Solver from './solver';


class Mainarea extends React.Component {

    render(){
        return (
            <div className = 'main-area'>
                <Solver />
            </div>
        );
    }
}

export default Mainarea;