import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import '../stylesheets/list.css';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            solutions: []
        };
        this.renderList = this.renderList.bind(this);
    }

    componentWillMount(){
        if (this.props.state.solutions.length === 0){
            this.setState({loading: true});
            this.props.fetchSolutions()
                .then(()=> {
                    this.setState({solutions: this.props.state.solutions, loading: false});
                }
            );
        }
    }

    renderList(){
        
        if (this.state.loading){
            return (
                <div> Loading </div>
            );    
        } 

    }

    render(){

        let solutions = this.state.solutions;
        let solvable = {};
        for (var i = 0 ; i < solutions.length ; i++){
            let solution = solutions[i];
            if (solution.solvable){
                solvable[solution.numbers] = solution;
            }
        }

        return (
            <div className="list">
                List of Solved Problems
                {this.renderList()}
                {Object.values(solvable).map(solution => (
                    <p> hello world </p>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    };
};

export default connect(mapStateToProps,actions)(List);