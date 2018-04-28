import React from 'react';
import components           from '../components';

export default function NotificationList(props) {
    const listItems = props.notifications ? props.notifications.map((notification) =>
        <li key={notification.id}>
            <components.notifications.ListElement 
            notification={notification} 
            groups={props.groups} 
            onClick={props.onClick.bind(null, notification)}/>
        </li>
    ) : [];
    return (
        <ul>{listItems}</ul>
    );
}