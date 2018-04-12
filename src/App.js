import React, { Component } from 'react';
import components           from './components';
import containers           from './containers';

const groups = [
    "red", "blue", "green"
];

var content = "";


class App extends Component {
<<<<<<< HEAD
    render() {
        // <components.form.Button/> you can put a component like this between the divs below to display and test it.
        // I suggest using console.log to test onSelect and onClick stuff
        return ( 
            <div>
                <components.form.TextField/>
                <components.form.GroupSelector group_list={groups}/>
            </div>
        );
    }
}

export default App;
