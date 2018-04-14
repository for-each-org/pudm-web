import React from 'react';


/**
 * props: {
 * {
 * time [24 hr time],
 * onChange [Function]
 *}
 */

export default function TimePicker(props) {
    return (
          <input type="time" value={props.time} onChange={props.onChange}/>
    )
}
