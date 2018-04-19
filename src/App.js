import React, { Component } from 'react';
import Dashboard from './containers';

class App extends Component {
    render() {
        // <components.form.Button/> you can put a component like this between the divs below to display and test it.
        // I suggest using console.log to test onSelect and onClick stuff
        return ( 
            <Dashboard/>
        );
    }
}

export default App;
