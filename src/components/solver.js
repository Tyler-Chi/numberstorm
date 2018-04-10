import React from 'react';
import '../stylesheets/solver.css';
import axios from 'axios';

class Solver extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            numbers: [0,0,0,0],
            solution: '',
            solutionString:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
    }

    

    handleChange(event, index){
        let currentNumbers = this.state.numbers;
        currentNumbers[index] = event.target.value;
        this.setState({numbers: currentNumbers});
    }

    handleSubmit(){
        let currentNumberString = this.state.numbers.join('&');
        axios.get('https://mathology.herokuapp.com/api/solutions/' + currentNumberString )
            .then(res => {
                this.setState({solution: res, solutionString: res.data.solution});
            });
    }

    changeNumber(index,direction){
        let currentNumber = this.state.numbers[index];
        currentNumber += direction;
        let currentArray = this.state.numbers;
        currentArray[index] = currentNumber;
        this.setState({numbers: currentArray});
    }


    render(){

        console.log(this.state);

        return(
            <div className="solver">
                    <p className="solver-title"> See if 4 numbers can make 24! </p>



                    <div className = 'solver-input-area'>
                        <div>
                            <p onClick={()=> this.changeNumber(0,1)}> + </p>
                                <input type='integer' value={this.state.numbers[0]} onChange={(event) => this.handleChange(event, 0)}/> 
                            <p onClick={()=> this.changeNumber(0, -1)}> - </p>
                        </div>

                        <div>
                            <p onClick={() => this.changeNumber(1, 1)}> + </p>
                                <input type='integer' value={this.state.numbers[1]} onChange={(event) => this.handleChange(event, 1)} />    
                            <p onClick={() => this.changeNumber(1, -1)}> - </p>
                        </div>

                        <div>
                            <p onClick={() => this.changeNumber(2, 1)}> + </p>
                                <input type='integer' value={this.state.numbers[2]} onChange={(event) => this.handleChange(event, 2)} /> 
                            <p onClick={() => this.changeNumber(2, -1)}> - </p>
                        </div>

                        <div>
                            <p onClick={() => this.changeNumber(3, 1)}> + </p>
                                <input type='integer' value={this.state.numbers[3]} onChange={(event) => this.handleChange(event, 3)} /> 
                            <p onClick={() => this.changeNumber(3, -1)}> - </p>      
                        </div>
                    </div>


                    <p onClick = {this.handleSubmit}> SUBMIT </p> 

                    <p> {this.state.solutionString} </p>

              
            </div>
        );
    }
}

export default Solver;