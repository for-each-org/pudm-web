import React, { Component } from 'react';
import NotificationEditor   from './NotificationEditor';
import NotificationList     from './NotificationList';
import utils                from '../utils';
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
                group: 0,
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

    onSubmitForm = (notif_obj) => {
        //TODO : Communicate with server
        
        //TODO : display confirmation of submission of form

        //Reset Form
        this.setState(prev => (
            {form: {
                id: null,
                textfield: "",
                time: null,
                group: 0,
                edit: false
            }}
        ));

    }

    getTime() {
        const unix = Math.round(+new Date()/1000);
        if (this.state.time) {
            return utils.getTimeString(this.state.form.time)
        } else {
            return utils.getTimeString(unix);
        }
    }

    getDate() {
        const unix = Math.round(+new Date()/1000);
        if (this.state.time) {
            return utils.getDateString(this.state.form.time)
        } else {
            return utils.getDateString(unix);
        }
    }

    render() {
        return(
            <div>
                <NotificationEditor 
                    group_list={this.state.groups} 
                    id={this.state.form.id}
                    textfield={this.state.form.textfield}
                    time={this.getTime()}
                    date={this.getDate()}
                    group={this.state.form.group}
                    edit={this.state.form.edit} 
                    onSubmit={this.onSubmitForm}/>

                <NotificationList notifications={this.state.notifications} groups={this.state.groups}/>
            </div>
        )
    }
 }