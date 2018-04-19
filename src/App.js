import React, { Component } from 'react';
import components from './components';
import container from './containers';
import db from './db/db_comm';

class App extends Component {
    render() {
        // <components.form.Button/> you can put a component like this between the divs below to display and test it.
        // I suggest using console.log to test onSelect and onClick stuff
        return ( 
            <div>
                <container.NotificationEditor/>
            </div>
        );
    }
}

export default App;
