import React from 'react';
import '../stylesheets/location.css';

class Location extends React.Component {

    constructor(props){
        super(props);
        this.button = this.button.bind(this);
    }

    button(){
        if (this.props.navigation === this.props.name){
            return (
                <p className ="selected" onClick = {() => this.props.navigate(this.props.name)}>
                    {this.props.name}
                </p>
            );
        } else {
            return (
                <p className = "unselected" onClick={() => this.props.navigate(this.props.name)}>
                    {this.props.name}
                </p>
            );
        }
    }

    render(){
        return (
            <div>
                {this.button()}
            </div>
        )
    }



}

export default Location;