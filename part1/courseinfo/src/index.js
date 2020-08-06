import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import './index.css'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        title: 'Fundamentals of React',
        exercises: 10
      },
      {
        title: 'Using props to pass data',
        exercises: 7
      },
      {
        title: 'State of a component',
        exercises: 14
      },
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))