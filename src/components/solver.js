import React from 'react';
import '../stylesheets/solver.css';
import axios from 'axios';

class Solver extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            numbers: [0,0,0,0],
            solution: '',
            solutionString:'',
            loading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.generateRandom = this.generateRandom.bind(this);
        this.solutionArea = this.solutionArea.bind(this);
    }

    

    handleChange(event, index){
        let currentNumbers = this.state.numbers;
        currentNumbers[index] = event.target.value;
        this.setState({numbers: currentNumbers});
    }

    handleSubmit(){
        let currentNumberString = this.state.numbers.join('&');
        this.setState({loading: true});
        axios.get('https://mathology.herokuapp.com/api/solutions/' + currentNumberString )
            .then(res => {
                this.setState({solution: res, solutionString: res.data.solution, loading: false});
            });
    }

    changeNumber(index,direction){
        let currentNumber = this.state.numbers[index];

        currentNumber = parseInt(currentNumber);

        currentNumber += direction;
        let currentArray = this.state.numbers;
        currentArray[index] = currentNumber;
        this.setState({numbers: currentArray});
    }

    generateRandom(index){
        let randomNumber = Math.round(Math.random() * 12 + 1);
        let currentArray = this.state.numbers;
        currentArray[index] = randomNumber;
        this.setState({numbers: currentArray});
        this.setState({solutionString: ''});

        if (index < 3 ){
            
            setTimeout( () => {this.generateRandom(index + 1);}, 500 );

        } 
        
    }

    solutionArea(){

        // if (this.state.loading === true ){

        if (this.state.loading === true){
            return (
                <div className = 'spinner-area'>
                    <i className="fas fa-spinner fa-pulse"></i>
                </div>
            );

        } else if ( this.state.solutionString.length > 0){

            let addition = '';

            if (this.state.solutionString !== 'unsolvable'){
                addition = ' = 24';
            }

            return (
                <div className='solution-string-area'>
                    <p className="solution-string"> {this.state.solutionString + addition}</p>
                </div>
            );
        }


    }


    render(){

        console.log(this.state);

        return(
            <div className="solver">
                    <p className="solver-title"> See if 4 numbers can make 24! </p>
                    <div className = 'solver-input-area'>
                        <div>
                            <p className='fas fa-angle-up'  onClick={()=> this.changeNumber(0,1)} />
                                    <input type='integer' value={this.state.numbers[0]} onChange={(event) => this.handleChange(event, 0)}/> 
                            <p className='fas fa-angle-down' onClick={()=> this.changeNumber(0, -1)} />
                        </div>

                        <div>
                            <p className='fas fa-angle-up' onClick={() => this.changeNumber(1, 1)} />
                                <input type='integer' value={this.state.numbers[1]} onChange={(event) => this.handleChange(event, 1)} />    
                            <p className='fas fa-angle-down' onClick={() => this.changeNumber(1, -1)} />
                        </div>

                        <div>
                            <p className='fas fa-angle-up' onClick={() => this.changeNumber(2, 1)} />
                                <input type='integer' value={this.state.numbers[2]} onChange={(event) => this.handleChange(event, 2)} /> 
                            <p className='fas fa-angle-down' onClick={() => this.changeNumber(2, -1)} />
                        </div>

                        <div>
                            <p className = 'fas fa-angle-up' onClick={() => this.changeNumber(3, 1)} />
                                <input type='integer' value={this.state.numbers[3]} onChange={(event) => this.handleChange(event, 3)} /> 
                            <p className='fas fa-angle-down' onClick={() => this.changeNumber(3, -1)} />
                        </div>
                    </div>

                    <div className = 'solver-button-area'>
                        <p className = "solver-submit" onClick = {this.handleSubmit}> Submit Numbers! </p> 
                        <p className = "solver-submit" onClick={() => this.generateRandom(0)}> Randomize! </p> 
                    </div>
             
                    {this.solutionArea()}
              
            </div>
        );
    }
}

export default Solver;