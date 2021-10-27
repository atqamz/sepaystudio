import React from "react";

export default function ServiceButton(props) {
  return (
    <span className='service-button'>
      <input
        name='category'
        type='radio'
        value={props.value}
        id={props.for}
        onChange={props.onChange}
      />
      <label htmlFor={props.for}>{props.label}</label>
    </span>
  );
}
