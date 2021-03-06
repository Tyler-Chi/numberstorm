import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../stylesheets/game.css';
import KeyHandler, { KEYPRESS } from 'react-key-handler';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            solutions: [],
            currentQuestion: {},
            gameCycle: false,
            p1points: 0,
            p2points: 0,
            message:'',
            buttonPressed: 0,
            nextQuestionButton: false,
            newGame: false
        };
        //button pressed defaults to 0, temporarily goes to 1 or 2 when player presses.
        this.gameLogic = this.gameLogic.bind(this);
        this.newTurn = this.newTurn.bind(this);
        this.p1input = this.p1input.bind(this);
        this.p2input = this.p2input.bind(this);
        this.nextQuestionButton = this.nextQuestionButton.bind(this);
        this.newGame = this.newGame.bind(this);
        this.instructions = this.instructions.bind(this);
    }

    componentWillMount() {
        if (this.props.state.solutions.length === 0) {
            this.setState({ loading: true });
            this.props.fetchSolutions()
                .then(() => {
                    this.setState({ solutions: this.props.state.solutions, loading: false });
                }
                );
        } else {
            this.setState({ solutions: this.props.state.solutions });
        }

        let questionIdx = Math.round(Math.random() * this.state.solutions.length - 1);

        this.setState({currentQuestion: this.state.solutions[questionIdx]});
    }

    p1input(event){
        event.preventDefault();
        console.log('p1 input has been triggered!');

        if (this.state.buttonPressed === 0){
            let currentPoints = this.state.p1points;
            currentPoints += 1; 
            this.setState({ nextQuestionButton: true , p1points: currentPoints, buttonPressed: 1, message: "Player 1 has buzzed in!"});
        }

    }

    p2input(event) {
        event.preventDefault();
        console.log('p2 input has been triggered!');

        if (this.state.buttonPressed === 0) {
            let currentPoints = this.state.p2points;
            currentPoints += 1; 
            this.setState({ nextQuestionButton: true, p2points: currentPoints, buttonPressed: 2, message: "Player 2 has buzzed in!" });
        }

    }

    nextQuestionButton(){
        if(this.state.nextQuestionButton){
            return (
                <p  className = "next-question" onClick = {this.newTurn}> Next Question! [V]</p>
            );
        }
    }



    newTurn() {

        console.log('new turn was triggered');

        let questionIdx = Math.round(Math.random() * this.state.solutions.length - 1);

        this.setState({ nextQuestionButton: false , buttonPressed: 0, message: '', nextGame: false, gameCycle: true, currentQuestion: this.state.solutions[questionIdx] });

    }

    instructions(letter){
            return (
                <div className = "instructions-area">
                    <p> Press  </p> <p className="letter"> {letter} </p> <p>  to buzz in! </p>
                </div>
            );
    }

    newGame(){
        let questionIdx = Math.round(Math.random() * this.state.solutions.length - 1);


        this.setState({ p1points: 0, p2points: 0, nextQuestionButton: false, buttonPressed: 0, message: '', nextGame: false, gameCycle: true, currentQuestion: this.state.solutions[questionIdx] });

    }

    gameLogic(){
        if (this.state.gameCycle === false && this.state.newGame === false ){
            return (
                <div className="start-game" > <p onClick={this.newTurn} className="start-game-text"> Start Game! </p> </div>
            );
        }

        if (this.state.gameCycle === false && this.state.newGame === true) {

            const { currentQuestion } = this.state;
            const numbers = currentQuestion.numbers.split("&");
            let number0 = numbers[0];
            let number1 = numbers[1];
            let number2 = numbers[2];
            let number3 = numbers[3];

            return (
            
                    <div className='card-area'>
                        <p className="card-area-title"> Cards: </p>

                        <div className="two-cards">
                            <div>
                                {number0}
                            </div>
                            <div>
                                {number1}
                            </div>
                        </div>
                        <div className="two-cards">
                            <div>
                                {number2}
                            </div>
                            <div>
                                {number3}
                            </div>
                        </div>
                        <div className="optional">
                            <p onClick={this.newGame}> Play again! </p>
                        </div>
                    </div>
                   
            
            );
        }

        if (this.state.p1points  === 5 ){
            this.setState({ gameCycle: false, message: "player 1 has won!", newGame: true });
        }
        if (this.state.p2points === 5) {
            this.setState({  gameCycle: false, message: "player 2 has won!"  , newGame: true});
        }

        //render the cards

        if (this.state.gameCycle){

            const { currentQuestion } = this.state;
            const numbers = currentQuestion.numbers.split("&");

            return (
                <div className = 'card-area'> 
                    <p className='card-area-title'> Cards: </p> 

                    <div className="two-cards"> 
                        <div>
                            {numbers[0]}
                        </div>
                        <div>
                            {numbers[1]}
                        </div>
                    </div>
                    <div className="two-cards">
                        <div>
                            {numbers[2]}
                        </div>
                        <div>
                            {numbers[3]}
                        </div>
                    </div>

                    <div className="optional">
                        <div className="message-area">
                            {this.nextQuestionButton()} 
                            {this.state.message} 
                        </div>
                    </div>


                </div>
            );
        }
    }

  

    render(){

        console.log('in the render, here is the state');
        console.log(this.state);

        return (
            <div className = "game-area">
                <KeyHandler keyEventName={KEYPRESS} keyValue="s" onKeyHandle={this.p1input} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="k" onKeyHandle={this.p2input} />
                <KeyHandler keyEventName={KEYPRESS} keyValue="v" onKeyHandle={this.newTurn} />

                <div className = 'player'> 
                    <p className="player-name"> Player 1 </p>
                    <p> Points: {this.state.p1points} </p>
                    {this.instructions('S')}
                </div>

                <div className = "game-board">
                    {this.gameLogic()}
                </div>

                <div className = 'player'>
                    <p className="player-name"> Player 2 </p>
                    <p> Points: {this.state.p2points} </p>
                    {this.instructions('K')}
                </div>
            </div>
        );
    }


}

const mapStateToProps = state => {
    return {
        state
    };
};


export default connect(mapStateToProps,actions)(Game);