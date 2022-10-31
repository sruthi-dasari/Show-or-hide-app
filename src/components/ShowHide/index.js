import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFnameHidden: true, isLnameHidden: true}

  render() {
    const {isFnameHidden, isLnameHidden} = this.state

    onShowHideFname = () => {}

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="inner-container">
          <div className="sub-container">
            <button className="button" onClick={this.onShowHideFname}>
              Show/Hide Firstname
            </button>
            {isFnameHidden ? null : (
              <div className="card fname-card">
                <p className="text">Joe</p>
              </div>
            )}
          </div>
          <div className="sub-container">
            <button className="button">Show/Hide Lastname</button>
            {isLnameHidden ? null : (
              <div className="card lname-card">
                <p className="text">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
