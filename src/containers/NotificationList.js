import React, { Component } from 'react';

export default class NotificationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: props.notifications
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        //TODO: Check if old props match current props, if they do, don't update
    }

    render() {
        return (
            <div/>
        )
    }
}