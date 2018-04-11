import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import '../stylesheets/list.css';
import Solution from './solution';

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
        } else {
            this.setState({solutions: this.props.state.solutions});
        }
    }

    renderList(){
        
        if (this.state.loading){
            return (
                <div> Loading </div>
            );    
        } else {

            return (
                <ul className='solution-list'>
                    {this.state.solutions.map(solution => (
                        <li>
                            <Solution solution={solution} />
                        </li>
                    ))}
                </ul>
            );
        }

    }

    render(){

        console.log('render is being run');

        return (
            <div className="list">


                <p className = 'list-title'> List of Solved Problems </p>

                {this.renderList()}
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