import React from 'react';

/**
 * props: {
 * {
 * display_name [String],
 * onClick [Function]
 *}
 */

export default function Button(props) {

    
    return (
        <div>
          <button onClick={props.onClick}>{props.display_name}</button>
        </div>
    )
}
