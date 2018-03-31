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
                group: null,
                edit: false
            }
        }
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