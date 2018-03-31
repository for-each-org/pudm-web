import React, { Component } from 'react';

export default Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: null,
            groups: null,
            form: {
                textfield: null,
                time: null,
                group: null
            }
        }
    }
    
    render() {
        return(
            <div/>
        )
    }
 }