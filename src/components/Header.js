import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className ='slide'>
          <div className ="slide_image">
            <img src="https://th.bing.com/th/id/OIP.ob9rJ4pxxU665S_8N23LygHaE8?w=284&h=189&c=7&r=0&o=5&dpr=2&pid=1.7"/>
            <img src="https://th.bing.com/th/id/OIP.A7QZwM-bII8Ax1zCXuzD_wHaFh?w=219&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"/>
            <img src="https://th.bing.com/th/id/OIP.UOMpj5qSonyfY2m0DPk1uQHaEU?w=278&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"/>
            <img src="https://th.bing.com/th/id/OIP.XQRY9e4L6UCn6Fhzm9TteQHaEo?w=275&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"/>
          </div>
          <a class="prev" onclick="plusSlides(-1)"></a>
          <a class="next" onclick="plusSlides(1)"></a>
        </div>
        <div style="text-align:center">
          <span class="dot" onclick="currentSlide(1)"></span> 
          <span class="dot" onclick="currentSlide(2)"></span> 
          <span class="dot" onclick="currentSlide(3)"></span> 
        </div>
        <h1>Welcome To The Futer</h1>
      </div>
    );
  }
}
