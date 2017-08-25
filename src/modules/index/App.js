import React, { Component } from 'react'
import './App.styl'
class App extends Component {
  render () {
    return (
      <div>
        <h1 className='MyH1'>App11111</h1>
        <img src={require('../../assets/timg.jpg')} />
        <a href='about.html'>点我去关于页面</a>
      </div>
    )
  }
}

export default App
