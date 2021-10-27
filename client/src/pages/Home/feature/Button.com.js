import React from "react";

export default function Button(props) {
  return (
    <a href={props.to}>
      <button class='btn btn-primary btn-lg'>READ MORE</button>
    </a>
  );
}
