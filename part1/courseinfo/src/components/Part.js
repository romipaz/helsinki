import React from 'react';


const Part = (props) => (
    <p>
      <strong>{props.part}:</strong> {props.exercises}
    </p>
);

export default Part;