import React from 'react'

const UserCard = () => {
  return (
    <>
          <div class="landing-page-bar" id="landingbar">
        <div class="desktop-page-bar">
          <div>
            <img
              style="
                max-width: 100%;
                height: auto;
                transition: 1s;
                margin-top: -20px;
              "
            />
          </div>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="/RandomUser.html">CONNECT</a></li>
            <li class="dropdownmenu">
              <a href="#">EVENTS</a>
            </li>
            <li><a href="#offer">CONTACT US</a></li>
          </ul>
        </div>
      </div>
      <br/>
      <header id="header">
        <div id="top-navbar">
        <div class="desktop-top-navbar">
          <ul>
            <li><a href="#header">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li>
              <div class="logo-container"><img src="./images/newlogo.png" style="max-width: 100%;height:auto;" /></div>
            </li>
            <li><a href="#courses">COURSES</a></li>
            <li><a href="#offer">OFFER</a></li>
          </ul>
        </div>
        <div class="mobile-top-navbar">
          <div class="logo-mobile" style="background-image: url('./images/newlogo.png'); background-size: contain;"></div>
        </div>
        </div>
  
        <div class="nav-div">
          <nav id="sideNav">
            <ul>
              <li><a href="#top">HOME</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#features">FEATURES</a></li>
              <li><a href="#testimonials">TESTIMONIALS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div class="mode-div">
              <i class="fas fa-sun"></i>
              <input type="checkbox" id="switch"/>
              <label for="switch"></label>
              <i class="fas fa-moon"></i>
            </div>
          </nav>
          <i class="fas fa-bars" id="menuBtn" onclick="openNav()"></i>
        </div>
      </header>
    <div class="card" style ="margin:auto;">
        <div class="card_img"> 
            <img src="images\defaultuser.png" alt="user-image" />
        </div>
        <div class="card_info">
            <h2>USER NAME</h2>
            <p>I am a Student, enjoying a peaceful life... Nice to meet you !!</p>
            <br />
            <div class="user-btn-box">
                <button class="user-btn">Chat</button>
                <button class="user-btn">Video Chat</button>
            </div>
        </div>
    </div>    
    <br/><br/><br/>
    <br/>
    <div class="card" style ="margin:auto;"> 
        <div class="card_img"> 
            <img src="images\defaultuser.png" alt="user-image" />
        </div>
        <div class="card_info"> 
            <h2>USER NAME</h2>
            <p>I am a Student, enjoying a peaceful life... Nice to meet you !!</p>
            <br/>
            <div class="user-btn-box">
                <button class="user-btn">Chat</button>
                <button class="user-btn">Video Chat</button>
            </div>
        </div>
    </div>  
    <br/><br/><br/>
    <br/>
    <div class="card" style ="margin:auto;"> 
        <div class="card_img"> 
            <img src="images\defaultuser.png" alt="user-image" />
        </div>
        <div class="card_info"> 
        <h2>USER NAME</h2>
            <p>I am a Student, enjoying a peaceful life... Nice to meet you !!</p>
            <br />
            <div class="user-btn-box">
                <button class="user-btn">Chat</button>
                <button class="user-btn">Video Chat</button>
            </div>
        </div>
    </div>       <div class="landing-page-bar" id="landingbar">
        <div class="desktop-page-bar">
          <div>
            <img
              src="./images/newlogo.png"
              style="
                max-width: 100%;
                height: auto;
                transition: 1s;
                margin-top: -20px;
              "
            />
          </div>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="/RandomUser.html">CONNECT</a></li>
            <li class="dropdownmenu">
              <a href="#">EVENTS</a>
            </li>
            <li><a href="#offer">CONTACT US</a></li>
          </ul>
        </div>
      </div>
      <br/>
      <header id="header">
        <div id="top-navbar">
        <div class="desktop-top-navbar">
          <ul>
            <li><a href="#header">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li>
              <div class="logo-container"><img src="./images/newlogo.png" style="max-width: 100%;height:auto;" /></div>
            </li>
            <li><a href="#courses">COURSES</a></li>
            <li><a href="#offer">OFFER</a></li>
          </ul>
        </div>
        <div class="mobile-top-navbar">
          <div class="logo-mobile" style="background-image: url('./images/newlogo.png'); background-size: contain;"></div>
    
        </div>
      </div>
  
        <div class="nav-div">
          <nav id="sideNav">
            <ul>
              <li><a href="#top">HOME</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#features">FEATURES</a></li>
              <li><a href="#testimonials">TESTIMONIALS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div class="mode-div">
              <i class="fas fa-sun"></i>
              <input type="checkbox" id="switch" onclick="toggleDarkLight()" />
              <label for="switch"></label>
              <i class="fas fa-moon"></i>
            </div>
          </nav>
          <i class="fas fa-bars" id="menuBtn" onclick="openNav()"></i>
        </div>
      </header>
    <div class="card" style ="margin:auto;"> 
        <div class="card_img"> 
            <img src="images\defaultuser.png" alt="user-image" />
        </div>
        <div class="card_info"> 
            <h2>USER NAME</h2>
            <p>I am a Student, enjoying a peaceful life... Nice to meet you !!</p>
            <br/>
            <div class="user-btn-box">
                <button class="user-btn">Chat</button>
                <button class="user-btn">Video Chat</button>
            </div>
        </div>
    </div>    
    <br/><br/><br/>
    <br/>
    <div class="card" style ="margin:auto;"> 
        <div class="card_img"> 
            <img src="images\defaultuser.png" alt="user-image" />
        </div>
        <div class="card_info">
            <h2>USER NAME</h2>
            <p>I am a Student, enjoying a peaceful life... Nice to meet you !!</p>
            <br/>
            <div class="user-btn-box">
                <button class="user-btn">Chat</button>
                <button class="user-btn">Video Chat</button>
            </div>
        </div>
    </div>  
    <br/><br/><br/>
    <br/>
    <div class="card" style ="margin:auto;">
        <div class="card_img">
            <img src="images\defaultuser.png" alt="user-image" />
        </div>
        <div class="card_info">
            <h2>USER NAME</h2>
            <p>I am a Student, enjoying a peaceful life... Nice to meet you !!</p>
            <br />
            <div class="user-btn-box">
                <button class="user-btn">Chat</button>
                <button class="user-btn">Video Chat</button>
            </div>
        </div>
    </div>   
    </>
  )
}

export default UserCard