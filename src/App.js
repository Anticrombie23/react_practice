import './App.css';

import React, {Component} from 'react';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Max', age: '25'},
            {id: '2', name: 'Josh', age: '29'},
            {id: '3', name: 'Angelina', age: '27'}
        ],
        showPersons: true,
        otherState: 'some other value'

    }

    nameChangedHandler = (event, id) =>{

        const personIndex = this.state.persons.findIndex(p =>{
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];

       persons[personIndex] = person;

        this.setState({persons: persons});
}

    switchNameHandler = () => {
        this.setState({
            persons: [
                {name: 'Josh', age: '25'},
                {name: 'Mark', age: '40'},
                {name: 'Steve', age: '27'}
            ]
        })
    }

    togglePersonsHandler = () =>{
        this.setState({showPersons: !this.state.showPersons})
    }

    deletePersonHandler = (index) =>{
        const persons = [...this.state.persons]
        persons.splice(index, 1);
        this.setState({persons: persons})
    }

    render() {

        let persons = null;

        if(this.state.showPersons){
            persons=  (<div>
                {this.state.persons.map((person, index) => {
                   return <Person
                       click={() => this.deletePersonHandler(index)}
                       name={person.name}
                       age={person.age}
                       key={person.id}
                       changed={(event) => this.nameChangedHandler(event, person.id)}>
                    </Person>
                })}
            </div>)
        }

        return (
            <div>
                {persons}
                <button onMouseOver={"backgroundColor:red"} onClick={this.togglePersonsHandler}>Toggle Persons</button>
            </div>
        );
    }
}

export default App;
