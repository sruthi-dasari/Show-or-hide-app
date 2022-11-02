import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFnameHidden: true, isLnameHidden: true}

  onShowHideFname = () => {
    const {isFnameHidden} = this.state

    if (isFnameHidden === true) {
      this.setState({isFnameHidden: false})
    } else {
      this.setState({isFnameHidden: true})
    }
  }

  onShowHideLname = () => {
    const {isLnameHidden} = this.state

    if (isLnameHidden === true) {
      this.setState({isLnameHidden: false})
    } else {
      this.setState({isLnameHidden: true})
    }
  }

  render() {
    const {isFnameHidden, isLnameHidden} = this.state

    let authButtonFname
    let authButtonLname

    if (isFnameHidden === false) {
      authButtonFname = (
        <div className="card fname-card">
          <p className="text">Joe</p>
        </div>
      )
    } else {
      authButtonFname = null
    }
    if (isLnameHidden === false) {
      authButtonLname = (
        <div className="card lname-card">
          <p className="text">Jonas</p>
        </div>
      )
    } else {
      authButtonLname = null
    }
    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="inner-container">
          <div className="sub-container">
            <button className="button" onClick={this.onShowHideFname}>
              Show/Hide Firstname
            </button>
            {authButtonFname}
          </div>
          <div className="sub-container">
            <button className="button" onClick={this.onShowHideLname}>
              Show/Hide Lastname
            </button>
            {authButtonLname}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
