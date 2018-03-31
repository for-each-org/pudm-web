import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: null,
            groups: null,
            form: {
                textfield: null,
                time: null,
                group: null,
                edit: false
            }
        }
    }
    
    componentWillMount() {
        //TODO: fectch data from API and fill state
    }

    onClickNotificationListItem(notif_id) {
        //Populate form with notification details
        this.setState(prev => (
            const notif = this.state.notifications.notif_id;
            {
            form: {
                textfield: notif.content,
                time: notif.time,
                group: notif.group,
                edit: true
            }
        });
    }

    onSubmitForm(form) {
        //TODO : Communicate with server
        
        //TODO : display confirmation of submission of form

        //Reset Form
        this.setState(prev => (
            const notif = this.state.notifications.notif_id;
            {
            form: {
                textfield: null,
                time: null,
                group: null,
                edit: false
            }
        });

    }

    render() {
        return(
            <div/>
        )
    }
 }