import React from 'react';

/**
 * props: {
 * {
 * content [String],
 * updateContent [Function]
 *}
 */

export default function TextField(props) {
    return ( 
        <textarea name="notifcontent" rows="10" cols="50" value={props.content} onChange={props.updateContent}></textarea>
    )
}