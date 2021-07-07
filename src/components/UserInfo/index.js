// Write your JS code here
import './index.css'
import {Component} from 'react'

class UserInfo extends Component {
  render() {
    return (
      <div className="user-container">
        <img
          className="img-profile-style"
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile pic"
        />
        <h1 className="profile-heading">Wade Warren</h1>
        <p className="profile-paragraph">Software developer at UK</p>
      </div>
    )
  }
}

export default UserInfo
