import React, { Component } from 'react';
import components           from '../components';
import utils from '../utils';

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
    
    onTextFieldChange = (event) => {
        this.setState({textfield: event.target.value});
    }

    onGroupSelectorChange = (event) => {
        this.setState({group: event.target.value});
    }

    onDatePickerChange = (event) => {
        this.setState({date: event.target.value});
    }

    onTimePickerChange = (event) => {
        this.setState({time: event.target.value});
    }

    onSubmit = () => {

        const form = {
            id: this.state.id,
            textfield: this.state.textfield,
            time: utils.dateTimeToUnix(this.state.date, this.state.time),
            group: this.state.group,
        };

        this.props.onSubmit(form)
    }

    shouldComponentUpdate(nextProps, nextState) {
        //TODO: Check if old props match current props, if they do, don't update
        //If they don't, see if there is any field in the form that was filled out. 
        //If there was, prompt a question asking whether or not they want to start over
        
        return true; //TEMPORARY
    }

    render() {
        //Will have TextField, TimePicker, DatePicker, GroupSelector, Button
        return (
            <div>
                <components.form.TextField 
                    content={this.state.textfield} 
                    updateContent={this.onTextFieldChange}/>

                <components.form.GroupSelector 
                    group_list={this.props.group_list} 
                    selectGroup={this.onGroupSelectorChange}/>

                <components.form.Button 
                    display_name="submit" 
                    onClick={this.onSubmit}/>

                <components.form.DatePicker 
                    date={this.state.date} 
                    onChange={this.onDatePickerChange}/>

                <components.form.TimePicker 
                    time={this.state.time} 
                    onChange={this.onTimePickerChange}/>
            </div>
        )
    }
}