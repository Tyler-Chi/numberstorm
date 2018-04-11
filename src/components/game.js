import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../stylesheets/game.css';

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
            buttonPressed: 0
        };
        //button pressed defaults to 0, temporarily goes to 1 or 2 when player presses.
        this.gameLogic = this.gameLogic.bind(this);
        this.newTurn = this.newTurn.bind(this);
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
    }

    gameLogic(){
        if (this.state.gameCycle === false){
            return (
                <p onClick={this.newTurn}> Play Game! </p>
            );
        }

        //render the cards

        if (this.state.p1points > 4){
            this.setState({gameCycle: false, message: "player 1 has won!"});
        }
        if (this.state.p2points > 4) {
            this.setState({ gameCycle: false, message: "player 2 has won!" });
        }

        if (this.state.gameCycle){

            console.log('in the game cycle, this is state:', this.state);

            return (
                <p> In the game now </p>
            )
        };




    }

    newTurn(){
        let questionIdx = Math.round(Math.random() * this.state.solutions.length - 1);

        this.setState({ message: '', gameCycle: true, currentQuestion:  this.state.solutions[questionIdx]});

    }

    render(){

        console.log('in the render, here is the state');
        console.log(this.state);

        return (
            <div className = "game-area">
                <div className = 'player'> 
                    <p className="player-name"> Player 1 </p>
                    <p> Points: {this.state.p1points} </p>
                </div>

                <div className = "game-board">
                    {this.gameLogic()}
                </div>

                <div className = 'player'>
                    <p className="player-name"> Player 2 </p>
                    <p> Points: {this.state.p2points} </p>
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