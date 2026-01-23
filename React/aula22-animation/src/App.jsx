import React from 'react';
import Slide from './Slide';

const App = () => {
  const slides = [
    {
      id: 'slide1',
      text: 'slide1'
    },
    {
      id: 'Slide2',
      text: 'Slide2'
    },
    {
      id: 'slide3',
      text: 'slide3'
    }
  ]

  return (
    <div>
      <Slide slides={slides} />
    </div>
  )

}

export default App
