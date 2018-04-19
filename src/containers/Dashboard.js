import React, { Component } from 'react';
import NotificationEditor   from './NotificationEditor';
import NotificationList     from './NotificationList';
import db                   from '../db';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: null,
            groups: null,
            form: {
                id: null,
                textfield: "",
                time: null,
                group: null,
                edit: false //to know whether the notification is new or an old one is being edited
            }
        }
    }
    
    componentWillMount() {

        //Get list of groups
        db.getGroups()
        .then(res => {
            this.setState({
                groups: res
            });
        })
        .catch(error => {
            //TODO handle error
            console.log(error);
        });

        //Get list of notifications
        db.getNotifications()
        .then(res => {
            this.setState({
                notifications: res
            });
        })
        .catch(error => {
            //TODO handle error
            console.log(error);
        });
    }

    onClickNotificationListItem(notif_id) {
        //Populate form with notification details
        const notif = this.state.notifications.notif_id;
        this.setState(prev => (
            {form: {
                id: notif_id,
                textfield: notif.content,
                time: notif.time,
                group: notif.group,
                edit: true
            }}
        ));
    }

    onSubmitForm(notif_obj) {
        //TODO : Communicate with server
        
        //TODO : display confirmation of submission of form

        //Reset Form
        this.setState(prev => (
            {form: {
                id: null,
                textfield: "",
                time: null,
                group: null,
                edit: false
            }}
        ));

    }

    render() {
        return(
            <div>
                <NotificationEditor group_list={this.state.groups}/>
            </div>
        )
    }
 }