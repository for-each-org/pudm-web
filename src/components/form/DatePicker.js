import React from 'react';

/**
 * props: {
 * {
 * date [24 hr time],
 * onChange [Function]
 *}
 */

export default function DatePicker(props) {
    return (
          <input type="date" onChange={props.onChange} value={props.date}/>
    )
}
