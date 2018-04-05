import React, { Component } from 'react';

export default class NotificationEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            textfield: props.textfield,
            time: props.time,
            group: props.group,
            edit: props.edit
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        //TODO: Check if old props match current props, if they do, don't update
        //If they don't, see if there is any field in the form that was filled out. 
        //If there was, prompt a question asking whether or not they want to start over

    }

    render() {
        return (
            <div/>
        )
    }
}