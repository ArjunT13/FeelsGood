import React from 'react'
import "./Chat.css";

const Chat = () => {

  return (
    <div className='chat-container'>
    <section class="msger">
    <header class="msger-header">
    <div class="msger-header-title">
      <i class="fas fa-comment-alt"></i> SimpleChat
    </div>
    <div class="msger-header-options">
      <span><i class="fas fa-cog"></i></span>
    </div>
  </header>

  <main class="msger-chat">
    <div class="msg left-msg">
      <div
       class="msg-img"
      ></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name"></div>
          <div class="msg-info-time"></div>
        </div>
        <div class="msg-text">     
        </div>
      </div>
    </div>

    <div class="msg right-msg">
      <div
       class="msg-img"
       
      ></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name"></div>
          <div class="msg-info-time"></div>
        </div>

        <div class="msg-text">
        Hello
        </div>
      </div>
    </div>
  </main>

  <form class="msger-inputarea">
    <input type="text" class="msger-input" placeholder="Enter your message..." />
    <button type="submit" class="msger-send-btn">Send</button>
  </form>
</section>
</div>
  )
}

export default Chat