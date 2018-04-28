import React from 'react';

/**
 * props: {
 * notification: {
 *   content [String],
 *   group [int].
 *   time [unix time],
 *   id [int]
 * },
 * groups: [Array],
 * onClick [Function]
 * }
 */

export default function ListElement(props) {
    return (
        <div>
            <div>
                Content: {props.notification.content}
            </div>
            <div>
                Status: {props.notification.status ? 'Sent' : 'Pending'}
            </div>
            <div>
                Time: {new Date(props.notification.time).toLocaleString()}
            </div>
            <div>
                Group {props.groups[props.notification.group]}
            </div>
        </div>
    )
}