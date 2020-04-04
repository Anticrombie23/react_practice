import React, {Component} from 'react';


class Person extends Component {
    render() {
        var props = this.props;
        return (
            <div>
                <p onClick={props.click}>I'm a person named {props.name} and I am {props.age}</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value = {props.name}/>
            </div>
        );
    }
}

export default Person;


