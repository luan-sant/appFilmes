import React from 'react'
import {StatusBar} from 'react-native'


import Main from './src/Main'

export default function App() {
  return (
    <>
      <StatusBar 
          hidden={true}
      />

      <Main/>

    </>
  )
}