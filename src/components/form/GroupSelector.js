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
    const group_list = props.group_list ? props.group_list : [];
    const listGroups = group_list.map((group_name, idx) =>
        <option value={idx}>{group_name}</option>
    );
    return (
        <select onChange={props.selectGroup}>{listGroups}</select>
    )
}