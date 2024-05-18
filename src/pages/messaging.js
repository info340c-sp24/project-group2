import React from 'react';

function MessagingPage() {
  return (
    <div id="body">
      <Header />
      
      <div id="main">
        <div id="main-content">
          <LeftRect />
          <RightRect />
        </div>
      </div>
    </div>
  );
}

export default MessagingPage;


function Header() {
    return (
      <div id="header">
          <div className="container">
              <h1>Messaging</h1>
          </div>
          <a href="homepage.html" className="upper-left">
            <span className="material-icons" aria-label="Home">
              home
            </span>
          </a>
      </div>
    );
}

function LeftRect() {
  return (
    <div id="left-rect">
      <div id="channels">
        <div id="channel-section">
          <div className="dropdown">
            <h2>channels</h2>
            <span
              id="dropdown-arrow"
              className="material-icons"
              aria-label="Collapse-channels"
            >
              arrow_drop_down
            </span>
          </div>
          <a href="messaging_iphone_p2.html" id="main-link">
            <h3 id="main-channel">#main</h3>
          </a>
          <h3>#exec</h3>
          <h3>#finance</h3>
          <h3>#social</h3>
          <h3>#random</h3>
        </div>
        <div id="dm_section">
          <div className="dropdown">
            <h2>direct messages</h2>
            <span
              id="dropdown-arrow"
              className="material-icons"
              aria-label="Collapse-dms"
            >
              arrow_drop_down
            </span>
          </div>
          <div>
            <h3>#user2</h3>
            <h3>#user3</h3>
            <h3>#user2, user3</h3>
          </div>
        </div>
        <div id="external-section">
          <div className="dropdown">
            <h2>external channels</h2>
            <span
              id="dropdown-arrow"
              className="material-icons"
              aria-label="Collapse-external"
            >
              arrow_drop_down
            </span>
          </div>
          <div>
            <h3>#RSO15</h3>
            <h3>#RSO2</h3>
            <h3>#HUB Activities</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightRect() {
  return (
    <div id="right-rect">
      <div>
        <h2>#main</h2>
      </div>
      <div id="message-box">
        <h3>type a message</h3>
        <span id="send-icon" className="material-icons" aria-label="Send">
          send
        </span>
      </div>
    </div>
  );
}
