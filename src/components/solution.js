import React from 'react';

class Solution extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        const { solution } = this.props;

        solution.numbers = solution.numbers.split('&').join(', ');

        return (
            <div className = "individual-solution-area">
                <p className = 'solution-numbers'> [ {solution.numbers} ] </p>
                <p className = 'solution-solution'> {solution.solution} </p>
            </div>
        );
    }
}

export default Solution;