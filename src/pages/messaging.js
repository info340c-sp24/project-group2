import React from 'react';

function MessagingPage(props) {
  return (
    <NavBar />
  );
}

export default MessagingPage;

const pagesArray = ['Homepage', 'Calendar', 'Messaging', 'Media'];

export function NavBar() {
    return (
      <nav>
          <div className="container">
              <h1>Messaging</h1>
          </div>
          {/*<Link to="/" className="upper-left"> */}
            <span className="material-icons" aria-label="Home">
              home
            </span>
          {/* </Link> */}
      </nav>
    );
}


function jsxCode() {

    <>
      {/* Character set of the document */}
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Author of the page */}
      <meta name="author" content="Netra Krishnan" />
      {/* Description of the page */}
      <meta
        name="description"
        content="Messaging page of RSO platform. Allows user to message individuals internally (within RSO) and externally
          (with other RSOs and University staff)"
      />
      {/* Links */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link rel="stylesheet" href="css/messaging.css" />
      <title>Messaging</title>
    
      {/* Main section of content */}
      <main>
        <div id="main-content">
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
          </div>
        </div>
      </main>
      {/* Footer at bottom of page */}
      <footer>
        <p>
          Copyright <span>©</span> 2024 Netra Krishnan. All rights reserved.
        </p>
      </footer>
    </>
}