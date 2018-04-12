import React, { Component } from 'react';

export default class NotificationEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id, // integer
            textfield: props.textfield, // ""
            time: props.time, // "hh:mm:ss"
            date: props.date, // "yyyy-mm-dd"
            group: props.group, // index in array of groups
            edit: props.edit // boolean
        }
    }
    
    onTextFieldChange(event) {
    }

    onGroupSelectorChange(event) {
    }

    onDatePickerChange(event) {
    }

    onTimePickerChange(event) {
    }

    onSubmit() {
        //TODO convert date and time to be stored in a key [time] as UNIX time

        /* create form object that has
        *form = {
        *   id: state.id,
        *   textfield: state.textfield,
        *   time: (UNIX time)(state.date + state.time),
        *   group: state.group
        *}
        */

        // props.onSubmit(form)
    }

    shouldComponentUpdate(nextProps, nextState) {
        //TODO: Check if old props match current props, if they do, don't update
        //If they don't, see if there is any field in the form that was filled out. 
        //If there was, prompt a question asking whether or not they want to start over

    }

    render() {
        //Will have TextField, TimePicker, DatePicker, GroupSelector, Button
        return (
            <div/>
        )
    }
}