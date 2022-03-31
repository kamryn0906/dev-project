import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <div class="form">
          <div class="form-group">
            <input type="text" id="fullName" placeholder="Your name"/>
            <label for="fullName">Your name</label>
          </div>

          <div class="form-group">
            <input type="email" id="email" placeholder="Your email"/>
            <label for="email">Your email</label>
          </div>

          <div class="form-group">
            <textarea name="message" id="message" placeholder="Message"></textarea>
            <label for="message">Message</label>
          </div>

          <div class="spacer10"></div>

          <div class="center-btn-wrapper">
            <button type="submit" class="btn">Send</button>
          </div>
          
        </div>
      </div>
    );
  }
}