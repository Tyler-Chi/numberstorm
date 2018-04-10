import React from 'react';
import '../stylesheets/solver.css';
import axios from 'axios';

class Solver extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            numbers: [0,0,0,0],
            solution: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    

    handleChange(event, index){
        let currentNumbers = this.state.numbers;
        currentNumbers[index] = event.target.value;
        this.setState({numbers: currentNumbers});
    }

    handleSubmit(){
        let currentNumberString = this.state.numbers.join('&');
        axios.get('https://mathology.herokuapp.com/api/solutions')
            .then(res => {
                console.log(res);
            })
    }


    render(){

        console.log(this.state);

        return(
            <div className="solver">
                    <p className="solver-title"> See if 4 numbers can make 24! </p>

                    <input type='integer' value={this.state.numbers[0]} onChange={(event) => this.handleChange(event, 0)}/> 
                    <input type='integer' value={this.state.numbers[1]} onChange={(event) => this.handleChange(event, 1)} /> 
                    <input type='integer' value={this.state.numbers[2]} onChange={(event) => this.handleChange(event, 2)} /> 
                    <input type='integer' value={this.state.numbers[3]} onChange={(event) => this.handleChange(event, 3)} /> 

                    <p onClick = {this.handleSubmit}> SUBMIT </p> 

              
            </div>
        );
    }
}

export default Solver;