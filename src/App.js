import React, { Component } from 'react';
import components from './components';

class App extends Component {
  render() {
    // <components.form.Button/> you can put a component like this between the divs below to display and test it.
    // I suggest using console.log to test onSelect and onClick stuff
    return (
      <div>
        <components.form.Button display_name='Submit' onClick={()=> {alert("clicked!");}}/>
        <components.form.TimePicker />
      </div>
    );
  }
}

export default App;
