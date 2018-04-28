import React from 'react';
import utils from '../../utils';
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
        <div onClick={props.onClick}>
            <div>
                Content: {props.notification.content}
            </div>
            <div>
                Status: {props.notification.status ? 'Sent' : 'Pending'}
            </div>
            <div>
                Time: {utils.getDateString(props.notification.time) + " " + utils.getTimeString(props.notification.time)}
            </div>
            <div>
                Group {props.groups[props.notification.group]}
            </div>
        </div>
    )
}