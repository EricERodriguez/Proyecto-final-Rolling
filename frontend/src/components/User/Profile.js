import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons'
import"./Profile.css";

class Profile extends Component{
  render(){

    const { username, fullName, email } = this.props.acc;

    return (
      <div className="text-center">
            <div class="our-team">
              <div class="picture">
                <img class="img-fluid" src="https://picsum.photos/130/130?image=1027" alt="img de perfil"/>
              </div>
          <div class="team-content">
            <h1 class="name">{fullName}</h1>
            <h3 class="title">{username}</h3>
            <h5 class="email">{email}</h5>
          </div>
          <ul class="social">
            <li><a href="https://rollingcodeschool.com/" class="fa fa-twitter" aria-hidden="true" ><FontAwesomeIcon icon={faGithub} aria-hidden="true"/> </a></li>
            <li><a href="https://rollingcodeschool.com/" class="fa fa-twitter" aria-hidden="true" ><FontAwesomeIcon icon={faTwitter} aria-hidden="true"/> </a></li>
            <li><a href="https://rollingcodeschool.com/" class="fa fa-twitter" aria-hidden="true" ><FontAwesomeIcon icon={faLinkedin} aria-hidden="true"/> </a></li>
            <li><a href="https://rollingcodeschool.com/" class="fa fa-twitter" aria-hidden="true" ><FontAwesomeIcon icon={faFacebook} aria-hidden="true"/> </a></li>
          </ul>
      </div></div>
    )
  }
}

export default Profile;