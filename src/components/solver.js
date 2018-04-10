import React from 'react';
import '../stylesheets/solver.css';

class Solver extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({num1: event.target.value});
    }



    render(){

        console.log(this.state);

        return(
            <div className="solver">
                    <p className="solver-title"> See if 4 numbers can make 24! </p>

                    <input type='integer' value={this.state.num1} onChange={this.handleChange}/> 

              
            </div>
        );
    }
}

export default Solver;