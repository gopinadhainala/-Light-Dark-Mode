// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {statusLight: true}

  changeBackgroundClr = () => {
    this.setState(previous => {
      let changeClr
      if (previous.statusLight === true) {
        changeClr = {statusLight: !previous.statusLight}
      } else if (previous.statusLight === false) {
        changeClr = {statusLight: !previous.statusLight}
      }
      return changeClr
    })
  }

  render() {
    const {statusLight} = this.state
    let containerBgColor
    let headingColor
    let btnText
    if (statusLight === true) {
      containerBgColor = 'dark-container-background'
      headingColor = 'light-text'
      btnText = 'Light Mode'
    } else {
      containerBgColor = 'light-container-background'
      headingColor = 'dark-color'
      btnText = 'Dark Mode'
    }
    const innerContainer = `${containerBgColor} change-container-color`
    const headStyling = `${headingColor} heading`
    console.log(this.state)
    return (
      <div className="container">
        <div className={innerContainer}>
          <h className={headStyling}>Click To Change Mode</h>
          <button
            className="btn-styling"
            type="button"
            onClick={this.changeBackgroundClr}
          >
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
