import React, { Component } from 'react'
import loader from './loader.gif';
export default class SpinLoader extends Component {
  render() {
    return (
        <div className='flex h-1/6 my-5 items-center justify-center'><img src={loader} alt="loader" /></div>
        )
  }
}
