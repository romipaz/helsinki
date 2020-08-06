import React from 'react';
import Part from './Part';

const Content = (props) => {

    return (
        <div>
            <Part part={props.parts[0].title} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].title} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].title} exercises={props.parts[2].exercises} />
        </div>
    )
}

export default Content;
