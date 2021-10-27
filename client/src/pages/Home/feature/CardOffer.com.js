import React from "react";
import * as MatIco from "@material-ui/icons";

export default function CardOffer(props) {
  return (
    <div className='d-flex'>
      <span className='me-2'>
        <MatIco.Check />
      </span>
      <p>{props.value}</p>
    </div>
  );
}
