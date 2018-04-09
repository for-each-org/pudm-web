import React from 'react';

/**
 * props: {
 * {
 *  group_list : [
 *   //group_names [String]
 *  ],
 *  selectGroup [Function]
 * }
 */

export default function GroupSelector(props) {
    return (
        <div>
            <select onChange={props.selectGroup}>
                    <option value="props.group_list[0]">{props.group_list[0]}</option>
                    <option value="props.group_list[1]">{props.group_list[1]}</option>
                    <option value="props.group_list[2]">{props.group_list[2]}</option>
            </select>
        </div>
    )
}