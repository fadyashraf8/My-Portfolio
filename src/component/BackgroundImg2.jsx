import './BackgroundImg2Style.css'
import React, { Component } from 'react'

class BackgroundImg2 extends Component {
   render(){
    return (
        <div className='hero2'>
            <div className='heading'>
                <h1 className='inner-page-title'>{this.props.heading}</h1>
                <p className='inner-page-subtitle'>{this.props.text}</p>
            </div>
        </div>
    )
   }
}

export default BackgroundImg2